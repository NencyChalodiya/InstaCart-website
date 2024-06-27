import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../../../services/api";

import { MdElectricBolt } from "react-icons/md";
import { Skeleton } from "antd";

import PickupSvg from "../../../assets/images/pickup.svg";

const StoreToHelpYouSave = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStoreShops = async () => {
    setLoading(true);
    try {
      const response = await API.getShopsByCategory(1);
      if (response.status === "success") {
        setShops(response.data.storeData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoreShops();
  }, []);

  const handleShopClick = async (storeId) => {
    navigate(`/store/${storeId}/front`);
  };

  return (
    <div>
      <div className="mb-8 ">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2>
              <span className="text-3xl font-bold leading-5 text-gray-600">
                Stores to help you save
              </span>
            </h2>
          </div>
          <Link
            to="/store/allStores"
            className="relative underline cursor-pointer decoration-1 "
          >
            <span>Show all</span>
          </Link>
        </div>
        <div>
          {loading ? (
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
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
            <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-8 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
              {shops &&
                shops?.map((shop) => (
                  <li key={shop.store_id}>
                    <div className="h-full">
                      <div className="relative flex flex-row items-center h-full p-3 border rounded-lg flex-nowrap">
                        <button
                          onClick={() => handleShopClick(shop.store_id)}
                          className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer "
                        >
                          <div className="flex max-w-full max-h-full mr-3">
                            <img
                              src={shop?.image_url}
                              alt={shop.store_id}
                              className="box-border relative flex justify-center w-16 h-12 overflow-hidden border rounded-xl"
                            ></img>
                          </div>
                          <div className="flex flex-col gap-[2px]">
                            <span className="block text-base font-semibold leading-6">
                              {shop?.store_name}
                            </span>
                            {shops.messages && shops.messages.length > 0 ? (
                              <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                                <span>
                                  <MdElectricBolt />
                                </span>
                                <span>
                                  {shops.messages
                                    .filter((message) =>
                                      message.startsWith("D")
                                    )
                                    .map((message, index) => (
                                      <span key={index}>{message}</span>
                                    ))}
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center text-gray-400 text-xs font-semibold">
                                <span>Delivery Unavailable</span>
                              </div>
                            )}

                            <div className="flex flex-wrap items-center">
                              <span>
                                <img src={PickupSvg} alt="pickup-svg image" />
                              </span>
                              <div className="text-xs leading-4">
                                Pickup available
                              </div>
                              <span className="ml-1 text-xs leading-5">
                                7.4 mi
                              </span>
                            </div>
                            <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
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
                              <li className="text-xs leading-4">
                                <span className="bg-yellow-400">
                                  In-store prices
                                </span>
                              </li>
                              <li className="text-xs leading-4">
                                <span>In-store prices</span>
                              </li>
                            </ul>
                          </div>
                          <div></div>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// className=" mx-72 max-lg:mx-40 max-md:mx-4 max-sm:mx-4"

export default StoreToHelpYouSave;
