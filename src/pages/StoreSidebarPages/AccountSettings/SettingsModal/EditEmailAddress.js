import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import API from "../../../../services/api";

const EditEmailAddress = ({
  editEmailAddress,
  onCancel,
  userEmail,
  getAccountSettingsDetails,
}) => {
  const [newEmailAddress, setNewEmailAdddress] = useState({
    updatedEmail: userEmail,
    confirmEmail: "",
    password: "",
  });

  useEffect(() => {
    setNewEmailAdddress({
      updatedEmail: userEmail,
      confirmEmail: "",
      password: "",
    });
  }, [userEmail]);

  const ChangeEmailOfUser = async () => {
    try {
      if (newEmailAddress.updatedEmail !== newEmailAddress.confirmEmail) {
        message.error("Emails do not match");
        return;
      }
      let payload = {
        updatedEmail: newEmailAddress.updatedEmail,
        confirmEmail: newEmailAddress.confirmEmail,
        password: newEmailAddress.password,
      };
      const response = await API.changeEmail(payload);
      console.log(response);
      if (response.status === "success") {
        message.success("Email updated");
        onCancel();
        getAccountSettingsDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   setNewEmailAdddress(userEmail);
  // }, [userEmail]);

  // const updateAccountSettingsEmail = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     let payload = {
  //       email: newEmailAddress,
  //       access_token: token,
  //     };
  //     const response = await API.UpdateUserDetails(payload);
  //     console.log(response);
  //     message.success("Email is successfully updated");

  //     onCancel();
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Could not able to update email");
  //   }
  // };

  return (
    <Modal
      centered
      open={editEmailAddress}
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
            Edit email address
          </h1>
        </div>

        <div className="flex-grow flex-shrink px-1 pb-8">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-row flex-nowrap items-center rounded-xl h-[55px] box-border max-w-[600px]">
              <div className="relative flex-grow h-full">
                <input
                  type="email"
                  className="pt-[8px] px-3 pb-2 w-full h-full rounded-xl bg-transparent outline-black border"
                  placeholder="Email Address"
                  // value={newEmailAddress}
                  value={newEmailAddress?.updatedEmail}
                  onChange={(e) =>
                    setNewEmailAdddress({
                      ...newEmailAddress,
                      updatedEmail: e.target.value,
                    })
                  }
                  //onChange={(e) => setNewEmailAdddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row flex-nowrap items-center rounded-xl h-[55px] box-border max-w-[600px]">
              <div className="relative flex-grow h-full">
                <input
                  type="email"
                  className="pt-[8px] px-3 pb-2 w-full h-full rounded-xl bg-transparent outline-black border"
                  placeholder="Email confirmation"
                  value={newEmailAddress?.confirmEmail}
                  onChange={(e) =>
                    setNewEmailAdddress({
                      ...newEmailAddress,
                      confirmEmail: e.target.value,
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
                  placeholder="Password"
                  value={newEmailAddress.password}
                  onChange={(e) =>
                    setNewEmailAdddress({
                      ...newEmailAddress,
                      password: e.target.value,
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
              //onClick={() => updateAccountSettingsEmail()}
              onClick={() => ChangeEmailOfUser()}
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

export default EditEmailAddress;
