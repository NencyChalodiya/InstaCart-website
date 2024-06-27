import React, { useState, useEffect } from "react";

import "./StoreList.css";

import StoreList from "./StoreList";
import API from "../../services/api";

import { message } from "antd";
import { Skeleton } from "antd";

const Store = () => {
  const accessToken = localStorage.getItem("accessToken") ?? null;

  const [shopsStore, setShopStore] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchStoreShops = async () => {
    setLoading(true);
    try {
      const response = await API.getShopsByCategory(1);
      if (response.status === "success") {
        setShopStore(response.data.storeData);
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

  const handleShopClick = async () => {
    if (!accessToken) {
      message.error("You have not been Logged in");
    }
  };

  const handleToggleShow = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const storesToShow = showAll ? shopsStore : shopsStore.slice(0, 6);

  return (
    <div className="pl-5 pr-5">
      <div className="w-full mt-8 mb-8 max-md:mb-6">
        <h2 className="text-3xl font-bold text-center text-[#343538]">
          Choose Your store in{" "}
          <span className="text-[#2C890F] cursor-pointer hover:underline">
            San Francisco Bay Area
          </span>
        </h2>
        <div className="flex flex-col items-center w-full ">
          {loading ? (
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="border rounded-lg flex p-4">
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
            <ul className="grid justify-center w-full grid-cols-2 gap-6 px-0 py-8 m-0 lg:grid-cols-3 max-w-7xl max-sm:hidden">
              {storesToShow?.map((store) => (
                <StoreList
                  store={store}
                  key={store.store_id}
                  handleShopClick={handleShopClick}
                />
              ))}
            </ul>
          )}

          <button
            className="mt-8 max-md:mt-12  font-sans text-lg font-semibold leading-6 bg-transparent border-none cursor-pointer   focus:outline-none text-[#2C890F] hover:underline"
            onClick={handleToggleShow}
          >
            {showAll ? "Show less" : "Show all"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
