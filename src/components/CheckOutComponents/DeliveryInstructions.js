import React, { useState } from "react";

import DeliveryCar from "../../assets/images/deliveryCar.svg";
const DeliveryInstructions = ({
  onDeliveryInstructionsChange,
  onLeaveAtMyDoorChange,
}) => {
  const [instructions, setInstructions] = useState("");
  const [leaveAtMyDoor, setLeaveAtMyDoor] = useState(0);

  const handleInstructionChange = (e) => {
    setInstructions(e.target.value);
    onDeliveryInstructionsChange(e.target.value);
  };

  const handleLeaveAtMyDoorChange = (e) => {
    const checked = e.target.checked ? 1 : 0; // Convert boolean to 0 or 1
    setLeaveAtMyDoor(checked);
    onLeaveAtMyDoorChange(checked);
  };

  return (
    <div className="p-6  border-b  mt-4 ">
      <div>
        <div>
          <div className="relative flex items-center">
            <img src={DeliveryCar} alt="car-svg" />
            <div className="mx-3 flex-grow">
              <h2 className="text-lg">Delivery Instructions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <form>
          <div>
            <div className="relative">
              <textarea
                className="px-3 pt-5 pb-3 w-full rounded-xl border"
                placeholder="Add access code"
                rows={3}
                value={instructions}
                onChange={handleInstructionChange}
              />
            </div>
          </div>
          <div className="flex justify-between py-3 relative cursor-pointer">
            <div className="flex pr-1">
              <div className="inline-block relative h-6 w-6 mr-2 mt-2">
                <input
                  type="checkbox"
                  className="absolute h-full w-full "
                  checked={leaveAtMyDoor === 1}
                  onChange={handleLeaveAtMyDoorChange}
                />
              </div>
              <label>
                <span className="flex flex-col mt-2">
                  <span>Leave at my door</span>
                </span>
              </label>
            </div>
          </div>
          <p className="py-3 px-2 rounded bg-[#F6F7F8] text-xs">
            By selecting this option you accept full responsibility for your
            order after it has been delivered unattended, including any loss due
            to theft or damage due to temperature sensitivity.
          </p>
          <div className="mt-2">
            <button className="px-4 cursor-pointer relative rounded-[27px] bg-[#2C890F] h-[54px] w-full text-white text-lg font-semibold">
              <span>Save and continue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInstructions;
