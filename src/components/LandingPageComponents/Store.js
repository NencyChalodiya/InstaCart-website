import React from "react";
import { brandStoresData } from "../../BrandStoreData/brandStoreData";
import StoreList from "./StoreList";

const Store = () => {
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
          <ul className="grid justify-center w-full grid-cols-2 gap-6 px-0 py-8 m-0 lg:grid-cols-3 max-w-7xl max-sm:hidden">
            {brandStoresData.map((store) => (
              <StoreList store={store} key={store.id} />
            ))}
          </ul>
          <button className="mt-8 max-md:mt-12  font-sans text-lg font-semibold leading-6 bg-transparent border-none cursor-pointer   focus:outline-none text-[#2C890F] hover:underline">
            Show all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
