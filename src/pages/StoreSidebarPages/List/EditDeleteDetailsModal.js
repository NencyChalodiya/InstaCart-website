import React, { useState } from "react";

import { Modal } from "antd";

import CrossSvg from "../../../assets/images/cross.svg";
import EditIconSvg from "../../../assets/images/editIcon.svg";
import DeleteIconSvg from "../../../assets/images/deleteIcon.svg";
import CreateListModal from "./CreateListModal";

const EditDeleteDetailsModal = ({
  editDeleteDetailsModal,
  onCancel,
  deleteTheList,
  handleEditDetail,
}) => {
  const [screen, setScreen] = useState(1);
  const [openList, setOpenList] = useState(false);

  const handleScreenChange = () => {
    setScreen(screen + 1);
  };

  return (
    <>
      <Modal
        title={
          <>
            {screen === 1 && (
              <div className="flex items-center h-11">
                <div className="pl-1">
                  <button
                    className="mt-[2px] cursor-pointer h-10 w-10 relative bg-transparent"
                    onClick={onCancel}
                  >
                    <span className="block leading-none">
                      <img src={CrossSvg} alt="cross-svg" />
                    </span>
                  </button>
                </div>
                <h1 className="flex-grow text-lg font-medium text-center">
                  Options
                </h1>
              </div>
            )}

            {screen === 2 && (
              <div className="flex items-center h-11">
                <div className="pl-1">
                  <button
                    className="mt-[2px] cursor-pointer h-10 w-10 relative bg-transparent"
                    onClick={onCancel}
                  >
                    <span className="block leading-none">
                      <img src={CrossSvg} alt="cross-svg" />
                    </span>
                  </button>
                </div>
                <h1 className="flex-grow text-lg font-medium text-center">
                  Delete this list and all its item?
                </h1>
              </div>
            )}
          </>
        }
        centered
        open={editDeleteDetailsModal}
        onCancel={onCancel}
        footer={false}
        closable={false}
      >
        <div>
          {screen === 1 && (
            <div>
              <button
                className="cursor-pointer flex w-full relative"
                onClick={handleEditDetail}
              >
                <span className="block text-ellipsis">
                  <div className="py-1 pl-4 flex">
                    <img src={EditIconSvg} alt="edit-icon" />
                    <span className="pl-1">Edit details</span>
                  </div>
                </span>
              </button>
              <button
                className="cursor-pointer flex w-full relative"
                onClick={() => handleScreenChange()}
              >
                <span className="block text-ellipsis">
                  <div className="py-3 pl-4 flex">
                    <img src={DeleteIconSvg} alt="delete-icon" />
                    <span className="pl-1 text-[#DE3534]">Delete list</span>
                  </div>
                </span>
              </button>
              <button
                className="cursor-pointer relative flex justify-center w-full border-t"
                onClick={onCancel}
              >
                <span className="block text-ellipsis">
                  <div className="pt-3">Cancel</div>
                </span>
              </button>
            </div>
          )}

          {screen === 2 && (
            <div>
              <div className="pt-1 pb-3 pl-4">
                Your list and all its items will be gone for good.
              </div>
              <div className="flex py-2 px-4">
                <button
                  className="px-4 cursor-pointer relative rounded-[27px] h-[54px] w-full bg-[#F6F7F8] hover:bg-gray-200"
                  onClick={onCancel}
                >
                  <span className="mx-2 text-xl">Cancel</span>
                </button>
              </div>
              <div className="flex py-2 px-4">
                <button
                  className="px-4 cursor-pointer relative rounded-[27px] h-[54px] w-full bg-[#DE3534] hover:bg-red-600"
                  onClick={() => deleteTheList()}
                >
                  <span className="mx-2 text-white text-xl">Delete list</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default EditDeleteDetailsModal;
