import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Segmented } from "antd";
import { Skeleton } from "antd";

import TotalCartItems from "../../../pages/TotalCartItems/TotalCartItems";
import DeliveryTimesModal from "../../../pages/DeliveryTimesModal/DeliveryTimesModal";
import API from "../../../services/api";

import MenuHeaderSvg from "../../../assets/images/menuHeaderSvg.svg";
import SearchHeaderSvg from "../../../assets/images/searchheaderSvg.svg";
import LocationSvg from "../../../assets/images/location.svg";
import CartSvg from "../../../assets/images/cartSvg.svg";
import DeliveryCarSvg from "../../../assets/images/deliveryCar.svg";
import PickupSvg from "../../../assets/images/pickup.svg";
import CartGreenSvg from "../../../assets/images/cartGreenSvg.svg";
import DeliveryCurrent from "../../../assets/images/currentDelivery.svg";
import DownArrowheader from "../../../assets/images/downArrowHeader.svg";
import BackLightArrowSvg from "../../../assets/images/backLightArrow.svg";

const HeaderProducts = ({ storeId }) => {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cartItems);

  const getProductsByStoreId = () => {
    return cartItems.filter((product) => product.storeId === storeId);
  };

  const matchingProducts = getProductsByStoreId();

  const styles = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
  };

  const [deliveryTimeModal, openDeliveryTimeModal] = useState(false);
  const [totalCartItemsModal, setTotalCartItemsModal] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("cartItems", cartItems);

  const fetchStoreDeliveryDetails = async () => {
    setLoading(true);
    try {
      const response = await API.getStoreDeliveryDetails(storeId);
      if (response.status === "success") {
        setDeliveryDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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

  const openModalWithApiCall = () => {
    openDeliveryTimeModal(true);

    fetchStoreDeliveryDetails();
  };
  useEffect(() => {
    fetchStoreDeliveryDetails();
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
    <>
      <header className="fixed top-0 z-20 w-full bg-white border-b">
        <div className="bg-white">
          <div className="w-full  flex items-center h-20 pl-6 box-border justify-start max-md:justify-between">
            <div className="flex items-center">

            <span className="ml-[-4px] mr-2 relative">
              <button className="cursor-pointer bg-transparent rounded-[4px] h-8 w-8 relative flex justify-center items-center">
                <span className="flex text-ellipsis">
                  <img src={MenuHeaderSvg} alt="menu-svg" />
                </span>
              </button>
            </span>
            <a
              href="/store"
              className="h-14 min-w-[196px] ml-2 mr-6 flex items-center rounded-[12px] relative "
            >
              <img
                src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png"
                alt="instacart-logo"
              />
              <span className="flex items-center mt-1">
                <img src={BackLightArrowSvg} alt="back-arrow-svg" />
                <span className="mb-[2px]  text-gray-500 text-sm">
                  All stores
                </span>
              </span>
            </a>
            </div>
            <div className="relative flex-grow mx-8 max-md:hidden ">
              <div className="relative z-10 bg-transparent">
                <form className="relative h-14 bg-[#F6F7F8] rounded-[5px] ">
                  <button className="absolute translate-y-[-50%] bg-transparent top-1/2 left-3 z-1">
                    <img src={SearchHeaderSvg} alt="search-header" />
                  </button>
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
                </form>
              </div>
            </div>
            <div className="flex-shrink flex rounded-[20px] max-md:hidden ">
              <Segmented
                options={[
                  {
                    label: (
                      <div>
                        <span className="text-ellipsis flex items-center h-10 px-4 mt-[-2px]">
                          <img src={DeliveryCarSvg} alt="delivery-car" />
                          <div>Delivery</div>
                        </span>
                      </div>
                    ),
                    value: "Delivery",
                  },
                  {
                    label: (
                      <div>
                        <span className="text-ellipsis flex items-center h-10 px-4 mt-[-2px]">
                          <img src={PickupSvg} alt="pickup-svg" />
                          <div>Pickup</div>
                        </span>
                      </div>
                    ),
                    value: "Pickup",
                  },
                ]}
              />
            </div>
            <div>
              <div className="relative max-md:hidden ">
                <button className="cursor-pointer relative  bg-transparent rounded-[8px] h-14 min-w-[120px] max-w-full mx-3">
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
                                          {addr?.street}, {addr?.floor},{" "}
                                          {addr?.zip_code}
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

            <div className="mx-3 max-md:hidden ">
              <div className="relative">
                <button
                  className="relative min-h-14 cursor-pointer"
                  onClick={() => openModalWithApiCall()}
                >
                  {loading ? (
                    <div>
                      <div className="address">
                        <Skeleton.Avatar active />
                      </div>
                    </div>
                  ) : (
                    <>
                      {deliveryDetails && deliveryDetails?.length > 0 ? (
                        <div className="flex items-center ">
                          <img
                            src={DeliveryCurrent}
                            alt="delivery-current-svg"
                          />

                          {deliveryDetails?.map((detail) => (
                            <span className="ml-1 text-base text-[#308E1F]">
                              Delivery by{" "}
                              {
                                detail?.delivery_time?.next_delivery?.priority
                                  ?.time_slot
                              }
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            size="24"
                            class="e-ozd7xs"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-17v6.52l4.625 3.7-1.25 1.56L11 12.48V5z"
                            ></path>
                          </svg>
                          <span className="ml-1 text-base">Today,1pm</span>
                        </div>
                      )}
                    </>
                  )}
                </button>
              </div>
            </div>
            {matchingProducts.length > 0 ? (
              <div>
                <button
                  className="rounded-[24px] flex relative h-8 min-w-14  px-6 justify-evenly items-center cursor-pointer bg-[#277D0F py-6 mr-3  bg-[#277D0F]"
                  onClick={() => setTotalCartItemsModal(true)}
                >
                  <img src={CartGreenSvg} alt="cart-green-svg" />
                  <span className=" pl-2 text-white">
                    {matchingProducts?.length || 0}
                  </span>
                </button>
              </div>
            ) : (
              <div className="mr-3">
                {" "}
                <button
                  className="rounded-[24px] flex relative h-8 min-w-14 py-6 px-6 justify-evenly items-center bg-[#F6F7F8]"
                  onClick={() => setTotalCartItemsModal(true)}
                >
                  <img src={CartSvg} alt="cart-svg" />
                  <span className="px-2">0</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <TotalCartItems
          totalCartItemsModal={totalCartItemsModal}
          onCancel={() => setTotalCartItemsModal(false)}
        />
      </header>
      <DeliveryTimesModal
        deliveryTimeModal={deliveryTimeModal}
        onCancel={() => openDeliveryTimeModal(false)}
        deliveryDetails={deliveryDetails}
      />
    </>
  );
};

export default HeaderProducts;
