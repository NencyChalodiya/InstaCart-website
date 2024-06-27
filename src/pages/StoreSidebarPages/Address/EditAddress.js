import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import API from "../../../services/api";

import { Modal } from "antd";

import CrossSvg from "../../../assets/images/cross.svg";
import LocationSvg from "../../../assets/images/location.svg";

import Spinner from "../../../components/atoms/Spinner";

const EditAddress = ({
  openEditAddressModal,
  onCancel,
  selectedAddress,
  fetchUserAddressDetail,
}) => {
  const location = useLocation();

  const [updatedAddress, setUpdatedAddress] = useState({ ...selectedAddress });
  const [isLoading, setLoading] = useState(false);

  const handleUpdateAddress = async () => {
    setLoading(true);
    try {
      const { address_id, latitude, longitude, ...addressData } =
        updatedAddress;
      if (latitude) addressData.latitude = parseFloat(latitude);
      if (longitude) addressData.longitude = parseFloat(longitude);

      const response = await API.editUserAddress(addressData, address_id);
      console.log(response);
      if (response.status === "success") {
        fetchUserAddressDetail();
      }

      onCancel();
    } catch (error) {
      console.error("Error updating address:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAddress = async () => {
    try {
      const response = await API.deleteUserAddress(updatedAddress.address_id);
      console.log(response);
      if (response.status === "success") {
        fetchUserAddressDetail();
      }
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUpdatedAddress(selectedAddress);
  }, [selectedAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

              <h2 className="pr-44">Edit Address</h2>
            </div>
          </div>
        }
        centered
        open={openEditAddressModal}
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
                          name="street"
                          placeholder="Street Address"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg focus:outline-black"
                          value={updatedAddress?.street}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="text"
                          name="floor"
                          placeholder="Apt, floor, suite, etc (optional)"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg focus:outline-black"
                          value={updatedAddress?.floor}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="text"
                          name="business_name"
                          placeholder="Business name (optional)"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg focus:outline-black"
                          value={updatedAddress?.business_name}
                          onChange={handleChange}
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
                          name="zip_code"
                          placeholder="Zip Code"
                          className="w-full h-full p-5 pl-10 text-base leading-6 bg-transparent border-none rounded-lg
                          focus:outline-black"
                          value={updatedAddress?.zip_code}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {location.pathname.includes("/store/addresses") ? (
                    <>
                      <div>
                        <button
                          className="cursor-pointer text-red-800"
                          onClick={() => handleDeleteAddress()}
                        >
                          <span>Delete Address</span>
                        </button>
                      </div>
                    </>
                  ) : null}

                  <div className="mt-6 mb-3">
                    <button
                      type="submit"
                      className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full ${
                        isLoading ? "opacity-50" : ""
                      }`}
                      onClick={() => handleUpdateAddress()}
                      disabled={isLoading}
                    >
                      <span className="block text-xl font-semibold leading-5 text-white mr-3">
                        Update Address
                      </span>
                      {isLoading && (
                        <div className="">
                          <Spinner fontsize={20} loaderColor="#FFFFFF" />
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

export default EditAddress;
