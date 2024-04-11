import React from "react";
import { Modal } from "antd";
import { Input } from "antd";
const { TextArea } = Input;
const CreateListModal = ({ openList, onCancel }) => {
  return (
    <Modal
      title=""
      centered
      open={openList}
      onCancel={onCancel}
      footer={false}
      width={500}
    >
      <div className="h-[700px]">
        <div className="px-4 pb-8 overflow-y-auto ">
          <div></div>
          <div className="p-4">
            <div className="pb-[90px]">
              <button className="w-full bg-transparent cursor-pointer">
                <div className="flex flex-row items-center w-full py-3">
                  <img
                    src="https://www.instacart.com/image-server/48x/www.instacart.com/assets/inspiration/lists/retailer_icon_placeholder-63a3e2b01979f35da0e1870724fce461e1878cf4a1109d8d5e383d3ce715635c.png"
                    alt="create-list-img-store"
                  />
                  <div className="flex flex-col items-start pl-3 ">
                    <div className="text-sm leading-4">
                      Choose a store (Required)
                    </div>
                    <div className="text-sm leading-4">
                      Your list will be shoppable at this store
                    </div>
                  </div>
                </div>
              </button>
              <div className="border-b-[1px] pt-2"></div>
              <div className="py-3">
                <div className="py-2">
                  <div className="flex flex-row flex-nowrap items-center  rounded-xl h-14 box-border max-w-[600px]">
                    <div className="relative flex-grow h-full ">
                      <input
                        className="box-border w-full h-full px-3 py-2 bg-transparent border outline-none roundd-xl hover:outline-gray-600 "
                        placeholder="Add the title (Required)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="flex flex-row flex-nowrap items-center border-none  rounded-xl h-14 box-border max-w-[600px]">
                  <div className="relative flex-grow h-full ">
                    <textarea
                      className="box-border w-full h-full px-3 py-2 bg-transparent border outline-none roundd-xl hover:outline-gray-600 "
                      placeholder="Add the discription (optional)"
                      rows="4"
                      cols="50"
                      maxlength="110"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="pt-1 pb-1 text-sm leading-4">
              Add a cover photo to your list
            </div>
            <div className="flex flex-col justify-between gap-6">
              <ul className="inline-block">
                <div className="grid grid-cols-3 justify-start w-full pt-1 pl-[2px] pb-2 gap-6">
                  <li>
                    <button className="w-[133px] h-[96px] rounded-xl">
                      <img
                        src="https://www.instacart.com/image-server/133x96/www.instacart.com/assets/inspiration/lists_banners/banner_15-5abf34d76ada27b013eb5b37cf2220a614f87c4b0b9c962dd362037ada52ca1a.png"
                        alt="img-1"
                        className="w-[133px] h-[96px] rounded-xl"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="w-[133px] h-[96px] rounded-xl">
                      <img
                        src="https://www.instacart.com/image-server/133x96/www.instacart.com/assets/inspiration/lists_banners/banner_15-5abf34d76ada27b013eb5b37cf2220a614f87c4b0b9c962dd362037ada52ca1a.png"
                        alt="img-1"
                        className="w-[133px] h-[96px] rounded-xl"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="w-[133px] h-[96px] rounded-xl">
                      <img
                        src="https://www.instacart.com/image-server/133x96/www.instacart.com/assets/inspiration/lists_banners/banner_15-5abf34d76ada27b013eb5b37cf2220a614f87c4b0b9c962dd362037ada52ca1a.png"
                        alt="img-1"
                        className="w-[133px] h-[96px] rounded-xl"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="w-[133px] h-[96px] rounded-xl">
                      <img
                        src="https://www.instacart.com/image-server/133x96/www.instacart.com/assets/inspiration/lists_banners/banner_15-5abf34d76ada27b013eb5b37cf2220a614f87c4b0b9c962dd362037ada52ca1a.png"
                        alt="img-1"
                        className="w-[133px] h-[96px] rounded-xl"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="w-[133px] h-[96px] rounded-xl">
                      <img
                        src="https://www.instacart.com/image-server/133x96/www.instacart.com/assets/inspiration/lists_banners/banner_15-5abf34d76ada27b013eb5b37cf2220a614f87c4b0b9c962dd362037ada52ca1a.png"
                        alt="img-1"
                        className="w-[133px] h-[96px] rounded-xl"
                      />
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateListModal;
