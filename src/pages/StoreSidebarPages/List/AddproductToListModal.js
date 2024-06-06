import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "antd";
import { Checkbox } from "antd";

import CrossSvg from "../../../assets/images/cross.svg";
import API from "../../../services/api";

const AddproductToListModal = ({
  addProductListModal,
  onCancel,
  listDetails,
  productDetail,
  storeId,
}) => {
  const navigate = useNavigate();

  const [selectedListId, setSelectedListId] = useState(null);

  const addProductsInList = async () => {
    try {
      let payload = {
        list_id: selectedListId,
        product_ids: [productDetail.product_id],
      };
      const response = await API.addProductListItems(payload);
      if (response.status === "success") {
        navigate(`/store/your-lists/${storeId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (listId) => {
    setSelectedListId(listId);
  };

  return (
    <Modal
      title={
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
            Add item to:
          </h1>
        </div>
      }
      centered
      open={addProductListModal}
      closable={false}
      footer={false}
    >
      <div className="h-[300px] overflow-y-auto px-4 pb-8">
        <div className="px-4 pb-6">
          <div className="max-h-[350px] pb-4 border-b overflow-y-scroll">
            <div className="flex">
              <div className="py-3 cursor-pointer relative flex flex-col justify-between ">
                {listDetails && listDetails.lists && listDetails.lists ? (
                  listDetails.lists.length > 0 ? (
                    <>
                      {listDetails.lists.map((list) => (
                        <div className="pb-2 " key={list.list_id}>
                          <Checkbox
                            onChange={() => handleCheckboxChange(list.list_id)}
                          >
                            {list?.title}
                          </Checkbox>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>No List found</>
                  )
                ) : (
                  <>Loading...</>
                )}
              </div>
            </div>
            <div className="py-1 text-[#2C890F] ">
              <a href="#" className="text-[#2C890F] ">
                View my lists
              </a>
            </div>
          </div>
          <div className="py-3 text-[#2C890F] ">
            <a href="#" className="text-[#2C890F] ">
              Add new List
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full "
              onClick={() => addProductsInList()}
            >
              <div className="flex items-center justify-center">
                <span className="block text-xl font-semibold leading-5 text-white">
                  Done
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddproductToListModal;
