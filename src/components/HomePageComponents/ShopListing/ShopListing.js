// ShopListing.js
import React, { useEffect, useState } from "react";
import API from "../../../services/api";
import BrandStores from "../BrandStores/BrandStores";
import { Link, useNavigate } from "react-router-dom";

import { Skeleton } from "antd";
import "./ShopListing.css";
import StoreFooter from "../StoreFooter/StoreFooter";

const ShopListing = ({ selectedCategoryId }) => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [giftBannerImages, setGiftBannerImages] = useState([]);
  const [giftStoresAvailable, setGiftStoreStoresAvailable] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchShopsByCategory = async (categoryId) => {
    setLoading(true);
    try {
      const response = await API.getShopsByCategory(categoryId);
      if (response.status === "success") {
        setShops(response.data.storeData || []);
        setGiftStoreStoresAvailable(response.data);
        localStorage.setItem(
          "shopsData",
          JSON.stringify(response.data.storeData)
        );
        if (categoryId === 8 && response.data.giftBannerImages) {
          setGiftBannerImages(response.data.giftBannerImages);
        } else {
          setGiftBannerImages([]);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShopsByCategory(selectedCategoryId || 1);
  }, [selectedCategoryId]);

  const handleShopClick = async (storeId) => {
    navigate(`/store/${storeId}/front`);
  };

  return (
    <>
      <div className=" mx-72 max-lg:mx-40 max-md:mx-4 max-sm:mx-4 mt-44">
        {selectedCategoryId === 1 || selectedCategoryId === null ? (
          <BrandStores
            shops={shops}
            handleShopClick={handleShopClick}
            loading={loading}
          />
        ) : (
          <>
            {selectedCategoryId !== 8 ? (
              <div>
                {loading ? (
                  <div className="grid grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div key={index} className="border rounded-lg flex p-6">
                        <div className="shop-list">
                          <Skeleton.Avatar active />
                        </div>
                        <div className="ml-4">
                          <div className="shop-list-name">
                            <Skeleton.Avatar active />
                          </div>
                          <div className="shop-list-category">
                            <Skeleton.Avatar active />
                          </div>
                          <div className="shop-list-message">
                            <Skeleton.Avatar active />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-1 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
                    {shops?.map((shop) => (
                      <li
                        key={shop.store_id}
                        onClick={() => handleShopClick(shop.store_id)}
                      >
                        <div className="h-full">
                          <div className="relative flex flex-row items-center h-full p-3 border rounded-lg flex-nowrap">
                            <button className="relative flex items-center justify-start w-full h-full gap-4 m-0 opacity-100 cursor-pointer ">
                              <div className="flex max-w-full max-h-full mr-3">
                                <img
                                  src={shop?.image_url}
                                  alt={shop.store_id}
                                  className="box-border relative flex justify-center w-16 h-14 overflow-hidden border rounded-xl"
                                />
                              </div>

                              <div className="flex flex-col gap-2">
                                <div className="flex justify-start">
                                  <span className="block text-lg font-semibold leading-6">
                                    {shop?.store_name}
                                  </span>
                                </div>

                                <ul className="flex flex-wrap gap-1 text-sm leading-4 list-none">
                                  {shop?.store_categories &&
                                    shop?.store_categories?.map(
                                      (category, index) => (
                                        <li
                                          key={index}
                                          className="text-sm leading-4"
                                        >
                                          {category}
                                        </li>
                                      )
                                    )}
                                </ul>

                                <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                                  {shop?.messages &&
                                    shop?.messages?.map((message, index) => (
                                      <li
                                        key={index}
                                        className="text-sm leading-4"
                                      >
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
                )}
              </div>
            ) : (
              
              giftBannerImages?.length > 0 && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h2 className="text-2xl">Shop popular gifts</h2>
                      <Link
                        to={"/store/hub/popular_gifts"}
                        className="flex items-center mt-2"
                      >
                        <div className="flex items-center mt-1">
                          {shops.map((shop, index) => (
                            <div className="mr-1" key={index}>
                              <div className="box-border border flex justify-center relative w-[40px] h-[30px] rounded-[6px]">
                                <img
                                  src={shop?.image_url}
                                  className="w-[36px] h-[28px] rounded-[6px]"
                                />
                              </div>
                            </div>
                          ))}
                          <div className="text-gray-500">
                            +{giftStoresAvailable?.giftStoreCount} stores
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="relative w-full">
                    {loading ? (
                      <div className="gift-banner-images">
                        <Skeleton.Avatar active />
                      </div>
                    ) : (
                      <Link
                        to={"/store/hub/popular_gifts"}
                        className="relative flex flex-nowrap ml-[-8px]"
                      >
                        {giftBannerImages?.map((image, index) => (
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
                    )}
                  </div>
                </div>
              )
            )}
          </>
        )}
      </div>

      <StoreFooter />
    </>
  );
};

export default ShopListing;
