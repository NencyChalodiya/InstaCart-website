import React from "react";
import { Modal } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";

const ResetPassword = ({ resetPassword, onClickSignup,onClickBack  }) => {
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
            <form>
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
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-3">
                <button
                  type="submit"
                  className="box-border relative flex items-center justify-center w-full bg-green-600 border cursor-pointer h-14 rounded-xl"
                >
                  <span className="block text-xl font-semibold leading-5 text-white">
                    Reset Password
                  </span>
                </button>
              </div>
              <div className="mt-12">
                <hr />
              </div>
            </form>
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
