import React from "react";

const TopStoreFrontDetails = ({ store, openModalWithApiCall, ArrowSvg }) => {
  return (
    <>
      <div key={store.store_id} className="relative">
        <a href="/store" className="flex flex-col items-center no-underline">
          <img
            src={store?.logo}
            className="w-auto h-20 border rounded-full aspect-square"
            alt="Store Logo"
          />
          <h2 className="mt-1 text-xl leading-5">{store?.store_name}</h2>
        </a>
        <button
          className="relative flex items-center mt-1 text-sm leading-4 text-gray-500"
          onClick={() => openModalWithApiCall()}
        >
          {store?.messages[0] ? store.messages[0] : "View pricing policy"}
          {/* {store?.messages[0]} */}
          <img src={ArrowSvg} alt="arrowSvg" />
        </button>
        {/* Other details */}
      </div>
    </>
  );
};

export default TopStoreFrontDetails;
