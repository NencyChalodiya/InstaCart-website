import React from "react";
import { Modal } from "antd";
const ChooseHourWindow = ({ chooseHourWindow, onCancel }) => {
  return (
    <Modal
      title={
        <div>
          <div className="flex items-center">
            <button className="cursor-pointer" onClick={onCancel}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#343538"
                xmlns="http://www.w3.org/2000/svg"
                size="20"
                class="e-1p1m6ki"
                aria-hidden="true"
              >
                <path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path>
              </svg>
            </button>
            <div className="ml-52">
              <h2 className="text-xl ">Choose 2 hour window</h2>
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
        <div className="overflow-y-scroll px-4 pb-8">
          <div>
            <div className="flex">
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
              <button className="min-w-[92px] h-16 rounded-[8px] text-center flex justify-center items-center cursor-pointer flex-col p-1 my-1 border mx-1">
                <span>Today</span>
                <span>May-22</span>
              </button>
            </div>
            <div className="relative">
              <ul>
                <li>
                  <button className="flex justify-between w-full py-6 cursor-pointer ">
                    <div></div>
                    <div></div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ChooseHourWindow;
