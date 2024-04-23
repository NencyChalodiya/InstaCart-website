import React from "react";

const ScannerWrapper = () => {
  return (
    <div className="w-full h-full max-w-7xl bg-[#B1E5D5] flex flex-row justify-between items-center m-auto rounded-lg shadow-md">
      <img
        src="https://www.instacart.com/assets/homepage/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.png"
        alt="Phone"
        className="w-[267px] h-[100px] max-md:hidden"
      ></img>
      <div className="w-[410px] max-md:pl-5">
        <h2 className="text-2xl font-bold leading-6">
          Get the full instacart experience
        </h2>
        <div className="text-sm leading-5">
          Scan the QR code with your camera.First delivery is free
        </div>
      </div>
      <img
        src="./images/qrCode.png"
        alt="qrCode scanner"
        className="w-[100px] h-[100px]"
      ></img>
    </div>
  );
};

export default ScannerWrapper;
