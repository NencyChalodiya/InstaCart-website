import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";

import API from "../../../services/api";
import StoreSidebar from "../StoreSidebar.js/StoreSidebar";
import ShopListing from "../ShopListing/ShopListing";

import { Tabs } from "antd";
import { Skeleton } from "antd";
import { ConfigProvider } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import SearchHeaderSvg from "../../../assets/images/searchheaderSvg.svg";
import MenuHeaderSvg from "../../../assets/images/menuHeaderSvg.svg";
import LocationSvg from "../../../assets/images/location.svg";
import CartSvg from "../../../assets/images/cartSvg.svg";
import CartGreenSvg from "../../../assets/images/cartGreenSvg.svg";
import DownArrowheader from "../../../assets/images/downArrowHeader.svg";
import HeaderTotalCartItems from "./HeaderTotalCartItems";

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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max:2000, min: 1261 },
    items: 13, // Displaying 13 items on super large desktop
  },
  desktop: {
    breakpoint: { max:1260, min: 1024 },
    items: 10, // Displaying 9 items on desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 749 },
    items: 6, // Displaying 6 items on tablet
  },
  mobile: {
    breakpoint: { max: 748, min: 0 },
    items: 2, // Displaying 2 items on mobile
  },
};

const Header = () => {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cartItems);

  const [open, setopen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [HeaderTotalItemsDrawer, openHeaderTotalItemsDrawer] = useState(false);
  const [loading, setLoading] = useState(false);

  const styles = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
  };

  // const getProductsByStoreId = (storeId) => {
  //   return cartItems.filter((product) => product.storeId == storeId);
  // };

  // const matchingProducts = (id) => {
  //   const filteredProducts = getProductsByStoreId(id);
  //   console.log(
  //     "Filtered products for storeId filteredProducts",
  //     id,
  //     ":",
  //     filteredProducts
  //   );
  //   return {
  //     count: filteredProducts.length,
  //     store: filteredProducts.length > 0 ? filteredProducts[0] : null,
  //   };
  // };

  const fetchCategoryFilter = async () => {
    try {
      const response = await API.getCategoryFilter();
      if (response.status === "success") {
        setCategoryList(response.data.categoryList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryFilter();
  }, []);

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

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
  };

  const onClosebutton = () => {
    setopen(false);
  };

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
    <>
      <div className="fixed top-0 z-10 w-full bg-[#F7F5F0]">
        <div className="w-full min-w-[1024] flex justify-start items-center h-20 pl-6 box-border max-md:justify-between ">
          <div className="flex items-center">
            <span className="ml-[-4px] mr-2 relative ">
              <button
                className="cursor-pointer bg-transparent rounded-[4px] h-8 w-8 flex justify-center items-center "
                onClick={() => setopen(true)}
              >
                <span className="cursor-pointer flex">
                  <img src={MenuHeaderSvg} alt="menu-svg" />
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
          </div>

          <div className="relative z-10 mr-2 flex-grow flex-shrink max-md:hidden">
            <div className="relative z-10 bg-transparent ">
              <div className="h-14 rounded-[8px]">
                <button className="absolute top-[50%] z-10 left-3 transform translate-y-[-50%]">
                  <img src={SearchHeaderSvg} alt="search-header" />
                </button>
                <div className="relative h-full">
                  <input
                    className=" flex relative items-center w-full py-3 rounded-[28px] border border-[#C7C8CD] bg-white outline-none  pr-[47.5px] h-full box-border text-[#242529] pl-[34.5px]  placeholder-[#47474A] text-base shadow-md focus:border-black  "
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search products,stores,and recipes"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <button className="cursor-pointer relative  bg-transparent rounded-[8px] h-14 min-w-[120px] max-w-full mx-3 max-md:mx-0 max-sm:hidden max-lg:mx-0">
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
                            {getUserAddressDetail.addressDetails.map((addr) => (
                              <>
                                <li key={addr.address_id}>
                                  <>
                                    <button className="text-base leading-5 text-center">
                                      {addr?.street}, {addr?.floor},{" "}
                                      {addr?.zip_code}
                                    </button>
                                  </>
                                </li>
                              </>
                            ))}
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
          {cartItems?.length > 0 ? (
            <div>
              <button
                className="rounded-[24px] flex relative h-8 min-w-14  px-6 justify-evenly  items-center cursor-pointer bg-[#277D0F py-6 mr-3  bg-[#277D0F]"
                onClick={() => openHeaderTotalItemsDrawer(true)}
              >
                <img src={CartGreenSvg} alt="cart-green-svg" />
                <span className=" pl-2 text-white">
                  {cartItems?.length || 0}
                </span>
              </button>
            </div>
          ) : (
            <div className="mr-3">
              {" "}
              <button className="rounded-[24px] flex relative h-8 min-w-14 py-1 px-6 justify-evenly items-center max-md:px-0 max-lg:px-0 bg-[#F6F7F8]">
                <img src={CartSvg} alt="cart-svg" />
                <span className="px-2 text-gray-400">0</span>
              </button>
            </div>
          )}
        </div>

        <div
          className="m-auto pb-[1px] max-2xl:m-0 border-b"
          style={{ width: "calc(1280px + 80px)" }}
        >
          {/* <div className="relative pt-1 bg-[#F7F5F0] ">
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
                          hover:black "
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
            </div>
          </div> */}

          <div className="relative pt-1 bg-[#F7F5F0]">
            <Carousel
              responsive={responsive}
              arrows
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {categoryList.map((itemsSvg) => (
                <div
                  key={itemsSvg.id}
                  className="flex justify-between max-h-[75px] box-content px-12"
                >
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
                    <Tabs
                      defaultActiveKey="1"
                      centered
                      activeKey={
                        selectedCategoryId && selectedCategoryId.toString()
                      }
                    >
                      <Tabs.TabPane
                        tab={
                          <button
                            className={`cursor-pointer bg-transparent relative rounded-[8px] max-w-32 pr-1 px-1 text-[#242529] flex flex-col items-center justify-center hover:black ${
                              itemsSvg.id === selectedCategoryId
                                ? "ant-tabs-tab-active"
                                : ""
                            }`}
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
                    </Tabs>
                  </ConfigProvider>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {open && <StoreSidebar open={open} onCancel={onClosebutton} />}
      </div>
      <ShopListing selectedCategoryId={selectedCategoryId} />
      <HeaderTotalCartItems
        HeaderTotalItemsDrawer={HeaderTotalItemsDrawer}
        onCancel={() => openHeaderTotalItemsDrawer(false)}
        cartItems={cartItems}
      />
    </>
  );
};

export default Header;

// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import API from "../../../services/api";
// import StoreSidebar from "../StoreSidebar.js/StoreSidebar";
// import ShopListing from "../ShopListing/ShopListing";
// import { Tabs } from "antd";
// import { ConfigProvider } from "antd";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useNavigate } from "react-router-dom";
// import SearchHeaderSvg from "../../../assets/images/searchheaderSvg.svg";
// import MenuHeaderSvg from "../../../assets/images/menuHeaderSvg.svg";
// import LocationSvg from "../../../assets/images/location.svg";
// import CartSvg from "../../../assets/images/cartSvg.svg";
// import DownArrowheader from "../../../assets/images/downArrowHeader.svg";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const CustomLeftArrow = ({ onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="custom-arrow left"
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ cursor: "pointer" }}
//     >
//       <LeftOutlined
//         style={{
//           fontSize: "15px",
//           color: isHovered ? "#fff" : "#000",
//         }}
//       />
//     </div>
//   );
// };

// const CustomRightArrow = ({ onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="custom-arrow right"
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ cursor: "pointer" }}
//     >
//       <RightOutlined
//         className="custom-right-icon"
//         style={{
//           fontSize: "15px",
//           color: isHovered ? "#fff" : "#000",
//         }}
//       />
//     </div>
//   );
// };

