import React, { useState } from "react";
import { message, Modal } from "antd";
import API from "../../../../services/api";
const CreatePassword = ({ changePassword, onCancel }) => {
  const [createNewPasswordDetails, setcreateNewPasswordDetails] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const createNewpassword = async () => {
    //const token = localStorage.getItem("token");
    try {
      if (
        createNewPasswordDetails.newPassword !==
        createNewPasswordDetails.confirmPassword
      ) {
        message.error("Passwords do not match");
        return;
      }
      let payload = {
        newPassword: createNewPasswordDetails.newPassword,
        confirmNewPassword: createNewPasswordDetails.confirmPassword,
      };
      const response = await API.changePasswordOfUser(payload);
      console.log(response);
      if (response.status === "success") {
        message.success("Your Password has been changed");
        onCancel();
      }
      //message.success("Name is successfully updated");
    } catch (error) {
      console.log(error);
      //message.error("Could not able to update name");
    }
  };
  return (
    <Modal
      centered
      open={changePassword}
      footer={false}
      width={540}
      closable={false}
    >
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
            Create Password
          </h1>
        </div>

        <div className="flex-grow flex-shrink px-1 pb-8">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-row flex-nowrap items-center rounded-xl h-[55px] box-border max-w-[600px]">
              <div className="relative flex-grow h-full">
                <input
                  type="password"
                  className="pt-[8px] px-3 pb-2 w-full h-full rounded-xl bg-transparent outline-black border"
                  placeholder="Enter New Password"
                  onChange={(e) =>
                    setcreateNewPasswordDetails({
                      ...createNewPasswordDetails,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-row flex-nowrap items-center rounded-xl h-[55px] box-border max-w-[600px]">
              <div className="relative flex-grow h-full">
                <input
                  type="password"
                  className="pt-[8px] px-3 pb-2 w-full h-full rounded-xl bg-transparent outline-black border"
                  placeholder="Confirm password"
                  onChange={(e) =>
                    setcreateNewPasswordDetails({
                      ...createNewPasswordDetails,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end px-4">
          <div className="flex gap-3">
            <button className="cursor-pointer relative h-[54px] pr-6 bg-[#F6F7F8] rounded-[27px]">
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Cancel
              </span>
            </button>
            <button
              className="cursor-pointer relative h-[54px] rounded-[27px] bg-[#2C890F] text-white pr-6 "
              onClick={() => createNewpassword()}
            >
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePassword;
