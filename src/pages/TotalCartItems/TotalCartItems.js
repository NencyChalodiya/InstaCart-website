import React from "react";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "antd";
import { Switch } from "antd";
import { DeleteParticularItemFromCart } from "../../utils/Reducers/CartSlice";
import { DeleteTotalItems } from "../../utils/Reducers/ItemSlice";
import { Link } from "react-router-dom";
const TotalCartItems = ({ totalCartItemsModal, onCancel }) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const DeleteItemsFromCart = (items) => {
    dispatch(DeleteParticularItemFromCart(items));
    dispatch(DeleteTotalItems(items));
  };
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
          <div className="mt-2">
            <div className="h-[54px] w-full rounded-[27px] relative text-black bg-[#F6F7F8]">
              <span className="mx-2 pt-2 flex justify-between items-center">
                <div className="pl-40">Go to checkout</div>
                <div className=" bg-[#E8E9EB] rounded-[27px] w-16 h-10 flex items-center pl-2  ">
                  $00.00
                </div>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow overflow-x-hidden overflow-y-auto">
          <div className="p-3 border-t border-b">
            <div className="flex">
              <div className="mr-4">
                <div className="h-[50px] w-[50px] z-10 rounded-[50%] relative overflow-hidden border">
                  <img
                    src="https://www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
                    alt="store-img"
                    className="absolute block h-auto max-w-full m-auto "
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <span className="">Costco</span>
                <span className="flex items-center">
                  <span className="text-sm leading-4">Tomorrow, 12pm</span>
                </span>
                <div className="flex items-center cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="16"
                    class="e-15ro776"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.534 4.201 12 2 9.466 4.201 6.122 3.91l-.756 3.27-2.877 1.73L3.8 12l-1.31 3.09 2.877 1.73.756 3.27 3.344-.291L12 22l2.534-2.201 3.344.291.756-3.27 2.876-1.73L20.2 12l1.31-3.09-2.876-1.73-.756-3.27zM11.1 15.604l5.847-5.858-1.416-1.412-4.474 4.482-2.373-2.234-1.37 1.456z"
                    ></path>
                  </svg>
                  <a href="#">
                    <p className="text-[#669FD6] underline">
                      100% satisfaction guarantee
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-end min-w-16">
                $22.35
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="px-3 pt-3">
              <div>
                <button className="float-right cursor-pointer p-3 m-[-12px] ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#56595E"
                    xmlns="http://www.w3.org/2000/svg"
                    color="systemGrayscale60"
                    size="18"
                    class="e-4zleql"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14.765c0 .706-.53 1.203-1.492 1.203-.995 0-1.508-.465-1.508-1.235 0-.69.53-1.203 1.508-1.203.979 0 1.492.481 1.492 1.235M10.75 18v-8h2.5v8z"
                    ></path>
                  </svg>
                </button>
                <span>
                  <span className="text-sm leading-4 text-gray-500">
                    Add $12.65 for{" "}
                    <span className="bg-[#FDDC22] text-black">$10 off</span> at
                    Costco
                  </span>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <ul>
            {cartItems.map((items) => (
              <li key={items.id}>
                <div>
                  <div className="flex flex-col p-3">
                    <div className="flex">
                      <div className="basis-[50px] h-full mr-2">
                        <button className="relative mr-2 cursor-pointer">
                          <span className="flex items-center text-ellipsis ">
                            <img
                              src={items.offerCategoryImg}
                              className="max-w-full"
                            />
                          </span>
                        </button>
                      </div>
                      <div className="flex flex-col justify-start flex-grow ml-2">
                        <div className="flex">
                          <div className="flex flex-col justify-start flex-grow ml-2 ">
                            <div className="">
                              <button className="relative mr-2 cursor-pointer ">
                                <span className="flex items-center text-ellipsis">
                                  <h3 className="text-left text-gray-500">
                                    {items.offerCategoryName},
                                    {items.offerCategoryWeight}
                                  </h3>
                                </span>
                              </button>
                            </div>
                            <div className="mb-3 mt-[2px] text-gray-400 ">
                              each
                            </div>
                          </div>
                          <div className="relative z-10 flex items-center self-center justify-end bg-black mb-14 basis-20">
                            <div className="absolute cursor-pointer top-1 right-1">
                              <div className="inline-block rounded-[8px] border">
                                <button className="cursor-pointer flex relative items-center justify-evenly min-w-9 py-[6px] px-1 whitespace-nowrap">
                                  <span>{items.qty} ct</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="h-9 flex flex-col basis-[54px] items-end justify-center">
                            $22.35
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap cursor-pointer ml-[66px] gap-2">
                        <button className="relative mr-4 cursor-pointer ">
                          <span className="flex items-center text-ellipsis ">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="#343538"
                              xmlns="http://www.w3.org/2000/svg"
                              size="18"
                              color="systemGrayscale70"
                              aria-hidden="true"
                            >
                              <path d="M19.518 9.264a8 8 0 0 0-13.175-2.92L4 4v6h6L7.757 7.757a6 6 0 0 1 9.881 2.19zM16.243 16.243 14 14h6v6l-2.343-2.343a8 8 0 0 1-13.175-2.92l1.88-.685a6 6 0 0 0 9.88 2.19"></path>
                            </svg>
                            <span className="text-gray-500">
                              Choose replacement
                            </span>
                          </span>
                        </button>
                        <button className="relative mr-2 cursor-pointer ">
                          <span className="flex items-center text-ellipsis ">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="#343538"
                              xmlns="http://www.w3.org/2000/svg"
                              size="18"
                              color="systemGrayscale70"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 6V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4v2h-2l-1 14H6L5 8H3V6zm3-2h4a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m3 15v-8h2v8zm-2-8H9v8h2z"
                              ></path>
                            </svg>
                            <span
                              className="text-gray-500"
                              onClick={() => DeleteItemsFromCart(items)}
                            >
                              Remove
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {/* <li>
              <div>
                <div className="flex flex-col p-3">
                  <div className="flex">
                    <div className="basis-[50px] h-full mr-2">
                      <button className="relative mr-2 cursor-pointer">
                        <span className="flex items-center text-ellipsis ">
                          <img
                            src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_488f7dad-277f-41bd-8aa6-09a2410816f0.jpeg"
                            className="max-w-full"
                          />
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col justify-start flex-grow ml-2">
                      <div className="flex">
                        <div className="flex flex-col justify-start flex-grow ml-2 ">
                          <div className="">
                            <button className="relative mr-2 cursor-pointer ">
                              <span className="flex items-center text-ellipsis">
                                <h3 className="text-left text-gray-500">
                                  Plums,3lbs
                                </h3>
                              </span>
                            </button>
                          </div>
                          <div className="mb-3 mt-[2px] text-gray-400 ">
                            each
                          </div>
                        </div>
                        <div className="relative z-10 flex items-center self-center justify-end bg-black mb-14 basis-20">
                          <div className="absolute cursor-pointer top-1 right-1">
                            <div className="inline-block rounded-[8px] border">
                              <button className="cursor-pointer flex relative items-center justify-evenly min-w-9 py-[6px] px-1 whitespace-nowrap">
                                <span>3 ct</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="h-9 flex flex-col basis-[54px] items-end justify-center">
                          $22.35
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap cursor-pointer ml-[66px] gap-2">
                      <button className="relative mr-4 cursor-pointer ">
                        <span className="flex items-center text-ellipsis ">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            size="18"
                            color="systemGrayscale70"
                            aria-hidden="true"
                          >
                            <path d="M19.518 9.264a8 8 0 0 0-13.175-2.92L4 4v6h6L7.757 7.757a6 6 0 0 1 9.881 2.19zM16.243 16.243 14 14h6v6l-2.343-2.343a8 8 0 0 1-13.175-2.92l1.88-.685a6 6 0 0 0 9.88 2.19"></path>
                          </svg>
                          <span className="text-gray-500">
                            Choose replacement
                          </span>
                        </span>
                      </button>
                      <button className="relative mr-2 cursor-pointer ">
                        <span className="flex items-center text-ellipsis ">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            size="18"
                            color="systemGrayscale70"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7 6V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4v2h-2l-1 14H6L5 8H3V6zm3-2h4a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m3 15v-8h2v8zm-2-8H9v8h2z"
                            ></path>
                          </svg>
                          <span className="text-gray-500">Remove</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
          <label className="relative flex px-2 py-2 border-t border-b cursor-pointer">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#343538"
              xmlns="http://www.w3.org/2000/svg"
              size="22"
              class="e-1oxvs31"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.988 3.311q.14-.176.303-.341c.65-.65 1.5-.97 2.35-.97h.01c.85 0 1.7.32 2.35.97A3.304 3.304 0 0 1 17.514 7H21v4h-8V7h-2v4H3V7h3.462a3.304 3.304 0 0 1 .513-4.03c.65-.65 1.5-.97 2.35-.97h.01c.85 0 1.7.32 2.35.97q.164.165.303.341M3 13v9h8v-9zm10 9h8v-9h-8zM8.384 4.39a1.307 1.307 0 0 0 .002 1.853c.497.489 1.28.707 2.229.707q.18 0 .352-.01.01-.162.01-.336c0-.947-.219-1.733-.706-2.22A1.3 1.3 0 0 0 9.335 4h-.01c-.347 0-.68.128-.936.384zm7.208 0c.508.503.517 1.33-.002 1.853-.497.489-1.28.707-2.229.707q-.18 0-.352-.01A6 6 0 0 1 13 6.604c-.001-.947.218-1.733.706-2.22.255-.256.588-.384.935-.384h.01c.348 0 .68.128.936.384z"
              ></path>
            </svg>

            <span className="flex-grow flex-shrink ">
              Make this order a gift
            </span>

            <div>
              <Form>
                <Form.Item valuePropName="checked">
                  <Switch />
                </Form.Item>
              </Form>
            </div>
          </label>

          <div className="mt-2">
            <div>
              <div className="flex justify-between pt-[10px] pr-[19px] pb-[10px] pl-[22px] bg-[#FAF1E5]">
                <div className="flex items-center flex-grow">
                  <img
                    src="https://www.instacart.com/assets/express/instacart_plus_plan_change_logo_small-9ae11274d42bff775ed51aff38c4839fd9aa396bcaddb955fc34ca66235426f0.png"
                    alt="logo"
                    className="w-[40px] h-[40px] inline-block max-w-full mr-3 mt-[3px]"
                  />
                  <div>
                    <p>
                      <span>
                        <span>
                          Get a free Fitbit Inspire 3 after your first
                          Instacart+ order.
                          <span className="text-gray-600">Terms apply.</span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-center cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    data-testid="arrow-cta"
                    class="e-13r8lqh"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <footer className="p-2 w-full">
            <div className="text-center mb-2">
              <span>
                {" "}
                <span>Free Delivery</span> on this order
              </span>
            </div>
            <Link to="/store/checkout">
              <span className=" flex justify-between items-center bg-[#277D0F] rounded-[27px] h-[54px] w-full relative text-white">
                <div className="pl-40">Go to checkout</div>
                <div className=" bg-[#23720C] rounded-[27px] w-16 h-10 flex items-center pl-2 ">
                  $24.99
                </div>
              </span>
            </Link>
          </footer>
        </div>
      )}
    </Drawer>
  );
};

export default TotalCartItems;
