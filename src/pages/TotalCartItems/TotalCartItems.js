import React from "react";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
const TotalCartItems = ({ totalCartItemsModal, onCancel }) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  return (
    <Drawer
      title={
        <header>
          <div className="flex justify-center bg-white">
            <div className="flex flex-col items-center ">
              <h1 className="text-base leading-5">Personal Petro cart</h1>
              <h2 className="text-sm leading-5 text-gray-400">
                Shopping in 94105
              </h2>
            </div>
          </div>
        </header>
      }
      placement="right"
      width={500}
      onClose={onCancel}
      open={totalCartItemsModal}
    >
      {cartItems?.length === 0 ? (
        <div className="items-center justify-center overflow-x-hidden overflow-y-auto grow">
          <div className="py-12 text-center">
            <img
              src="https://d2guulkeunn7d8.cloudfront.net/assets/EmptyStateGeneric-c99baebd31a7614759d10c384300c68c.svg"
              alt="search-img"
              className="block mx-auto mb-3 max-w-[235px] max-h-[132px] w-full h-full "
            />
            <h1 className="text-sm leading-5 text-gray-400">
              Your personal cart is empty
            </h1>
            <button className="inline-block mt-6 text-sm leading-5 text-green-700 cursor-pointer">
              Shop now
            </button>
          </div>

          <div className="">
            <div className="px-4 pt-2 pb-1 bg-[#F6F7F8]">
              <h2>Your other shopping carts</h2>
            </div>
            <button className="w-full bg-transparent cursor-pointer">
              <div className="p-4 border-t ">
                <div className="flex">
                  <div className="basis-[14%]">
                    <img
                      src="https://www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
                      alt="brand-logo"
                      className="inline-block max-w-full relative rounded-[50%] border"
                    />
                  </div>
                  <div className="flex flex-col max-w-[70%] ml-3">
                    <span className="text-sm leading-4 text-left">Costco</span>
                    <span className="flex text-sm leading-4 ">
                      Personal Cart
                    </span>
                    <div className="mt-1 ">
                      <div className="overflow-hidden">
                        <ul className="flex min-h-9">
                          <li className="inline-block">
                            <img
                              src="https://www.instacart.com/image-server/36x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_488f7dad-277f-41bd-8aa6-09a2410816f0.jpeg"
                              alt="product-1"
                              className="w-9 h-9"
                            />
                          </li>
                          <li className="inline-block">
                            <img
                              src="https://www.instacart.com/image-server/36x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d60de089-daeb-4332-a58d-d6178b4ffc5f.jpeg"
                              alt="product-2"
                              className="w-9 h-9"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto ml-auto rounded-[50%] h-10 w-10 flex items-center justify-center bg-[#F6F7F8]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      size="24"
                      aria-hidden="true"
                    >
                      <path d="M15.796 13.119H4v-2.24h11.796l-4.088-4.088 1.584-1.584 6.792 6.792-6.792 6.792-1.584-1.584z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Drawer>
  );
};

export default TotalCartItems;
