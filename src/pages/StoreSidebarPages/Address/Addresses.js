import React, { useEffect, useState } from "react";
import Navbar from "../../../components/LandingPageComponents/Navbar";
import { Link } from "react-router-dom";
import { yourOrderSidebarData } from "../../../data/yourOrdersSidebarData";
import RegisterAddress from "./RegisterAddress";
import EditAddress from "./EditAddress";
import API from "../../../services/api";
const Addresses = () => {
  const [openRegisterAddressModal, setRegisterAddressModal] = useState(false);
  const [openEditAddressModal, setEditAddressModal] = useState(true);
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const fetchUserAddressDetail = async () => {
    try {
      const response = await API.getUserAddress();
      //console.log(response);
      if (response.status) {
        setUserAddressDetail(response.addresses);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserAddressDetail();
  }, []);

  console.log("addressDetail", getUserAddressDetail);

  const handleEditAddress = (address) => {
    // Open the EditAddress modal and pass the address data
    setEditAddressModal(true);
    // Set the initial address data for the EditAddress modal
    setSelectedAddress({ ...address });
  };
  //console.log("selectedAddress", selectedAddress);

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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="m12.292 6.79-1.584-1.583-6.792 6.792 6.792 6.792 1.584-1.584-4.088-4.088H20v-2.24H8.204z"></path>
                  </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M10.07 7.757 8.656 6.343 2.999 12l5.657 5.657 1.414-1.415L6.828 13H16v-2H6.827zM17 20v-2h2V6h-2V4h4v16z"></path>
                  </svg>
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
                <ul>
                  {getUserAddressDetail.map((address) => (
                    <li
                      className="flex mt-6 mb-4 justify-between"
                      key={address.id}
                    >
                      <button className="pr-2 text-left relative">
                        <span className="flex justify-between items-center text-ellipsis">
                          <span className="flex-grow flex-shrink basis-auto">
                            <address>
                              <span className="text-lg">
                                {address?.business_name}
                              </span>
                              <br />
                              <span className="text-base text-gray-400">
                                <span>{address?.street},</span>
                                <span>
                                  {address?.apt_name},{address?.zip_code}
                                </span>
                              </span>
                            </address>
                          </span>
                        </span>
                      </button>
                      <button
                        className="cursor-pointer relative pr-52 text-[#2C890F] font-semibold"
                        onClick={() => handleEditAddress(address)}
                      >
                        <span>Edit</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterAddress
        openRegisterAddressModal={openRegisterAddressModal}
        onCancel={() => setRegisterAddressModal(false)}
      />
      <EditAddress
        openEditAddressModal={openEditAddressModal}
        onCancel={() => setEditAddressModal(false)}
        selectedAddress={selectedAddress}
      />
    </>
  );
};

export default Addresses;
