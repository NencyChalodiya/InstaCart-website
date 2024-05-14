import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import TotalCartItems from "../pages/TotalCartItems/TotalCartItems";
const HeaderAddToCart = () => {
  const [totalCartItemsModal, setTotalCartItemsModal] = useState(false);
  const { cartItems } = useSelector((state) => state.cartItems);
  console.log("caerdasw", cartItems);
  return (
    <header className="fixed z-20 flex items-center justify-between pt-1 pb-1 bg-white border-gray-300 px-25">
      <div className="flex flex-row items-center w-full ">
        <div className="mr-6">
          <GiHamburgerMenu className="w-[24px] h-[24px] cursor-pointer ml-2" />
        </div>
        <div className="flex items-center gap-24 border-r-0 pr-18">
          <a href="/">
            <img
              className="w-[110px] h-[25px]"
              src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2023/logo@2x-8f1d0b7139d724b69d6563dde696887478257f5f741cfc4da7e2c42b49635bd7.png"
              alt="instaCart-logo"
            />
          </a>
          <div className="relative ml-3 w-[100%]  ">
            <div className="absolute transform -translate-y-1/2 top-1/2 left-3">
              <CiSearch className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <input
                type="text"
                className="pl-10 pr-12 h-[50px] border-2 border-black rounded-full  text-lg bg-white text-gray-950 w-[80rem] shadow-lg  "
                placeholder="Search products and stores and recipies"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="items-center mt-4 cursor-pointer ">
            <div className="relative">
              <button className="relative bg-transparent text-[#343538] h-14 cursor-pointer rounded-lg min-w-[120px] max-w-[100%] ml-3 mr-3 ">
                <span className="grid items-center justify-start w-full grid-cols-3 gap-3">
                  <IoLocationSharp className="w-6 h-6" />
                  <span className="max-w-full pl-2">94105</span>
                  <RiArrowDropDownLine className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-2 mt-4 justify-evenly"
          onClick={() => setTotalCartItemsModal(true)}
        >
          <FaShoppingCart className="w-[28px] h-[28px]" />
          <span className="text-gray-400">{cartItems?.length || 0}</span>
        </div>
      </div>

      <div></div>
      <TotalCartItems
        totalCartItemsModal={totalCartItemsModal}
        onCancel={() => setTotalCartItemsModal(false)}
      />
    </header>
  );
};

export default HeaderAddToCart;
