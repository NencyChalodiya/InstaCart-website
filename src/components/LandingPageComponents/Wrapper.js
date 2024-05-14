import React from "react";

const Wrapper = () => {
  return (
    <div className="w-full h-56 bg-[#DFEED4] mt-20 max-md:mt-[120px] flex justify-between ">
      <div className="m-auto max-md:mx-0">
        <div>
          <div className="py-6 pl-36 max-md:pl-6">
            <h1 className="text-5xl leading-10 font-bold w-[578px] m-0 max-md:w-[250px] max-md:text-3xl">
              Order groceries for delivery or pickup today
            </h1>
            <p className="mt-4 text-sm leading-5 font-extralight max-md:hidden">
              Whatever you want from local stores, brought right to your door
            </p>
          </div>
        </div>
      </div>
      <img
        className="min-h-full mr-1"
        src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
        alt="img"
      />
    </div>
  );
};

export default Wrapper;
