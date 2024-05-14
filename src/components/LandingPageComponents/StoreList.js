import React from "react";
import { MdElectricBolt } from "react-icons/md";
const StoreList = ({ store }) => {
  return (
    <>
      <li>
        <div className="h-full">
          <div className="py-4 pl-2 rounded-lg shadow-md">
            <a
              href="/"
              className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer"
            >
              <div className="flex max-w-full max-h-full mr-3">
                <img
                  src={store.img}
                  alt={store.id}
                  className="border border-gray-300 rounded-full"
                ></img>
              </div>
              <div className="block grid-item">
                <span className="block text-base font-semibold leading-6">
                  {store.title}
                </span>
                <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                  <span>
                    <MdElectricBolt />
                  </span>
                  <span>{store.deliveryTime}</span>
                </div>
                <span className="p-0 text-xs font-bold text-gray-400 border rounder-full">
                  {store.description}
                </span>
              </div>
              <div></div>
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default StoreList;
