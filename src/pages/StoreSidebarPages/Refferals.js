import React from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
const Refferals = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="flex">
          <div className="flex-grow flex-shrink  my-24 max-lg:my-2 ">
            <div className="absolute left-0 w-full my-10 ">
              <div className="flex gap-20 max-w-[1200px] mx-auto justify-center py-6 max-lg:flex-col max-lg:max-w-[500px] ">
                <div className="flex-grow flex-shrink  max-w-[350px] max-lg:order-2 max-lg:px-3 max-lg:max-w-[550px] ">
                  <h2 className="text-5xl leading-[50px] font-extrabold whitespace-pre-line text-[#333538] max-lg:text-xl max-lg:font-semibold ">
                    $10 for you,$10 for a friends
                  </h2>
                  <div className="max-lg:text-sm max-lg:text-gray-500">
                    <p>
                      Friends can get $10 off—you’ll get $10 when they place
                      their first order.
                      <a href="#" className="text-green-600 underline">
                        Terms Apply
                      </a>
                    </p>
                  </div>
                  <div className="mt-10 max-lg:mt-5">
                    <div className="flex justify-center mb-4">
                      <button className="cursor-pointer flex-grow flex-shrink pt-[14px] px-4 pb-4 max-w-full h-[56px] rounded-xl bg-[#F6F7F8] relative">
                        <span className="block whitespace-nowrap text-ellipsis">
                          <img
                            src="https://www.instacart.com/assets/referrals/share_channel_icons/whatsapp@3x-950e28a803c2e71900baa13c4891f03068f084d38e255df8e47ff211ef458aae.png"
                            alt="whatsapp-img"
                            className="absolute w-8 h-8 left-4 top-3"
                          />
                          <span className="">whatsapp</span>
                        </span>
                      </button>
                    </div>
                    <div className="flex justify-center mb-4">
                      <button className="cursor-pointer relative flex-grow flex-shrink max-w-full h-14 rounded-xl pt-[14px] px-4 pb-4 bg-[#10890F]">
                        <span className="block text-ellipsis whitespace-nowrap">
                          <span className="text-lg font-semibold text-white">
                            Share
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="flex justify-center mb-4">
                      <button className="cursor-pointer flex-grow flex-shrink pt-[14px] px-4 pb-4 max-w-full h-[56px] rounded-xl bg-[#F6F7F8] relative">
                        <span className="cursor-pointer  text-[#10890F]">
                          {" "}
                          <span>Copy code</span>
                        </span>
                      </button>
                    </div>
                    <hr />
                    <div>
                      <span>$0 earned</span>
                    </div>
                  </div>
                </div>

                <div className=" max-w-600px ">
                  <img
                    src="https://www.instacart.com/assets/referrals/referral_page_redesign/dweb-cash-reward-024dfffdeea29c3d4ba89833d8ef50b8965101832ccd0afb62b9ea2bea444aa9.png"
                    alt="referral_img"
                    className="rounded-xl max-w-full h-[418.17px] max-md:h-[350px] max-lg:rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refferals;
