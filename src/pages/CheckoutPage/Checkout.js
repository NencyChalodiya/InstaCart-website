import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import EditAddress from "../StoreSidebarPages/Address/EditAddress";
import RegisterAddress from "../StoreSidebarPages/Address/RegisterAddress";
import ChooseHourWindow from "./ChooseHourWindow";
import SelectAddress from "../../components/CheckOutComponents/SelectAddress";
import DeliveryInstructions from "../../components/CheckOutComponents/DeliveryInstructions";
import DeliveryTimeInCheckOut from "../../components/CheckOutComponents/DeliveryTimeInCheckOut";
import SubTotalIncheckout from "../../components/CheckOutComponents/SubTotalIncheckout";
import ApplyForGift from "../../components/CheckOutComponents/ApplyForGift";
import CheckOutFormModal from "../../components/CheckOutComponents/CheckOutFormModal";

import MobileNumberSvg from "../../assets/images/mobileNumber.svg";
import PaywithSvg from "../../assets/images/paywithSvg.svg";
import SideArrowSvg from "../../assets/images/sideArrowSvg.svg";
import InstacartSvg from "../../assets/images/instacartLogo.svg";

import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

const Checkout = ({ productDetail }) => {
  const customTabStyle = {
    padding: "2px 75px",
    fontSize: "24px",
  };

  const { storeId } = useParams();
  const { cartItems, giftOption } = useSelector((state) => state.cartItems);
  const mobileNumberRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeliveryTimeExpanded, setIsDeliveryTimeExpanded] = useState(false);
  const [isGiftExpanded, setIsGiftExpanded] = useState(false);
  const [isDeliveryInstructionExpanded, setIsDeliveryInstructionExpanded] =
    useState(false);
  const [openRegisterAddressModal, setRegisterAddressModal] = useState(false);
  const [openEditAddressModal, setEditAddressModal] = useState(false);
  const [getUserAddressDetail, setUserAddressDetail] = useState([]);
  const [pickupAddresses, setPickupAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
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
  const [selectPickupDetails, setSelectedPickupDetails] = useState(null);
  const [total, setTotal] = useState(null);
  const [addressType, setAddressType] = useState("delivery");
  const [checkoutModal, openCheckoutModal] = useState(false);
  const [showMobileInput, setShowMobileInput] = useState(false);
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [leaveAtMyDoor, setLeaveAtMyDoor] = useState(0);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [mobileNumberDetails, setMobileNumberDetails] = useState({
    mobile_number: "",
    country_code: "+91",
  });
  const [giftUserDetails, setGiftUserDetails] = useState({
    recipitentName: "",
    recipitentCountryCode: "+91",
    recipitentMobileNo: "",
    senderName: "",
    giftMessage: "",
  });

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

  //Delivery Time and pickup time api
  const fetchDeliveryTime = async () => {
    try {
      const response = await API.deliveryTimeInCheckout(storeId);
      // console.log(response);
      if (response.status === "success") {
        setDeliveryTimeDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (storeId) {
      fetchDeliveryTime();
    }
  }, [storeId]);

  //SubTotal Api
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
          delivery_fee: parseFloat(selectDeliveryDetails?.price) || 0,
        }),
        ...(addressType === "pickup" && {
          pickup_fee: parseFloat(selectPickupDetails?.price) || 0,
        }),
      };
      console.log("payload", payload);
      const response = await API.calculateSubTotal(payload);
      console.log(response);
      setTotal(response.data);

      //setTotalContext(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //handle address selection according to tab
  const handleAddressSelection = (addressId) => {
    if (activeKey === "1") {
      setSelectedDeliveryAddress(addressId);
    } else {
      setSelectedPickupAddress(addressId);
    }
    localStorage.setItem("selectedAddressId", addressId);
  };

  //handle confirm address selection
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

  const addCheckOutOrders = async () => {
    try {
      const productIdFromDetail = productDetail?.product_id;
      const address_id = localStorage.getItem("selectedAddressId");
      let payload = {
        store_id: storeId,
        cart_items: cartItems.map((item) => ({
          product_id:
            item.id === productIdFromDetail ? productIdFromDetail : item.id,
          quantity: item.qty,
        })),

        country_code: mobileNumberDetails.country_code,
        mobile_number: mobileNumberDetails.mobile_number,

        actual_subtotal: total?.actual_item_subtotal || 0,
        final_subtotal: total?.final_item_subtotal || 0,
        service_fee: total?.service_fee || 0,
        bag_fee: total?.bag_fee,
        subtotal: total?.subtotal,
        discount_applied: total?.discount_applied,
        payment_mode: "card",
        use_referral_bonus: false,
      };

      if (addressType === "delivery" && selectDeliveryDetails) {
        payload = {
          ...payload,
          address_id: address_id,
          delivery_type: selectDeliveryDetails.type,
          delivery_day: selectDeliveryDetails.day,
          delivery_slot: selectDeliveryDetails.time_slot,
          delivery_fee: total?.delivery_fee,
          delivery_instructions: deliveryInstructions,
          is_leave_it_door: leaveAtMyDoor === 1 ? true : false,
        };

        if (giftOption) {
          payload = {
            ...payload,
            gift_option: giftOption,
            gift_recipitent_name: giftUserDetails?.recipitentName || null,
            recipitent_country_code:
              giftUserDetails.recipitentCountryCode || null,
            recipitent_mobile: giftUserDetails.recipitentMobileNo || null,
            gift_sender_name: giftUserDetails.senderName || null,
            // gift_card_image_id: giftImages.giftCardImages.map(
            //   (giftImg) => giftImg.id
            // ),
            gift_card_image_id: 1 || null,
            gift_message: giftUserDetails.giftMessage || null,
          };
        }
      }

      if (addressType === "pickup" && selectPickupDetails) {
        payload = {
          ...payload,
          pickup_address_id: confirmedPickupAddress?.id,
          pickup_day: selectPickupDetails.day,
          pickup_slot: selectPickupDetails.time_slot,

          pickup_fee: parseFloat(selectPickupDetails?.price) || 0,
        };
      }
      const response = await API.addOrder(payload);
      if (response.status === "success") {
        setClientSecret(response.data.paymentIntent_client_secret);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const publishableKey =
      "pk_test_51Ot1cCSCHK44EDHwd48KVHRzzhud57MHdgGOkV1SVsNVvyygtSsciEnfgb0abJ3omQtDkvAYi6CfBwQPkGvix2aQ00iVRpVFUQ";
    setStripePromise(loadStripe(publishableKey));
  }, []);

  //to handelContinue of SubTotal
  const handleContinue = async () => {
    await fetchSubTotal();
    setShowMobileInput(true);
    setTimeout(() => {
      if (mobileNumberRef.current) {
        mobileNumberRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll into view
        mobileNumberRef.current.focus(); // Focus on the input field
      }
    }, 100);
  };

  //handle edit Address
  const handleEditAddress = (address) => {
    setEditAddressModal(true);
    setSelectedAddress({ ...address });
  };

  //tab change of delivery and pickup
  const handleTabChange = (key) => {
    setActiveKey(key);
    setAddressType(key === "1" ? "delivery" : "pickup");
    setMobileNumberDetails({ mobile_number: "", country_code: "+91" });
    setClientSecret("");
  };

  //toggle accordion of delivery address
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  //toggle accordion of delivery times
  const toggleDeliveryTimeAccordion = () => {
    setIsDeliveryTimeExpanded(!isDeliveryTimeExpanded);
  };

  //toggle accordion of gift images
  const toggleGiftAccordion = () => {
    setIsGiftExpanded(!isGiftExpanded);
  };

  const toggleDeliveryInstructionAcordion = () => {
    setIsDeliveryInstructionExpanded(!isDeliveryInstructionExpanded);
  };

  //handle delivery details
  const handleDeliveryDetails = (details) => {
    setSelectedDeliveryDetails(details);
  };

  //handle the slot of choose two window
  const handleChooseSlot = (details) => {
    setSelectedDeliveryDetails(details);
    openChooseHourWindow(false);
  };

  //handle the pickup detials slots
  const handlePickupDetails = (pickupDetails) => {
    setSelectedPickupDetails(pickupDetails);
  };

  const handleDeliveryInstructionsChange = (instructions) => {
    setDeliveryInstructions(instructions);
  };

  const handleLeaveAtMyDoorChange = (checked) => {
    setLeaveAtMyDoor(checked ? 1 : 0); // Convert true/false to 1/0
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
                            <DeliveryInstructions
                              onDeliveryInstructionsChange={
                                handleDeliveryInstructionsChange
                              }
                              onLeaveAtMyDoorChange={handleLeaveAtMyDoorChange}
                              toggleDeliveryInstructionAcordion={
                                toggleDeliveryInstructionAcordion
                              }
                              isDeliveryInstructionExpanded={
                                isDeliveryInstructionExpanded
                              }
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
                              giftOption={giftOption}
                              giftUserDetails={giftUserDetails}
                              setGiftUserDetails={setGiftUserDetails}
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
                              selectPickupDetails={selectPickupDetails}
                              handlePickupDetails={handlePickupDetails}
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
                          {showMobileInput && (
                            <form>
                              <div>
                                <div className="flex flex-row items-center w-full ">
                                  <div className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  outline-black ">
                                    <span className="flex items-center h-full text-ellipsis">
                                      <select
                                        name="country_code"
                                        value={mobileNumberDetails.country_code}
                                        onChange={(e) =>
                                          setMobileNumberDetails({
                                            ...mobileNumberDetails,
                                            country_code: e.target.value,
                                          })
                                        }
                                      >
                                        <option value="+91">+91 (India)</option>
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+1">+1 (Canada)</option>
                                      </select>
                                    </span>
                                  </div>

                                  <div className="flex flex-row flex-nowrap items-center h-14 box-border max-w-[600px] rounded-r-lg border w-full  outline-black">
                                    <div className="relative flex-grow w-full h-full">
                                      <input
                                        ref={mobileNumberRef}
                                        className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none  `}
                                        placeholder="Phone number"
                                        value={
                                          mobileNumberDetails.mobile_number
                                        }
                                        onChange={(e) => {
                                          setMobileNumberDetails({
                                            ...mobileNumberDetails,
                                            mobile_number: e.target.value,
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* {phoneError && (
                            <span className="text-red-500 text-sm">
                              {phoneError}
                            </span>
                          )} */}
                            </form>
                          )}
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
                      <button
                        className="mb-3 cursor-pointer relative h-auto w-full "
                        onClick={() => openCheckoutModal(true)}
                      >
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
          <SubTotalIncheckout total={total} addressType={addressType} />
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
      <CheckOutFormModal
        checkoutModal={checkoutModal}
        onCancel={() => openCheckoutModal(false)}
        addCheckOutOrders={addCheckOutOrders}
        stripePromise={stripePromise}
        clientSecret={clientSecret}
      />
    </>
  );
};

export default Checkout;