// const Header = () => {
//   const navigate = useNavigate();
//   const styles = {
//     display: "grid",
//     gridTemplateColumns: "auto 1fr auto",
//   };
//   const [open, setopen] = useState(false);
//   const [categoryList, setCategoryList] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [searchValue, setSearchValue] = useState("");

//   useEffect(() => {
//     fetchCategoryFilter();
//   }, []);

//   const fetchCategoryFilter = async () => {
//     try {
//       const response = await API.getCategoryFilter();
//       setCategoryList(response.data.categoryList);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCategoryClick = (id) => {
//     setSelectedCategoryId(id);
//   };

//   const onClosebutton = () => {
//     setopen(false);
//   };

//   const handleSearch = () => {
//     if (searchValue.trim() !== "") {
//       navigate(`/store/search/${encodeURIComponent(searchValue)}`);
//     }
//   };

//   const handleInputChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 13, // Displaying 13 items on super large desktop
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 10, // Displaying 9 items on desktop
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 6, // Displaying 6 items on tablet
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2, // Displaying 2 items on mobile
//     },
//   };

//   return (
//     <>
//       <div className="fixed top-0 z-10 w-full bg-[#F7F5F0]">
//         <div className="w-full min-w-[1024] flex justify-start items-center h-20 pl-6 box-border">
//           <span className="ml-[-4px] mr-2 relative">
//             <button
//               className="cursor-pointer bg-transparent rounded-[4px] h-8 w-8 flex justify-center items-center"
//               onClick={() => setopen(true)}
//             >
//               <span className="cursor-pointer flex">
//                 <img src={MenuHeaderSvg} alt="menu-svg" />
//               </span>
//             </button>
//           </span>
//           <a className="h-14 min-w-[196px] ml-2 mr-6 flex items-center rounded-[12px] relative">
//             <img
//               src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2023/logo@2x-8f1d0b7139d724b69d6563dde696887478257f5f741cfc4da7e2c42b49635bd7.png"
//               alt="instacart-logo"
//               className="w-auto mr-[10px]"
//             />
//           </a>

