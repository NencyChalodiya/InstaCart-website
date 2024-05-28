import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

import EditAddress from "../StoreSidebarPages/Address/EditAddress";
import RegisterAddress from "../StoreSidebarPages/Address/RegisterAddress";
import ChooseHourWindow from "./ChooseHourWindow";
import SelectAddress from "../../components/CheckOutComponents/SelectAddress";
import DeliveryInstructions from "../../components/CheckOutComponents/DeliveryInstructions";
import DeliveryTimeInCheckOut from "../../components/CheckOutComponents/DeliveryTimeInCheckOut";
import SubTotalIncheckout from "../../components/CheckOutComponents/SubTotalIncheckout";
import ApplyForGift from "../../components/CheckOutComponents/ApplyForGift";

import MobileNumberSvg from "../../assets/images/mobileNumber.svg";
import PaywithSvg from "../../assets/images/paywithSvg.svg";
import SideArrowSvg from "../../assets/images/sideArrowSvg.svg";
import InstacartSvg from "../../assets/images/instacartLogo.svg";

import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

const Checkout = ({ productDetail }) => {
  const customTabStyle = {
    padding: "2px 75px", // Increase padding
    fontSize: "24px", // Increase font size
  };
  const { cartItems } = useSelector((state) => state.cartItems);
  console.log("checkout", cartItems);

  const { storeId } = useParams();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeliveryTimeExpanded, setIsDeliveryTimeExpanded] = useState(false);
  const [isGiftExpanded, setIsGiftExpanded] = useState(false);
  const [openRegisterAddressModal, setRegisterAddressModal] = useState(false);
  const [openEditAddressModal, setEditAddressModal] = useState(true);
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [pickupAddresses, setPickupAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  //const [confirmedAddress, setConfirmedAddress] = useState(null);
  const [deliveryTimeDetails, setDeliveryTimeDetails] = useState([]);
  const [chooseHourWindow, openChooseHourWindow] = useState(false);
  const [giftImages, setGiftImages] = useState([]);
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState(null);
  const [selectedPickupAddress, setSelectedPickupAddress] = useState(null);
  const [confirmedDeliveryAddress, setConfirmedDeliveryAddress] =
    useState(null);
  const [confirmedPickupAddress, setConfirmedPickupAddress] = useState(null);
  const [activeKey, setActiveKey] = useState("1");
  const [selectDeliveryDetails, setSelectedDeliveryDetails] = useState(null);
  const [total, setTotal] = useState(null);
  const [addressType, setAddressType] = useState("delivery");

  //Delivery Address api
  const fetchDeliveryAddresses = async () => {
    try {
      const response = await API.getUserAddress();
      if (response.status === "success") {
        setUserAddressDetail(response.data);
      }
    } catch (error) {
      console.error("Error fetching delivery addresses:", error);
    }
  };

  //Pickup Address api
  const fetchPickupAddresses = async () => {
    try {
      const response = await API.getPickUpAddress(storeId);
      if (response.status === "success") {
        setPickupAddresses(response.data);
      }
    } catch (error) {
      console.error("Error fetching pickup addresses:", error);
    }
  };

  useEffect(() => {
    if (activeKey === "1") {
      fetchDeliveryAddresses();
    } else {
      fetchPickupAddresses();
    }
  }, [activeKey, storeId]);

  //Delivery Time api
  const fetchDeliveryTime = async () => {
    try {
      const response = await API.deliveryTimeInCheckout(storeId);

      if (response.status === "success") {
        setDeliveryTimeDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //console.log("storeId", storeId);
    if (storeId) {
      fetchDeliveryTime();
    }
  }, [storeId]);

  const fetchSubTotal = async () => {
    const productIdFromDetail = productDetail?.product_id;
    const cartItemsPayload = cartItems.map((item) => ({
      product_id:
        item.id === productIdFromDetail ? productIdFromDetail : item.id,
      quantity: item.qty,
    }));

    try {
      const payload = {
        store_id: storeId,
        cart_items: cartItemsPayload,
        ...(addressType === "delivery" && {
          delivery_fee: selectDeliveryDetails?.price || 0,
        }),
        ...(addressType === "pickup" && { pickup_fee: 2.99 }),
      };

      const response = await API.calculateSubTotal(payload);
      console.log(response);
      setTotal(response.data);
      //setTotalContext(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContinue = () => {
    fetchSubTotal();
  };

  const handleEditAddress = (address) => {
    setEditAddressModal(true);
    setSelectedAddress({ ...address });
  };

  const handleAddressSelection = (addressId) => {
    if (activeKey === "1") {
      setSelectedDeliveryAddress(addressId);
    } else {
      setSelectedPickupAddress(addressId);
    }
  };

  const handleConfirmAddress = () => {
    if (activeKey === "1") {
      const confirmedAddress = getUserAddressDetail.addressDetails.find(
        (addr) => addr.address_id === selectedDeliveryAddress
      );
      setConfirmedDeliveryAddress(confirmedAddress);
    } else {
      const confirmedAddress = pickupAddresses.addressDetails.find(
        (addr) => addr.id === selectedPickupAddress
      );
      setConfirmedPickupAddress(confirmedAddress);
    }

    setIsExpanded(false); // Close the accordion
  };

  //gift images api
  const fetchGiftImages = async () => {
    try {
      const response = await API.getGiftImages();

      setGiftImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGiftImages();
  }, []);

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleDeliveryTimeAccordion = () => {
    setIsDeliveryTimeExpanded(!isDeliveryTimeExpanded);
  };
  const toggleGiftAccordion = () => {
    setIsGiftExpanded(!isGiftExpanded);
  };

  const handleDeliveryDetails = (details) => {
    setSelectedDeliveryDetails(details);
  };

  const handleChooseSlot = (details) => {
    setSelectedDeliveryDetails(details);
    openChooseHourWindow(false);
  };

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
        <div className="grid grid-rows-3 grid-flow-col gap-3 mx-auto py-8 max-w-[1040px] bg-white ">
          <div className="row-span-3">
            <div className="relative ">
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
                        <button
                          className="flex justify-center"
                          onClick={() => setAddressType("delivery")}
                        >
                          <div
                            className={`list-none cursor-pointer block py-1  text-2xl font-bold ${
                              activeKey === "1"
                                ? "text-[#319714]"
                                : "text-[#939291]"
                            }`}
                            style={customTabStyle}
                          >
                            Delivery
                          </div>
                        </button>
                      }
                    >
                      {activeKey === "1" && (
                        <div>
                          <div>
                            <SelectAddress
                              addressType={addressType}
                              toggleAccordion={toggleAccordion}
                              isExpanded={isExpanded}
                              confirmedAddress={confirmedDeliveryAddress}
                              address={getUserAddressDetail}
                              handleAddressSelection={handleAddressSelection}
                              chooseAddress={selectedDeliveryAddress}
                              handleEditAddress={handleEditAddress}
                              handleConfirmAddress={handleConfirmAddress}
                              setRegisterAddressModal={setRegisterAddressModal}
                            />
                          </div>
                          <div>
                            <DeliveryInstructions />
                          </div>
                          <div>
                            <DeliveryTimeInCheckOut
                              addressType={addressType}
                              toggleDeliveryTimeAccordion={
                                toggleDeliveryTimeAccordion
                              }
                              isDeliveryTimeExpanded={isDeliveryTimeExpanded}
                              deliveryTimeDetails={deliveryTimeDetails}
                              openChooseHourWindow={openChooseHourWindow}
                              handleDeliveryDetails={handleDeliveryDetails}
                              selectDeliveryDetails={selectDeliveryDetails}
                              onContinue={handleContinue}
                            />
                          </div>
                          <div>
                            <ApplyForGift
                              toggleGiftAccordion={toggleGiftAccordion}
                              isGiftExpanded={isGiftExpanded}
                              giftImages={giftImages}
                            />
                          </div>
                        </div>
                      )}
                    </Tabs.TabPane>

                    <Tabs.TabPane
                      key="2"
                      tab={
                        <button
                          className="flex justify-center"
                          onClick={() => setAddressType("pickup")}
                        >
                          <div
                            className={`list-none cursor-pointer block py-1  text-2xl font-bold ${
                              activeKey === "2"
                                ? "text-[#319714]"
                                : "text-[#939291]"
                            }`}
                            style={customTabStyle}
                          >
                            Pickup
                          </div>
                        </button>
                      }
                    >
                      {activeKey === "2" && (
                        <div>
                          <div>
                            <SelectAddress
                              addressType={addressType}
                              toggleAccordion={toggleAccordion}
                              isExpanded={isExpanded}
                              confirmedAddress={confirmedPickupAddress}
                              address={pickupAddresses}
                              handleAddressSelection={handleAddressSelection}
                              chooseAddress={selectedPickupAddress}
                              handleEditAddress={handleEditAddress}
                              handleConfirmAddress={handleConfirmAddress}
                              setRegisterAddressModal={setRegisterAddressModal}
                            />
                          </div>

                          <div>
                            <DeliveryTimeInCheckOut
                              addressType={addressType}
                              toggleDeliveryTimeAccordion={
                                toggleDeliveryTimeAccordion
                              }
                              isDeliveryTimeExpanded={isDeliveryTimeExpanded}
                              deliveryTimeDetails={deliveryTimeDetails}
                              openChooseHourWindow={openChooseHourWindow}
                              onContinue={handleContinue}
                            />
                          </div>
                        </div>
                      )}
                    </Tabs.TabPane>
                  </Tabs>
                </ConfigProvider>
              </div>
              <div>
                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <img src={MobileNumberSvg} alt="mobileNumber-svg" />
                        <div className="mx-3 flex-grow">
                          <h2>Mobile Number</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-6 border-b">
                    <div className="relative flex items-center">
                      <img src={PaywithSvg} alt="paywith-svg" />
                      <div className="mx-3 flex-grow">
                        <h2>Pay with</h2>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="mb-3 cursor-pointer relative h-auto w-full ">
                        <span className="block">
                          <div className="block border box-border rounded-[12px] p-3">
                            <div className="flex justify-start items-center">
                              <div className="flex justify-start items-center">
                                <img
                                  src="https://www.instacart.com/assets/buyflow/ic-card-add-3e8e8e52303c205dbe326861bac6c4ebead31319ea6ae384085954482b78254b.png"
                                  alt="add-payment-logo"
                                  className="w-10 h-auto mr-2"
                                />
                                <p className="mr-4">Choose a payment method</p>
                              </div>
                              <span className="flex ml-auto">
                                <img src={SideArrowSvg} alt="sdeArrow-svg" />
                              </span>
                            </div>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-6 border-b">
                    <div>
                      <div className="relative flex items-center">
                        <img src={InstacartSvg} alt="instacart-logo" />
                        <div className="mx-3 flex-grow">
                          <h2>Instacart+</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <button className="px-4 h-[54px] w-full rounded-[27px] relative bg-[#F6F7F8]">
                      <span className="mx-2">Continue</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubTotalIncheckout total={total} />
        </div>
      </div>
      <RegisterAddress
        openRegisterAddressModal={openRegisterAddressModal}
        onCancel={() => setRegisterAddressModal(false)}
        fetchUserAddressDetail={fetchDeliveryAddresses}
      />
      <EditAddress
        openEditAddressModal={openEditAddressModal}
        onCancel={() => setEditAddressModal(false)}
        fetchUserAddressDetail={fetchDeliveryAddresses}
        selectedAddress={selectedAddress}
        // selectedAddress={selectedAddress}
      />
      <ChooseHourWindow
        chooseHourWindow={chooseHourWindow}
        onCancel={() => openChooseHourWindow(false)}
        deliveryTimeDetails={deliveryTimeDetails}
        onChooseSlot={handleChooseSlot}
      />
    </>
  );
};

export default Checkout;
