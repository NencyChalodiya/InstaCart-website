import React, { useState } from "react";
import { Avatar, Flex, Segmented } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TotalCartItems from "../../../pages/TotalCartItems/TotalCartItems";
import { useSelector } from "react-redux";
import DeliveryTimesModal from "../../../pages/DeliveryTimesModal/DeliveryTimesModal";
const HeaderProducts = () => {
  const [deliveryTimeModal, openDeliveryTimeModal] = useState(false);
  const [totalCartItemsModal, setTotalCartItemsModal] = useState(false);
  const { cartItems } = useSelector((state) => state.cartItems);
  const styles = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
  };
  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-white border-b">
        <div className="bg-white">
          <div className="w-full min-w-[1024px] flex items-center h-20 pl-6 box-border justify-start">
            <span className="ml-[-4px] mr-2 relative">
              <button className="cursor-pointer bg-transparent rounded-[4px] h-8 w-8 relative flex justify-center items-center">
                <span className="flex text-ellipsis">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    color="systemGrayscale70"
                    aria-hidden="true"
                  >
                    <path d="M20 6H4v2h16zM4 11h16v2H4zM4 16h16v2H4z"></path>
                  </svg>
                </span>
              </button>
            </span>
            <a
              href="/store"
              className="h-14 min-w-[196px] ml-2 mr-6 flex items-center rounded-[12px] relative "
            >
              <img
                src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png"
                alt="instacart-logo"
              />
              <span className="flex items-center mt-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#72767E"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  size="12"
                  color="systemGrayscale50"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m11.48 11.999 4.208-4.208-1.584-1.584-5.792 5.792 5.792 5.792 1.584-1.584z"
                  ></path>
                </svg>
                <span className="mb-[2px]  text-gray-500 text-sm">
                  All stores
                </span>
              </span>
            </a>
            <div className="relative flex-grow mx-8 max-md:hidden ">
              <div className="relative z-10 bg-transparent">
                <form className="relative h-14 bg-[#F6F7F8] rounded-[5px] ">
                  <button className="absolute translate-y-[-50%] bg-transparent top-1/2 left-3 z-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      size="24"
                      color="systemGrayscale70"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.496 17.618a8 8 0 1 1 2.121-2.121l3.944 3.942-2.122 2.122zM17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
                      ></path>
                    </svg>
                  </button>
                  <div className="relative h-full">
                    <input
                      type="text"
                      className="box-border relative flex items-center w-full h-full pr-12 text-base text-black placeholder-black bg-transparent rounded-lg shadow-inner indent-10 outline-black "
                      placeholder="Search products and stores"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-shrink flex rounded-[20px]">
              <Segmented
                options={[
                  {
                    label: (
                      <div>
                        <span className="text-ellipsis flex items-center h-10 px-4 mt-[-2px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            size="24"
                            class="e-1upkuwl"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.5 3.5v2h3v16h-16v-3h8v-2h-10v-2h10v-2h-12v-2h4v-5h3v-2l2-2h6zm-2 0h-6v2h6z"
                            ></path>
                          </svg>
                          <div>Delivery</div>
                        </span>
                      </div>
                    ),
                    value: "Delivery",
                  },
                  {
                    label: (
                      <div>
                        <span className="text-ellipsis flex items-center h-10 px-4 mt-[-2px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            size="24"
                            class="e-1upkuwl"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 3H4v2c.801 0 1.281.32 1.698.706L3 12v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h10v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8l-2.698-6.294C18.72 5.32 19.2 5 20 5zM7.319 7 6 10.077V15h3V9h6v6h3v-4.923L16.681 7z"
                            ></path>
                          </svg>
                          <div>Pickup</div>
                        </span>
                      </div>
                    ),
                    value: "Pickup",
                  },
                ]}
              />
            </div>
            {/* <div className="flex-shrink flex rounded-[20px]">
              <button className="cursor-pointer relative box-border rounded-[20px] h-10 border-2">
                <span className="text-ellipsis flex items-center h-10 px-4 mt-[-2px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-1upkuwl"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.5 3.5v2h3v16h-16v-3h8v-2h-10v-2h10v-2h-12v-2h4v-5h3v-2l2-2h6zm-2 0h-6v2h6z"
                    ></path>
                  </svg>
                  <span>Delivery</span>
                </span>
              </button>
              <button className="cursor-pointer relative box-border rounded-[20px] h-10 border-2">
                <span className="text-ellipsis flex items-center h-10 px-4 mt-[-2px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-1upkuwl"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 3H4v2c.801 0 1.281.32 1.698.706L3 12v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h10v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8l-2.698-6.294C18.72 5.32 19.2 5 20 5zM7.319 7 6 10.077V15h3V9h6v6h3v-4.923L16.681 7z"
                    ></path>
                  </svg>
                  <span>Pickup</span>
                </span>
              </button>
            </div> */}
            <div>
              <div className="relative">
                <button className="cursor-pointer relative  bg-transparent rounded-[8px] h-14 min-w-[120px] max-w-full mx-3">
                  <span
                    className=" justify-start items-center w-full"
                    style={styles}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      size="24"
                      class="e-ozd7xs"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                      ></path>
                    </svg>
                    <span>09134</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      size="14"
                      color="systemGrayscale70"
                      class="e-s079uh"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="mx-3">
              <div className="relative">
                <button
                  href="/"
                  className="relative min-h-14 cursor-pointer"
                  onClick={() => openDeliveryTimeModal(true)}
                >
                  <span className="flex items-center ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      size="24"
                      class="e-ozd7xs"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-17v6.52l4.625 3.7-1.25 1.56L11 12.48V5z"
                      ></path>
                    </svg>
                    <span className="ml-1 text-base">Today,1pm</span>
                  </span>
                </button>
              </div>
            </div>

            <button
              className="rounded-[24px] flex relative h-8 min-w-14 py-1 px-6 justify-evenly items-center"
              onClick={() => setTotalCartItemsModal(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#343538"
                xmlns="http://www.w3.org/2000/svg"
                size="24"
                color="systemGrayscale70"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m6.84 2.68-1.27-.19-.17-.03L2.29 2 2 3.93l3.16.47 2.2 12.84h14.18v-1.95H9l-.34-2 11.92-1.58L22 4.99 6.84 2.69zm1.14 19.27a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m11.94 0a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24"
                ></path>
              </svg>
              <span className="px-2">{cartItems?.length || 0}</span>
            </button>
          </div>
        </div>
        <TotalCartItems
          totalCartItemsModal={totalCartItemsModal}
          onCancel={() => setTotalCartItemsModal(false)}
        />
      </header>
      <DeliveryTimesModal
        deliveryTimeModal={deliveryTimeModal}
        onCancel={() => openDeliveryTimeModal(false)}
      />
    </>
  );
};

export default HeaderProducts;
