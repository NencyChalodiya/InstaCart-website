import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import "./DeliveryTimes.css";
import API from "../../services/api";
import Loader from "react-js-loader";
const DeliveryTimesModal = ({
  deliveryTimeModal,
  onCancel,
  deliveryDetails,
  isLoading,
}) => {
  //console.log("StoreID----------", storeId);
  const [activeKey, setActiveKey] = useState("1");
  const [currentDayIndex, setCurrentDayIndex] = useState(1);

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const handleMoreTimesClick = () => {
    setCurrentDayIndex((prevIndex) => prevIndex + 1);
  };

  //console.log("sawdewasdasd", deliveryDetails);

  //console.log("deliverygd", deliveryDetails);
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
              <div>
                {isLoading && (
                  <div className="ml-2 h-5 w-5 mt-[-20px]">
                    <Loader size={20} />
                  </div>
                )}
              </div>
            )}

            <div className="p-0 w-full">
              <div className="border-t">
                <div>
                  <div>
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
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                <span className="font-normal">
                                                  {detail?.pricing?.service_fee}
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />
                                                <span className="font-normal">
                                                  {detail?.pricing?.bag_fee}
                                                </span>
                                                <br />
                                                <span className="font-normal"></span>
                                                <br />

                                                <br />
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  ) : (
                                    <div>
                                      {isLoading && (
                                        <div className="ml-2 h-5 w-5 mt-[-20px]">
                                          <Loader size={20} />
                                        </div>
                                      )}
                                    </div>
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
                                      <div>
                                        {isLoading && (
                                          <div className="ml-2 h-5 w-5 mt-[-20px]">
                                            <Loader size={20} />
                                          </div>
                                        )}
                                      </div>
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
                                                  ?.next_delivery?.priority?.day
                                              }
                                              ,
                                              {
                                                detail?.delivery_time
                                                  ?.next_delivery?.priority
                                                  ?.time_slot
                                              }
                                            </div>
                                          ))}
                                        </>
                                      ) : (
                                        <div>
                                          {isLoading && (
                                            <div className="ml-2 h-5 w-5 mt-[-20px]">
                                              <Loader size={20} />
                                            </div>
                                          )}
                                        </div>
                                      )}

                                      <button
                                        className="cursor-pointer rounded-[4px] inline-flex items-center pr-4 text-[#319714] text-xl font-semibold"
                                        onClick={() => setActiveKey("2")}
                                      >
                                        <span>All delivery times</span>
                                        <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 24 24"
                                          fill="#343538"
                                          xmlns="http://www.w3.org/2000/svg"
                                          size="12"
                                          data-testid="chevron-cta"
                                          class="e-1hchw5q"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                                          ></path>
                                        </svg>
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
                                      <div>
                                        {isLoading && (
                                          <div className="ml-2 h-5 w-5 mt-[-20px]">
                                            <Loader size={20} />
                                          </div>
                                        )}
                                      </div>
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
                                        <div>
                                          {isLoading && (
                                            <div className="ml-2 h-5 w-5 mt-[-20px]">
                                              <Loader size={20} />
                                            </div>
                                          )}
                                        </div>
                                      )}
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
                                    {deliveryDetails[0] &&
                                    deliveryDetails[0].delivery_time &&
                                    deliveryDetails[0].delivery_time
                                      .delivery_timings ? (
                                      <>
                                        {deliveryDetails[0].delivery_time.delivery_timings
                                          .slice(0, currentDayIndex)
                                          .map((detail) => (
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
                                          ))}
                                      </>
                                    ) : (
                                      <div>
                                        {isLoading && (
                                          <div className="ml-2 h-5 w-5 mt-[-20px]">
                                            <Loader size={20} />
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </ul>
                                  {currentDayIndex <
                                    (deliveryDetails[0]?.delivery_time
                                      ?.delivery_timings?.length || 0) && (
                                    <button
                                      className="cursor-pointer rounded-[4px] flex items-center px-4 h-10 w-full justify-center text-[#319714] text-lg font-bold hover:bg-gray-100"
                                      onClick={handleMoreTimesClick}
                                    >
                                      More times
                                    </button>
                                  )}
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
