import { Modal, message } from "antd";
import React, { useState, useRef, useEffect } from "react";
import API from "../services/api";
import { IoArrowBackOutline } from "react-icons/io5";
import "./Loading.css";
import { useNavigate } from "react-router-dom";
import CrossSvg from "../assets/images/cross.svg";
import SignupScreenOne from "../components/SignUpComponents/SignupScreenOne";
import SignupScreenTwo from "../components/SignUpComponents/SignupScreenTwo";
import SignupScreenThree from "../components/SignUpComponents/SignupScreenThree";
const Signup = ({ signup, onCancel, onClickLogin }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    phoneno: "",
    countryCode: "+91",
    otpid: "",
    enterdotp: "",
  });
  const [isEmailSignup, setIsEmailSignup] = useState(true);
  const [screen, setscreen] = useState(1);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(600);
  const [isLoading, setLoading] = useState(false);
  const inputRefs = useRef([]);
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

    // Construct the entered OTP from the newOTP array
    const enteredOtp = newOTP.join("");
    setUserDetails({
      ...userDetails,
      enterdotp: enteredOtp,
    });
    //console.log(enteredOtp);
  };

  const sendOtpToUser = async () => {
    try {
      setLoading(true);
      let payload = {};
      if (isEmailSignup) {
        // If signing up with email, include email in payload
        payload = {
          email: userDetails.email,
        };
      } else {
        // If signing up with phone, include phone number and country code in payload
        payload = {
          phoneno: userDetails.phoneno,
          country_code: userDetails.countryCode,
        };
      }
      const response = await API.SendOtpToRegister(payload);
      // console.log(response);

      setUserDetails({
        ...userDetails,
        otpid: response.data.otpid,
      });
      if (response.status === "success") {
        message.success("Otp sent Successfully");
        setscreen(screen + 1);
      } else {
        message.error("Unable to sent OTP. User already registered");
        onCancel();
      }
    } catch (error) {
      message.error("Unable to sent OTP. User already registered", error);
    } finally {
      setLoading(false);
    }
  };
  //console.log("userdetails", userDetails);

  const verifyOtpOfUser = async () => {
    try {
      setLoading(true);
      let payload = {};
      if (isEmailSignup) {
        payload = {
          email: userDetails.email,
          password: userDetails.password,
          otpid: userDetails.otpid,
          enteredotp: userDetails.enterdotp,
        };
      } else {
        payload = {
          phoneno: userDetails.phoneno,
          country_code: userDetails.countryCode,
          password: userDetails.password,
          otpid: userDetails.otpid,
          enteredotp: userDetails.enterdotp,
        };
      }
      const response = await API.VerifyOtpToRegister(payload);
      // console.log(response);
      if (response.status === "success") {
        localStorage.setItem("accessToken", response.data.JWTToken.accessToken);
        localStorage.setItem(
          "refreshToken",
          response.data.JWTToken.refreshToken
        );
        message.success("Registered Successfully");
        navigate("/store");
      } else {
        message.error("This account already Exist!");
      }

      onCancel();
    } catch (error) {
      message.error("This account already Exist!");
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleContinue = async () => {
    if (screen === 1) {
      // Validation for email signup
      if (isEmailSignup) {
        if (!userDetails.email) {
          setEmailError("Email is required");
          return;
        } else if (!validateEmail(userDetails.email)) {
          setEmailError("Invalid email format");
          return;
        }
        setscreen(screen + 1);
        //setEmailError('')
        // You can add more complex email validation if needed
      } else {
        // Validation for phone signup
        if (!userDetails.phoneno) {
          setPhoneError("Phone number is required");
          return;
        } else if (userDetails.phoneno.length !== 10) {
          setPhoneError("Phone number must be 10 characters long");
          return;
        }
        setscreen(screen + 1);
        //setPhoneError('')
        // You can add more complex phone number validation if needed
      }
    } else if (screen === 2) {
      // Validation for password
      if (!userDetails.password) {
        setPasswordError("Password is required");
        return;
      } else if (userDetails.password.length <= 8) {
        setPasswordError("Password must be at least 8 characters long");
        return;
      }

      // You can add more complex password validation if needed

      await sendOtpToUser();
      //setPasswordError('')
    } else if (screen === 3) {
      // Validation for OTP
      const enteredOtp = userDetails.enterdotp;
      if (!enteredOtp || enteredOtp.length !== 6 || !/^\d+$/.test(enteredOtp)) {
        // Basic validation for OTP length and format
        message.error("Please enter a valid OTP");
        return;
      }
    }

    // If all validations pass, proceed to the next screen
  };

  const handleBack = () => {
    // Decrement screen state on "Back" click
    setscreen(screen - 1);
  };

  const ResendOtp = async () => {
    try {
      let payload = {
        otpid: userDetails.otpid,
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
    <Modal
      title={
        <div>
          {/* Sign up */}
          {screen === 1 && (
            <div>
              <button className="cursor-pointer" onClick={onCancel}>
                <img src={CrossSvg} alt="crossIconImg" />
              </button>
              <div>
                <h2 className="text-3xl font-bold">Sign Up</h2>
              </div>
            </div>
          )}

          {/* create password */}
          {screen === 2 && (
            <div>
              <IoArrowBackOutline
                className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
                onClick={handleBack}
              />
              <span className="mb-2 text-3xl font-bold">Create Password</span>
            </div>
          )}

          {/* get register otp */}
          {screen === 3 && (
            <div>
              <IoArrowBackOutline
                className="w-6 h-6 mr-2  cursor-pointer"
                onClick={handleBack}
              />
              <span className="mb-2 text-3xl font-bold">
                {isEmailSignup ? "Check your email" : "Check your phone"}
              </span>
            </div>
          )}
        </div>
      }
      centered
      visible={signup}
      closable={false}
      footer={null}
      width={416}
    >
      {/* Sign up */}

      {screen === 1 && (
        <SignupScreenOne
          setIsEmailSignup={setIsEmailSignup}
          isEmailSignup={isEmailSignup}
          emailError={emailError}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setEmailError={setEmailError}
          setPhoneError={setPhoneError}
          phoneError={phoneError}
          handleContinue={handleContinue}
          onClickLogin={onClickLogin}
        />
      )}

      {/* create password */}
      {screen === 2 && (
        <SignupScreenTwo
          passwordError={passwordError}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setPasswordError={setPasswordError}
          isLoading={isLoading}
          handleContinue={handleContinue}
        />
      )}

      {/* get Register otp */}
      {screen === 3 && (
        <SignupScreenThree
          isEmailSignup={isEmailSignup}
          userDetails={userDetails}
          otp={otp}
          inputRefs={inputRefs}
          handleInputChange={handleInputChange}
          timer={timer}
          ResendOtp={ResendOtp}
          isLoading={isLoading}
          verifyOtpOfUser={verifyOtpOfUser}
        />
      )}
    </Modal>
  );
};

export default Signup;
