import React from "react";

import { Modal } from "antd";

const SwitchStoreModal = ({
  switchStoreModal,
  onCancel,
  shops,
  handleStoreSelect,
}) => {
  return (
    <Modal
      centered
      open={switchStoreModal}
      onCancel={onCancel}
      footer={false}
      closable={false}
    >
      <div className="h-[400px] overflow-y-auto px-4 pb-8">
        {shops?.map((store) => (
          <div className="pb-2 " key={store.store_id}>
            <button
              className="flex w-full text-left"
              onClick={() => handleStoreSelect(store)}
            >
              <span className="basis-[60px]">
                <img
                  src={store?.image_url}
                  alt={`${store?.store_name} logo`}
                  className="inline-block max-w-full relative top-3 rounded-full w-[48px] h-[48px] border"
                />
              </span>
              <span className="flex flex-col flex-grow pt-3">
                <span>
                  <span className="inline">{store?.store_name}</span>
                </span>
                <span>
                  <span className="inline">{store?.messages[2]}</span>
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SwitchStoreModal;
