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
        <div className="grid gap-8 mx-auto grid-cols-[minmax(0px,_1fr)_312px] py-8 max-w-[1040px] bg-white ">
          <div className="row-start-1 row-end-3 col-start-1 col-end-2">
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
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
