import React, { useState, useEffect } from "react";
import { Modal, Radio } from "antd";
import CrossSvg from "../../assets/images/cross.svg";

const ChooseHourWindow = ({
  chooseHourWindow,
  onCancel,
  deliveryTimeDetails,
  onChooseSlot,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    if (deliveryTimeDetails[0] && deliveryTimeDetails[0].delivery_time) {
      const todayDetail =
        deliveryTimeDetails[0].delivery_time.delivery_timings.find(
          (detail) => detail.day === "Today"
        );
      if (todayDetail) {
        setSelectedDay("Today");
      } else {
        setSelectedDay(
          deliveryTimeDetails[0].delivery_time.delivery_timings[0]?.day
        );
      }
    }
  }, [deliveryTimeDetails]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null); // Reset selected slot when changing the day
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    onChooseSlot({
      day: selectedDay,
      time_slot: slot.time_slot,
      price: slot.price,
    });
  };

  return (
    <Modal
      title={
        <div>
          <div className="flex items-center">
            <button className="cursor-pointer" onClick={onCancel}>
              <img src={CrossSvg} alt="cross-logo" />
            </button>
            <div className="ml-52">
              <h2 className="text-xl">Choose 2 hour window</h2>
            </div>
          </div>
        </div>
      }
      open={chooseHourWindow}
      footer={false}
      width={700}
      closable={false}
    >
      <div className="h-[500px]">
        {deliveryTimeDetails[0] &&
        deliveryTimeDetails[0].delivery_time &&
        deliveryTimeDetails[0].delivery_time.delivery_timings ? (
          <>
            <div className="overflow-x-auto px-4 pb-4">
              <div className="flex">
                {deliveryTimeDetails[0].delivery_time.delivery_timings.map(
                  (detail) => (
                    <button
                      key={detail.day}
                      className={`min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-4 my-1 border pl-3 ${
                        selectedDay === detail.day ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleDayClick(detail.day)}
                      style={{
                        marginRight:
                          detail.day !==
                          deliveryTimeDetails[0].delivery_time.delivery_timings
                            .length -
                            1
                            ? "4px"
                            : 0,
                      }}
                    >
                      <span>{detail.day}</span>
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="relative h-[400px] overflow-y-auto">
              <ul>
                {deliveryTimeDetails[0].delivery_time.delivery_timings
                  .filter((detail) => detail.day === selectedDay)
                  .flatMap((detail) =>
                    detail.slots.map((slotDetail, slotIndex) => (
                      <li key={slotIndex}>
                        <button
                          className={`flex justify-between w-full py-6 cursor-pointer ${
                            selectedSlot === slotDetail ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleSlotClick(slotDetail)}
                        >
                          <div className="flex items-center">
                            <Radio
                              checked={selectedSlot === slotDetail}
                            ></Radio>
                            {slotDetail.time_slot}
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
    </Modal>
  );
};

export default ChooseHourWindow;
