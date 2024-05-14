import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import "./DeliveryTimes.css";
import API from "../../services/api";

const DeliveryTimesModal = ({
  deliveryTimeModal,
  onCancel,
  deliveryDetails,
}) => {
  //console.log("StoreID----------", storeId);
  const [activeKey, setActiveKey] = useState("1");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const handleTabChange = (key) => {
    setActiveKey(key);
  };
  //console.log("sawdewasdasd", deliveryDetails);
  const handleMoreTimesClick = () => {
    setCurrentDayIndex((prevIndex) => prevIndex + 1);
  };

  // const fetchStoreDeliveryDetails = async () => {
  //   try {
  //     const response = await API.getStoreDeliveryDetails(storeId);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchStoreDeliveryDetails();
  // }, [storeId]);

  return (
    <>
      <Modal
        centered
        className="delivery-modal"
        open={deliveryTimeModal}
        onCancel={onCancel}
        footer={false}
        width={700}
      >
        <>
          <div className="h-full">
            {deliveryDetails ? (
              <div>
                {deliveryDetails.map((detail, index) => (
                  <div key={index} className="p-6 w-full">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={detail.logo}
                        alt="store-img"
                        className="rounded-full w-[100px] h-[100px] border"
                      />
                      <h2 className="my-[10px] text-2xl font-semibold">
                        {detail.store_name}
                      </h2>
                      <ul>
                        <li className="inline text-[#757575]">
                          {detail?.store_categories[0]}
                        </li>
                        <li className="inline text-[#757575]">
                          <span>.</span>
                          {detail?.store_categories[1]}
                        </li>
                        <li className="inline text-[#757575]">
                          <span>.</span>
                          {detail?.store_categories[2]}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading....</div>
            )}

            {/* <div className="p-6  w-full">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1684/3c11d90b-cf0a-4827-90df-aaea05569792.png"
                  alt="store-img"
                  className=" rounded-full w-[100px] h-[100px]"
                />
                <h2 className="my-[10px] text-2xl font-semibold">
                  Bath and Body works{" "}
                </h2>
              </div>
            </div> */}
            <div className="p-0 w-full">
              <div className="border-t">
                <div>
                  <div>
                    {/* <ul className="flex justify-center">
                    <li className="list-none cursor-pointer block  py-4 px-[7px] text-2xl font-bold text-[#939291]">
                      Info
                    </li>
                    <li className="list-none cursor-pointer block  py-4 px-[7px] text-2xl font-bold text-[#939291]">
                      Delivery Times
                    </li>
                  </ul> */}
                    <ConfigProvider
                      theme={{
                        components: {
                          Tabs: {
                            inkBarColor: "green", // Line color when tab is active
                            itemActiveColor: "green", // Text color when tab is active
                          },
                        },
                      }}
                    >
                      <Tabs
                        defaultActiveKey="1"
                        activeKey={activeKey}
                        onChange={handleTabChange}
                        centered
                      >
                        <Tabs.TabPane
                          key="1"
                          tab={
                            <button className="flex justify-center">
                              <div
                                className={`list-none cursor-pointer block py-1 px-[7px] text-2xl font-bold ${
                                  activeKey === "1"
                                    ? "text-[#319714]"
                                    : "text-[#939291]"
                                }`}
                              >
                                Info
                              </div>
                            </button>
                          }
                        >
                          {activeKey === "1" && (
                            <div>
                              <div>
                                <div className="p-6">
                                  <h3 className="font-semibold text-base m-auto pb-[10px]">
                                    Pricing
                                  </h3>
                                  {deliveryDetails ? (
                                    <>
                                      {deliveryDetails.map((detail) => (
                                        <div className="flex">
                                          <i
                                            className="icon"
                                            aria-hidden="true"
                                            style={{
                                              fontSize: "22px",
                                              position: "relative",
                                              fontFamily: "ic-icons",
                                              fontStyle: "normal",
                                              fontWeight: "normal",
                                              fontVariant: "normal",
                                              textTransform: "none",
                                              speak: "none",
                                              lineHeight: "1",
                                              padding: "5px 15px 0px 0px",
                                            }}
                                          >
                                            &#xe01d;{" "}
                                            {/* Unicode character code for the icon */}
                                          </i>
                                          <div>
                                            <strong>
                                              {
                                                detail?.pricing
                                                  ?.store_pricing_type
                                              }
                                            </strong>
                                            <p>
                                              <span>
                                                <span className="font-normal">
                                                  BATH & BODY WORKS/INSTACART
                                                </span>
                                                <br />
                                                <span className="font-normal">
                                                  RETURN, PRICING & PROMOTIONS
                                                  POLICY
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                <span className="font-normal">
                                                  RETURNS
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                <span className="font-normal">
                                                  {
                                                    detail?.pricing
                                                      ?.store_pricing_description
                                                  }
                                                </span>
                                                <br />
                                                <br />
                                                <span className="font-normal">
                                                  {
                                                    detail?.pricing
                                                      ?.delivery_fee
                                                  }
                                                  {/* AT SELECT US STORES, YOU WILL
                                                  BE LIMITED TO $250 IN
                                                  NON-RECEIPTED RETURNS OR
                                                  EXCHANGES WITHIN A 90-DAY
                                                  PERIOD. These limits do not
                                                  apply to the return or
                                                  exchange of defective
                                                  merchandise. At select US
                                                  stores, Bath & Body Works and
                                                  White Barn will use an
                                                  electronic system to record,
                                                  monitor, analyze, and limit
                                                  returns and exchanges. At
                                                  select US stores, a
                                                  government-issued
                                                  identification (“ID”) is
                                                  required in order to track
                                                  returns and exchanges and Bath
                                                  & Body Works and White Barn
                                                  will electronically scan or
                                                  manually collect information
                                                  from this ID. */}
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                <span className="font-normal">
                                                  {detail?.pricing?.service_fee}
                                                  {/* Instacart Receipt – With an
                                                  Instacart receipt, merchandise
                                                  credit will be issued based on
                                                  the price paid for the
                                                  product. */}
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                <span className="font-normal">
                                                  {detail?.pricing?.bag_fee}
                                                  {/* No Receipt – Without a
                                                  receipt, merchandise credit
                                                  will be issued based on the
                                                  lowest selling price of the
                                                  item, factoring in all
                                                  promotions, discounts, offers,
                                                  free items (as part of a
                                                  qualifying purchase), and
                                                  coupons that may have applied. */}
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                {/* <span className="font-normal">
                                                  Additional Terms and
                                                  Conditions — As an alternative
                                                  to merchandise credit,
                                                  customers are welcome to
                                                  exchange product for a
                                                  replacement that is of the
                                                  same type and the same ticket
                                                  price as the product being
                                                  returned (for example,
                                                  exchanging a three-wick candle
                                                  for a different three-wick
                                                  candle with the same ticket
                                                  price). To make sure that we
                                                  handle every return or
                                                  exchange with reasonable
                                                  fairness, we will not allow
                                                  the return or exchange of
                                                  product showing excessive wear
                                                  and tear (for example, if the
                                                  product looks significantly
                                                  used) or product with a label
                                                  that has been intentionally
                                                  defaced. Whether a product
                                                  shows excessive wear or tear
                                                  or is returned in new, gently
                                                  used or defective condition
                                                  (or whether a return otherwise
                                                  complies with this policy)
                                                  will be determined by Bath &
                                                  Body Works and White Barn in
                                                  their sole discretion. All
                                                  returns, exchanges and price
                                                  adjustments must be made in
                                                  the country of original
                                                  purchase. Policies may vary by
                                                  store locale. The policy
                                                  posted in the store of return
                                                  governs. Bath & Body Works and
                                                  White Barn reserve the right
                                                  to modify or withdraw this
                                                  policy and the 100%
                                                  satisfaction guarantee at any
                                                  time with or without notice.
                                                </span> */}
                                                {/* <br />
                                                <span className="font-normal"></span>
                                                <br /> */}
                                                {/* <span className="font-normal">
                                                  PRICING
                                                </span> */}
                                                {/* <br />
                                                <span className="font-normal"></span>
                                                <br /> */}
                                                {/* <span className="font-normal">
                                                  Pricing as marked on
                                                  Instacart. Pricing may vary
                                                  between Bath & Body Works or
                                                  White Barn stores,
                                                  www.bathandbodyworks.com, and
                                                  purchases made from Instacart.
                                                  Offers and coupons available
                                                  or applicable in Bath & Body
                                                  Works or White Barn stores or
                                                  on www.bathandbodyworks.com
                                                  may not be available when
                                                  purchasing products from
                                                  Instacart. My Bath & Body
                                                  Works Rewards Program members
                                                  will not be able to earn
                                                  points or redeem Rewards
                                                  offers on purchases made from
                                                  Instacart and price
                                                  adjustments will not be
                                                  available on purchases made
                                                  from Instacart.
                                                </span> */}
                                                {/* <br />
                                                <span className="font-normal"></span>
                                                <br /> */}
                                                {/* <span className="font-normal">
                                                  PROMOTIONS
                                                </span> */}
                                                {/* <br />
                                                <span className="font-normal"></span>
                                                <br /> */}
                                                {/* <span className="font-normal">
                                                  The promotional offers
                                                  detailed below may be offered
                                                  from time to time on Bath &
                                                  Body Works products purchased
                                                  from Instacart. Promotions
                                                  will only be available and
                                                  effective when listed
                                                  underneath the applicable
                                                  product on Instacart.com or on
                                                  the Instacart mobile app. The
                                                  following terms and conditions
                                                  apply to the promotions:
                                                </span> */}
                                                {/* <br />
                                                <span className="font-normal"></span>
                                                <br /> */}
                                                {/* <span className="font-normal">
                                                  Select Hand Soaps, 4 for $24:
                                                  Add 4 hand soaps to cart and
                                                  the promotion will
                                                  automatically apply during
                                                  checkout.*
                                                </span> */}
                                                {/* <br /> */}
                                                {/* <span className="font-normal">
                                                  Select Body Care, Buy 3, Get 1
                                                  Free: Add 4 select body care
                                                  items to cart and the
                                                  promotion will automatically
                                                  apply during checkout. Free
                                                  item is the lowest eligible
                                                  priced item in the cart at
                                                  checkout. Price of the free
                                                  items will be prorated as
                                                  discount across all eligible
                                                  items.*
                                                </span> */}
                                                {/* <br /> */}
                                                {/* <span className="font-normal">
                                                  Select Wallflower Bulbs, 5 for
                                                  $30: Add 5 wallflower bulbs to
                                                  cart and the promotion will
                                                  automatically apply during
                                                  checkout.*
                                                </span> */}
                                                {/* <br /> */}
                                                {/* <span className="font-normal">
                                                  Select 3-Wick Candles, 2 for
                                                  $40: Add 2 3-wick candles to
                                                  cart and the promotion will
                                                  automatically apply during
                                                  checkout.*
                                                </span> */}
                                                {/* <br />
                                                <span className="font-normal"></span>
                                                <br /> */}
                                                {/* <span className="font-normal">
                                                  *Promotion Details: While
                                                  supplies last. Valid only in
                                                  the United States for orders
                                                  from a single Bath & Body
                                                  Works store that are purchased
                                                  through Instacart.com or the
                                                  Instacart mobile app.
                                                  Customers must have a valid
                                                  account on Instacart.com with
                                                  a valid form of accepted
                                                  payment on file to receive
                                                  promotional pricing.
                                                  Deliveries are subject to
                                                  availability. Delivery charges
                                                  and taxes apply. Select items
                                                  only; exclusions may apply.
                                                  Single item at regular price.
                                                  Not redeemable for cash or on
                                                  sale merchandise. Offer may
                                                  not be applied to previously
                                                  purchased merchandise. Offer
                                                  subject to adjustment due to
                                                  returns, cancellations, and
                                                  exchanges. No rain checks
                                                  issued. Other restrictions may
                                                  apply. Offer subject to change
                                                  without notice. Refer to the
                                                  Return Policy listed above for
                                                  more information.
                                                </span> */}
                                                <br />
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  ) : (
                                    <div>Loading....</div>
                                  )}
                                </div>
                                <div className="p-6 mb-2 border-b border-t ">
                                  <div>
                                    <h3 className="pb-[10px] font-normal text-base">
                                      Return Info
                                    </h3>
                                    {deliveryDetails ? (
                                      <>
                                        {deliveryDetails.map((detail) => (
                                          <div className="flex">
                                            <i
                                              className="icon"
                                              aria-hidden="true"
                                              style={{
                                                fontSize: "22px",
                                                position: "relative",
                                                fontFamily: "ic-icons",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontVariant: "normal",
                                                textTransform: "none",
                                                speak: "none",
                                                lineHeight: "1",
                                                padding: "5px 15px 0px 0px",
                                              }}
                                            >
                                              &#xe01d;{" "}
                                              {/* Unicode character code for the icon */}
                                            </i>
                                            <div>
                                              <strong>
                                                {
                                                  detail?.return_policy
                                                    ?.return_policy_title
                                                }
                                              </strong>
                                              <p>
                                                <span>
                                                  <span className="font-normal">
                                                    {
                                                      detail?.return_policy
                                                        ?.decrtiption
                                                    }
                                                    {/* Items purchased through
                                                    Instacart can only be
                                                    returned in-store. Go to the
                                                    customer service desk at any
                                                    Bath & Body Works retail
                                                    store and present your
                                                    transaction barcode, if
                                                    available, or Instacart
                                                    receipt, if not. Your
                                                    barcode or receipt will be
                                                    accessible in your order
                                                    history page. Most purchases
                                                    are eligible for exchange or
                                                    refund within 180 days. Bath
                                                    & Body Works may ask you to
                                                    show a government-issued
                                                    photo ID. For more details,
                                                    see Bath & Body Works's full
                                                    in-store return policy for
                                                    details. */}
                                                  </span>
                                                  <a
                                                    href="#"
                                                    className="text-[#319714]"
                                                  >
                                                    Return Policy
                                                  </a>
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        ))}
                                      </>
                                    ) : (
                                      <div>Loading...</div>
                                    )}
                                  </div>
                                </div>
                                <div className="p-6 mb-2 border-b border-t">
                                  <div>
                                    <div>
                                      <h3 className="uppercase text-base">
                                        Next delivery time
                                      </h3>
                                      {deliveryDetails ? (
                                        <>
                                          {deliveryDetails.map((detail) => (
                                            <div className="text-2xl font-semibold">
                                              {
                                                detail?.delivery_time
                                                  ?.next_delivery?.day
                                              }
                                              ,
                                              {
                                                detail?.delivery_time
                                                  ?.next_delivery?.timeSlot
                                              }
                                            </div>
                                          ))}
                                        </>
                                      ) : (
                                        <div>Loading</div>
                                      )}

                                      <button className="cursor-pointer rounded-[4px] inline-flex items-center pr-4 text-[#319714] text-xl font-semibold">
                                        <span>All delivery times</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-6 mb-2 border-b border-t">
                                  <div>
                                    <h3 className="text-base pb-2">About</h3>
                                    {deliveryDetails ? (
                                      <>
                                        {deliveryDetails.map((detail) => (
                                          <div className="flex">
                                            <i
                                              className="icon"
                                              aria-hidden="true"
                                              style={{
                                                fontSize: "22px",
                                                position: "relative",
                                                fontFamily: "ic-icons",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontVariant: "normal",
                                                textTransform: "none",
                                                speak: "none",
                                                lineHeight: "1",
                                                padding: "5px 15px 0px 0px",
                                              }}
                                            ></i>
                                            <div>
                                              <p>
                                                {detail?.about?.description}

                                                <span className="font-bold text-[#319714] cursor-pointer">
                                                  ...more
                                                </span>
                                              </p>

                                              <div className="pt-[15px]  ">
                                                {detail?.about
                                                  ?.is_delivery_avail &&
                                                detail?.about
                                                  ?.is_pickup_avail ? (
                                                  <>
                                                    Delivery and Pickup
                                                    Available
                                                  </>
                                                ) : detail?.about
                                                    ?.is_delivery_avail ? (
                                                  <>Delivery Available</>
                                                ) : detail?.about
                                                    ?.is_pickup_avail ? (
                                                  <>Pickup Available</>
                                                ) : (
                                                  <>
                                                    Delivery and Pickup Not
                                                    Available
                                                  </>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </>
                                    ) : (
                                      <div>Loading...</div>
                                    )}
                                  </div>
                                </div>
                                <div className="p-6 mb-2 border-b border-t">
                                  <div>
                                    <h3 className="text-base pb-2">Hours</h3>
                                    <ul>
                                      {deliveryDetails ? (
                                        <>
                                          {deliveryDetails.map((detail) => (
                                            <>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Sunday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Sunday}
                                                </div>
                                              </li>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Monday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Monday}
                                                </div>
                                              </li>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Tuesday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Tuesday}
                                                </div>
                                              </li>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Wednesday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Wednesday}
                                                </div>
                                              </li>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Thursday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Thursday}
                                                </div>
                                              </li>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Friday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Friday}
                                                </div>
                                              </li>
                                              <li className="flex pb-[10px]">
                                                <div className="flex-grow">
                                                  Saturday
                                                </div>
                                                <div>
                                                  {detail?.hours?.Saturday}
                                                </div>
                                              </li>
                                            </>
                                          ))}
                                        </>
                                      ) : (
                                        <div>Loading...</div>
                                      )}
                                      {/* <li className="flex pb-[10px]">
                                        <div className="flex-grow">Monday</div>
                                        <div>9-am - 8pm</div>
                                      </li>
                                      <li className="flex pb-[10px]">
                                        <div className="flex-grow">Tuesday</div>
                                        <div>9-am - 8pm</div>
                                      </li>
                                      <li className="flex pb-[10px]">
                                        <div className="flex-grow">
                                          Wednesday
                                        </div>
                                        <div>9-am - 8pm</div>
                                      </li>
                                      <li className="flex pb-[10px]">
                                        <div className="flex-grow">
                                          Thursday
                                        </div>
                                        <div>9-am - 8pm</div>
                                      </li>
                                      <li className="flex pb-[10px]">
                                        <div className="flex-grow">Friday</div>
                                        <div>9-am - 8pm</div>
                                      </li>
                                      <li className="flex pb-[10px]">
                                        <div className="flex-grow">
                                          Saturday
                                        </div>
                                        <div>9-am - 8pm</div>
                                      </li>
                                      <li className="flex pb-[10px]">
                                        <div className="flex-grow">Sunday</div>
                                        <div>9-am - 8pm</div>
                                      </li> */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Tabs.TabPane>

                        <Tabs.TabPane
                          key="2"
                          tab={
                            <button className="flex justify-center">
                              <div
                                className={`list-none cursor-pointer block py-1 px-[7px] text-2xl font-bold ${
                                  activeKey === "2"
                                    ? "text-[#319714]"
                                    : "text-[#939291]"
                                }`}
                              >
                                Delivery Times
                              </div>
                            </button>
                          }
                        >
                          {activeKey === "2" && (
                            <div>
                              {/* Content for tab 2 */}
                              <div className="px-12">
                                <div>
                                  <ul className="list-disc">
                                    {deliveryDetails ? (
                                      <>
                                        {deliveryDetails?.delivery_timings?.map(
                                          (detail) => (
                                            <li
                                              className="pb-2"
                                              key={detail.day}
                                            >
                                              <h3 className="text-base leading-5 underline">
                                                {detail.day}
                                              </h3>
                                              <ul>
                                                {detail.slots.map(
                                                  (slot, index) => (
                                                    <li key={index}>
                                                      <div className="flex justify-between py-4">
                                                        <div>
                                                          {slot.time_slot}
                                                        </div>
                                                        <div className="flex">
                                                          <div>
                                                            {slot.price}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </li>
                                          )
                                        )}
                                      </>
                                    ) : (
                                      <div>Loading...</div>
                                    )}
                                    {/* <li className="pb-2">
                                      <h3 className="text-base leading-5 underline">
                                        Today
                                      </h3>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="flex justify-between py-4">
                                        <div className="">11am - 1pm</div>
                                        <div className="flex">
                                          <div>
                                            <div>FREE</div>
                                          </div>
                                        </div>
                                      </div>
                                    </li> */}
                                    <button className="cursor-pointer rounded-[4px] flex items-center px-4 h-10 w-full justify-center text-[#319714] text-lg font-bold">
                                      More times
                                    </button>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </Tabs.TabPane>
                      </Tabs>
                    </ConfigProvider>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default DeliveryTimesModal;
