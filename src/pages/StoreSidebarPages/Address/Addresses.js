import React, { useEffect, useState } from "react";
import Navbar from "../../../components/LandingPageComponents/Navbar";
import { Link } from "react-router-dom";
import API from "../../../services/api";

import { yourOrderSidebarData } from "../../../data/yourOrdersSidebarData";
import RegisterAddress from "./RegisterAddress";
import EditAddress from "./EditAddress";

import LogoutSvg from "../../../assets/images/logoutSvg.svg";
import BackDarkArrowSvg from "../../../assets/images/backDarkArrow.svg";

import { Skeleton } from "antd";

import "./Address.css";

const Addresses = () => {
  const [openRegisterAddressModal, setRegisterAddressModal] = useState(false);
  const [openEditAddressModal, setEditAddressModal] = useState(false);
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const fetchUserAddressDetail = async () => {
    setLoading(true);
    try {
      const response = await API.getUserAddress();
      if (response.status === "success") {
        setUserAddressDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserAddressDetail();
  }, []);

  const handleEditAddress = (address) => {
    setEditAddressModal(true);
    setSelectedAddress({ ...address });
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <Navbar />
      <div className="h-full bg-white">
        <div
          className="fixed z-10 w-64 overflow-y-auto bg-white border-r-2 top-20 max-md:hidden"
          style={{ height: `calc(100% - 80px)` }}
        >
          <ul className="w-full px-3 py-4 list-none">
            <li>
              <Link
                to="/store"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <img src={BackDarkArrowSvg} alt="bakcDarkArrowSvg" />
                </span>
                <span className="pt-2 pb-2 ml-2">Back</span>
              </Link>
            </li>
            <br />
            <hr />
            {yourOrderSidebarData.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor:
                    hoveredItem === index && item.title !== "Your orders"
                      ? "#f2f3f7"
                      : item.title === "Your orders"
                      ? "#343538" // Background becomes black for "Stores"
                      : "white",
                }}
                className="mb-2 rounded-lg"
              >
                <Link
                  to={`/store/${item.route}`}
                  className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
                  style={{
                    color:
                      hoveredItem === index && item.title !== "Your orders"
                        ? "black"
                        : item.title === "Your orders"
                        ? "white" // Text becomes white for "Stores"
                        : "black",
                  }}
                >
                  <span className="flex items-center h-10">
                    {item.title === "Your orders" // Check if title is "Stores"
                      ? item.selectedLogo
                      : item.unselectedLogo}
                  </span>
                  <span className="pt-2 pb-2 ml-2">{item.title}</span>
                </Link>
              </li>
            ))}

            <hr />
            <br />
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <img src={LogoutSvg} alt="logoutSvg" />
                </span>
                <span className="pt-2 pb-2 ml-2">Log out</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-64 max-md:ml-0 ">
          <div className="h-14"></div>

          <div className="w-full py-6 ">
            <div className="w-full px-12 mb-6">
              <div className="flex items-center justify-between mt-12 ">
                <div>
                  <h2 className="flex mr-2">
                    <div className="text-3xl font-semibold leading-5 ">
                      Addresses
                    </div>
                  </h2>
                </div>
                <div className="pr-52">
                  <button
                    className="cursor-pointer text-[#2C890F] font-semibold"
                    onClick={() => setRegisterAddressModal(true)}
                  >
                    Add new address
                  </button>
                </div>
              </div>

              <div className="block relative text-left w-full rounded-xl">
                {loading ? (
                  <div className="mt-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="  flex flex-col p-6">
                        <div>
                          <div className="address-name">
                            <Skeleton.Avatar active />
                          </div>
                          <div className="address-info">
                            <Skeleton.Avatar active />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul>
                    {getUserAddressDetail &&
                    getUserAddressDetail.addressDetails ? (
                      <>
                        {getUserAddressDetail.addressDetails.map((addr) => (
                          <>
                            <li
                              className="flex mt-6 mb-4 justify-between"
                              key={addr?.address_id}
                            >
                              <button className="pr-2 text-left relative">
                                <span className="flex justify-between items-center text-ellipsis">
                                  <span className="flex-grow flex-shrink basis-auto">
                                    <address>
                                      <span className="text-lg">
                                        {addr?.business_name}
                                      </span>
                                      <br />
                                      <span className="text-base text-gray-400">
                                        <span>{addr?.street},</span>
                                        <span>
                                          {addr?.floor},{addr?.zip_code}
                                        </span>
                                      </span>
                                    </address>
                                  </span>
                                </span>
                              </button>
                              <button
                                className="cursor-pointer relative pr-52 text-[#2C890F] font-semibold"
                                onClick={() => handleEditAddress(addr)}
                              >
                                <span>Edit</span>
                              </button>
                            </li>
                          </>
                        ))}
                      </>
                    ) : (
                      <>No Address Found</>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterAddress
        openRegisterAddressModal={openRegisterAddressModal}
        onCancel={() => setRegisterAddressModal(false)}
        fetchUserAddressDetail={fetchUserAddressDetail}
      />
      <EditAddress
        openEditAddressModal={openEditAddressModal}
        onCancel={() => setEditAddressModal(false)}
        selectedAddress={selectedAddress}
        fetchUserAddressDetail={fetchUserAddressDetail}
      />
    </>
  );
};

export default Addresses;
