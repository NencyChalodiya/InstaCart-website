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
      console.log(response);

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
      console.log(response);
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

  // const validateEmail = (email) => {
  //   // Regular expression for email validation
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };

  // const validatePassword = (password) => {
  //   // Password should be at least 8 characters
  //   return password.length >= 8;
  // };

  // const registerUser = async () => {
  //   if (!validateEmail(userDetails.email)) {
  //     message.error("Invalid email address");
  //     return;
  //   }
  //   if (!validatePassword(userDetails.password)) {
  //     message.error("Password should be at least 8 characters long");
  //     return;
  //   }
  //   let payload = {
  //     email: userDetails.email,
  //     password: userDetails.password,
  //   };
  //   try {
  //     const data = await API.RegisterUser(payload);
  //     console.log(data);
  //     message.success("User created successfully");
  //     setUserDetails({ email: "", password: "" });
  //     onCancel();
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Failed to create user");
  //   }
  // };

  //console.log(userDetails);
  return (
    <Modal
      title={
        <div>
          {/* Sign up */}
          {screen === 1 && (
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
        <div className="h-[535px]">
          <div className="min-h-[515px] static">
            <div className="w-full h-48 ">
              <div className="w-full h-52">
                <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                  <div>
                    <img
                      className="h-6 ml-2 rounded-full w-25"
                      src="./images/google.png"
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
                  </div>
                  <div className="text-base">Continue with Facebook</div>
                </div>
                <div>
                  <button
                    className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11"
                    onClick={() => setIsEmailSignup(!isEmailSignup)}
                  >
                    {!isEmailSignup ? (
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
                      {!isEmailSignup
                        ? "Continue with Email"
                        : "Continue with Phone"}
                    </span>
                  </button>
                </div>
                <h2 className="w-full leading-[0.1em]  text-center border-b-[1px] mt-[10px] mb-[20px]">
                  <span className="pl-[10px] pr-[10px] bg-white">or</span>
                </h2>
                <div>
                  {isEmailSignup ? (
                    <div className="relative mt-3 mb-3">
                      <h4 className="mb-2 text-gray-400">
                        Enter your Email to get started
                      </h4>
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
                            value={userDetails.email}
                            onChange={(e) => {
                              setUserDetails({
                                ...userDetails,
                                email: e.target.value,
                              });
                              setEmailError(""); // Clear email error message
                            }}
                          />
                        </div>
                      </div>
                      {emailError && (
                        <span className="text-red-500 text-sm">
                          {emailError}
                        </span>
                      )}

                      <p className=" mt-1 text-xs font-medium ">
                        By continuing,you agree to our
                        <span className="block text-xs font-medium text-[#2C890F] cursor-pointer ">
                          Terms of service,Privacy Policy & Health Data Notice
                        </span>
                      </p>
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
                                    value={userDetails.countryCode}
                                    onChange={(e) =>
                                      setUserDetails({
                                        ...userDetails,
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
                                    className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none  `}
                                    placeholder="Phone number"
                                    value={userDetails.phoneno}
                                    onChange={(e) => {
                                      setUserDetails({
                                        ...userDetails,
                                        phoneno: e.target.value,
                                      });
                                      setPhoneError(""); // Clear phone number error message
                                    }}
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
                          We will send a text with a verification code.Message
                          and data rates may apply.By continuing,you agree to
                          our
                          <span className="block text-xs font-medium text-[#2C890F] cursor-pointer ">
                            Terms of service,Privacy Policy & Health Data Notice
                          </span>
                        </span>
                      </div>
                    </div>
                  )}

                  <div className=" mb-3">
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
                </div>
                <hr />

                <div className="pt-1 pb-1 ml-4 mr-4 text-center ">
                  <div className="mt-3 mb-3">
                    <p className="text-lg">Already have an account?</p>
                  </div>
                  <div className="mt-3 mb-3">
                    <button
                      className="relative pl-6 pr-6 text-[#2C890F] cursor-pointer"
                      onClick={onClickLogin}
                    >
                      <span className="text-base font-semibold">Log in</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* create password */}
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
                        className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                          passwordError
                            ? "border-2 border-rose-600 focus:outline-none"
                            : "border-none focus:outline-black"
                        }`}
                        value={userDetails.password}
                        onChange={(e) => {
                          setUserDetails({
                            ...userDetails,
                            password: e.target.value,
                          });
                          setPasswordError(""); // Clear password error message
                        }}
                      />
                    </div>
                  </div>
                  {passwordError && (
                    <span className="text-red-500 text-sm">
                      {passwordError}
                    </span>
                  )}
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

      {/* get Register otp */}
      {screen === 3 && (
        <div className="min-h-[300px] static">
          <div className="w-full h-48 ">
            <div className="w-full h-52">
              <div>
                <div className="relative mt-3 mb-3">
                  <h4 className="mb-2 text-gray-400">
                    We sent a 6-digit code to{" "}
                    {isEmailSignup ? userDetails.email : userDetails.phoneno}.
                    It expires soon —{" "}
                    {isEmailSignup
                      ? "check your inbox (and spam)"
                      : "check your text message"}
                  </h4>
                  <div className="flex justify-center space-x-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
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
                    className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl ${
                      isLoading ? "opacity-50" : ""
                    }`}
                    onClick={() => verifyOtpOfUser()}
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-center">
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Sign up
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
  );
};

export default Signup;
