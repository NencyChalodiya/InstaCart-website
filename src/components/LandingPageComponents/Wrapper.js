import React from "react";

const Wrapper = () => {
  return (
    <div className="w-full h-56 bg-[#DFEED4] mt-24 flex justify-between ">
      <div className="m-auto ">
        <div>
          <div className="pt-6 pb-6 pr-0 pl-36 ">
            <h1 className="text-5xl leading-10 font-semibold w-[578px] m-0">
              Order groceries for delivery or pickup today
            </h1>
            <p className="mt-4 text-sm leading-5 font-extralight">
              Whatever you want from local stores, brought right to your door
            </p>
          </div>
        </div>
      </div>
      <img
        className="min-h-full mr-1"
        src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="img"
      ></img>
    </div>
  );
};

export default Wrapper;
