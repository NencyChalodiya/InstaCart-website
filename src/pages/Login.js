import { Modal, message } from "antd";
import React, { useState, useRef, useEffect } from "react";
import API from "../services/api";
import { IoArrowBackOutline } from "react-icons/io5";
import "./Loading.css";
import { useNavigate } from "react-router-dom";
import CrossSvg from "../assets/images/cross.svg";
import ScreenOne from "../components/LoginScreenComponents/ScreenOne";
import ScreenTwo from "../components/LoginScreenComponents/ScreenTwo";
import ScreenThree from "../components/LoginScreenComponents/ScreenThree";
const Login = ({ login, onCancel, onClickSignup, onResetpasswordHandler }) => {
  const navigate = useNavigate();
  const [loginUserDetails, setLoginUserDetails] = useState({
    email: "",
    password: "",
    phoneno: "",
    countryCode: "+91",
    otpid: "",
    enteredotp: "",
  });
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(600);
  const inputRefs = useRef([]);
  const [screen, setscreen] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    // Start the timer when the component mounts
    if (screen === 3 && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(countdown);
    }
  }, [screen, timer]);

  useEffect(() => {
    // Reset the timer when the screen changes
    if (screen === 3) {
      setTimer(600);
    }
  }, [screen]);

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const enteredotp = newOTP.join("");
    setLoginUserDetails({
      ...loginUserDetails,
      enteredotp: enteredotp,
    });
    // console.log(enteredotp);
  };

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email required");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  // Function to validate password
  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  // Function to validate phone number
  const validatePhoneNumber = (phone) => {
    if (!phone) {
      setPhoneError("Phone number required");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const loginUser = async () => {
    try {
      setLoading(true);
      const emailValid = validateEmail(loginUserDetails.email);
      const passwordValid = validatePassword(loginUserDetails.password);
      let payload = {};
      if (isEmailLogin && emailValid && passwordValid) {
        payload = {
          email: loginUserDetails.email,
          password: loginUserDetails.password,
        };
        const response = await API.LoginUser(payload);
        // console.log(response);
        if (response.status === "success") {
          localStorage.setItem(
            "accessToken",
            response.data.JWTToken.accessToken
          );
          localStorage.setItem(
            "refreshToken",
            response.data.JWTToken.refreshToken
          );
          message.success("Logged in Successfully");
          navigate("/store");
        }
      } else {
        //const phoneValid = validatePhoneNumber(loginUserDetails.phoneno);
        if (!isEmailLogin) {
          payload = {
            phoneno: loginUserDetails.phoneno,
            country_code: loginUserDetails.countryCode,
          };
          const response = await API.LoginUser(payload);
          // console.log(response);
          setLoginUserDetails({
            ...loginUserDetails,
            otpid: response.data.otpid,
          });
        } else {
          setLoading(false);
          return;
        }
      }

      //const response = await API.LoginUser(payload);
      //console.log(response);
    } catch (error) {
      // message.error("Unable to Log in.Email not found");
      console.log("error1", error);
    } finally {
      setLoading(false);
    }
  };

  const VerifyUserOnLogin = async () => {
    try {
      setLoading(true);
      let payload = {
        phoneno: loginUserDetails.phoneno,
        country_code: loginUserDetails.countryCode,
        //password: loginUserDetails.password,
        otpid: loginUserDetails.otpid,
        enteredotp: loginUserDetails.enteredotp,
      };
      const response = await API.VerifyOtpToLogin(payload);
      // console.log(response);
      if (response.status === "success") {
        localStorage.setItem("accessToken", response.data.JWTToken.accessToken);
        localStorage.setItem(
          "refreshToken",
          response.data.JWTToken.refreshToken
        );
        message.success("Logged in Successfully");
        navigate("/store");
      }
    } catch (error) {
      console.log("error2", error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = async () => {
    // const phoneValid = validatePhoneNumber(loginUserDetails.phoneno);
    // const passwordValid = validatePassword(loginUserDetails.password);
    // if (screen === 1 && !isEmailLogin) {
    //   setscreen(screen + 1);
    // }
    if (!isEmailLogin && screen === 2) {
      await loginUser();
    }
    setscreen(screen + 1);
  };
  const handleBack = () => {
    // Decrement screen state on "Back" click
    setscreen(screen - 1);
  };

  const ResendOtp = async () => {
    try {
      let payload = {
        otpid: loginUserDetails.otpid,
      };
      const response = await API.resendOtp(payload);
      // console.log(response);
      if (response.status === "success") {
        message.success("Resend Otp send successfully");
      } else {
        message.error("Unable to Sent OTP");
      }
    } catch (error) {
      message.error("Unable to Sent OTP");
    }
  };

  return (
    <>
      <Modal
        title={
          <div>
            {screen === 1 && (
              <div>
                <div>
                  <button className="cursor-pointer" onClick={onCancel}>
                    <img src={CrossSvg} alt="crossIconImg" />
                  </button>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Log In</h2>
                </div>
              </div>
            )}

            {screen === 2 && (
              <div>
                <IoArrowBackOutline
                  className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
                  onClick={handleBack}
                />
                <span className="mb-2 text-3xl font-bold">
                  Enter your Password
                </span>
              </div>
            )}

            {screen === 3 && (
              <div>
                <IoArrowBackOutline
                  className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
                  onClick={handleBack}
                />
                <span className="mb-2 text-3xl font-bold">
                  Check your Phone
                </span>
              </div>
            )}
          </div>
        }
        centered
        visible={login}
        closable={false}
        footer={null}
        width={416}
      >
        {screen === 1 && (
          <ScreenOne
            setIsEmailLogin={setIsEmailLogin}
            isEmailLogin={isEmailLogin}
            setEmailError={setEmailError}
            setPasswordError={setPasswordError}
            setPhoneError={setPhoneError}
            emailError={emailError}
            setLoginUserDetails={setLoginUserDetails}
            loginUserDetails={loginUserDetails}
            passwordError={passwordError}
            handleContinue={handleContinue}
            onClickSignup={onClickSignup}
            isLoading={isLoading}
            onResetpasswordHandler={onResetpasswordHandler}
            phoneError={phoneError}
            loginUser={loginUser}
          />
        )}

        {screen === 2 && (
          <ScreenTwo
            setLoginUserDetails={setLoginUserDetails}
            loginUserDetails={loginUserDetails}
            isLoading={isLoading}
            handleContinue={handleContinue}
          />
        )}

        {screen === 3 && (
          <ScreenThree
            otp={otp}
            inputRefs={inputRefs}
            handleInputChange={handleInputChange}
            timer={timer}
            ResendOtp={ResendOtp}
            VerifyUserOnLogin={VerifyUserOnLogin}
            isLoading={isLoading}
          />
        )}
      </Modal>
    </>
  );
};

export default Login;
