import React, { useState, useEffect } from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import InnerSideBarData from "./InnerSideBarData";
import API from "../../services/api";
import OrderDetailsModal from "./OrderDetailsModal";

import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [currentDeliveryPage, setCurrentDeliveryPage] = useState(1);
  const [currentPickupPage, setCurrentPickupPage] = useState(1);
  const [pastPickupPage, setPastPickupPage] = useState(1);
  const [pastDeliveryPage, setPastDeliveryPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchAnOrder = async (
    currentDeliveryPage,
    currentPickupPage,
    pastDeliveryPage,
    pastPickupPage
  ) => {
    const queryParams = {
      currentDeliveryPage: currentDeliveryPage,
      currentPickupPage: currentPickupPage,
      pastDeliveryPage: pastDeliveryPage,
      pastPickupPage: pastPickupPage,
    };
    try {
      setLoading(true);
      let response = await API.getOrder(queryParams);
      if (response.status === "success") {
        if (
          currentDeliveryPage === 1 &&
          orderType === "current" &&
          activeTab === "delivery"
        ) {
          setGetOrder(response.data);
        }
        if (
          currentDeliveryPage !== 1 &&
          orderType === "current" &&
          activeTab === "delivery"
        ) {
          setGetOrder((prev) => ({
            ...prev,
            current_orders: {
              ...prev.current_orders,
              delivery_orders: {
                ...prev.current_orders.delivery_orders,
                orders: [
                  ...prev.current_orders.delivery_orders.orders,
                  ...response.data.current_orders.delivery_orders.orders,
                ],
              },
            },
          }));
          // }
          // (orderType === "current" && activeTab === "pickup")
        }
        if (
          currentPickupPage === 1 &&
          orderType === "current" &&
          activeTab === "pickup"
        ) {
          setGetOrder(response.data);
        }
        if (
          currentPickupPage !== 1 &&
          orderType === "current" &&
          activeTab === "pickup"
        ) {
          setGetOrder((prev) => ({
            ...prev,
            current_orders: {
              ...prev.current_orders,
              pickup_orders: {
                ...prev.current_orders.pickup_orders,
                orders: [
                  ...prev.current_orders.pickup_orders.orders,
                  ...response.data.current_orders.pickup_orders.orders,
                ],
              },
            },
          }));
        }
        if (
          pastDeliveryPage === 1 &&
          orderType === "past" &&
          activeTab === "delivery"
        ) {
          setGetOrder(response.data);
        }
        if (
          pastDeliveryPage !== 1 &&
          orderType === "past" &&
          activeTab === "delivery"
        ) {
          setGetOrder((prev) => ({
            ...prev,
            past_orders: {
              ...prev.past_orders,
              pickup_orders: {
                ...prev.past_orders.delivery_orders,
                orders: [
                  ...prev.past_orders.delivery_orders.orders,
                  ...response.data.past_orders.delivery_orders.orders,
                ],
              },
            },
          }));
        }
        if (
          pastPickupPage === 1 &&
          orderType === "past" &&
          activeTab === "pickup"
        ) {
          setGetOrder(response.data);
        }
        if (
          pastPickupPage !== 1 &&
          orderType === "past" &&
          activeTab === "pickup"
        ) {
          setGetOrder((prev) => ({
            ...prev,
            past_orders: {
              ...prev.past_orders,
              pickup_orders: {
                ...prev.past_orders.pickup_orders,
                orders: [
                  ...prev.past_orders.pickup_orders.orders,
                  ...response.data.past_orders.pickup_orders.orders,
                ],
              },
            },
          }));
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentDeliveryPage(1);
    setCurrentPickupPage(1);
    setPastDeliveryPage(1);
    setPastPickupPage(1);
    fetchAnOrder(1, 1, 1, 1);
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

  const handleTabChange = (key) => {
    setOrderType(key);
  };
  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  const fetchCurrentDeliveryData = () => {
    const nextPage = currentDeliveryPage + 1;
    setCurrentDeliveryPage(nextPage);
    // setCurrentPickupPage(1);
    fetchAnOrder(nextPage, currentPickupPage, pastDeliveryPage, pastPickupPage);
  };

  const fetchCurrentPickupData = () => {
    const nextcurrentDeliveryPage = currentPickupPage + 1;
    setCurrentPickupPage(nextcurrentDeliveryPage);
    // setCurrentDeliveryPage(1);
    fetchAnOrder(
      currentDeliveryPage,
      nextcurrentDeliveryPage,
      pastDeliveryPage,
      pastPickupPage
    );
  };

  const fetchPastDeliveryData = () => {
    const nextPastDeliveryPage = pastDeliveryPage + 1;
    setPastDeliveryPage(nextPastDeliveryPage);
    // setCurrentDeliveryPage(1);
    // setCurrentPickupPage(1);
    fetchAnOrder(
      currentDeliveryPage,
      currentPickupPage,
      nextPastDeliveryPage,
      pastPickupPage
    );
  };

  const fetchPastPickupData = () => {
    const nextPastPickupData = pastPickupPage + 1;
    setPastPickupPage(nextPastPickupData);
    fetchAnOrder(
      currentDeliveryPage,
      currentPickupPage,
      pastDeliveryPage,
      nextPastPickupData
    );
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

              <div className="flex flex-col items-center justify-center bg-gray-100 p-4 mt-2">
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
                        {loading && currentDeliveryPage === 1 ? (
                          <div className="text-center my-40">
                            <Spin
                              indicator={
                                <LoadingOutlined
                                  style={{
                                    fontSize: 30,
                                    color: "#1D892B",
                                  }}
                                  spin
                                />
                              }
                            />
                          </div>
                        ) : (
                          <>
                            {orderType === "current" ? (
                              <div>
                                {getorder &&
                                getorder.current_orders &&
                                getorder.current_orders.delivery_orders &&
                                getorder.current_orders.delivery_orders
                                  .orders ? (
                                  getorder.current_orders.delivery_orders.orders
                                    .length > 0 ? (
                                    <>
                                      <InfiniteScroll
                                        dataLength={
                                          getorder.current_orders
                                            .delivery_orders.orders.length
                                        }
                                        next={fetchCurrentDeliveryData}
                                        hasMore={
                                          getorder.current_orders
                                            .delivery_orders.orders.length <
                                          getorder.current_orders
                                            .delivery_orders.total_orders
                                        }
                                        loader={
                                          <div className="text-center mt-4 mb-10">
                                            <Spin
                                              indicator={
                                                <LoadingOutlined
                                                  style={{
                                                    fontSize: 20,
                                                    color: "#1D892B",
                                                  }}
                                                  spin
                                                />
                                              }
                                            />
                                          </div>
                                        }
                                        scrollThreshold={0.5}
                                        className="custom-infinite-scroll"
                                      >
                                        {getorder.current_orders.delivery_orders.orders.map(
                                          (order) => (
                                            <div
                                              className="border border-gray-300 p-4 my-4 rounded-md  flex justify-between items-center"
                                              key={order.order_id}
                                            >
                                              <div>
                                                <div>
                                                  Items-count -{" "}
                                                  {order?.items_count}
                                                </div>
                                                <div>
                                                  order-status -{" "}
                                                  {order?.order_status}
                                                </div>
                                                <div>
                                                  subtotal - {order?.subtotal}
                                                </div>
                                                <div>
                                                  Delivery Day -{" "}
                                                  {order?.delivery_day}
                                                </div>
                                                <div>
                                                  Delivery Slot -{" "}
                                                  {order?.delivery_slot}
                                                </div>
                                              </div>
                                              <button
                                                className="mt-4 text-[#319714] hover:underline"
                                                onClick={() =>
                                                  openOrderDetail(
                                                    order.order_id
                                                  )
                                                }
                                              >
                                                Open Order Details
                                              </button>
                                            </div>
                                          )
                                        )}
                                      </InfiniteScroll>
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
                                      <InfiniteScroll
                                        dataLength={
                                          getorder.past_orders.delivery_orders
                                            .orders.length
                                        }
                                        next={fetchPastDeliveryData}
                                        hasMore={
                                          getorder.past_orders.delivery_orders
                                            .orders.length <
                                          getorder.past_orders.delivery_orders
                                            .total_orders
                                        }
                                        loader={
                                          <div className="text-center mt-4 mb-10">
                                            <Spin
                                              indicator={
                                                <LoadingOutlined
                                                  style={{
                                                    fontSize: 20,
                                                    color: "#1D892B",
                                                  }}
                                                  spin
                                                />
                                              }
                                            />
                                          </div>
                                        }
                                        scrollThreshold={0.5}
                                        className="custom-infinite-scroll"
                                      >
                                        {getorder.past_orders.delivery_orders.orders.map(
                                          (order) => (
                                            <div
                                              className="border border-gray-300 p-4 my-4 rounded-md  flex justify-between items-center"
                                              key={order.order_id}
                                            >
                                              <div>
                                                <div>
                                                  Items-count -{" "}
                                                  {order?.items_count}
                                                </div>
                                                <div>
                                                  order-status -{" "}
                                                  {order?.order_status}
                                                </div>
                                                <div>
                                                  subtotal - {order?.subtotal}
                                                </div>
                                                <div>
                                                  Delivery Day -{" "}
                                                  {order?.delivery_day}
                                                </div>
                                                <div>
                                                  Delivery Slot -{" "}
                                                  {order?.delivery_slot}
                                                </div>
                                              </div>
                                              <button
                                                className="mt-4 text-[#319714] hover:underline"
                                                onClick={() =>
                                                  openOrderDetail(
                                                    order.order_id
                                                  )
                                                }
                                              >
                                                Open Order Details
                                              </button>
                                            </div>
                                          )
                                        )}
                                      </InfiniteScroll>
                                    </>
                                  ) : (
                                    <>No Delivery Past orders available</>
                                  )
                                ) : (
                                  <>Loading...</>
                                )}
                              </div>
                            )}
                          </>
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
                                  <InfiniteScroll
                                    dataLength={
                                      getorder.current_orders.pickup_orders
                                        .orders.length
                                    }
                                    next={fetchCurrentPickupData}
                                    hasMore={
                                      getorder.current_orders.pickup_orders
                                        .orders.length <
                                      getorder.current_orders.pickup_orders
                                        .total_orders
                                    }
                                    loader={
                                      <div className="text-center mt-4 mb-10">
                                        <Spin
                                          indicator={
                                            <LoadingOutlined
                                              style={{
                                                fontSize: 20,
                                                color: "#1D892B",
                                              }}
                                              spin
                                            />
                                          }
                                        />
                                      </div>
                                    }
                                    scrollThreshold={0.5}
                                    className="custom-infinite-scroll"
                                  >
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
                                              order-status -{" "}
                                              {order?.order_status}
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
                                  </InfiniteScroll>
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
                                  <InfiniteScroll
                                    dataLength={
                                      getorder.past_orders.delivery_orders
                                        .orders.length
                                    }
                                    next={fetchPastPickupData}
                                    hasMore={
                                      getorder.past_orders.pickup_orders.orders
                                        .length <
                                      getorder.past_orders.pickup_orders
                                        .total_orders
                                    }
                                    loader={
                                      <div className="text-center mt-4 mb-10">
                                        <Spin
                                          indicator={
                                            <LoadingOutlined
                                              style={{
                                                fontSize: 20,
                                                color: "#1D892B",
                                              }}
                                              spin
                                            />
                                          }
                                        />
                                      </div>
                                    }
                                    scrollThreshold={0.5}
                                    className="custom-infinite-scroll"
                                  >
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
                                              order-status -{" "}
                                              {order?.order_status}
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
                                  </InfiniteScroll>
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
