import React, { useState } from "react";
import Navbar from "../../LandingPageComponents/Navbar";

import { MdElectricBolt } from "react-icons/md";
import DownArrow from "../../../assets/images/downArrow.svg";
import SearchSvg from "../../../assets/images/search.svg";

const GiftImagesProducts = () => {
  const [activeButton, setActiveButton] = useState("flower");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <Navbar />
      <div className="bg-white mt-20">
        <div
          className="flex mx-[-40px] justify-center relative h-[227px] bg-[#FAF1E5]"
          style={{ width: "calc(100% + 80px" }}
        >
          <div className="w-full h-full max-w-[1280px] relative flex justify-between mb-6">
            <div className="w-[50%] flex items-end">
              <div className="text-left z-10 pl-8 pb-8">
                <h1 className="text-[#0E3D29] text-3xl font-semibold">
                  Popular gifts
                </h1>
                <div className="mb-4"></div>
              </div>
            </div>
            <div className="absolute w-[1280px] self-center ">
              <img
                src="https://cdn.filestackcontent.com/rZA6MsNkTSo7ifDPxkx3"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] m-auto">
          <div className="relative flex max-w-[1280px] mt-[-25px] mx-8 z-10">
            <div className="box-border">
              <div className="flex justify-end">
                <div className="flex flex-col justify-end mr-6">
                  <div className="rounded-[12px] w-[300px] flex items-center p-3 cursor-pointer bg-white shadow-lg ">
                    <div className="flex justify-start gap-3">
                      <div className="w-[40px] ">
                        <img
                          src="https://www.instacart.com/assets/domains/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png"
                          alt="store-logo"
                          className="h-[40px] w-[40px] rounded-[50px]"
                        />
                      </div>
                      <div className="flex flex-col place-content-center w-full">
                        <span className="text-left">Walmart</span>

                        <div className="flex items-center text-[#3E9A39] text-sm gap-1 font-semibold">
                          <span>
                            <MdElectricBolt />
                          </span>
                          <san>Delivery by</san>
                          <span>7:45 to 8:45</span>
                        </div>
                      </div>
                    </div>
                    <img src={DownArrow} alt="downSide-svg" className="pl-2" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="flex justify-between items-center w-full p-4 rounded-[12px] cursor-pointer shadow-lg bg-white"
              href="#"
            >
              <span className="text-sm">Search Walmart...</span>
              <img src={SearchSvg} alt="search-svg" />
            </a>
          </div>
        </div>
        <div className="mt-6 mx-auto mb-auto max-w-[1200px]">
          <div className="flex items-center">
            <img
              src="https://www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
              alt="store-logo"
              className="h-[30px] w-[30px] rounded-[50%] border m-[-4px] bg-white"
            />
            <img
              src="https://www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
              alt="store-logo"
              className="h-[30px] w-[30px] rounded-[50%] border m-[-4px] bg-white"
            />
            <img
              src="https://www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
              alt="store-logo"
              className="h-[30px] w-[30px] rounded-[50%] border m-[-4px] bg-white"
            />
            <span className="ml-3 text-xl text-[#343538]">
              Available at 13 more stores
            </span>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto">
          <div className="m-8">
            <div className="overflow-x-auto w-full mb-6">
              <ul className="flex flex-wrap justify-start h-full">
                <span className="relative">
                  <button
                    className={`box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer ${
                      activeButton === "flower"
                        ? "bg-[#242529] text-white"
                        : "bg-[#E8E9EB] text-black"
                    }`}
                    onClick={() => handleButtonClick("flower")}
                  >
                    Flower
                  </button>
                </span>
                <span className="relative">
                  <button
                    className={`box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer ${
                      activeButton === "chocolate"
                        ? "bg-[#242529] text-white"
                        : "bg-[#E8E9EB] text-black"
                    }`}
                    onClick={() => handleButtonClick("chocolate")}
                  >
                    Chocolate
                  </button>
                </span>
                <span className="relative">
                  <button
                    className={`box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer ${
                      activeButton === "desert"
                        ? "bg-[#242529] text-white"
                        : "bg-[#E8E9EB] text-black"
                    }`}
                    onClick={() => handleButtonClick("desert")}
                  >
                    Desert
                  </button>
                </span>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftImagesProducts;
