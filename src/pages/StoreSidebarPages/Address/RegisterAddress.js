import React, { useState } from "react";
import { Modal } from "antd";
import API from "../../../services/api";
import Loader from "react-js-loader";
import "../../Loading.css";

import CrossSvg from "../../../assets/images/cross.svg";
import LocationSvg from "../../../assets/images/location.svg";

const RegisterAddress = ({
  openRegisterAddressModal,
  onCancel,
  fetchUserAddressDetail,
}) => {
  const [registerAddressDetails, setRegisterAddressDetails] = useState({
    streetAddress: "",
    apartAddress: "",
    bussinessAddress: "",
    ZipCode: "",
  });
  const [isLoading, setLoading] = useState(false);

  const registerUserAddress = async () => {
    try {
      setLoading(true);
      let payload = {
        street: registerAddressDetails.streetAddress,
        floor: registerAddressDetails.apartAddress,
        business_name: registerAddressDetails.bussinessAddress,
        zip_code: registerAddressDetails.ZipCode,
      };
      const response = await API.RegisterAddress(payload);
      console.log(response);
      if (response.status === "success") {
        fetchUserAddressDetail();
      }
      onCancel();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
                <img src={CrossSvg} alt="cross-svg" />
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
                      <img src={LocationSvg} alt="location-svg" />
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
                      className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full ${
                        isLoading ? "opacity-50" : ""
                      }`}
                      onClick={() => registerUserAddress()}
                      disabled={isLoading}
                    >
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Save Address
                      </span>
                      {isLoading && (
                        <div className="ml-2 h-5 w-5 mt-[-20px]">
                          <Loader size={20} />
                        </div>
                      )}
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
