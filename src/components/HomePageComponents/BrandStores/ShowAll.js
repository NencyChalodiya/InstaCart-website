import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../LandingPageComponents/Navbar";
import API from "../../../services/api";

import { Skeleton } from "antd";

const ShowAll = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStoreShops = async () => {
    try {
      setLoading(true);
      const response = await API.getShopsByCategory(1);
      // console.log(response);
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
    <>
      <Navbar />
      {shops && shops.length > 0 && (
        <div className=" mx-72 max-lg:mx-40 max-md:mx-4 max-sm:mx-4 mt-36">
          <>
            <div>
              <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-1 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
                {shops.map((shop) => (
                  <li key={shop.store_id}>
                    <div className="h-full">
                      <div className="relative flex flex-row items-center h-full p-3 border rounded-lg flex-nowrap">
                        <button
                          className="relative flex items-center justify-start w-full h-full gap-4 m-0 opacity-100 cursor-pointer "
                          onClick={() => handleShopClick(shop.store_id)}
                        >
                          {loading ? (
                            <div className="shop-list">
                              <Skeleton.Avatar active />
                            </div>
                          ) : (
                            <div className="flex max-w-full max-h-full mr-3">
                              <img
                                src={shop?.image_url}
                                alt={shop.store_id}
                                className="box-border relative flex justify-center w-16 h-14 overflow-hidden border rounded-xl"
                              />
                            </div>
                          )}

                          <div className="flex flex-col gap-2">
                            {loading ? (
                              <div className="shop-list-name">
                                <Skeleton.Avatar active />
                              </div>
                            ) : (
                              <div className="flex justify-start">
                                <span className="block text-lg font-semibold leading-6">
                                  {shop?.store_name}
                                </span>
                              </div>
                            )}

                            {loading ? (
                              <div className="shop-list-category">
                                <Skeleton.Avatar active />
                              </div>
                            ) : (
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
                            )}

                            {loading ? (
                              <div className="shop-list-message">
                                <Skeleton.Avatar active />
                              </div>
                            ) : (
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
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default ShowAll;
