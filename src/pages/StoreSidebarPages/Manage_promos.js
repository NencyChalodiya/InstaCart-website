import React from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import { Link } from "react-router-dom";
const Manage_promos = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="flex bg-white">
          <div className="flex-grow flex-shrink mx-8 my-20">
            <div>
              <div className="bg-white rounded-[4px] p-12 mb-2 max-md:p-2">
                <h2 className="mb-4 text-3xl text-[#242529] font-semibold max-md:text-2xl">
                  Add a promo code or Instacart gift
                </h2>
                <h3 className="mb-8 text-gray-500 max-md:text-sm">
                  Apply Instacart promos or gift cards. Learn more about
                  <Link
                    to="/p/gift-cards"
                    target="_blank"
                    className="font-semibold text-gray-600 underline "
                  >
                    gift cards
                  </Link>
                </h3>
                <form>
                  <div className="flex  mb-4 max-md:flex-col">
                    <div className="flex-grow flex-shrink max-w-[343px] relative mb-4 max-md:max-w-[400px]">
                      <input
                        type="text"
                        placeholder="Promos code and instacart gift card"
                        className="w-full border border-gray-500 rounded-lg outline-none h-14 px-2 max-md:w-full"
                      />
                    </div>
                    <button className="rounded-xl border block px-4 h-[55px] text-center mb-4 ml-4 bg-[#BDBDBD] text-white text-lg max-md:ml-0  ">
                      Add to account
                    </button>
                  </div>
                </form>
                <p className="mt-4 text-[#36932B] max-md:text-sm">
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#36932B] underline "
                  >
                    Terms & conditions apply
                  </a>
                </p>
              </div>

              <div className="rounded-[4px] border-b mb-2 p-12 max-md:p-2">
                <h2 className="mb-4 text-3xl text-[#242529] font-semibold max-md:text-2xl ">
                  Instacart+ and gift card credits
                </h2>
                <p className="mb-4 text-gray-500 max-md:text-sm">
                  Your available credits can be applied to your next order.
                </p>
                <div className="flex p-4 bg-white shadow-md rounded-xl w-[300px] h-[78px] mb-3 max-md:w-[300px]">
                  <div className="flex-grow ">
                    <div className="mb-1 text-gray-400">$0.00</div>
                    <div className="text-base leading-5 text-gray-600">
                      Credits availbale now
                    </div>
                  </div>
                  <div className="p-1">
                    <button className="flex ">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="#C7C8CD"
                        xmlns="http://www.w3.org/2000/svg"
                        color="systemGrayscale30"
                        size="19"
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
                <a href="#" className="underline">
                  <span className="mt-2 text-sm">View credit history</span>
                </a>
              </div>

              <div>
                <div className="bg-white rounded-[4px] p-12 mb-2 max-md:p-2 ">
                  <h2 className="mb-4 text-3xl text-[#242529] font-semibold  max-md:text-2xl">
                    Promotions
                  </h2>
                  <div>
                    <div className="flex mt-10 leading-normal max-md:flex-col ">
                      <div className="inline-block float-left">
                        <img
                          src="https://www.instacart.com/assets/coupons/free-delivery-promo-icon-ee91fcb996a131ea8f48f4d598378c66fdc8bd18be9ad7e3b8cbc8d3996de8fe.png"
                          alt="promo-logo"
                          className="inline-block max-w-full w-[54px] h-[54px] max-md:hidden"
                        />
                      </div>
                      <div className="ml-5 inline-block float-left min-w-[360px]">
                        <span className="block text-xl ">
                          Free delivery (first order)
                        </span>
                        <span className="block text-[#92959B]">
                          $10 minimum order
                        </span>
                        <span className="block text-[#92959B]">
                          Expires Apr 29, 2024 at 08:38 AM PDT
                        </span>
                      </div>
                      <div className="inline-block my-auto">
                        <button className="px-8 cursor-pointer relative rounded-[27px] w-full h-[40px] bg-[#F6F7F8]">
                          <span className="text-[#343538] text-lg font-semibold">
                            Details
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage_promos;
