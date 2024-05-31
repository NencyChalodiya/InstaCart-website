import React from "react";

import SideArrowBoldedSvg from "../../assets/images/sideArrowBolded.svg";

const CartEmpty = () => {
  return (
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
                <span className="flex text-sm leading-4 ">Personal Cart</span>
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
                <img src={SideArrowBoldedSvg} alt="sideArrow" />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="fixed bottom-0 left-[555px] p-2 bg-white w-[500px] ">
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
  );
};

export default CartEmpty;
