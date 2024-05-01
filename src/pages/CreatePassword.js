import React from "react";
import { Modal, message } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
const CreatePassword = ({
  createPasswordModal,
  onClickBack,
  onClickContinue,
}) => {
  return (
    <Modal
      title={
        <div>
          <IoArrowBackOutline
            className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
            onClick={onClickBack}
          />
          <span className="mb-2 text-3xl font-bold">Create Password</span>
        </div>
      }
      centered
      visible={createPasswordModal}
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
                  Enter atleast 8 characters
                </h4>
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter a password"
                      className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-3">
                <button
                  type="submit"
                  className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                  onClick={onClickContinue}
                >
                  <span className="block text-xl font-semibold leading-5 text-white">
                    Continue
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePassword;
