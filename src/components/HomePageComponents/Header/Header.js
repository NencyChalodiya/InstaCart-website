import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { storeDetailLogo } from "../../../data/storeDetailLogo";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./Header.css";
import StoreSidebar from "../StoreSidebar.js/StoreSidebar";
const Header = () => {
  const [open, setopen] = useState(false);
  const onClosebutton = () => {
    setopen(false);
  };
  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-[#F7F5F0]">
        <header className="flex items-center justify-between pt-1 pb-1 border-gray-300 px-25 ">
          <div className="flex flex-row items-center w-full ">
            <div className="mr-6">
              <GiHamburgerMenu
                className="w-[24px] h-[24px] cursor-pointer ml-2"
                onClick={() => setopen(true)}
              />
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
            <div className="flex items-center gap-2 mt-4 justify-evenly">
              <FaShoppingCart className="w-[28px] h-[28px]" />
              <span className="text-gray-400">0</span>
            </div>
          </div>

          <div></div>
        </header>

        <header className="flex items-center justify-between max-w-[calc(1280px + 80px)] pt-1 pb-1 border-gray-300 px-25">
          <div className="flex flex-row items-center justify-center w-full pt-1 min-w-6">
            <div className="box-content flex justify-between w-full mx-12 overflow-x-auto overflow-y-hidden max-h-24">
              <Carousel itemsToShow={13} pagination={false}>
                {storeDetailLogo.map((itemsSvg) => (
                  <button
                    className="relative flex-col items-center justify-center pt-1 pb-3 pl-2 pr-2  bg-transparent rounded-lg cursor-pointer min-h-11 max-w-[500px]  "
                    key={itemsSvg.id}
                  >
                    <span className="relative flex items-center justify-center mb-2">
                      {itemsSvg.unColoredSvgImg}
                      {/* <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#242529"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    aria-hidden="true"
                    color="systemGrayscale80"
                    class="e-t2xtfo"
                  >
                    <path d="M21 4.5h-3.25V2.25L15.5 0h-6L7.25 2.25V4.5H4L2.55 18.62h19.9L21 4.5ZM9 2.97l1.23-1.22h4.55L16 2.97V4.5H9V2.97Zm7.56 8.75c-.74 1.92-4.06 4.53-4.06 4.53s-3.31-2.61-4.05-4.53c-.58-1.49.21-2.78 1.44-2.95.96-.13 2 .36 2.61 1.33.62-.97 1.65-1.46 2.62-1.33 1.23.17 2.02 1.46 1.44 2.95ZM22.63 20.38H2.37L2 24h21l-.37-3.62Z"></path>
                  </svg> */}
                    </span>
                    <span className="text-base leading-5">
                      <span>{itemsSvg.title}</span>
                    </span>
                  </button>
                ))}
              </Carousel>
            </div>
          </div>
        </header>
        {open && <StoreSidebar open={open} onCancel={onClosebutton} />}
      </div>
    </>
  );
};

export default Header;
