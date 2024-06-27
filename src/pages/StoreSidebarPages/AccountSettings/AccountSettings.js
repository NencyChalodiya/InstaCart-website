import React, { useState, useEffect } from "react";

import Navbar from "../../../components/LandingPageComponents/Navbar";
import EditEmailAddress from "./SettingsModal/EditEmailAddress";
import CreatePassword from "./SettingsModal/CreatePassword";
import EditName from "./SettingsModal/EditName";
import Change_Verify_PhoneNum from "./SettingsModal/Change_Verify_PhoneNum";
import API from "../../../services/api";
import InnerSideBarData from "../InnerSideBarData";

import unverifiedPhoneSvg from "../../../assets/images/unverifiedPhoneSvg.svg";

import { Skeleton } from "antd";

const AccountSettings = () => {
  const [editEmailAddress, openEditEmailAdress] = useState(false);
  const [changePassword, openChangePassword] = useState(false);
  const [editName, openEditName] = useState(false);
  const [verifyPhoneNumber, opneVerifyPhoneNumber] = useState(false);
  const [userSettingsDetail, setUserSettingsDetail] = useState(null);
  const [phoneNumberVerified, setPhoneNumberVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAccountSettingsDetails = async () => {
    setLoading(true);
    try {
      const response = await API.GetUserDetails();
      console.log(response);
      if (response.status === "success") {
        setUserSettingsDetail(response.data.userData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAccountSettingsDetails();
  }, []);

  const handleVerificationStatusChange = (status) => {
    setPhoneNumberVerified(status);
  };

  return (
    <>
      <Navbar />
      <div className="h-full bg-white">
        <InnerSideBarData />

        <div className="ml-64 max-lg:ml-0">
          <div className="h-14"></div>

          <div className="w-full py-10 ">
            <div className="w-full px-10 mb-6 ">
              <div className="flex items-center justify-between mt-6">
                <div>
                  <h2 className="flex mr-2 ">
                    <div className="text-3xl font-bold leading-5 ">
                      Account settings
                    </div>
                  </h2>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl leading-5">Account information</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between ">
                    <div className="flex flex-col mt-4">
                      <p className="text-sm leading-4 text-[#343538] ">
                        Email address
                      </p>
                      {loading ? (
                        <div className="mt-1">
                          <div className="address-name">
                            <Skeleton.Avatar active />
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="mt-1 text-sm leading-4 text-[#83878E]">
                            {userSettingsDetail?.email || "--"}
                          </p>
                        </>
                      )}
                    </div>
                    <button
                      className="pr-80 self-start cursor-pointer text-[#2C890F] max-lg:pr-0 "
                      onClick={() => openEditEmailAdress(true)}
                    >
                      Change
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm leading-4 text-[#343538] ">
                        Password
                      </p>
                    </div>
                    <button
                      className="pr-80 self-start cursor-pointer text-[#2C890F] max-lg:pr-0 "
                      onClick={() => openChangePassword(true)}
                    >
                      Add Password
                    </button>
                  </div>
                </div>
                <div className="my-3 border-b pr-80"></div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl leading-5">Personal Information</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col mt-4">
                      <p className="text-sm leading-4 text-[#343538] ">Name</p>
                      {loading ? (
                        <div className="mt-1">
                          <div className="address-name">
                            <Skeleton.Avatar active />
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="mt-1 text-sm leading-4 text-[#83878E]">
                            {userSettingsDetail?.firstName}{" "}
                            {userSettingsDetail?.lastName || "-"}
                          </p>
                        </>
                      )}
                    </div>
                    <button
                      className="pr-80 self-start cursor-pointer text-[#2C890F] max-lg:pr-0  "
                      onClick={() => openEditName(true)}
                    >
                      Change
                    </button>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm leading-4 text-[#343538] ">
                        Phone number
                      </p>
                      {loading ? (
                        <div className="mt-1">
                          <div className="address-name">
                            <Skeleton.Avatar active />
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="mt-1 text-sm leading-4 text-[#83878E]">
                            {userSettingsDetail?.phoneno || "--"}
                            {phoneNumberVerified ? (
                              "(Verified)"
                            ) : (
                              <>
                                <span className="flex items-center ">
                                  <img
                                    src={unverifiedPhoneSvg}
                                    alt="unverified-phone-svg"
                                  />
                                  <span>Unverified</span>
                                </span>
                                <span>
                                  <span className="ml-1">
                                    Verify your number to secure your account
                                  </span>
                                </span>
                              </>
                            )}
                          </p>
                        </>
                      )}
                    </div>
                    <button
                      className="pr-80 self-start cursor-pointer text-[#2C890F] max-lg:pr-0  "
                      onClick={() => opneVerifyPhoneNumber(true)}
                    >
                      Change / verify
                    </button>
                  </div>
                </div>
                <div className="my-3 border-b pr-80"></div>
              </div>

              {/* <div className="mt-5">
                <div className="flex flex-row items-center gap-1">
                  <h2 className="text-xl leading-5">EBT SNAP settings</h2>
                  <a href="#" className="flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#C7C8CD"
                      xmlns="http://www.w3.org/2000/svg"
                      size="18"
                      color="systemGrayscale30"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14.765c0 .706-.53 1.203-1.492 1.203-.995 0-1.508-.465-1.508-1.235 0-.69.53-1.203 1.508-1.203.979 0 1.492.481 1.492 1.235M10.75 18v-8h2.5v8z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="relative flex justify-between cursor-pointer">
                  <div className="flex flex-row pr-4">
                    <label className="self-center">
                      <span className="flex flex-col">
                        <span className="text-sm leading-4">
                          Show EBT SNAP eligibility by item
                        </span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <Form className="pr-80 max-lg:pr-0 ">
                      <Form.Item valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </Form>
                  </div>
                </div>
                <a className="text-[#2C890F] text-sm " href="#">
                  Add EBT SNAP card
                </a>
                <div className="my-3 border-b pr-80"></div>
              </div> */}

              {/* <div className="mt-5">
                <div className="flex flex-row items-center gap-1">
                  <h2 className="text-xl leading-5">Accessibility</h2>
                  <a href="#" className="flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#C7C8CD"
                      xmlns="http://www.w3.org/2000/svg"
                      size="18"
                      color="systemGrayscale30"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14.765c0 .706-.53 1.203-1.492 1.203-.995 0-1.508-.465-1.508-1.235 0-.69.53-1.203 1.508-1.203.979 0 1.492.481 1.492 1.235M10.75 18v-8h2.5v8z"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="relative flex justify-between pt-2 cursor-pointer">
                  <div className="flex flex-row ">
                    <label className="self-center">
                      <span className="flex flex-col">
                        <span className="text-sm leading-4">
                          Enabled high contrast colors
                        </span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <Form className="pr-80 max-lg:pr-0 ">
                      <Form.Item valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </Form>
                  </div>
                </div>

                <div className="relative flex justify-between cursor-pointer">
                  <div className="flex flex-row mb-4">
                    <label className="self-center">
                      <span className="flex flex-col">
                        <span className="text-sm leading-4">
                          Enabled high contrast colors
                        </span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <Form className="mb-4 pr-80 max-lg:pr-0 ">
                      <Form.Item valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <EditEmailAddress
          editEmailAddress={editEmailAddress}
          onCancel={() => openEditEmailAdress(false)}
          userEmail={userSettingsDetail?.email}
          getAccountSettingsDetails={getAccountSettingsDetails}
        />
        <CreatePassword
          changePassword={changePassword}
          onCancel={() => openChangePassword(false)}
        />
        <EditName
          editName={editName}
          onCancel={() => openEditName(false)}
          userFirstName={userSettingsDetail?.firstName}
          userLastName={userSettingsDetail?.lastName}
          getAccountSettingsDetails={getAccountSettingsDetails}
        />
        <Change_Verify_PhoneNum
          verifyPhoneNumber={verifyPhoneNumber}
          onCancel={() => opneVerifyPhoneNumber(false)}
          userPhoneNumber={userSettingsDetail?.phoneno}
          getAccountSettingsDetails={getAccountSettingsDetails}
          handleVerificationStatusChange={handleVerificationStatusChange}
        />
      </div>
    </>
  );
};

export default AccountSettings;
