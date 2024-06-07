// ShopListing.js
import React, { useEffect, useState } from "react";
import API from "../../../services/api";
import { Link, useNavigate } from "react-router-dom";
import PickupIconSvg from "../../../assets/images/pickup.svg";
const ShopListing = ({ selectedCategoryId }) => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [giftBannerImages, setGiftBannerImages] = useState([]);

  useEffect(() => {
    const fetchShopsByCategory = async (categoryId) => {
      try {
        const response = await API.getShopsByCategory(categoryId);
        setShops(response.data.storeData);
        if (categoryId === 8 && response.data.giftBannerImages) {
          setGiftBannerImages(response.data.giftBannerImages);
        } else {
          setGiftBannerImages([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchShopsByCategory(1);
  }, [1]);

  useEffect(() => {
    const fetchShopsByCategory = async (categoryId) => {
      try {
        const response = await API.getShopsByCategory(categoryId);
        console.log(response.data);
        setShops(response.data.storeData || []);
        if (categoryId === 8 && response.data.giftBannerImages) {
          setGiftBannerImages(response.data.giftBannerImages);
        } else {
          setGiftBannerImages([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log(shops);

    if (selectedCategoryId !== null) {
      if (!isNaN(selectedCategoryId)) {
        fetchShopsByCategory(selectedCategoryId);
      }
    }
  }, [selectedCategoryId]);

  const handleShopClick = async (storeId) => {
    navigate(`/store/${storeId}/front`);
  };

  return (
    <>
      <div className=" mx-72 max-lg:mx-40 max-md:mx-4 max-sm:mx-4 mt-44">
        <div>
          <div>
            <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-1 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
              {shops.map((shop) => (
                <li
                  key={shop.store_id}
                  onClick={() => handleShopClick(shop.store_id)}
                >
                  <div className="h-full">
                    <div className="relative flex flex-row items-center h-full p-3 border rounded-lg flex-nowrap">
                      <button className="relative flex items-center justify-start w-full h-full gap-4 m-0 opacity-100 cursor-pointer ">
                        <div className="flex max-w-full max-h-full mr-3">
                          <img
                            src={shop.image_url}
                            alt={shop.store_id}
                            className="box-border relative flex justify-center w-16 h-14 overflow-hidden border rounded-xl"
                          ></img>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-start">
                            <span className="block text-lg font-semibold leading-6">
                              {shop.store_name}
                            </span>
                          </div>
                          {/* <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                          <span>
                            <MdElectricBolt />
                          </span>
                          <span>{store.deliveryTime}</span>
                        </div> */}

                          <div className="flex flex-wrap items-center">
                            <span>
                              <img src={PickupIconSvg} alt="pickup-logo" />
                            </span>
                            <div className="text-sm leading-4">
                              Pickup available
                            </div>
                            <span className="ml-1 text-xs leading-5">
                              7.4 mi
                            </span>
                          </div>
                          <ul className="flex flex-wrap gap-1 text-sm leading-4 list-none">
                            {shop.store_categories &&
                              shop.store_categories.map((category, index) => (
                                <li key={index} className="text-sm leading-4">
                                  {category}
                                </li>
                              ))}
                          </ul>
                          <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                            {shop.messages &&
                              shop.messages.map((message, index) => (
                                <li key={index} className="text-sm leading-4">
                                  {message}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {giftBannerImages.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="text-2xl">Shop popular gifts</h2>
                    <Link
                      to={"/store/hub/popular_gifts"}
                      className="flex items-center mt-2"
                    >
                      <div className="flex items-center mt-1">
                        <div className="mr-1">
                          <div className="box-border border flex justify-center relative w-[40px] h-[30px] rounded-[6px]">
                            <img
                              src="https://www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
                              className="w-[36px] h-[28px]"
                            />
                          </div>
                        </div>
                        <div className="mr-1">
                          <div className="box-border border flex justify-center relative w-[40px] h-[30px] rounded-[6px]">
                            <img
                              src="https://www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
                              className="w-[36px] h-[28px]"
                            />
                          </div>
                        </div>
                        <div className="mr-1">
                          <div className="box-border border flex justify-center relative w-[40px] h-[30px] rounded-[6px]">
                            <img
                              src="https://www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
                              className="w-[36px] h-[28px]"
                            />
                          </div>
                        </div>
                        <div className="text-gray-500">+11 stores</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="relative w-full">
                  <Link
                    to={"/store/hub/popular_gifts"}
                    className="relative flex flex-nowrap ml-[-8px]"
                  >
                    {giftBannerImages.map((image, index) => (
                      <div key={index}>
                        <a className="flex flex-col justify-between w-[216px] h-[284px] rounded-[12px] m-2 cursor-pointer">
                          <img
                            src={image}
                            className="rounded-[12px] shadow-lg"
                          />
                        </a>
                      </div>
                    ))}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopListing;
