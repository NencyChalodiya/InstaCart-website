import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="w-full h-[57px] z-10 border-b bg-white flex justify-center items-center">
        <a href="/store">
          <img
            src="https://www.instacart.com/image-server/x30/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png"
            alt="instacart-logo"
          />
        </a>
      </div>

      <div className="bg-[#F7F7F7]">
        <div className="grid grid-rows-3 grid-flow-col gap-3 mx-auto py-8 max-w-[1040px] bg-white ">
          <div className="row-span-3">
            <div className="relative ">
              <div>
                <div>
                  <div className="px-4 pt-4">
                    <div className="flex mx-3 h-10 rounded-[20px]">
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
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 cursor-pointer ">
                    <div>
                      <div className="absolute flex items-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="#343538"
                          xmlns="http://www.w3.org/2000/svg"
                          size="32"
                          color="systemGrayscale70"
                          aria-hidden="true"
                          class="e-3pclmc"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                          ></path>
                        </svg>
                        <div className="mx-3 flex-grow min-h-11 flex flex-col justify-center">
                          <h2>8008 Herb Kelleher Way, texas</h2>
                          <div>Dallas, TX 75235</div>
                        </div>
                        <button className="h-8 w-8 cursor-pointer pl-96">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="#C7C8CD"
                            xmlns="http://www.w3.org/2000/svg"
                            color="systemGrayscale30"
                            size="32"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 mt-10 border-b  ">
                    <div>
                      <div>
                        <div className="relative flex items-center">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            size="32"
                            color="systemGrayscale70"
                            aria-hidden="true"
                            class="e-3pclmc"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="m17 3 4 8v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2H7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9l4-8zm.764 6H6.236l2-4h7.528zM19 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                            ></path>
                          </svg>
                          <div className="mx-3 flex-grow">
                            <h2>Delivery Instructions</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <form>
                        <div>
                          <div className="relative">
                            <textarea
                              className="px-3 pt-5 pb-3 w-full rounded-xl border"
                              placeholder="Add access code"
                              rows={3}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between py-3 relative cursor-pointer">
                          <div className="flex pr-1">
                            <div className="inline-block relative h-6 w-6 mr-2 mt-2">
                              <input
                                type="checkbox"
                                className="absolute h-full w-full "
                              />
                            </div>
                            <label>
                              <span className="flex flex-col mt-2">
                                <span>Leave at my door</span>
                              </span>
                            </label>
                          </div>
                        </div>
                        <p className="py-3 px-2 rounded bg-[#F6F7F8] text-xs">
                          By selecting this option you accept full
                          responsibility for your order after it has been
                          delivered unattended, including any loss due to theft
                          or damage due to temperature sensitivity.
                        </p>
                        <div className="mt-2">
                          <button className="px-4 cursor-pointer relative rounded-[27px] bg-[#2C890F] h-[54px] w-full text-white text-lg font-semibold">
                            <span>Save and continue</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="#343538"
                          xmlns="http://www.w3.org/2000/svg"
                          size="32"
                          color="systemGrayscale70"
                          aria-hidden="true"
                          class="e-3pclmc"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-17v6.52l4.625 3.7-1.25 1.56L11 12.48V5z"
                          ></path>
                        </svg>
                        <div className="mx-3 flex-grow">
                          <h2>Delivery Time</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="#343538"
                          xmlns="http://www.w3.org/2000/svg"
                          size="32"
                          color="systemGrayscale70"
                          aria-hidden="true"
                          class="e-3pclmc"
                        >
                          <path d="M7 4H2c0 11 7 18 18 18v-5l-4-2-2 2c-3-1-6-4-7-7l2-2z"></path>
                          <path d="M14 6h2.586l-4.293 4.293 1.414 1.414L18 7.414V10h2V4h-6z"></path>
                        </svg>
                        <div className="mx-3 flex-grow">
                          <h2>Mobile Number</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div className="relative flex items-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="#343538"
                        xmlns="http://www.w3.org/2000/svg"
                        size="32"
                        color="systemGrayscale70"
                        aria-hidden="true"
                        class="e-3pclmc"
                      >
                        <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2H2z"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 10h20v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm9 4H5v2h6z"
                        ></path>
                      </svg>
                      <div className="mx-3 flex-grow">
                        <h2>Pay with</h2>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="mb-3 cursor-pointer relative h-auto w-full ">
                        <span className="block">
                          <div className="block border box-border rounded-[12px] p-3">
                            <div className="flex justify-start items-center">
                              <div className="flex justify-start items-center">
                                <img
                                  src="https://www.instacart.com/assets/buyflow/ic-card-add-3e8e8e52303c205dbe326861bac6c4ebead31319ea6ae384085954482b78254b.png"
                                  alt="add-payment-logo"
                                  className="w-10 h-auto mr-2"
                                />
                                <p className="mr-4">Choose a payment method</p>
                              </div>
                              <span className="flex ml-auto">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="#56595E"
                                  xmlns="http://www.w3.org/2000/svg"
                                  size="24"
                                  color="systemGrayscale60"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </span>
                      </button>
                      <div className="mb-4">
                        <div className="relative rounded-[12px] max-w-full bg-[#FEF5EB]">
                          <button
                            className="flex justify-between cursor-pointer rounded-[12px] text-left"
                            style={{ width: "calc(100% - 6px)" }}
                          >
                            <div
                              className="py-3 pl-4"
                              style={{ maxWidth: "calc(100% - 128px)" }}
                            >
                              <div className="mb-3 max-w-[328px] ">
                                <p className="text-lg leading-5 font-bold">
                                  $15 off your first 2 orders when you pay with
                                  Klarna
                                </p>
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <p className="px-2 pb-[2px] bg-[#343538] text-white rounded-[32px] ">
                                    Apply code
                                  </p>
                                  <p className="ml-2">Terms apply</p>
                                </div>
                              </div>
                            </div>
                            <div className="rounded-r-lg items-center flex self-center">
                              <img
                                src="https://www.instacart.com/assets/creditcards/klarna-banner-3-ad19a0615c30d65c21197cc03f4b4bb15c5fe95f77a4da499f53fa2a134dd5e7.png"
                                alt="img-1"
                                className="inline-block max-w-full rounded-[4px] h-full "
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="#343538"
                          xmlns="http://www.w3.org/2000/svg"
                          size="32"
                          color="systemGrayscale70"
                          aria-hidden="true"
                          class="e-3pclmc"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14.765c0 .706-.53 1.203-1.492 1.203-.995 0-1.508-.465-1.508-1.235 0-.69.53-1.203 1.508-1.203.979 0 1.492.481 1.492 1.235M10.75 18v-8h2.5v8z"
                          ></path>
                        </svg>
                        <div className="mx-3 flex-grow">
                          <h2>Share with Bath & Body Works</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="#343538"
                          xmlns="http://www.w3.org/2000/svg"
                          size="32"
                          color="systemGrayscale70"
                          aria-hidden="true"
                          class="e-3pclmc"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.988 3.311q.14-.176.303-.341c.65-.65 1.5-.97 2.35-.97h.01c.85 0 1.7.32 2.35.97A3.304 3.304 0 0 1 17.514 7H21v4h-8V7h-2v4H3V7h3.462a3.304 3.304 0 0 1 .513-4.03c.65-.65 1.5-.97 2.35-.97h.01c.85 0 1.7.32 2.35.97q.164.165.303.341M3 13v9h8v-9zm10 9h8v-9h-8zM8.384 4.39a1.307 1.307 0 0 0 .002 1.853c.497.489 1.28.707 2.229.707q.18 0 .352-.01.01-.162.01-.336c0-.947-.219-1.733-.706-2.22A1.3 1.3 0 0 0 9.335 4h-.01c-.347 0-.68.128-.936.384zm7.208 0c.508.503.517 1.33-.002 1.853-.497.489-1.28.707-2.229.707q-.18 0-.352-.01A6 6 0 0 1 13 6.604c-.001-.947.218-1.733.706-2.22.255-.256.588-.384.935-.384h.01c.348 0 .68.128.936.384z"
                          ></path>
                        </svg>
                        <div className="mx-3 flex-grow">
                          <h2>Make it a gift</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="#343538"
                          xmlns="http://www.w3.org/2000/svg"
                          size="32"
                          color="systemGrayscale70"
                          aria-hidden="true"
                          class="e-3pclmc"
                        >
                          <path
                            d="M14.553 9.873c.592-.85 1.233-1.243 2.134-1.243 1.358 0 2.262 1.002 2.267 2.236.004 1.057-.496 1.745-1.547 2.422l-6.597 4.244-6.597-4.244c-1.05-.677-1.55-1.365-1.546-2.422.004-1.234.909-2.236 2.267-2.236.9 0 1.542.392 2.134 1.243l1.706 2.448V5.333h4.072v6.988zM17.936 25.665c.008-4.194-3.206-7.116-7.127-7.116s-7.133 2.924-7.125 7.116z"
                            fill="#750046"
                          ></path>
                          <path
                            d="M29.333 15.879H25.03v-4.297h-3.462v4.297h-4.302v3.425h4.302v4.297h3.462v-4.297h4.302z"
                            fill="#EC269A"
                          ></path>
                        </svg>
                        <div className="mx-3 flex-grow">
                          <h2>Instacart+</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <button className="px-4 h-[54px] w-full rounded-[27px] relative bg-[#F6F7F8]">
                      <span className="mx-2">Continue</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative">
              <div>
                <div>
                  <div className="p-2">
                    <button className="px-4 h-[54px] w-full rounded-[27px] relative bg-[#F6F7F8]">
                      <span className="mx-2">Continue</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-4 pb-2">
                <div className="flex items-center mb-2">
                  <img
                    src="https://www.instacart.com/image-server/48x48/www.instacart.com/assets/checkout/quality_guarantee/ribbon-a93eef7e76db2d7610608da27c5a9f5cb489ba37932c9624309ea1756817018e.png"
                    alt="discount-logo"
                  />
                  <div className="flex flex-col">
                    <p className="text-[#2b78c6] text-sm leading-4">
                      100% satisfaction gaurantee
                    </p>
                    <div>
                      <p className="mr-[2px] inline text-sm leading-4 font-medium">
                        Place your order with peace of mind.
                      </p>
                      <button className="align-middle">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#C7C8CD"
                          xmlns="http://www.w3.org/2000/svg"
                          size="16"
                          color="systemGrayscale30"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14.765c0 .706-.53 1.203-1.492 1.203-.995 0-1.508-.465-1.508-1.235 0-.69.53-1.203 1.508-1.203.979 0 1.492.481 1.492 1.235M10.75 18v-8h2.5v8z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      <div className="pt-2 pb-1"></div>
                      <div className="py-3 px-4 ">
                        <ul className="p-0 m-0 list-none">
                          <li>
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <span>
                                  <span>Item subtotal</span>
                                </span>
                              </div>
                              <div>
                                <span>$53.90</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <span>
                                  <span>Service fees</span>
                                  <button className="align-middle">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="#C7C8CD"
                                      xmlns="http://www.w3.org/2000/svg"
                                      size="16"
                                      color="systemGrayscale30"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14.765c0 .706-.53 1.203-1.492 1.203-.995 0-1.508-.465-1.508-1.235 0-.69.53-1.203 1.508-1.203.979 0 1.492.481 1.492 1.235M10.75 18v-8h2.5v8z"
                                      ></path>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <div>
                                <span>$4.01</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <span>
                                  <span>Est.tax</span>
                                </span>
                              </div>
                              <div>
                                <span>$2.80</span>
                              </div>
                            </div>
                          </li>
                          <li className="border-b">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <span>
                                  <span>Discount applied</span>
                                </span>
                              </div>
                              <div>
                                <span>-$20.00</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <span>
                                  <span>Subtotal</span>
                                </span>
                              </div>
                              <div>
                                <span>$40.71</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pb-3">
                        <div>
                          <div className="mb-1 mt-4">
                            <span className="text-sm">
                              You saved $20.00 on this order
                            </span>
                          </div>
                          <div>
                            <span className="text-sm">
                              Savings may come from deals, promos, or loyalty
                              pricing.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-3">
                      <div>
                        <div className="mb-1 mt-1">
                          <span className="text-sm">
                            Pay in 4 installments of $10.18 with Klarna
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
