import React, { useState } from "react";
import { Modal, message } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import API from "../services/api";
import Loader from "react-js-loader";
import "./Loading.css";

const ResetPassword = ({ resetPassword, onClickSignup, onClickBack }) => {
  const [resetPasswordDetails, setResetPasswordDetals] = useState({
    email: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      let payload = {
        email: resetPasswordDetails.email,
      };
      const response = await API.resetPasswordUser(payload);
      console.log(response);
      if (response.status === "success") {
        //console.log("mail sent successfully");
        message.success("Mail sent Successfully");
      }
      setLoading(false);
      onClickBack();
    } catch (error) {
      //console.log("login failed", error);
      message.error("Failed to sent mail");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      title={
        <div>
          <IoArrowBackOutline
            className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
            onClick={onClickBack}
          />
          <span className="mb-2 text-3xl font-bold">Forgot Password</span>
        </div>
      }
      centered
      visible={resetPassword}
      footer={null}
      closable={false}
    >
      <div className="min-h-[300px] static">
        <div className="w-full h-48 ">
          <div className="w-full h-52">
            <div>
              <div className="relative mt-3 mb-3">
                <h4 className="mb-2 text-gray-400">
                  We’ll send you a link to reset your password
                </h4>
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                      onChange={(e) =>
                        setResetPasswordDetals({
                          ...resetPasswordDetails,
                          email: e.target.value,
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
                  onClick={() => handleResetPassword()}
                  disabled={isLoading}
                >
                  <div className="flex items-center justify-center">
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Reset Password
                    </span>
                    {isLoading && (
                      <div className="ml-2 h-5 w-5 mt-[-20px]">
                        <Loader size={20} />
                      </div>
                    )}
                  </div>
                </button>
              </div>
              <div className="mt-12">
                <hr />
              </div>
            </div>
            <div className="pt-2 pb-2 ml-4 mr-4 text-center">
              <div className="mt-3 mb-3">
                <p className="text-lg">Don’t have an account?</p>
              </div>
              <div className="mt-3 mb-3">
                <button
                  className="relative pl-6 pr-6 text-green-600 cursor-pointer"
                  onClick={onClickSignup}
                >
                  <span className="text-base font-semibold">Sign up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPassword;
