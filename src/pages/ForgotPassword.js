import React, { useState } from "react";
import { message } from "antd";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgetPasswordDetails, setForgetPasswordDetails] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [screen, setScreen] = useState(false);

  const forgetPasswordUser = async () => {
    if (
      forgetPasswordDetails.newPassword !==
      forgetPasswordDetails.confirmPassword
    ) {
      message.error("Password does not match");
    }
    try {
      let payload = {
        email: forgetPasswordDetails.email,
        old_password: forgetPasswordDetails.oldPassword,
        new_password: forgetPasswordDetails.newPassword,
        confirm_password: forgetPasswordDetails.confirmPassword,
      };
      const response = await API.ForgotPasswordUser(payload);
      if (response.status) {
        console.log("Password reset successfully");
        message.success("Password reset successfully");
        setScreen(true);
      } else {
        message.error("Password reset failed");
      }
    } catch (error) {
      message.error("Password reset failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-16 border-b">
        <img
          src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full mt-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-5">
            Reset Your Password
          </h2>
          <p className="text-gray-400">
            Enter at least 8 characters. Your password may not be the same as
            your last 3 passwords
          </p>
          {!screen ? (
            <div>
              <div className="relative mt-3 mb-3">
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg outline-none focus:outline-black"
                      onChange={(e) =>
                        setForgetPasswordDetails({
                          ...forgetPasswordDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="relative mt-3 mb-3">
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="password"
                      name="oldPassword"
                      placeholder="Enter Old Password"
                      className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg outline-none focus:outline-black"
                      onChange={(e) =>
                        setForgetPasswordDetails({
                          ...forgetPasswordDetails,
                          oldPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="relative mt-3 mb-3">
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="Enter New Password"
                      className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg outline-none focus:outline-black"
                      onChange={(e) =>
                        setForgetPasswordDetails({
                          ...forgetPasswordDetails,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="relative mt-3 mb-3">
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm New Password"
                      className="relative w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg outline-none focus:outline-black"
                      onChange={(e) =>
                        setForgetPasswordDetails({
                          ...forgetPasswordDetails,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <button
                  type="submit"
                  className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                  onClick={() => forgetPasswordUser()}
                >
                  <span className="block text-xl font-semibold leading-5 text-white">
                    Reset & log in
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3 mb-3">
              <button
                type="submit"
                className="box-border relative flex items-center justify-center w-full cursor-pointer h-14 "
                onClick={() => navigate("/")}
              >
                <span className="block text-xl font-semibold leading-5 text-[#2C890F]">
                  Go back to log in
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
