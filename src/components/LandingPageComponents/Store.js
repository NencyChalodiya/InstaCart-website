import React from "react";
import { brandStoresData } from "../../BrandStoreData/brandStoreData";
import StoreList from "./StoreList";

const Store = () => {
  return (
    <div className="pl-5 pr-5">
      <div className="w-full mt-8 mb-8">
        <h2 className="text-3xl font-bold text-center text-black">
          Choose Your store in <span>San Fransisco Bay Area</span>
        </h2>
        <div className="flex flex-col items-center w-full">
          <ul className="grid justify-center w-full grid-cols-2 gap-6 px-0 py-8 m-0 lg:grid-cols-3 max-w-7xl">
            {brandStoresData.map((store) => (
              <StoreList store={store} key={store.id} />
            ))}
          </ul>
          <button className="mt-8 font-sans text-base font-normal leading-6 text-green-600 bg-transparent border-none cursor-pointer font-bodyLarge1 font-wght-600 font-opsz-8 focus:outline-none">
            Show all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
