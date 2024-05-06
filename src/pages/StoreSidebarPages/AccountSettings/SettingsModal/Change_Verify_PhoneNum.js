import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import API from "../../../../services/api";
const Change_Verify_PhoneNum = ({
  verifyPhoneNumber,
  onCancel,
  userPhoneNumber,
}) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState({
    countryCode: "+91",
    phoneno: userPhoneNumber,
    action: "",
  });

  const changePhoneNumber = async () => {
    try {
      let payload = {
        country_code: newPhoneNumber.countryCode,
        phoneno: newPhoneNumber.phoneno,
        action: newPhoneNumber.action,
      };
      const response = await API.changePhoneno(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const updateAccountSettingsPhoneNumber = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     let payload = {
  //       phone: newPhoneNumber,
  //       access_token: token,
  //     };

  //     const response = await API.UpdateUserDetails(payload);

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   setNewPhoneNumber(userPhoneNumber);
  // }, [userPhoneNumber]);
  return (
    <Modal
      centered
      open={verifyPhoneNumber}
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
            Phone Number
          </h1>
        </div>

        <div className="flex-grow flex-shrink px-1 pb-8">
          <div className="py-4">
            <form>
              <div>
                <div className="flex flex-row items-center w-full ">
                  <div className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  outline-black ">
                    <span className="flex items-center h-full text-ellipsis">
                      <select
                        name="countryCode"
                        value={newPhoneNumber.countryCode}
                        onChange={(e) =>
                          setNewPhoneNumber({
                            ...newPhoneNumber,
                            countryCode: e.target.value,
                          })
                        }
                      >
                        <option value="+91">+91 (India)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+1">+1 (Canada)</option>
                      </select>
                    </span>
                  </div>

                  <div className="flex flex-row flex-nowrap items-center h-14 box-border max-w-[600px] rounded-r-lg border w-full  outline-black">
                    <div className="relative flex-grow w-full h-full">
                      <input
                        className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none  `}
                        placeholder="Phone number"
                        value={newPhoneNumber.phoneno}
                        onChange={(e) => {
                          setNewPhoneNumber({
                            ...newPhoneNumber,
                            phoneno: e.target.value,
                          });
                          // setPhoneError(""); // Clear phone number error message
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-6 mb-4">
              We will send a text with a verification code.Message and data
              rates may apply
            </p>
          </div>
        </div>

        <div className="flex justify-end px-4">
          <div className="flex gap-3">
            <button
              className="cursor-pointer relative h-[54px] pr-6 bg-[#F6F7F8] rounded-[27px]"
              //onClick={() => updateAccountSettingsPhoneNumber()}
              onClick={() => changePhoneNumber()}
            >
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Change number
              </span>
            </button>
            <button className="cursor-pointer relative h-[54px] rounded-[27px] bg-[#2C890F] text-white pr-6 ">
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Verify number
              </span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Change_Verify_PhoneNum;
