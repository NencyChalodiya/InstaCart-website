import React, { useState, useEffect } from "react";

import { Modal, message } from "antd";

import CrossSvg from "../../../../assets/images/cross.svg";

import API from "../../../../services/api";

import Spinner from "../../../../components/atoms/Spinner";

const EditEmailAddress = ({
  editEmailAddress,
  onCancel,
  userEmail,
  getAccountSettingsDetails,
}) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

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
                <img src={CrossSvg} alt="cross-svg" />
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
                  value={newEmailAddress?.updatedEmail}
                  onChange={(e) =>
                    setNewEmailAdddress({
                      ...newEmailAddress,
                      updatedEmail: e.target.value,
                    })
                  }
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
              className={`cursor-pointer relative h-[54px] rounded-[27px] bg-[#2C890F] text-white pr-6 flex items-center ${
                loading ? "opacity-50" : ""
              }`}
              onClick={() => ChangeEmailOfUser()}
              disabled={loading}
            >
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Save
              </span>
              {loading && (
                <div className="">
                  <Spinner fontsize={20} loaderColor="#FFFFFF" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditEmailAddress;
