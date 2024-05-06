import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import API from "../../../../services/api";
const EditName = ({
  editName,
  onCancel,
  userFirstName,
  userLastName,
  getAccountSettingsDetails,
}) => {
  // const [newName, setNewName] = useState(userName);
  const [userNewName, setUserNewName] = useState({
    firstName: userFirstName,
    lastName: userLastName,
  });

  useEffect(() => {
    setUserNewName({
      firstName: userFirstName,
      lastName: userLastName,
    });
  }, [userFirstName, userLastName]);

  const ChangeNameOfUser = async () => {
    try {
      let payload = {
        firstName: userNewName.firstName,
        lastName: userNewName.lastName,
      };
      const response = await API.changeName(payload);
      console.log(response);
      if (response.status === "success") {
        message.success("Your name has been saved");
        onCancel();
        getAccountSettingsDetails();
      } else {
        message.error("Not able to change your Name");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   setNewName(userName);
  // }, [userName]);

  // const updateAccountSettingsName = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     let payload = {
  //       name: newName,
  //       access_token: token,
  //     };
  //     const response = await API.UpdateUserDetails(payload);
  //     console.log(response);
  //     message.success("Name is successfully updated");

  //     onCancel();
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Could not able to update name");
  //   }
  // };
  return (
    <Modal centered open={editName} footer={false} width={540} closable={false}>
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
            Edit Name
          </h1>
        </div>

        <div className="flex-grow flex-shrink px-1 pb-8">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-row flex-nowrap items-center rounded-xl h-[55px] box-border max-w-[600px]">
              <div className="relative flex-grow h-full">
                <input
                  type="text"
                  className="pt-[8px] px-3 pb-2 w-full h-full rounded-xl bg-transparent outline-black border"
                  placeholder="First Name"
                  value={userNewName?.firstName}
                  //value={userFirstName}
                  onChange={(e) =>
                    setUserNewName({
                      ...userNewName,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-row flex-nowrap items-center rounded-xl h-[55px] box-border max-w-[600px]">
              <div className="relative flex-grow h-full">
                <input
                  type="text"
                  className="pt-[8px] px-3 pb-2 w-full h-full rounded-xl bg-transparent outline-black border"
                  placeholder="Last Name"
                  value={userNewName?.lastName}
                  //value={userLastName}
                  onChange={(e) =>
                    setUserNewName({ ...userNewName, lastName: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end px-4">
          <div className="flex gap-3">
            <button
              className="cursor-pointer relative h-[54px] pr-6 bg-[#F6F7F8] rounded-[27px]"
              onClick={onCancel}
            >
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Cancel
              </span>
            </button>
            <button
              className="cursor-pointer relative h-[54px] rounded-[27px] bg-[#2C890F] text-white pr-6 "
              //onClick={() => updateAccountSettingsName()}
              onClick={() => ChangeNameOfUser()}
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

export default EditName;
