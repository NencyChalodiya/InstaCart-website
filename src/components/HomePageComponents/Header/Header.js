import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { storeDetailLogo } from "../../../data/storeDetailLogo";
// import Carousel from "@itseasy21/react-elastic-carousel";
import "./Header.css";
import StoreSidebar from "../StoreSidebar.js/StoreSidebar";
import { useSelector } from "react-redux";
import StoresToHelpYouSave from "../StoresToHelpYouSave/StoreToHelpYouSave";
import API from "../../../services/api";
import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import ShopListing from "../ShopListing/ShopListing";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
  };
  const [open, setopen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  //const [shops, setShops] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const fetchCategoryFilter = async () => {
    try {
      const response = await API.getCategoryFilter();
      console.log(response);
      setCategoryList(response.data.categoryList);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(categoryList);

  // const fetchShopsByCategory = async (id) => {
  //   try {
  //     const response = await API.getShopsByCategory({ id });
  //     console.log(response.Shops);
  //     setShops(response.Shops);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchCategoryFilter();
  }, []);
  //console.log(shopListCategory);

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);

    //fetchShopsByCategory(id);
  };

  const onClosebutton = () => {
    setopen(false);
  };

  const isExtraSmallScreen = useMediaQuery("(max-width: 639px)"); // xs
  const isSmallScreen = useMediaQuery(
    "(min-width: 640px) and (max-width: 767px)"
  ); // sm
  const isMediumScreen = useMediaQuery(
    "(min-width: 768px) and ( max-width: 1023px)"
  ); // md
  const isLargeScreen = useMediaQuery(
    "(min-width: 1024px) and ( max-width: 1279px)"
  ); // lg
  const isExtraLargeScreen = useMediaQuery(
    "( min-width: 1280px) and (max-width: 1535px) "
  ); // xl
  const isExtraExtraLargeScreen = useMediaQuery("(min-width: 1536px)"); // 2xl
  const itemsToShow = isExtraSmallScreen
    ? 3
    : isSmallScreen
    ? 4
    : isMediumScreen
    ? 6
    : isLargeScreen
    ? 5
    : isExtraLargeScreen
    ? 7
    : isExtraExtraLargeScreen
    ? 9
    : 9;

  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-[#F7F5F0]">
        <div className="w-full min-w-[1024] flex justify-start items-center h-20 pl-6 box-border  ">
          <span className="ml-[-4px] mr-2 relative ">
            <button
              className="cursor-pointer bg-transparent rounded-[4px] h-8 w-8 flex justify-center items-center "
              onClick={() => setopen(true)}
            >
              <span className="cursor-pointer flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#343538"
                  xmlns="http://www.w3.org/2000/svg"
                  size="24"
                  color="systemGrayscale70"
                  aria-hidden="true"
                >
                  <path d="M20 6H4v2h16zM4 11h16v2H4zM4 16h16v2H4z"></path>
                </svg>
              </span>
            </button>
          </span>
          <a className="h-14 min-w-[196px] ml-2 mr-6 flex items-center rounded-[12px] relative">
            <img
              src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2023/logo@2x-8f1d0b7139d724b69d6563dde696887478257f5f741cfc4da7e2c42b49635bd7.png"
              alt="instacart-logo"
              className="w-auto mr-[10px]"
            />
          </a>

          <div className="relative z-10 mr-2 flex-grow flex-shrink max-md:hidden">
            <div className="relative z-10 bg-transparent ">
              <div className="h-14 rounded-[8px]">
                <button className="absolute top-[50%] z-10 left-3 transform translate-y-[-50%]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    color="systemGrayscale70"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.496 17.618a8 8 0 1 1 2.121-2.121l3.944 3.942-2.122 2.122zM17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
                    ></path>
                  </svg>
                </button>
                <div className="relative h-full">
                  <input
                    className=" flex relative items-center w-full py-3 rounded-[28px] border border-[#C7C8CD] bg-white outline-none  pr-[47.5px] h-full box-border text-[#242529] pl-[34.5px]  placeholder-[#47474A] text-base shadow-md focus:border-black  "
                    type="text"
                    placeholder="Search products,stores,and recipes"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <button className="cursor-pointer relative  bg-transparent rounded-[8px] h-14 min-w-[120px] max-w-full mx-3 max-md:mx-0 max-lg:mx-0">
                <span
                  className=" justify-start items-center w-full"
                  style={styles}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-ozd7xs"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                    ></path>
                  </svg>
                  <span>09134</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="14"
                    color="systemGrayscale70"
                    class="e-s079uh"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <button className="rounded-[24px] flex relative h-8 min-w-14 py-1 px-2 justify-evenly items-center max-md:px-0 max-lg:px-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#343538"
              xmlns="http://www.w3.org/2000/svg"
              size="24"
              color="systemGrayscale70"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m6.84 2.68-1.27-.19-.17-.03L2.29 2 2 3.93l3.16.47 2.2 12.84h14.18v-1.95H9l-.34-2 11.92-1.58L22 4.99 6.84 2.69zm1.14 19.27a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m11.94 0a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24"
              ></path>
            </svg>
            <span className="px-2">0</span>
          </button>
          {/* <div className="flex items-center mr-4 cursor-pointer">
            <button className="relative bg-transparent rounded-lg text-[#343538] h-14 px-3">
              <div className="grid items-center grid-cols-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 mr-2"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                  ></path>
                </svg>
                <span>94105</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#343538"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-4 h-4 ml-5 text-gray-400"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                  ></path>
                </svg>
              </div>
            </button>

            <button className="relative flex items-center bg-transparent rounded-full h-14">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#343538"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 mr-1"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m6.84 2.68-1.27-.19-.17-.03L2.29 2 2 3.93l3.16.47 2.2 12.84h14.18v-1.95H9l-.34-2 11.92-1.58L22 4.99 6.84 2.69zm1.14 19.27a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m11.94 0a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24"
                ></path>
              </svg>
              <span>1</span>
            </button>
          </div> */}
        </div>

        <div
          className="m-auto pb-[1px] max-2xl:m-0 border-b"
          style={{ width: "calc(1280px + 80px)" }}
        >
          <div className="relative pt-1 bg-[#F7F5F0] ">
            <div className=" flex justify-between max-h-[75px] box-content px-12">
              <ConfigProvider
                theme={{
                  components: {
                    Tabs: {
                      inkBarColor: "rgb(0,0,0)",
                      itemActiveColor: "rgb(0,0,0)",
                      itemHoverColor: "rgb(0,0,0)",
                      itemSelectedColor: "rgb(0,0,0)",
                    },
                  },
                }}
              >
                <Tabs defaultActiveKey="1" centered>
                  {categoryList.map((itemsSvg) => (
                    <Tabs.TabPane
                      tab={
                        <button
                          className=" cursor-pointer bg-transparent relative rounded-[8px] max-w-32  pr-1  px-1 text-[#242529] flex flex-col items-center justify-center
                          hover:black max-2xl:pl-3 
                          max-xl:pl-2
                          max-lg:pl-1
                          max-md:pl-0
                          max-2xl:pr-0 max-2xl:max-w-24
                          max-xl:max-w-16
                          max-lg:max-w-10"
                          key={itemsSvg.id}
                          onClick={() => handleCategoryClick(itemsSvg.id)}
                        >
                          <span className="flex items-center justify-center mb-2 max-h-6">
                            <img
                              src={itemsSvg.imageUrl}
                              alt={itemsSvg.id}
                              className="w-[30px] h-[30px]"
                            />
                          </span>
                          <span className="text-base leading-5 text-center">
                            {itemsSvg.name}
                          </span>
                        </button>
                      }
                      key={itemsSvg.id}
                    />
                  ))}
                </Tabs>
              </ConfigProvider>

              {/* {shopListCategory.map((itemsSvg) => (
                <button
                  className="min-h-11 cursor-pointer bg-transparent relative rounded-[8px] max-w-32 pt-1 pr-2 pb-3 pl-5 text-[#242529] flex flex-col items-center justify-center"
                  key={itemsSvg.id}
                  onClick={() => handleCategoryClick(itemsSvg.id)}
                >
                  <span className="flex items-center justify-center mb-2 max-h-6">
                    <img
                      src={itemsSvg.logo}
                      alt={itemsSvg.id}
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                  <span className="text-base leading-5 text-center">
                    {itemsSvg.title}
                  </span>
                </button>
              ))} */}
            </div>
          </div>
        </div>

        {/* <div
          className="m-auto pb-[1px]"
          style={{ width: "calc(1280px + 80px)" }}
        >
          <div className="relative pt-1 bg-[#F7F5F0]">
            <div className="overflow-y-hidden overflow-x-auto flex justify-between max-h-[68px] box-content">
              {storeDetailLogo.map((itemsSvg) => (
                <button className="min-h-11 cursor-pointer bg-transparent relative rounded-[8px] max-w-32 pt-1 pr-2 pb-3 pl-2 text-[#242529] flex flex-col items-center justify-center">
                  <span className="relative max-h-6 mb-2 flex-shrink min-w-[58px]">
                    {itemsSvg.unColoredSvgImg}
                  </span>
                  <span className="min-w-[58px] max-w-[112px] text-base text-center leading-5 ">
                    <span className="text-center">{itemsSvg.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div> */}
        {/* <header className="flex items-center justify-between pt-1 pb-1 border-gray-300 px-25 ">
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
        </header> */}

        {/* <header className="flex items-center justify-between max-w-[calc(1280px + 80px)] pt-1 pb-1 border-gray-300 px-25">
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
                    
                    </span>
                    <span className="text-base leading-5">
                      <span>{itemsSvg.title}</span>
                    </span>
                  </button>
                ))}
              </Carousel>
            </div>
          </div>
        </header> */}
        {open && <StoreSidebar open={open} onCancel={onClosebutton} />}
      </div>
      <ShopListing selectedCategoryId={selectedCategoryId} />

      {/* <StoresToHelpYouSave selectedCategoryId={selectedCategoryId} /> */}
    </>
  );
};

export default Header;
