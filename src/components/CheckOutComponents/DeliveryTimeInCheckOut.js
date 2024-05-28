import React, { useState, useEffect } from "react";
import { Radio } from "antd";

import DeliveryTimeSvg from "../../assets/images/deliveryTime.svg";
import PrioritySvg from "../../assets/images/prioritySvg.svg";
import StandardSvg from "../../assets/images/standardSvg.svg";
import ChooseTwoWindowSvg from "../../assets/images/chooseTwoWindowSvg.svg";
import DownArrowSvg from "../../assets/images/downArrow.svg";

const DeliveryTimeInCheckOut = ({
  addressType,
  toggleDeliveryTimeAccordion,
  isDeliveryTimeExpanded,
  deliveryTimeDetails,
  openChooseHourWindow,
  handleDeliveryDetails,
  selectDeliveryDetails,
  onContinue,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);
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
    // setSelectedDeliveryDetails(null);
  };

  // const handleDeliveryDetails = (details) => {
  //   setSelectedDeliveryDetails(details);
  // };

  // const handleChooseSlot = (details) => {
  //   setSelectedDeliveryDetails(details);
  //   openChooseHourWindow(false);
  // };

  return (
    <div>
      <div className="p-6 border-b mt-6 " onClick={toggleDeliveryTimeAccordion}>
        <div>
          <div className="relative flex items-center">
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
            {!isDeliveryTimeExpanded && (
              <button className="h-8 w-8 cursor-pointer pl-2">
                <img src={DownArrowSvg} alt="downArrow-svg" />
              </button>
            )}
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
                            ? "border-black"
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
                          <p>Free</p>
                        </div>
                      </div>
                      <div
                        className={`box-border cursor-pointer rounded-[12px] flex min-h-[78px] justify-between p-4 border-2 mt-4 ${
                          selectDeliveryDetails?.type === "standard"
                            ? "border-black"
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
                          <p>Free</p>
                        </div>
                      </div>
                      <div
                        className={`box-border cursor-pointer rounded-[12px] flex min-h-[78px] justify-between p-4 border-2 mt-4 ${
                          selectDeliveryDetails?.type === "chooseTwo"
                            ? "border-black"
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
                                <button className="flex justify-between w-full py-6 cursor-pointer">
                                  <div className="flex items-center">
                                    <Radio>{slotDetail.time_slot}</Radio>
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
            className="px-4 cursor-pointer relative rounded-[27px] h-14 w-full bg-[#2C890F] mt-4"
            onClick={() => onContinue()}
          >
            <span className="text-white text-lg">Continue</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryTimeInCheckOut;
