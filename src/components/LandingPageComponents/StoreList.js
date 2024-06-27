import React from "react";
import { MdElectricBolt } from "react-icons/md";
const StoreList = ({ store, handleShopClick, loading }) => {
  const filteredMessages = store?.messages?.filter((message) =>
    message.startsWith("D")
  );

  const filteredMessagesOfDetails = store?.messages?.filter((message) =>
    message.startsWith("I")
  );
  return (
    <>
      <li>
        <div className="h-full">
          <div className="py-4 pl-2 rounded-lg shadow-md">
            <button
              onClick={() => handleShopClick()}
              className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer"
            >
              <div className="flex max-w-full max-h-full mr-3">
                <img
                  src={store?.image_url}
                  alt={store?.store_id}
                  className="border border-gray-300 rounded-full w-[54px] h-[54px]"
                ></img>
              </div>
              <div className="block grid-item">
                <span className="block text-base font-semibold leading-6">
                  {store?.store_name}
                </span>
                {filteredMessages?.length > 0 ? (
                  <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                    <span>
                      <MdElectricBolt />
                    </span>
                    <span>
                      {filteredMessages.map((message, index) => (
                        <span key={index}>{message}</span>
                      ))}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-400 text-xs  font-semibold">
                    <span>Delivery Unavialble</span>
                  </div>
                )}

                {filteredMessagesOfDetails.length > 0 ? (
                  <span className=" text-xs font-bold bg-[#FDDC22] text-gray-500 border  rounder-full">
                    {filteredMessagesOfDetails.map((message, index) => (
                      <span key={index}>{message}</span>
                    ))}
                  </span>
                ) : (
                  <span className=" text-xs font-bold text-gray-500 bg-[#F6F7F8]  rounder-full">
                    Lots of Details
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default StoreList;
