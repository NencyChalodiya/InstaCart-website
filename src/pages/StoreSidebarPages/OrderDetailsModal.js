import React, { useState } from "react";

import "../DeliveryTimesModal/DeliveryTimes.css";

import { Modal } from "antd";
import { ConfigProvider } from "antd";
import { Tabs } from "antd";

import CrossSvg from "../../assets/images/cross.svg";

const OrderDetailsModal = ({
  orderDetailsModal,
  onCancel,
  getAnOrderDetail,
}) => {
  const [activeKey, setActiveKey] = useState("1");

  const statusStyle =
    getAnOrderDetail?.orderData?.payment_details?.status === "pending"
      ? { color: "red" }
      : { color: "green" };

  const OrderStatusStyle =
    getAnOrderDetail?.orderData?.order_status === "pending"
      ? { color: "red" }
      : { color: "green" };

  const handleTabChange = (key) => {
    setActiveKey(key);
  };
  console.log("getAnOrderDetail", getAnOrderDetail);

  const {
    gift_recipitent_name,
    recipitent_mobile,
    recipitent_country_code,
    gift_sender_name,
    gift_message,
  } = getAnOrderDetail?.orderData || {};

  const hasGiftDetails =
    gift_recipitent_name ||
    recipitent_country_code ||
    recipitent_mobile ||
    gift_sender_name ||
    gift_message;

  return (
    <Modal
      title={
        <div className="p-4">
          <div className="flex justify-between">
            <button
              className="cursor-pointer hover:bg-gray-100 w-5 h-7 rounded"
              onClick={onCancel}
            >
              <img src={CrossSvg} alt="cross-svg" />
            </button>

            <h2 className="pr-[275px]">Order Details</h2>
          </div>
        </div>
      }
      centered
      open={orderDetailsModal}
      footer={false}
      closable={false}
      width={700}
      className="delivery-modal"
    >
      <div className="h-full">
        <div>
          <div className="p-6 w-full">
            <div className="flex flex-col items-center text-center ">
              <img
                src="http://res.cloudinary.com/dhtkusrbf/image/upload/v1714652515/instacart/store_profile/j1ssdfssgorfax59mkxa.webp"
                alt="store-img"
                className="rounded-full w-[100px] h-[100px] border"
              />
              <h2 className="my-[10px] text-2xl font-semibold">CVS</h2>
              <p>
                Order status :{" "}
                <span style={OrderStatusStyle}>
                  {getAnOrderDetail?.orderData?.order_status}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="p-0 w-full">
          <div className="border-t">
            <div>
              <div>
                <ConfigProvider
                  theme={{
                    components: {
                      Tabs: {
                        inkBarColor: "green",
                        itemActiveColor: "green",
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
                            More Details
                          </div>
                        </button>
                      }
                    >
                      {activeKey === "1" && (
                        <div>
                          <p className="mb-3 mt-4 text-lg font-semibold pl-4">
                            Address Details:
                          </p>
                          <div className="px-4">
                            <div className="border border-gray-200 rounded-lg px-4 py-4">
                              {getAnOrderDetail?.orderData?.address?.type ===
                              "delivery" ? (
                                <>
                                  <p>
                                    <span className="font-semibold text-base">
                                      Street:
                                    </span>
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.street
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Floor:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.floor
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Bussiess Name:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.business_name
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Zip Code:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.zip_code
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Mobile Number:
                                    {getAnOrderDetail?.orderData?.country_code}
                                    {getAnOrderDetail?.orderData?.mobile_number}
                                  </p>
                                </>
                              ) : getAnOrderDetail?.orderData?.address?.type ===
                                "pickup" ? (
                                <>
                                  <p>
                                    Address:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.address
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    City:
                                    {getAnOrderDetail?.orderData?.address?.city}
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    State:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.state
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Country:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.country
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Zip-code:
                                    {
                                      getAnOrderDetail?.orderData?.address
                                        ?.zip_code
                                    }
                                  </p>
                                  <div className="my-2" />
                                  <p>
                                    Mobile Number:
                                    {getAnOrderDetail?.orderData?.country_code}
                                    {getAnOrderDetail?.orderData?.mobile_number}
                                  </p>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <p>Address information is not available.</p>
                                </>
                              )}
                            </div>
                          </div>
                          <p className="mb-3 mt-4 text-lg font-semibold pl-4">
                            Payment Details:
                          </p>
                          <div className="px-4">
                            <div className="border border-gray-200 rounded-lg px-4 py-4">
                              <p>
                                Status:
                                <span style={statusStyle}>
                                  {
                                    getAnOrderDetail?.orderData?.payment_details
                                      ?.status
                                  }
                                </span>
                              </p>
                              <div className="my-2" />
                              <p>
                                Payment Mode:
                                {
                                  getAnOrderDetail?.orderData?.payment_details
                                    ?.type
                                }
                              </p>
                              <div className="my-2" />
                              <p>
                                Actual Subtotal:
                                {
                                  getAnOrderDetail?.orderData?.payment_details
                                    ?.actual_subtotal
                                }
                              </p>
                              <div className="my-2" />
                              <p>
                                Final Subtotal:
                                {
                                  getAnOrderDetail?.orderData?.payment_details
                                    ?.final_subtotal
                                }
                              </p>
                              <div className="my-2" />
                              <p>
                                Service Fees:
                                {
                                  getAnOrderDetail?.orderData?.payment_details
                                    ?.service_fee
                                }
                              </p>
                              <div className="my-2" />
                              <p>
                                Bag Fees:
                                {
                                  getAnOrderDetail?.orderData?.payment_details
                                    ?.bag_fee
                                }
                              </p>
                              <div className="my-2" />
                              <p>
                                {getAnOrderDetail?.orderData?.address?.type ===
                                "delivery" ? (
                                  <>
                                    Delivery Fees:
                                    {
                                      getAnOrderDetail?.orderData
                                        ?.payment_details?.delivery_fee
                                    }
                                  </>
                                ) : (
                                  <>
                                    PickUp Fees:
                                    {
                                      getAnOrderDetail?.orderData
                                        ?.payment_details?.pickup_fee
                                    }
                                  </>
                                )}
                              </p>
                              <div className="my-2" />
                              <p>
                                Subtotal:
                                {
                                  getAnOrderDetail?.orderData?.payment_details
                                    ?.subtotal
                                }
                              </p>
                              <div className="my-2" />
                              <p>
                                Discount Applied:
                                {getAnOrderDetail?.orderData?.payment_details
                                  ?.discount_applied || 0}
                              </p>
                            </div>
                          </div>
                          {getAnOrderDetail?.orderData?.address?.type ===
                          "delivery" ? (
                            <>
                              <p className="mb-3 mt-4 text-lg font-semibold pl-4">
                                Available Slots Details
                              </p>
                              <div className="px-4 mb-3">
                                <div className="border border-gray-200 rounded-lg px-4 py-4">
                                  <>
                                    <p>
                                      Delivery Day:
                                      {
                                        getAnOrderDetail?.orderData
                                          ?.delivery_day
                                      }
                                    </p>
                                    <div className="my-2" />
                                    <p>
                                      Delivery Slot:
                                      {
                                        getAnOrderDetail?.orderData
                                          ?.delivery_slot
                                      }
                                    </p>
                                  </>
                                </div>
                              </div>

                              {hasGiftDetails && (
                                <>
                                  <p className="mb-3 mt-4 text-lg font-semibold pl-4">
                                    Gift Details
                                  </p>
                                  <div className="px-4">
                                    <div className="border border-gray-200 rounded-lg px-4 py-4">
                                      <p>
                                        Gift Recipitent Name:
                                        {
                                          getAnOrderDetail?.orderData
                                            ?.gift_recipitent_name
                                        }
                                      </p>
                                      <div className="my-2" />
                                      <p>
                                        Recipitent mobile Number:
                                        {
                                          getAnOrderDetail?.orderData
                                            ?.recipitent_country_code
                                        }
                                        {
                                          getAnOrderDetail?.orderData
                                            ?.recipitent_mobile
                                        }
                                      </p>
                                      <div className="my-2" />
                                      <p>
                                        Gift Sender Name:
                                        {
                                          getAnOrderDetail?.orderData
                                            ?.gift_sender_name
                                        }
                                      </p>
                                      <div className="my-2" />
                                      <p>
                                        Gift Message:
                                        {
                                          getAnOrderDetail?.orderData
                                            ?.gift_message
                                        }
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <p className="mb-3 mt-4 text-lg font-semibold pl-4">
                                Available Slots Details
                              </p>
                              <div className="px-4 mb-3">
                                <div className="border border-gray-200 rounded-lg px-4 py-4">
                                  <>
                                    <p>
                                      Pickup Day:
                                      {getAnOrderDetail?.orderData?.pickup_day}
                                    </p>
                                    <div className="my-2" />
                                    <p>
                                      Delivery Slot:
                                      {getAnOrderDetail?.orderData?.pickup_slot}
                                    </p>
                                  </>
                                </div>
                              </div>
                            </>
                          )}
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
                            Items Ordered
                          </div>
                        </button>
                      }
                    >
                      {activeKey === "2" && (
                        <div>
                          <p className="mb-3 mt-4 text-lg font-semibold pl-4">
                            {" "}
                            Product Details:
                          </p>

                          {getAnOrderDetail &&
                          getAnOrderDetail.orderData.items ? (
                            <>
                              {getAnOrderDetail.orderData.items.length > 0 ? (
                                <>
                                  {getAnOrderDetail.orderData.items.map(
                                    (item) => (
                                      <div className="px-4">
                                        <div className="flex justify-between border border-gray-200 rounded-lg px-2 py-2 mb-4">
                                          <div
                                            className="flex"
                                            key={item.product_id}
                                          >
                                            <div>
                                              <img
                                                src={item?.image}
                                                alt=""
                                                className="h-[150px] w-[150px]"
                                              />
                                            </div>
                                            <div className="ml-4">
                                              <p>{item?.title}</p>
                                              <p>Qty:{item?.quantity}</p>
                                              <p className="font-semibold">
                                                Price:{item?.price}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <>No Ordered Items</>
                              )}
                            </>
                          ) : (
                            <>Loading...</>
                          )}
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
    </Modal>
  );
};

export default OrderDetailsModal;
