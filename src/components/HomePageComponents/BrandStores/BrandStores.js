import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Skeleton } from "antd";

import ShowallSvg from "../../../assets/images/showAllSvg.svg";
import Offers from "../Offers/Offers";
import StoreToHelpYouSave from "../StoresToHelpYouSave/StoreToHelpYouSave";

import SmallCartSvg from "../../../assets/images/smallCartSvg.svg";

const BrandStores = ({ shops, handleShopClick, loading }) => {
  const { cartItems, giftOption } = useSelector((state) => state.cartItems);
  // console.log("cartitems", cartItems);

  const initialShops = shops.slice(0, 9);
  const wordCount = (str) => {
    return str.trim().split(/\s+/).length;
  };
  const getProductsByStoreId = (storeId) => {
    return cartItems.filter((product) => product.storeId == storeId);
  };

  const matchingProducts = (id) => {
    const filteredProducts = getProductsByStoreId(id);
    return filteredProducts.length;
  };

  return (
    <>
      <div className="bg-white">
        <div>
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-6">
              <ul>
                {loading ? (
                  <div className="brand-store  flex gap-8">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <Skeleton.Avatar key={index} active />
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-16 max-2xl:gap-0">
                    <ul className="list-none pt-2 grid grid-cols-9 gap-4 mx-[-10px]  gap-y-11px max-sm:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-5">
                      {" "}
                      {initialShops.map((shop) => (
                        <>
                          <li key={shop.store_id}>
                            <div className="w-[116px]  text-center h-full">
                              <div className="px-[10px] h-full">
                                <button
                                  onClick={() => handleShopClick(shop.store_id)}
                                  className="block text-[#242529] h-full relative"
                                >
                                  <div className="grid">
                                    <span className="relative flex">
                                      <div>
                                        <div className="box-border border bg-white relative overflow-hidden flex justify-center w-[96px] h-[72px] rounded-lg">
                                          <img
                                            src={shop?.image_url}
                                            alt={shop?.store_id}
                                            className="w-[96px] h-[72px]"
                                          />
                                        </div>
                                      </div>
                                      {matchingProducts(shop.store_id) > 0 && (
                                        <div className="border-2 flex py-1 px-[6px] rounded-[16px] items-center absolute top-[-8px] right-[-8px] bg-[#343538]">
                                          <img
                                            src={SmallCartSvg}
                                            alt="small-cart-svg"
                                          />
                                          <span className="px-1 text-white text-xs">
                                            {matchingProducts(shop.store_id)}
                                          </span>
                                        </div>
                                      )}
                                    </span>
                                    <div className="mt-2 mx-[-7px] text-center text-sm font-medium">
                                      {wordCount(shop?.store_name) > 2
                                        ? `${shop?.store_name.split(" ")[0]}...`
                                        : shop?.store_name}
                                    </div>
                                    <div>
                                      <span className="items-center flex justify-center">
                                        <span>by 12:45am</span>
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </li>
                        </>
                      ))}
                    </ul>
                    <Link
                      to="/store/allStores"
                      className="relative mt-4 text-center max-2xl:hidden"
                    >
                      <div className="pt-3">
                        <div className="rounded-[50%] items-center justify-center flex w-12 h-12 bg-[#343538]">
                          <img src={ShowallSvg} alt="show-all svg" />
                        </div>
                      </div>
                      <div className="mt-3 text-sm leading-4 w-14">
                        Show all
                        <span className="block text-xs leading-5 text-gray-400">
                          {shops.length}
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Offers />
      <StoreToHelpYouSave />
    </>
  );
};

export default BrandStores;
