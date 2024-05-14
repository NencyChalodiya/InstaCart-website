import React, { useState, useEffect, useRef } from "react";
import { Modal, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import API from "../../../../services/api";
import Loader from "react-js-loader";
import "../../../Loading.css";
const Change_Verify_PhoneNum = ({
  verifyPhoneNumber,
  onCancel,
  userPhoneNumber,
  getAccountSettingsDetails,
  handleVerificationStatusChange,
}) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState({
    countryCode: "+91",
    phoneno: userPhoneNumber,
    otpid: "",
    enteredotp: "",
  });
  // const [action, setAction] = useState("change");
  const [screen, setscreen] = useState(1);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(600);
  const inputRefs = useRef([]);
  const [isLoading, setLoading] = useState(false);

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

    const enteredOtp = newOTP.join("");
    setNewPhoneNumber({
      ...newPhoneNumber,
      enteredotp: enteredOtp,
    });

    // Construct the entered OTP from the newOTP array

    //console.log(enteredOtp);
  };

  useEffect(() => {
    setNewPhoneNumber({
      countryCode: "+91",
      phoneno: userPhoneNumber,
    });
  }, [userPhoneNumber]);

  const changePhoneNumber = async (action) => {
    try {
      setLoading(true);
      let payload = {
        country_code: newPhoneNumber.countryCode,
        phoneno: String(newPhoneNumber.phoneno),
        action: action,
      };
      const response = await API.changePhoneno(payload);
      console.log(response);

      if (response.status === "success") {
        if (action === "verify") {
          handleVerificationStatusChange(true);
          setNewPhoneNumber({
            ...newPhoneNumber,
            otpid: response.data.otpid,
          });
          message.success("OTP sent successfully");
          handleContinue(); // Move to the next screen
        } else {
          handleVerificationStatusChange(false);
          message.success("Phone number changed but not verified");
          onCancel(); // Close the modal
          getAccountSettingsDetails();
        }
      } else {
        message.error("Failed to change phone number");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    setscreen(screen + 1);
  };
  const handleVerifyNumber = async () => {
    try {
      await changePhoneNumber("verify");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeNumber = async () => {
    try {
      await changePhoneNumber("change");
    } catch (error) {
      console.log(error);
    }
  };

  const toVerifyChangedNumber = async () => {
    try {
      setLoading(true);
      let payload = {
        country_code: newPhoneNumber.countryCode,
        phoneno: newPhoneNumber.phoneno,
        otpid: newPhoneNumber.otpid,
        enteredotp: newPhoneNumber.enteredotp,
      };
      //console.log("Verification payload:", payload);
      const response = await API.verifyChangedPhoneNumber(payload);
      console.log(response);
      if (response.status === "success") {
        message.success("Phone number updated and verified successfully");
        getAccountSettingsDetails();
        onCancel(); // Close the modal
      } else {
        message.error("Failed to verify phone number");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //console.log(typeof newPhoneNumber.phoneno);

  // const updateAccountSettingsPhoneNumber = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     let payload = {
  //       phone: newPhoneNumber,
  //       access_token: token,
  //     };

  //     const response = await API.UpdateUserDetails(payload);

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   setNewPhoneNumber(userPhoneNumber);
  // }, [userPhoneNumber]);

  return (
    <Modal
      centered
      open={verifyPhoneNumber}
      footer={false}
      width={540}
      closable={false}
    >
      {screen === 1 && (
        <div>
          <div className="flex items-center h-11">
            <div className="pl-1">
              <button
                className="mt-[2px] cursor-pointer h-10 w-10 relative bg-transparent"
                onClick={onCancel}
              >
                <span className="block leading-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    aria-hidden="true"
                  >
                    <path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <h1 className="flex-grow text-lg font-medium text-center">
              Phone Number
            </h1>
          </div>

          <div className="flex-grow flex-shrink px-1 pb-8">
            <div className="py-4">
              <form>
                <div>
                  <div className="flex flex-row items-center w-full ">
                    <div className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  outline-black ">
                      <span className="flex items-center h-full text-ellipsis">
                        <select
                          name="countryCode"
                          value={newPhoneNumber.countryCode}
                          onChange={(e) =>
                            setNewPhoneNumber({
                              ...newPhoneNumber,
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
                          value={newPhoneNumber.phoneno}
                          onChange={(e) => {
                            setNewPhoneNumber({
                              ...newPhoneNumber,
                              phoneno: e.target.value,
                            });
                            // setPhoneError(""); // Clear phone number error message
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <p className="mt-6 mb-4">
                We will send a text with a verification code.Message and data
                rates may apply
              </p>
            </div>
          </div>

          <div className="flex justify-end px-4">
            <div className="flex gap-3">
              <button
                className="cursor-pointer relative h-[54px] pr-6 bg-[#F6F7F8] rounded-[27px]"
                //onClick={() => updateAccountSettingsPhoneNumber()}
                onClick={() => handleChangeNumber()}
              >
                <span className="block px-4 ml-5 text-xl text-ellipsis">
                  change number
                </span>
              </button>
              <button className="cursor-pointer relative h-[54px] rounded-[27px] bg-[#2C890F] text-white pr-6 ">
                <span
                  className="block px-4 ml-5 text-xl text-ellipsis"
                  onClick={() => handleVerifyNumber()}
                >
                  verify number
                </span>
              </button>
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
                    We sent a 6-digit code to It expires soon — check your text
                    message
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
                      <div className="mt-2  font-bold py-2 px-2 text-[#2C890F] text-lg cursor-pointer ">
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
                    onClick={() => toVerifyChangedNumber()}
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-center">
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Verify Changed Number
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

export default Change_Verify_PhoneNum;
