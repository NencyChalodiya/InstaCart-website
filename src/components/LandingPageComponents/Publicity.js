import React from "react";
import { publicity } from "../../data/publicity";
const Publicity = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 m-auto max-w-7xl ">
      <h2 className="max-w-lg pb-5 text-3xl font-bold leading-8 text-center text-[#343538] max-md:text-2xl">
        The largest online grocery marketplace in North America
      </h2>
      <div className="flex flex-col w-full">
        <div className="w-full mb-4 ">
          <img
            className="w-full h-full rounded-2xl max-md:hidden"
            src="https://www.instacart.com/assets/homepage/homepage_stats-538f51946acc9e8a72b982654287ee0ad8d7a848df2cd860935bbc3c2a97e84a.jpg"
            alt="publicity"
          />
          <img
            className="w-full h-full rounded-2xl md:hidden"
            src="https://www.instacart.com/assets/homepage/homepage_stats_mobile-24bd627084eed46859cb6cf670de84feb1de9ef24909f36cb85db410e57313e8.jpg"
            alt="publicity"
          />
        </div>

        <div className="flex w-full max-md:flex-col ">
          {publicity.map((item) => (
            <div className="flex flex-col flex-grow flex-shrink mr-2 bg-gray-100 border-none rounded-lg max-md:mb-4">
              <div className="flex-grow flex-shrink block p-8 ">
                <h3 className="text-3xl font-bold text-left break-words text-[#343538]">
                  {item.title}
                </h3>
                <p className="mt-6 text-xl fontsnap-normal text-[#343538] max-md:hidden">
                  {item.descr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publicity;
