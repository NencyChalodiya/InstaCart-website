import React, { useState } from "react";
import { message } from "antd";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Loader from "react-js-loader";
import "./Loading.css";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const [newPassword, setNewPassword] = useState("");
  const [screen, setScreen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const forgetPasswordUser = async () => {
    try {
      setLoading(true);
      let payload = {
        newPassword: newPassword,
      };
      const response = await API.changePasswordUser(params.resettoken, payload);
      if (response.status === "success") {
        //console.log("Password reset successfully");
        message.success("Password reset successfully");
        setScreen(true);
      } else {
        message.error("Password reset failed");
      }
    } catch (error) {
      message.error("Password reset failed");
    } finally {
      setLoading(false);
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
                      type="password"
                      name="password"
                      placeholder="Enter your new Password"
                      className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg outline-none focus:outline-black"
                      onChange={(e) => setNewPassword(e.target.value)}
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
                  onClick={() => forgetPasswordUser()}
                  disabled={isLoading}
                >
                  <div className="flex items-center justify-center">
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Reset & Log in
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
