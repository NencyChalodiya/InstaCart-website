import React from "react";

const StoreFooter = () => {
  return (
    <div className="px-4 pt-12 pb-20 text-center transition-opacity duration-200 bg-[#F7F5F0] opacity-100 opacity flex flex-col items-center justify-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M15.999 20.2c5.392 0 9.812 4.024 9.8 9.8h-19.6c-.01-5.773 4.409-9.8 9.8-9.8Z"
          fill="#FF7009"
        ></path>
        <path
          d="M24.082 6.541c-1.238 0-2.12.54-2.935 1.71L18.8 11.624V2h-5.6v9.623l-2.347-3.371C10.04 7.08 9.156 6.54 7.918 6.54c-1.868 0-3.112 1.38-3.118 3.079-.005 1.456.682 2.404 2.128 3.335L16 18.8l9.072-5.845c1.446-.931 2.133-1.88 2.128-3.335-.006-1.7-1.25-3.079-3.118-3.079Z"
          fill="#0AAD0A"
        ></path>
      </svg>
      <h2 className="mt-3 text-2xl font-bold leading-7 text-[#343538]">
        There's more to explore
      </h2>
      <h3 className="mt-1 text-[#343538] text-sm leading-4 font-medium ">
        Shop 66 stores (and counting) in San Francisco.
      </h3>
      <a href="/" className="inline-block mt-6">
        <button className="relative w-auto h-10 pl-4 pr-4 bg-[#242529] border cursor-pointer min-w-40 rounded-3xl ">
          <span className="text-white">View all stores</span>
        </button>
      </a>
    </div>
  );
};

export default StoreFooter;
