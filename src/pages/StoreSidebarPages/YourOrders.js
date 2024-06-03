import React, { useState, useEffect } from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import InnerSideBarData from "./InnerSideBarData";
import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import API from "../../services/api";
import OrderDetailsModal from "./OrderDetailsModal";
const { TabPane } = Tabs;
const YourOrders = () => {
  const customTabStyle = {
    padding: "2px 45px",
    fontSize: "20px",
  };

  const [orderType, setOrderType] = useState("current");
  const [activeTab, setActiveTab] = useState("delivery");
  const [getorder, setGetOrder] = useState([]);
  const [orderDetailsModal, openOrderDetailsModal] = useState(false);
  const [getAnOrderDetail, setAnOrderDetail] = useState([]);

  const fetchAnOrder = async () => {
    try {
      let response = await API.getOrder();
      if (response.status === "success") {
        setGetOrder(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnOrder();
  }, []);

  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await API.getOrderDetails(orderId);
      if (response.status === "success") {
        setAnOrderDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openOrderDetail = (orderId) => {
    openOrderDetailsModal(true);
    fetchOrderDetails(orderId);
  };
  console.log("getAnOrderDetail", getAnOrderDetail);

  const handleTabChange = (key) => {
    setOrderType(key);
  };
  const handleTabClick = (key) => {
    setActiveTab(key);
  };
  return (
    <>
      <Navbar />
      <div className="h-full bg-white">
        <InnerSideBarData />

        <div className="ml-64 max-md:ml-0">
          <div className="h-14"></div>

          <div className="w-full py-6">
            <div className="w-full px-8 mb-6">
              <div className="flex items-center justify-between mt-6">
                <div>
                  <h2 className="flex mr-2">
                    <div className="text-xl font-bold leading-5">
                      Order history
                    </div>
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
                <div className="flex space-x-4 mb-4">
                  <button
                    className={`px-4 py-2 font-semibold rounded ${
                      orderType === "current"
                        ? "bg-[#319714] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleTabChange("current")}
                  >
                    Current Orders
                  </button>
                  <button
                    className={`px-4 py-2 font-semibold rounded ${
                      orderType === "past"
                        ? "bg-[#319714] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleTabChange("past")}
                  >
                    Past Orders
                  </button>
                </div>

                <div className="w-full max-w-2xl">
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
                      defaultActiveKey="delivery"
                      activeKey={activeTab}
                      onChange={handleTabClick}
                      centered
                    >
                      <TabPane
                        tab={
                          <span
                            className={`${
                              activeTab === "delivery"
                                ? "text-[#319714]"
                                : "text-[#939291]"
                            }`}
                            style={customTabStyle}
                          >
                            Delivery
                          </span>
                        }
                        key="delivery"
                      >
                        {orderType === "current" ? (
                          <div>
                            {getorder &&
                            getorder.current_orders &&
                            getorder.current_orders.delivery_orders &&
                            getorder.current_orders.delivery_orders.orders ? (
                              getorder.current_orders.delivery_orders.orders
                                .length > 0 ? (
                                <>
                                  {getorder.current_orders.delivery_orders.orders.map(
                                    (order) => (
                                      <div
                                        className="border border-gray-300 p-4 my-4 rounded-md  flex justify-between items-center"
                                        key={order.order_id}
                                      >
                                        <div>
                                          <div>
                                            Items-count - {order?.items_count}
                                          </div>
                                          <div>
                                            order-status - {order?.order_status}
                                          </div>
                                          <div>
                                            subtotal - {order?.subtotal}
                                          </div>
                                          <div>
                                            Delivery Day - {order?.delivery_day}
                                          </div>
                                          <div>
                                            Delivery Slot -{" "}
                                            {order?.delivery_slot}
                                          </div>
                                        </div>
                                        <button
                                          className="mt-4 text-[#319714] hover:underline"
                                          onClick={() =>
                                            openOrderDetail(order.order_id)
                                          }
                                        >
                                          Open Order Details
                                        </button>
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <>No Delivery Current orders available</>
                              )
                            ) : (
                              <>Loading...</>
                            )}
                          </div>
                        ) : (
                          <div>
                            {getorder &&
                            getorder.past_orders &&
                            getorder.past_orders.delivery_orders &&
                            getorder.past_orders.delivery_orders.orders ? (
                              getorder.past_orders.delivery_orders.orders
                                .length > 0 ? (
                                <>
                                  {getorder.past_orders.delivery_orders.orders.map(
                                    (order) => (
                                      <div
                                        className="border border-gray-300 p-4 my-4 rounded-md  flex justify-between items-center"
                                        key={order.order_id}
                                      >
                                        <div>
                                          <div>
                                            Items-count - {order?.items_count}
                                          </div>
                                          <div>
                                            order-status - {order?.order_status}
                                          </div>
                                          <div>
                                            subtotal - {order?.subtotal}
                                          </div>
                                          <div>
                                            Delivery Day - {order?.delivery_day}
                                          </div>
                                          <div>
                                            Delivery Slot -{" "}
                                            {order?.delivery_slot}
                                          </div>
                                        </div>
                                        <button
                                          className="mt-4 text-[#319714] hover:underline"
                                          onClick={() =>
                                            openOrderDetail(order.order_id)
                                          }
                                        >
                                          Open Order Details
                                        </button>
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <>No Delivery Past orders available</>
                              )
                            ) : (
                              <>Loading...</>
                            )}
                          </div>
                        )}
                      </TabPane>
                      <TabPane
                        tab={
                          <span
                            className={`${
                              activeTab === "pickup"
                                ? "text-[#319714]"
                                : "text-[#939291]"
                            }`}
                            style={customTabStyle}
                          >
                            Pickup
                          </span>
                        }
                        key="pickup"
                      >
                        {orderType === "current" ? (
                          <div>
                            {getorder &&
                            getorder.current_orders &&
                            getorder.current_orders.pickup_orders &&
                            getorder.current_orders.pickup_orders.orders ? (
                              getorder.current_orders.pickup_orders.orders
                                .length > 0 ? (
                                <>
                                  {getorder.current_orders.pickup_orders.orders.map(
                                    (order) => (
                                      <div
                                        className="border border-gray-300 p-4 my-4 rounded-md  flex justify-between items-center"
                                        key={order.order_id}
                                      >
                                        <div>
                                          <div>
                                            Items-count - {order?.items_count}
                                          </div>
                                          <div>
                                            order-status - {order?.order_status}
                                          </div>
                                          <div>
                                            subtotal - {order?.subtotal}
                                          </div>
                                          <div>
                                            Pickup Day - {order?.pickup_day}
                                          </div>
                                          <div>
                                            Pickup Slot - {order?.pickup_slot}
                                          </div>
                                        </div>
                                        <button
                                          className="mt-4 text-[#319714] hover:underline"
                                          onClick={() =>
                                            openOrderDetail(order.order_id)
                                          }
                                        >
                                          Open Order Details
                                        </button>
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <>No Pickup Current orders available</>
                              )
                            ) : (
                              <>Loading...</>
                            )}
                          </div>
                        ) : (
                          <div>
                            {getorder &&
                            getorder.past_orders &&
                            getorder.past_orders.pickup_orders &&
                            getorder.past_orders.pickup_orders.orders ? (
                              getorder.past_orders.pickup_orders.orders.length >
                              0 ? (
                                <>
                                  {getorder.past_orders.pickup_orders.orders.map(
                                    (order) => (
                                      <div
                                        className="border border-gray-300 p-4 my-4 rounded-md  flex justify-between items-center"
                                        key={order.order_id}
                                      >
                                        <div>
                                          <div>
                                            Items-count - {order?.items_count}
                                          </div>
                                          <div>
                                            order-status - {order?.order_status}
                                          </div>
                                          <div>
                                            subtotal - {order?.subtotal}
                                          </div>
                                          <div>
                                            Pickup Day - {order?.pickup_day}
                                          </div>
                                          <div>
                                            Pickup Slot - {order?.pickup_slot}
                                          </div>
                                        </div>
                                        <button
                                          className="mt-4 text-[#319714] hover:underline"
                                          onClick={() =>
                                            openOrderDetail(order.order_id)
                                          }
                                        >
                                          Open Order Details
                                        </button>
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <>No Pickup Past orders available</>
                              )
                            ) : (
                              <>Loading...</>
                            )}
                          </div>
                        )}
                      </TabPane>
                    </Tabs>
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderDetailsModal
        orderDetailsModal={orderDetailsModal}
        onCancel={() => openOrderDetailsModal(false)}
        getAnOrderDetail={getAnOrderDetail}
      />
    </>
  );
};

export default YourOrders;
