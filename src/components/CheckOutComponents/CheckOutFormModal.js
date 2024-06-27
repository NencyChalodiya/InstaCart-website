import React from "react";
import { Modal } from "antd";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../pages/CheckoutPage/CheckoutForm";
import CrossSvg from "../../assets/images/cross.svg";
import SideArrowSvg from "../../assets/images/sideArrowSvg.svg";

const CheckOutFormModal = ({
  checkoutModal,
  onCancel,
  addCheckOutOrders,
  stripePromise,
  clientSecret,
}) => {
  return (
    <Modal
      title={
        <div>
          <div className="flex items-center">
            <button className="cursor-pointer" onClick={onCancel}>
              <img src={CrossSvg} alt="cross-logo" />
            </button>
            <div className="ml-36">
              <h2 className="text-xl">Payment method</h2>
            </div>
          </div>
        </div>
      }
      centered
      open={checkoutModal}
      closable={false}
      footer={false}
    >
      <div className="h-[600px]">
        <div className="flex-grow flex-shrink overflow-y-auto px-4 pb-4 mt-4">
          <h2 className="text-xl">Saved payment methods</h2>
          <button className="cursor-pointer relative py-4 px-2 w-full rounded-[12px]">
            <span className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <img
                  src="https://www.instacart.com/assets/buyflow/ic-instrument-google-pay-5952561f8ec13ba57b7881f6ab06692a80e4f4f0909c4343b39c1c94ee6d4c16.png"
                  alt="google-pay"
                  className="w-[40px] mr-2"
                />
                <div className="text-left">
                  <span>Google pay</span>
                </div>
              </div>
            </span>
          </button>
          <h2 className="py-3 mx-2 text-xl">Add payment method</h2>
          <button
            className="cursor-pointer relative py-4 px-2 w-full rounded-[12px]"
            onClick={() => addCheckOutOrders()}
          >
            <span className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <img
                  src="https://www.instacart.com/assets/buyflow/ic-card-add-3e8e8e52303c205dbe326861bac6c4ebead31319ea6ae384085954482b78254b.png"
                  alt="google-pay"
                  className="w-[40px] mr-2"
                />
                <div className="text-left">
                  <span>Debit/credit</span>
                </div>
              </div>
              <img src={SideArrowSvg} alt="sidearrowSvg" />
            </span>
          </button>
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
          <button className="cursor-pointer relative py-4 px-2 w-full rounded-[12px]">
            <span className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <img
                  src="https://www.instacart.com/assets/buyflow/ic-card-add-3e8e8e52303c205dbe326861bac6c4ebead31319ea6ae384085954482b78254b.png"
                  alt="google-pay"
                  className="w-[40px] mr-2"
                />
                <div className="text-left">
                  <span>Paypal</span>
                </div>
              </div>
              <img src={SideArrowSvg} alt="sidearrowSvg" />
            </span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CheckOutFormModal;