//           <div className="relative z-10 mr-2 flex-grow flex-shrink max-md:hidden">
//             <div className="relative z-10 bg-transparent">
//               <div className="h-14 rounded-[8px]">
//                 <button className="absolute top-[50%] z-10 left-3 transform translate-y-[-50%]">
//                   <img src={SearchHeaderSvg} alt="search-header" />
//                 </button>
//                 <div className="relative h-full">
//                   <input
//                     className="flex relative items-center w-full py-3 rounded-[28px] border border-[#C7C8CD] bg-white outline-none pr-[47.5px] h-full box-border text-[#242529] pl-[34.5px] placeholder-[#47474A] text-base shadow-md focus:border-black"
//                     type="text"
//                     value={searchValue}
//                     onChange={handleInputChange}
//                     onKeyPress={handleKeyPress}
//                     placeholder="Search products, stores, and recipes"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="relative">
//               <button className="cursor-pointer relative bg-transparent rounded-[8px] h-14 min-w-[120px] max-w-full mx-3 max-md:mx-0 max-lg:mx-0">
//                 <span
//                   className="justify-start items-center w-full"
//                   style={styles}
//                 >
//                   <img src={LocationSvg} alt="location-svg" />
//                   <span>09134</span>
//                   <img src={DownArrowheader} alt="down-arrow-svg" />
//                 </span>
//               </button>
//             </div>
//           </div>

//           <button className="rounded-[24px] flex relative h-8 min-w-14 py-1 px-2 justify-evenly items-center max-md:px-0 max-lg:px-0">
//             <img src={CartSvg} alt="cart-svg" />
//             <span className="px-2">0</span>
//           </button>
//         </div>

//         <div
//           className="m-auto pb-[1px] max-2xl:m-0 border-b"
//           style={{ width: "calc(1280px + 80px)" }}
//         >
//           <div className="relative pt-1 bg-[#F7F5F0]">
//             <Carousel
//               responsive={responsive}
//               arrows
//               customLeftArrow={<CustomLeftArrow />}
//               customRightArrow={<CustomRightArrow />}
//             >
//               {categoryList.map((itemsSvg) => (
//                 <div
//                   key={itemsSvg.id}
//                   className="flex justify-between max-h-[75px] box-content px-12"
//                 >
//                   <ConfigProvider
//                     theme={{
//                       components: {
//                         Tabs: {
//                           inkBarColor: "rgb(0,0,0)",
//                           itemActiveColor: "rgb(0,0,0)",
//                           itemHoverColor: "rgb(0,0,0)",
//                           itemSelectedColor: "rgb(0,0,0)",
//                         },
//                       },
//                     }}
//                   >
//                     <Tabs
//                       defaultActiveKey="1"
//                       centered
//                       activeKey={
//                         selectedCategoryId && selectedCategoryId.toString()
//                       }
//                     >
//                       <Tabs.TabPane
//                         tab={
//                           <button
//                             className={`cursor-pointer bg-transparent relative rounded-[8px] max-w-32 pr-1 px-1 text-[#242529] flex flex-col items-center justify-center hover:black max-2xl:pl-3 max-xl:pl-2 max-lg:pl-1 max-md:pl-0 max-2xl:pr-0 max-2xl:max-w-24 max-xl:max-w-16 max-lg:max-w-10 ${
//                               itemsSvg.id === selectedCategoryId
//                                 ? "ant-tabs-tab-active"
//                                 : ""
//                             }`}
//                             onClick={() => handleCategoryClick(itemsSvg.id)}
//                           >
//                             <span className="flex items-center justify-center mb-2 max-h-6">
//                               <img
//                                 src={itemsSvg.imageUrl}
//                                 alt={itemsSvg.id}
//                                 className="w-[30px] h-[30px]"
//                               />
//                             </span>
//                             <span className="text-base leading-5 text-center">
//                               {itemsSvg.name}
//                             </span>
//                           </button>
//                         }
//                         key={itemsSvg.id}
//                       />
//                     </Tabs>
//                   </ConfigProvider>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//         </div>

//         {open && <StoreSidebar open={open} onCancel={onClosebutton} />}
//       </div>
//       <ShopListing selectedCategoryId={selectedCategoryId} />
//     </>
//   );
// };

// export default Header;
