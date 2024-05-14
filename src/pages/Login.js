import { Modal, message } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import API from "../services/api";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import Loader from "react-js-loader";
import "./Loading.css";
import { useNavigate } from "react-router-dom";

import StoreSidebar from "../components/HomePageComponents/StoreSidebar.js/StoreSidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
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
    console.log(enteredotp);
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
        console.log(response);
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
          console.log(response);
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
      console.log(response);
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
    const phoneValid = validatePhoneNumber(loginUserDetails.phoneno);
    const passwordValid = validatePassword(loginUserDetails.password);
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
      console.log(response);
      if (response.status === "success") {
        message.success("Resend Otp send successfully");
      } else {
        message.error("Unable to Sent OTP");
      }
    } catch (error) {
      message.error("Unable to Sent OTP");
    }
  };

  // const loginUser = async () => {
  //   let payload = {
  //     email: loginUserDetails.email,
  //     password: loginUserDetails.password,
  //   };
  //   try {
  //     const response = await API.LoginUser(payload);
  //     console.log(response);
  //     if (response.status) {
  //       message.success("Logged in successfully");
  //       navigate("/store");
  //       localStorage.setItem("userData", JSON.stringify(response.user));
  //       localStorage.setItem("token", response.access_token);
  //       localStorage.setItem("refreshToken", response.refresh_token);
  //     }
  //   } catch (error) {
  //     console.log("login failed", error);
  //   }
  // };

  return (
    <>
      <Modal
        title={
          <div>
            {screen === 1 && (
              <div>
                <div>
                  <button className="cursor-pointer" onClick={onCancel}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      size="20"
                      class="e-1p1m6ki"
                      aria-hidden="true"
                    >
                      <path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path>
                    </svg>
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
          <div className="h-[525px]">
            <div className="min-h-[525px] static ">
              <div className="w-full h-48 ">
                <div className="w-full h-52">
                  <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                    <div>
                      <img
                        className="h-6 ml-2 rounded-full w-25"
                        src="../../images/google-icon.svg"
                        alt="google-logo"
                      />
                    </div>
                    <div className="text-base">Continue with Google</div>
                  </div>
                  <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                    <div>
                      <span>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="#FFFFFF"
                          xmlns="http://www.w3.org/2000/svg"
                          color="systemGrayscale00"
                          size="32"
                          class="e-rz498l"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 2.667c7.364 0 13.333 5.968 13.333 13.333 0 6.656-4.875 12.172-11.25 13.172v-9.318h3.107L21.78 16h-3.698v-2.5c0-1.055.516-2.083 2.172-2.083h1.682V8.135s-1.526-.26-2.984-.26c-3.047 0-5.036 1.846-5.036 5.188V16H10.53v3.854h3.385v9.318c-6.374-1-11.25-6.516-11.25-13.172C2.666 8.635 8.636 2.667 16 2.667"
                            fill="#3A75EA"
                          ></path>
                        </svg>
                      </span>
                      {/* <img
                        className="h-6 ml-2 rounded-full w-25"
                        src=".././images/facebook.webp"
                        alt="facebook-logo"
                      /> */}
                    </div>
                    <div className="text-base">Continue with Facebook</div>
                  </div>
                  <div>
                    <button
                      className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11"
                      onClick={() => {
                        setIsEmailLogin(!isEmailLogin);
                        setEmailError("");
                        setPasswordError("");
                        setPhoneError("");
                      }}
                    >
                      {!isEmailLogin ? (
                        <span className="ml-2 rounded-full">
                          {" "}
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            color="systemGrayscale70"
                            size="30"
                            class="e-rz498l"
                            aria-hidden="true"
                          >
                            <path d="M12 12 2 4h20z"></path>
                            <path d="m12 14.561 10-8V20H2V6.56z"></path>
                          </svg>
                        </span>
                      ) : (
                        <span className="ml-2 rounded-full">
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            color="systemGrayscale70"
                            size="30"
                            class="e-rz498l"
                            aria-hidden="true"
                          >
                            <path d="M7 4H2c0 11 7 18 18 18v-5l-4-2-2 2c-3-1-6-4-7-7l2-2z"></path>
                            <path d="M14 6h2.586l-4.293 4.293 1.414 1.414L18 7.414V10h2V4h-6z"></path>
                          </svg>
                        </span>
                      )}
                      <span className="text-base ">
                        {!isEmailLogin
                          ? "Continue with Email"
                          : "Continue with Phone"}
                      </span>
                    </button>
                  </div>

                  <h2 className="w-full leading-[0.1em]  text-center border-b-[1px] mt-[10px] mb-[20px]">
                    <span className="pl-[10px] pr-[10px] bg-white">or</span>
                  </h2>
                  <div>
                    {isEmailLogin ? (
                      <div>
                        <div className="relative mt-3 mb-3">
                          <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                            <div className="relative flex-grow h-full">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                                  emailError
                                    ? "border-2 border-rose-600 focus:outline-none"
                                    : "border-none focus:outline-black"
                                }`}
                                onChange={(e) =>
                                  setLoginUserDetails({
                                    ...loginUserDetails,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          {emailError && (
                            <span className="text-red-500 text-sm">
                              {emailError}
                            </span>
                          )}
                        </div>
                        <div className="relative mt-3 mb-3">
                          <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                            <div className="relative flex-grow h-full">
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                                  passwordError
                                    ? "border-2 border-rose-600 focus:outline-none"
                                    : "border-none focus:outline-black"
                                }`}
                                onChange={(e) =>
                                  setLoginUserDetails({
                                    ...loginUserDetails,
                                    password: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          {passwordError && (
                            <span className="text-red-500 text-sm">
                              {passwordError}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="">
                            Forgot Passord?{" "}
                            <button
                              className="relative inline-flex text-[#2C890F] cursor-pointer "
                              onClick={() => onResetpasswordHandler()}
                            >
                              <span className="block font-medium">
                                Reset it
                              </span>
                            </button>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-grow flex-shrink px-1 pb-8">
                        <div className="py-4">
                          <form>
                            <div>
                              <div className="flex flex-row items-center w-full ">
                                <div className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  outline-black ">
                                  <span className="flex items-center h-full text-ellipsis">
                                    <select
                                      name="countryCode"
                                      value={loginUserDetails.countryCode}
                                      onChange={(e) =>
                                        setLoginUserDetails({
                                          ...loginUserDetails,
                                          countryCode: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="+91">+91 (India)</option>
                                      <option value="+1">+1 (USA)</option>
                                      <option value="+1">+1 (Canada)</option>
                                    </select>
                                  </span>
                                </div>

                                <div className="flex flex-row flex-nowrap items-center h-14 box-border max-w-[600px] rounded-r-lg border w-full  outline-black">
                                  <div className="relative flex-grow w-full h-full">
                                    <input
                                      className="pt-[5px] px-3 pb-2 w-full h-full  rounded-xl bg-transparent outline-none"
                                      name="phonenumber"
                                      placeholder="Phone number"
                                      value={loginUserDetails.phoneno}
                                      onChange={(e) =>
                                        setLoginUserDetails({
                                          ...loginUserDetails,
                                          phoneno: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {phoneError && (
                              <span className="text-red-500 text-sm">
                                {phoneError}
                              </span>
                            )}
                          </form>
                          <span className="text-xs font-medium ">
                            We will send a text with a verification code.
                            Message and data rates may apply.
                          </span>
                        </div>
                      </div>
                    )}

                    {isEmailLogin ? (
                      <div className="mb-3">
                        <button
                          type="submit"
                          className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl ${
                            isLoading ? "opacity-50" : ""
                          }`}
                          onClick={() => loginUser()}
                          disabled={isLoading}
                        >
                          <div className="flex items-center justify-center">
                            <span className="block text-xl font-semibold leading-5 text-white">
                              Log in
                            </span>
                            {isLoading && (
                              <div className="ml-2 h-5 w-5 mt-[-20px]">
                                <Loader size={20} />
                              </div>
                            )}
                          </div>
                        </button>
                      </div>
                    ) : (
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                          onClick={handleContinue}
                        >
                          <span className="block text-xl font-semibold leading-5 text-white">
                            Continue
                          </span>
                        </button>
                      </div>
                    )}

                    <hr />
                  </div>
                  <div className="pt-2 pb-2 ml-4 mr-4 text-center ">
                    <div className="mt-3 mb-3">
                      <p className="text-lg">Don't have an account?</p>
                    </div>
                    <div className="mt-3 mb-3">
                      <button
                        className="relative pl-6 pr-6 text-[#2C890F] cursor-pointer"
                        onClick={onClickSignup}
                      >
                        <span className="text-base font-semibold">Sign up</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {screen === 2 && (
          <div className="min-h-[300px] static">
            <div className="w-full h-48 ">
              <div className="w-full h-52">
                <div>
                  <div className="relative mt-3 mb-3">
                    <h4 className="mb-2 text-gray-400">
                      Enter atleast 8 characters
                    </h4>
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter a password"
                          className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none `}
                          value={setLoginUserDetails.password}
                          onChange={(e) =>
                            setLoginUserDetails({
                              ...loginUserDetails,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 mb-3">
                    <button
                      type="submit"
                      className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl ${
                        isLoading ? "opacity-50" : ""
                      }`}
                      onClick={handleContinue}
                      disabled={isLoading}
                    >
                      <div className="flex items-center justify-center">
                        <span className="block text-xl font-semibold leading-5 text-white">
                          Continue
                        </span>
                        {isLoading && (
                          <div className="ml-2 h-5 w-5 mt-[-20px]">
                            <Loader size={20} />
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {screen === 3 && (
          <div className="min-h-[300px] static">
            <div className="w-full h-48 ">
              <div className="w-full h-52">
                <div>
                  <div className="relative mt-3 mb-3">
                    <h4 className="mb-2 text-gray-400">
                      We sent a 6-digit code to It expires soon — check your
                      text message
                    </h4>
                    <div className="flex justify-center space-x-4">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          name="otp"
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          maxLength="1"
                          className="border-none outline-none text-center w-12"
                          style={{
                            borderBottom: "2px solid",
                            borderBottomColor: digit ? "#277D0F" : "#D1D5DB",
                            margin: "0 4px",
                            paddingBottom: "6px",
                            fontSize: "1.5rem",
                          }}
                          value={digit}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        />
                      ))}
                    </div>
                    <span>
                      {timer > 0 ? (
                        `Resend code in ${Math.floor(timer / 60)}:${timer % 60}`
                      ) : (
                        <div
                          className="mt-2  font-bold py-2 px-2 text-[#2C890F] text-lg cursor-pointer "
                          onClick={() => ResendOtp()}
                        >
                          Resend code
                        </div>
                      )}
                    </span>
                  </div>
                  <div className="mt-3 mb-3">
                    <button
                      type="submit"
                      className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                      onClick={() => VerifyUserOnLogin()}
                    >
                      <div className="flex items-center justify-center">
                        <span className="block text-xl font-semibold leading-5 text-white">
                          Log in
                        </span>
                        {isLoading && (
                          <div className="ml-2 h-5 w-5 mt-[-20px]">
                            <Loader size={20} />
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Login;
