import React, { useState, useRef } from "react";
import { Modal, message } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
const GetRegisterOtp = ({ getRegisterOtpModal, onClickBack }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(600);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <>
      <Modal
        title={
          <div>
            <IoArrowBackOutline
              className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
              onClick={onClickBack}
            />
            <span className="mb-2 text-3xl font-bold">Check your email</span>
          </div>
        }
        centered
        visible={getRegisterOtpModal}
        footer={null}
        closable={false}
        width={416}
      >
        <div className="min-h-[300px] static">
          <div className="w-full h-48 ">
            <div className="w-full h-52">
              <div>
                <div className="relative mt-3 mb-3">
                  <h4 className="mb-2 text-gray-400">
                    We sent a 6-digit code to pop@gmail.com. It expires soon —
                    check your inbox (and spam)
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
                  <div className="mt-2  font-bold py-2 px-2 text-[#2C890F] text-lg ">
                    Resend code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GetRegisterOtp;
