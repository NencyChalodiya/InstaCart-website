import React from "react";
import PlusSvg from "../../assets/images/plus.svg";
const StoreFilteredProducts = ({ cat }) => {
  return (
    <>
      <div key={cat?.id} className="relative flex cursor-pointer">
        <div className="absolute z-10 top-1 right-1">
          <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
            <button className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 bg-[#2C890F]">
              <div className="flex items-center px-2">
                <img src={PlusSvg} alt="plusIcon" />
                <span className="pl-1 text-white">Add</span>
              </div>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <div className="w-full h-[200px] object-cover">
            <img src={cat?.image} alt={`Product ${cat.id}`} />
          </div>
          <div className="px-2 mt-24">
            <div className="py-[1px] px-1 flex items-center">
              <div>
                <span className="text-sm font-bold text-gray-700 align-super">
                  $
                </span>
                <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                  {cat?.actual_price}
                </span>
                <span className="text-sm font-bold text-gray-700 align-super">
                  49
                </span>
              </div>
              <div>
                <span className="text-gray-500 ml-2">
                  <s>{cat?.selling_price}</s>
                </span>
              </div>
            </div>
            <div>
              <span className="text-gray-600">{cat?.title}</span>
            </div>
            <div>
              <span className="text-gray-500">{cat?.label}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreFilteredProducts;
