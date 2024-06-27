import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import StoreSidebar from "../HomePageComponents/StoreSidebar.js/StoreSidebar";
import API from "../../services/api";

import { Skeleton } from "antd";

import MenuHeaderSvg from "../../assets/images/menuHeaderSvg.svg";
import SearchHeaderSvg from "../../assets/images/searchheaderSvg.svg";
import LocationSvg from "../../assets/images/location.svg";
import CartSvg from "../../assets/images/cartSvg.svg";
import CartGreenSvg from "../../assets/images/cartGreenSvg.svg";
import DownArrowheader from "../../assets/images/downArrowHeader.svg";

import { RxCross2 } from "react-icons/rx";
import HeaderTotalCartItems from "../HomePageComponents/Header/HeaderTotalCartItems";

const Navbar = ({ onLoginButton, onSignupHandler, searchDetails }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cartItems);

  const [open, isOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [HeaderTotalItemsDrawer, openHeaderTotalItemsDrawer] = useState(false);
  const [loading, setLoading] = useState(false);

  const styles = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
  };

  const onToggleButton = () => {
    isOpen(!open);
  };

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

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      navigate(`/store/search/${encodeURIComponent(searchValue)}`);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="fixed top-0 z-20 w-full bg-white max-md:border-b max-md:border-gray-200">
      <header className="flex items-center justify-between h-20 px-4 py-6  mx-8 max-md:mx-2 border-gray-300 max-md:h-[60px] max-md:px-0">
        <div className="flex flex-row items-center w-full ">
          <div className="flex mr-2 cursor-pointer">
            {open ? (
              <RxCross2
                onClick={onToggleButton}
                className="w-[24px] h-[24px] cursor-pointer "
              />
            ) : (
              <span onClick={onToggleButton} className="cursor-pointer ">
                <img src={MenuHeaderSvg} alt="menu-svg" />
              </span>
            )}
          </div>
          <div className="flex items-center pr-6 ">
            <a href="/">
              <img
                src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
                alt="instaCart-logo"
                className="h-auto max-w-[245px] max-md:hidden"
              />
              <img
                src="https://www.instacart.com/assets/beetstrap/brand/2022/carrotlogo-1286c257354036d178c09e815906198eb7f012b8cdc4f6f8ec86d3e64d799a5b.png"
                alt="instaCart-logo"
                className="h-auto max-w-[24px] md:hidden"
              />
            </a>
          </div>
          <div className="relative flex-grow mx-8 max-md:hidden ">
            <div className="relative z-10 bg-transparent">
              <div className="relative h-14 bg-[#F6F7F8] rounded-[5px] ">
                <button className="absolute translate-y-[-50%] bg-transparent top-1/2 left-3 z-1">
                  <img src={SearchHeaderSvg} alt="search-header" />
                </button>
                {location.pathname.includes("/") &&
                !location.pathname.includes("/store") ? (
                  <div className="relative h-full">
                    <input
                      type="text"
                      className="box-border relative flex items-center w-full h-full pr-12 text-base text-black placeholder-black bg-transparent rounded-lg shadow-inner indent-10 outline-black "
                      placeholder="Search products and stores"
                    />
                  </div>
                ) : (
                  <div className="relative h-full">
                    <input
                      type="text"
                      className="box-border relative flex items-center w-full h-full pr-12 text-base text-black placeholder-black bg-transparent rounded-lg shadow-inner indent-10 outline-black "
                      placeholder="Search products and stores"
                      value={searchValue}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {location.pathname.includes("/") &&
        !location.pathname.includes("/store") ? (
          <div className="flex flex-row">
            <button className="relative px-[6px] py-[1px] mx-[22px] max-md:mx-[5px] font-medium text-[#343538] bg-transparent  cursor-pointer text-lg leading-5 ">
              <span
                className="block text-lg leading-5 cursor-pointer whitespace-nowrap overflow-ellipsis max-md:text-sm"
                onClick={onLoginButton}
              >
                Log in
              </span>
            </button>
            <button className="px-4 py-2 m-6 text-white bg-[#2C890F] border-none rounded-[20px] relative cursor-pointer font-semibold text-lg leading-5 max-md:mx-[12px] max-md:text-sm">
              <span
                className="block overflow-hidden whitespace-nowrap overflow-ellipsis"
                onClick={onSignupHandler}
              >
                Sign Up
              </span>
            </button>
          </div>
        ) : (
          <>
            <div>
              <div className="relative">
                <button className="cursor-pointer relative  bg-transparent  h-14 min-w-[160px]   max-md:mx-0 max-lg:mx-0">
                  <span
                    className=" justify-start items-center w-full"
                    style={styles}
                  >
                    <img src={LocationSvg} alt="location-svg" />
                    <ul>
                      {loading ? (
                        <div>
                          <div className="address">
                            <Skeleton.Avatar active />
                          </div>
                        </div>
                      ) : (
                        <>
                          {getUserAddressDetail &&
                          getUserAddressDetail.addressDetails ? (
                            <>
                              {getUserAddressDetail.addressDetails.map(
                                (addr) => (
                                  <>
                                    <li key={addr.address_id}>
                                      <>
                                        <button className="text-base leading-5 text-center">
                                          {addr?.street}, {addr?.floor}
                                        </button>
                                      </>
                                    </li>
                                  </>
                                )
                              )}
                            </>
                          ) : (
                            <>No Address Found</>
                          )}
                        </>
                      )}
                    </ul>
                    <img src={DownArrowheader} alt="down-arrow-svg" />
                  </span>
                </button>
              </div>
            </div>

            <div>
              {cartItems.length > 0 ? (
                <>
                  <div className="ml-4">
                    <button
                      className="rounded-[24px] flex relative h-8 min-w-20  px-6 justify-evenly items-center cursor-pointer bg-[#277D0F py-6   bg-[#277D0F]"
                      onClick={() => openHeaderTotalItemsDrawer(true)}
                    >
                      <img src={CartGreenSvg} alt="cart-green-svg" />
                      <span className=" pl-2 text-white">
                        {cartItems?.length || 0}
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  {" "}
                  <button className="rounded-[24px] flex relative h-8 min-w-14 py-6  px-6 justify-evenly items-center max-md:px-0 max-lg:px-0 bg-[#F6F7F8] ">
                    <img src={CartSvg} alt="cart-svg" />
                    <span className="px-2 text-gray-400">0</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </header>
      {location.pathname.includes("/") &&
      !location.pathname.includes("/store") ? (
        <Sidebar open={open} onToggleButton={onToggleButton} />
      ) : (
        open && <StoreSidebar open={open} onCancel={onToggleButton} />
      )}

      {HeaderTotalItemsDrawer && (
        <HeaderTotalCartItems
          HeaderTotalItemsDrawer={HeaderTotalItemsDrawer}
          onCancel={() => openHeaderTotalItemsDrawer(false)}
          cartItems={cartItems}
        />
      )}
    </div>
  );
};

export default Navbar;
