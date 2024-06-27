import React, { useState, useEffect } from "react";
import { Radio } from "antd";

import DeliveryTimeSvg from "../../assets/images/deliveryTime.svg";
import PrioritySvg from "../../assets/images/prioritySvg.svg";
import StandardSvg from "../../assets/images/standardSvg.svg";
import ChooseTwoWindowSvg from "../../assets/images/chooseTwoWindowSvg.svg";
import DownArrowSvg from "../../assets/images/downArrow.svg";
import Spinner from "../atoms/Spinner";

const DeliveryTimeInCheckOut = ({
  addressType,
  toggleDeliveryTimeAccordion,
  isDeliveryTimeExpanded,
  deliveryTimeDetails,
  openChooseHourWindow,
  handleDeliveryDetails,
  selectDeliveryDetails,
  onContinue,
  selectPickupDetails,
  handlePickupDetails,
  loading,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  // const [selectDeliveryDetails, setSelectedDeliveryDetails] = useState(null);
  useEffect(() => {
    if (deliveryTimeDetails[0] && deliveryTimeDetails[0].pickup_time) {
      const todayDetail =
        deliveryTimeDetails[0].pickup_time.pickup_timings.find(
          (detail) => detail.day === "Today"
        );
      if (todayDetail) {
        setSelectedDay("Today");
      } else {
        setSelectedDay(
          deliveryTimeDetails[0].pickup_time.pickup_timings[0]?.day
        );
      }
    }
  }, [deliveryTimeDetails]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null);
    handlePickupDetails(null);
    // setSelectedDeliveryDetails(null);
  };

  return (
    <div>
      <div
        className="px-6 py-5 mt-1 border-b "
        onClick={toggleDeliveryTimeAccordion}
      >
        <div>
          <div className="relative flex items-center cursor-pointer">
            <img src={DeliveryTimeSvg} alt="deliveryTimeSvg" />
            <div className="mx-3 flex-grow">
              {isDeliveryTimeExpanded ? (
                <h2 className="text-lg">Choose Delivery Time</h2>
              ) : (
                <h2 className="text-lg">Delivery Time</h2>
              )}
              {selectDeliveryDetails && (
                <p>
                  {selectDeliveryDetails.day}, {selectDeliveryDetails.time_slot}
                </p>
              )}
            </div>
            <div className="flex items-center  ">
              {isDeliveryTimeExpanded ? (
                <span>&#9650;</span>
              ) : (
                <span>&#9660;</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {isDeliveryTimeExpanded && (
        <div className="p-4 mt-2 border-b">
          {addressType === "delivery" ? (
            <>
              {deliveryTimeDetails ? (
                <>
                  {deliveryTimeDetails.map((delivery) => (
                    <div className="flex flex-col">
                      <div
                        className={`box-border cursor-pointer rounded-[12px] flex min-h-[78px] justify-between p-4 border-2 mt-4 ${
                          selectDeliveryDetails?.type === "priority"
                            ? "border-black bg-gray-100"
                            : "hover:bg-gray-100 hover:border-2 hover:border-black"
                        }`}
                        onClick={() =>
                          handleDeliveryDetails({
                            day: delivery?.delivery_time?.next_delivery
                              ?.priority?.day,
                            time_slot:
                              delivery?.delivery_time?.next_delivery?.priority
                                ?.time_slot,
                            type: "priority",
                            price:
                              delivery?.delivery_time?.next_delivery?.priority
                                ?.price,
                          })
                        }
                      >
                        <div className="flex items-center ">
                          <img src={PrioritySvg} alt="prioritySvg" />
                          <div className="ml-3">
                            <p className="text-[#108910] ">Priority</p>
                            <p className="text-base text-gray-600">
                              {
                                delivery?.delivery_time?.next_delivery?.priority
                                  ?.time_slot
                              }
                            </p>
                          </div>
                        </div>
                        <div className="self-center flex">
                          <p>
                            {
                              delivery?.delivery_time?.next_delivery?.priority
                                ?.price
                            }
                          </p>
                        </div>
                      </div>
                      <div
                        className={`box-border cursor-pointer rounded-[12px] flex min-h-[78px] justify-between p-4 border-2 mt-4 ${
                          selectDeliveryDetails?.type === "standard"
                            ? "border-black bg-gray-100"
                            : "hover:bg-gray-100 hover:border-2 hover:border-black"
                        }`}
                        onClick={() =>
                          handleDeliveryDetails({
                            day: delivery?.delivery_time?.next_delivery
                              ?.standard?.day,
                            time_slot:
                              delivery?.delivery_time?.next_delivery?.standard
                                ?.time_slot,
                            type: "standard",
                            price:
                              delivery?.delivery_time?.next_delivery?.standard
                                ?.price,
                          })
                        }
                      >
                        <div className="flex items-center ">
                          <img src={StandardSvg} alt="standard" />
                          <div className="ml-3">
                            <p>Standard</p>
                            <p className="text-base text-gray-600">
                              {
                                delivery?.delivery_time?.next_delivery?.standard
                                  ?.time_slot
                              }
                            </p>
                          </div>
                        </div>
                        <div className="self-center flex">
                          <p>
                            {
                              delivery?.delivery_time?.next_delivery?.standard
                                ?.price
                            }
                          </p>
                        </div>
                      </div>
                      <div
                        className={`box-border cursor-pointer rounded-[12px] flex min-h-[78px] justify-between p-4 border-2 mt-4 ${
                          selectDeliveryDetails?.type === "chooseTwo"
                            ? "border-black bg-gray-100"
                            : "hover:bg-gray-100 hover:border-2 hover:border-black"
                        }`}
                        onClick={() => openChooseHourWindow(true)}
                      >
                        <div className="flex items-center ">
                          <img src={ChooseTwoWindowSvg} alt="choose2Hour-Svg" />
                          <div className="ml-3">
                            <p>Choose 2-hour window</p>
                            <p className="text-base text-green-700">change</p>
                          </div>
                        </div>
                        <div className="self-center flex">
                          <p>Free</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <div>
                {deliveryTimeDetails[0] &&
                deliveryTimeDetails[0].pickup_time &&
                deliveryTimeDetails[0].pickup_time.pickup_timings ? (
                  <>
                    <div className="overflow-x-auto px-4 pb-4">
                      <div className="flex">
                        {deliveryTimeDetails[0].pickup_time.pickup_timings.map(
                          (detail) => (
                            <button
                              key={detail.day}
                              className={`min-w-[60px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-4 my-1 border pl-3 ${
                                selectedDay === detail.day ? "bg-gray-200" : ""
                              }`}
                              onClick={() => handleDayClick(detail.day)}
                              style={{
                                marginRight:
                                  detail.day !==
                                  deliveryTimeDetails[0].pickup_time
                                    .pickup_timings.length -
                                    1
                                    ? "4px"
                                    : 0,
                              }}
                            >
                              <span>{detail.day}</span>
                              {/* <span>May-22</span> */}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                    <div className="relative h-[400px] overflow-y-auto">
                      <ul>
                        {deliveryTimeDetails[0].pickup_time.pickup_timings
                          .filter((detail) => detail.day === selectedDay)
                          .flatMap((detail) =>
                            detail.slots.map((slotDetail, slotIndex) => (
                              <li key={slotIndex} className="px-4">
                                <button
                                  className={`flex justify-between w-full py-6 cursor-pointer ${
                                    selectPickupDetails?.time_slot ===
                                    slotDetail.time_slot
                                  }`}
                                  onClick={() => {
                                    setSelectedSlot(slotDetail);
                                    handlePickupDetails({
                                      day: detail.day,
                                      time_slot: slotDetail.time_slot,
                                      price: slotDetail.price,
                                    });
                                  }}
                                >
                                  <div className="flex items-center">
                                    <Radio
                                      checked={
                                        selectPickupDetails?.time_slot ===
                                        slotDetail.time_slot
                                      }
                                    >
                                      {slotDetail.time_slot}
                                    </Radio>
                                  </div>
                                  <div>{slotDetail.price}</div>
                                </button>
                              </li>
                            ))
                          )}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>Loading..</>
                )}
              </div>
            </>
          )}

          <button
            className={`px-4 cursor-pointer relative rounded-[27px] h-14 w-full bg-[#2C890F] mt-4 flex items-center justify-center ${
              loading ? "opacity-50" : ""
            }`}
            onClick={() => onContinue()}
            disabled={loading}
          >
            <span className="text-white text-lg">Continue</span>
            {loading && (
              <div className="ml-6">
                <Spinner fontsize={20} loaderColor="#FFFFFF" />
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryTimeInCheckOut;
