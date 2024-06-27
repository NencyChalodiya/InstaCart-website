import React from "react";
import { Link } from "react-router-dom";

import CarrotSvg from "../../../assets/images/carrotSvg.svg";

const StoreFooter = () => {
  return (
    <div className=" mt-72  px-4 pt-12 pb-20 text-center transition-opacity duration-200 bg-[#F7F5F0] opacity-100 opacity flex flex-col items-center justify-center">
      <img src={CarrotSvg} alt="carrot-svg" />
      <h2 className="mt-3 text-2xl font-bold leading-7 text-[#343538]">
        There's more to explore
      </h2>
      <h3 className="mt-1 text-[#343538] text-sm leading-4 font-medium ">
        Shop 66 stores (and counting) in San Francisco.
      </h3>
      <Link to="/store/allStores" className="inline-block mt-6">
        <button className="relative w-auto h-10 pl-4 pr-4 bg-[#242529] border cursor-pointer min-w-40 rounded-3xl ">
          <span className="text-white">View all stores</span>
        </button>
      </Link>
    </div>
  );
};

export default StoreFooter;
