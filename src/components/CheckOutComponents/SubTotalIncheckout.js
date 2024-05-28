import React, { useContext } from "react";
import { TotalContext } from "../../pages/TotalContext/TotalContext";
import MenuSvg from "../../assets/images/menuSvg.svg";
const SubTotalIncheckout = ({ total }) => {
  // const { total } = useContext(TotalContext);
  // console.log("TotalItems", total);
  return (
    <div className="col-span-2">
      <div className="relative">
        <div className="px-4 pt-8 pb-2">
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
                  <img src={MenuSvg} alt="menu-svg" />
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
                          <span>{total?.actual_item_subtotal}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span>
                            <span>Final Item subTotal</span>
                          </span>
                        </div>
                        <div>
                          <span>{total?.final_item_subtotal}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span>
                            <span>Service Fees</span>
                          </span>
                        </div>
                        <div>
                          <span>{total?.service_fee}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span>
                            <span>Pickup fees</span>
                          </span>
                        </div>
                        <div>
                          <span>{total?.pickup_fee}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span>
                            <span>Bag fees</span>
                          </span>
                        </div>
                        <div>
                          <span>{total?.bag_fee}</span>
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
                          <span>{total?.discount_applied}</span>
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
                          <span>{total?.subtotal}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div>
                <div className="px-4 pb-3">
                  <div>
                    <div className="mb-1 mt-4">
                      <span className="text-sm">
                        You saved $20.00 on this order
                      </span>
                    </div>
                    <div>
                      <span className="text-sm">
                        Savings may come from deals, promos, or loyalty pricing.
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="px-4 pb-3">
                <div>
                  <div className="mb-1 mt-1">
                    <span className="text-sm">
                      Pay in 4 installments of $10.18 with Klarna
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SubTotalIncheckout;
