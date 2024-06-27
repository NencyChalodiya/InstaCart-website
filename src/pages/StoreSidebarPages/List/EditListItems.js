import React, { useState } from "react";
import { Link } from "react-router-dom";

import Spinner from "../../../components/atoms/Spinner";
import API from "../../../services/api";

import { Modal } from "antd";

import SearchSvg from "../../../assets/images/search.svg";
import CrossSvg from "../../../assets/images/cross.svg";
import CircleSvg from "../../../assets/images/circle.svg";

const EditListItems = ({
  editListItemModal,
  onCancel,
  productListDetail,
  listId,
  storeId,
}) => {
  const [activeButton, setActiveButton] = useState("currentList");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("listId", listId);

  const editProductListItems = async () => {
    setLoading(true);
    try {
      const payload = {
        // list_id: parseInt(listId, 10),
        list_id: 6,
        product_ids: selectedProducts,
      };
      console.log(typeof payload.list_id);
      console.log("payload", payload);
      const response = await API.editListItems(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.includes(productId)
        ? prevSelectedProducts.filter((id) => id !== productId)
        : [...prevSelectedProducts, productId]
    );
  };

  return (
    <Modal
      title={
        <div className="border-b mb-2">
          <button className="cursor-pointer" onClick={onCancel}>
            <img src={CrossSvg} alt="crossIconImg" />
          </button>
          <div>
            <h2 className="text-xl ">Add items to List</h2>
          </div>
        </div>
      }
      centered
      open={editListItemModal}
      closable={false}
      footer={false}
    >
      <div className="h-[650px] flex flex-col">
        <div className="pb-[50px] bg-white flex-grow overflow-hidden ">
          <div className=" w-full">
            <button className="cursor-pointer flex relative w-full h-[40px] rounded-[8px] items-center bg-[#F6F7F8] mt-2">
              <span className="ml-3">Search CVS...</span>
              <span className="flex ml-auto mr-3">
                <img src={SearchSvg} alt="searchSvg" />
              </span>
            </button>
            <div className="flex mt-3 ">
              <span className="relative">
                <button
                  className={`box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer ${
                    activeButton === "currentList"
                      ? "bg-[#242529] text-white"
                      : "bg-[#E8E9EB] text-black"
                  }`}
                  onClick={() => handleButtonClick("currentList")}
                >
                  Current List
                </button>
              </span>
              <span className="relative">
                <button
                  className={`box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer ${
                    activeButton === "buyAgain"
                      ? "bg-[#242529] text-white"
                      : "bg-[#E8E9EB] text-black"
                  }`}
                  onClick={() => handleButtonClick("buyAgain")}
                >
                  Buy it again
                </button>
              </span>
            </div>
            {activeButton === "currentList" ? (
              <div className="py-4 overflow-y-auto max-h-[550px]">
                <ul>
                  {productListDetail && productListDetail.lists ? (
                    <>
                      {productListDetail.lists.length > 0 ? (
                        <>
                          {productListDetail.lists.map((list) =>
                            list.products && list.products.length > 0 ? (
                              <>
                                {list.products.map((product) => (
                                  <li key={product.id}>
                                    <div>
                                      <div className="flex flex-col p-3">
                                        <div className="flex">
                                          <div className="w-24 h-full mr-2">
                                            <button
                                              className="relative mr-2 cursor-pointer"
                                              onClick={() =>
                                                toggleProductSelection(
                                                  product.id
                                                )
                                              }
                                            >
                                              <span className="flex items-center text-ellipsis ">
                                                <img
                                                  src={product?.image}
                                                  className="max-w-full"
                                                />
                                              </span>
                                            </button>
                                          </div>
                                          <div className="flex flex-col justify-start flex-grow ml-2 mt-5">
                                            <div className="flex">
                                              <div className="flex flex-col justify-start  flex-grow ml-2 ">
                                                <div className="">
                                                  <button className="relative mr-2 cursor-pointer ">
                                                    <span className="flex items-center text-ellipsis">
                                                      <h3 className="text-left text-gray-500">
                                                        {product?.title}
                                                      </h3>
                                                    </span>
                                                  </button>
                                                </div>
                                                <div className="text-gray-400 ">
                                                  {product?.label}
                                                </div>
                                              </div>

                                              <div className="h-9 flex flex-col basis-[54px] items-end justify-center">
                                                <div
                                                  className={`h-[36px] w-[40px] rounded-[36px] flex items-center justify-center border-2 relative top-0 right-0 cursor-pointer ${
                                                    selectedProducts.includes(
                                                      product.id
                                                    )
                                                      ? "bg-[#2C890F]"
                                                      : "bg-transparent"
                                                  }`}
                                                  onClick={() =>
                                                    toggleProductSelection(
                                                      product.id
                                                    )
                                                  }
                                                >
                                                  <img
                                                    src={CircleSvg}
                                                    alt="circle-svg"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </>
                            ) : (
                              <>No Products available.</>
                            )
                          )}
                        </>
                      ) : (
                        <>No Product available.</>
                      )}
                    </>
                  ) : (
                    <>Loading...</>
                  )}
                </ul>
              </div>
            ) : (
              <div className="text-center py-12 ">
                <img
                  src="https://www.instacart.com/assets/recipes/no_items_bia-215c7c6ec26a6a0af4f87134b677bf6505850b1340cfbf39bd9e603968fbb6cb.png"
                  alt="logo-image"
                  className="block mx-auto mb-3 max-w-[235px] max-h-[132px] w-full h-full "
                />
                <h1>Reordering will be easy</h1>
                <p>
                  Items you order will show up here so you can buy them again
                  easily
                </p>
                {/* <Link
                  // to={`/store/front`}
                  to={`/store/${storeId}/front`}
                  className="iniline-block mt-6 text-[#2C890F] hover:text-[#2C890F]"
                >
                  Browse categories
                </Link> */}
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 bg-white z-10 left-0 right-0 my-3 border-t pt-3">
          <button
            type="submit"
            className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full ${
              loading ? "opacity-50" : ""
            }`}
            onClick={() => editProductListItems()}
            disabled={loading}
          >
            <div className="flex items-center justify-center">
              <span className="block text-xl font-semibold leading-5 text-white">
                Done Editing list
              </span>
              {loading && (
                <div className="ml-4">
                  <Spinner fontsize={20} loaderColor="#FFFFFF" />
                </div>
              )}
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditListItems;
