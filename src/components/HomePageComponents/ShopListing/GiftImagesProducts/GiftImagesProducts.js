import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../../LandingPageComponents/Navbar";
import SwitchStoreModal from "./SwitchStoreModal";
import API from "../../../../services/api";

import { MdElectricBolt } from "react-icons/md";
import DownArrow from "../../../../assets/images/downArrow.svg";
import SearchSvg from "../../../../assets/images/search.svg";
import SidArrowSvg from "../../../../assets/images/sideArrowSvg.svg";
import LeftSideArrowSvg from "../../../../assets/images/leftSideArrowSvg.svg";
import RightSideArrowSvg from "../../../../assets/images/rightSideArrowSvg.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CustomLeftArrow = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="custom-arrow left"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <LeftOutlined
        style={{
          fontSize: "15px",
          color: isHovered ? "#fff" : "#000",
        }}
      />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="custom-arrow right"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <RightOutlined
        className="custom-right-icon"
        style={{
          fontSize: "15px",
          color: isHovered ? "#fff" : "#000",
        }}
      />
    </div>
  );
};

const GiftImagesProducts = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("flower");
  const [shops, setShops] = useState([]);
  const [getGiftProducts, setGiftProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [switchStoreModal, openSwitchStoreModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const dropdownRef = useRef(null);
  const productsRefs = useRef({});

  useEffect(() => {
    const storedStore = JSON.parse(localStorage.getItem("selectedStore"));
    if (storedStore) {
      setSelectedStore(storedStore);
    }
  }, []);

  const fetchStoreShops = async () => {
    const response = await API.getShopsByCategory(8);
    if (response.status === "success") {
      setShops(response.data.storeData);
    }
  };

  useEffect(() => {
    fetchStoreShops();
  }, []);

  const fetchProductsOfGift = async () => {
    const queryParams = {};
    if (selectedStore?.store_id) {
      queryParams.storeId = selectedStore.store_id;
    }

    try {
      const response = await API.getProductsOfGift(queryParams);
      const categoriesWithElements = Object.keys(
        response.data.productsByCategory
      ).filter(
        (category) => response.data.productsByCategory[category].length > 0
      );
      console.log(response);
      if (response.status === "success") {
        setGiftProducts(response.data);
        setCategories(categoriesWithElements);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsOfGift();
  }, [selectedStore]);

  const handleButtonClick = (category) => {
    setActiveButton(category);
    if (productsRefs.current[category]) {
      productsRefs.current[category].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    localStorage.setItem("selectedStore", JSON.stringify(store));
    openSwitchStoreModal(false);
    setDropdownVisible(false);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
                  <div
                    className="rounded-[12px] w-[300px] flex items-center p-3 cursor-pointer bg-white shadow-lg hover:bg-gray-100"
                    onClick={() => handleDropdownToggle()}
                    key={selectedStore?.store_id}
                  >
                    <div className="flex justify-start gap-3">
                      <div className="w-[40px] ">
                        <img
                          src={selectedStore?.image_url}
                          alt={selectedStore?.store_name}
                          className="h-[40px] w-[40px] rounded-[50px]"
                        />
                      </div>
                      <div className="flex flex-col place-content-center w-full">
                        <span className="text-left">
                          {selectedStore?.store_name}
                        </span>

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
                  {dropdownVisible && (
                    <div>
                      <div className="absolute rounded-[12px] w-[300px] flex items-center px-4 mt-2 bg-white shadow-lg">
                        <ul className="list-none w-full">
                          <li className="flex justify-between my-3">
                            <Link
                              to={`/store/${selectedStore?.store_id}/front`}
                              className="flex justify-between w-full cursor-pointer"
                            >
                              <span className="text-base text-[#343538]">
                                Go to {selectedStore?.store_name}
                              </span>
                              <img src={SidArrowSvg} alt="sideArrow-svg" />
                            </Link>
                          </li>
                          <li className="flex justify-between my-3">
                            <button
                              className="flex justify-between w-full cursor-pointer"
                              onClick={() => openSwitchStoreModal(true)}
                            >
                              <span className="text-base text-[#343538]">
                                switch store
                              </span>
                              <img src={SidArrowSvg} alt="sideArrow-svg" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <a
              className="flex justify-between items-center w-full p-4 rounded-[12px] cursor-pointer shadow-lg bg-white"
              href="#"
            >
              <span className="text-sm">
                Search {selectedStore?.store_name}...
              </span>
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
            {shops.map((store) => (
              <img
                src={store?.image_url}
                alt={store?.store_name}
                className="h-[30px] w-[30px] rounded-[50%] border m-[-4px] bg-white"
              />
            ))}
            <span className="ml-3 text-xl text-[#343538]">
              Available at {shops?.length} more stores
            </span>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto">
          <div className="m-8">
            <div className="overflow-x-auto w-full mb-6">
              <ul className="flex flex-wrap justify-start h-full">
                {categories.map((category) => (
                  <span key={category} className="relative">
                    <button
                      className={`box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer ${
                        activeButton === category
                          ? "bg-[#242529] text-white"
                          : "bg-[#E8E9EB] text-black"
                      }`}
                      onClick={() => handleButtonClick(category)}
                    >
                      {category}
                    </button>
                  </span>
                ))}
              </ul>
            </div>

            <div className="max-w-[1280px] mx-auto">
              <div className="m-8">
                {categories.map((category) => (
                  <div
                    key={category}
                    ref={(el) => (productsRefs.current[category] = el)}
                  >
                    {/* Category Title */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex ">
                        <div>
                          <h2 className="mr-2">
                            <a
                              href="#"
                              className="text-2xl leading-7 font-semibold text-[#343538]"
                            >
                              {category}
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="flex self-baseline">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className="flex items-center text-sm leading-5 text-[#343538]"
                          >
                            View all
                            <img src={SidArrowSvg} alt="sidearrowSvg" />
                          </a>
                        </div>
                        <div className="flex ml-4 mr-2 min-h-[40px]">
                          <div className="rounded-[24px]">
                            <button className="mr-2 h-10 w-10 flex justify-center items-center rounded-[24px] bg-[#E8E9EB]">
                              <span className="flex">
                                <img
                                  src={LeftSideArrowSvg}
                                  alt="left-side-arrow"
                                />
                              </span>
                            </button>
                          </div>
                          <div className="rounded-[24px]">
                            <button className="mr-2 h-10 w-10 flex justify-center items-center rounded-[24px] bg-[#E8E9EB]">
                              <span className="flex">
                                <img
                                  src={RightSideArrowSvg}
                                  alt="left-side-arrow"
                                />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Products List */}
                    <div className="flex relative">
                      <div className="w-full">
                        <ul className="w-full h-full min-h-[304px]  ">
                          <Carousel
                            responsive={responsive}
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                          >
                            {getGiftProducts &&
                            getGiftProducts.productsByCategory &&
                            getGiftProducts.productsByCategory[category] ? (
                              getGiftProducts.productsByCategory[category].map(
                                (product) => (
                                  <li key={product.id} className="h-full">
                                    <div className="h-full">
                                      <div className="relative h-full rounded-[12px]">
                                        <a
                                          className="relative flex flex-col opacity-100 "
                                          href="#"
                                        >
                                          <div className="mb-2">
                                            <div className=" w-full h-full flex items-center justify-center">
                                              <img
                                                src={product.image}
                                                alt="flower-images"
                                                className="max-w-full max-h-full rounded-[12px]"
                                              />
                                            </div>
                                          </div>
                                        </a>
                                        <div>
                                          <div>
                                            <div className="flex">
                                              <div className="py-[1px] px-1">
                                                <span>
                                                  <span className="text-sm font-bold text-gray-700 align-super">
                                                    $
                                                  </span>
                                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                                    {product.selling_price}
                                                  </span>
                                                  <span className="text-sm font-bold text-gray-700 align-super">
                                                    49
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <h2 className="text-gray-500">
                                              {product.title}
                                            </h2>
                                          </div>
                                          <div className="flex">
                                            <div className="text-gray-400">
                                              {product.label}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                              )
                            ) : (
                              <></>
                            )}
                          </Carousel>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwitchStoreModal
        switchStoreModal={switchStoreModal}
        onCancel={() => openSwitchStoreModal(false)}
        shops={shops}
        handleStoreSelect={handleStoreSelect}
      />
    </>
  );
};

export default GiftImagesProducts;
