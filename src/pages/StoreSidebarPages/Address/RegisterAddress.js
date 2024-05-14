import React, { useState } from "react";
import { Modal } from "antd";
import API from "../../../services/api";
const RegisterAddress = ({ openRegisterAddressModal, onCancel }) => {
  const [registerAddressDetails, setRegisterAddressDetails] = useState({
    streetAddress: "",
    apartAddress: "",
    bussinessAddress: "",
    ZipCode: "",
  });

  const registerUserAddress = async () => {
    const token = localStorage.getItem("token");
    console.log("Token", token);
    try {
      let payload = {
        street: registerAddressDetails.streetAddress,
        apt_name: registerAddressDetails.apartAddress,
        business_name: registerAddressDetails.bussinessAddress,
        zip_code: registerAddressDetails.ZipCode,
        token: token,
      };
      const response = await API.RegisterAddress(payload);
      console.log(response);
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        title={
          <div>
            <div className="flex justify-between">
              <button
                className="cursor-pointer hover:bg-gray-100 w-5 h-7 rounded"
                onClick={onCancel}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#343538"
                  xmlns="http://www.w3.org/2000/svg"
                  size="20"
                  class="e-1p1m6ki"
                  aria-hidden="true"
                >
                  <path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path>
                </svg>
              </button>

              <h2 className="pr-44">Choose Address</h2>
            </div>
          </div>
        }
        centered
        open={openRegisterAddressModal}
        closable={false}
        footer={false}
      >
        <div className="h-[525px]">
          <div className="min-h-[525px] static ">
            <div className="w-full h-48 ">
              <div className="w-full h-52">
                <div>
                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="text"
                          name="streetAddress"
                          placeholder="Street Address"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg focus:outline-black"
                          onChange={(e) =>
                            setRegisterAddressDetails({
                              ...registerAddressDetails,
                              streetAddress: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="text"
                          name="apt address"
                          placeholder="Apt, floor, suite, etc (optional)"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg focus:outline-black"
                          onChange={(e) =>
                            setRegisterAddressDetails({
                              ...registerAddressDetails,
                              apartAddress: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="text"
                          name="Business name "
                          placeholder="Business name (optional)"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg focus:outline-black"
                          onChange={(e) =>
                            setRegisterAddressDetails({
                              ...registerAddressDetails,
                              bussinessAddress: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3 mb-3 border box-border rounded-xl">
                    <div className="absolute top-5 left-3 z-10">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="#343538"
                        xmlns="http://www.w3.org/2000/svg"
                        size="19"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="flex relative">
                        <input
                          type="text"
                          name="Zip Code "
                          placeholder="Zip Code"
                          className="w-full h-full p-5 pl-10 text-base leading-6 bg-transparent border-none rounded-lg
                          focus:outline-black"
                          onChange={(e) =>
                            setRegisterAddressDetails({
                              ...registerAddressDetails,
                              ZipCode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 mb-3">
                    <button
                      type="submit"
                      className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full"
                      onClick={() => registerUserAddress()}
                    >
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Save Address
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterAddress;
