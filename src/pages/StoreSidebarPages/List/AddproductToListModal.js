import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../../../services/api";
import Spinner from "../../../components/atoms/Spinner";

import { Modal } from "antd";
import { Checkbox } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import CrossSvg from "../../../assets/images/cross.svg";

const AddproductToListModal = ({
  addProductListModal,
  onCancel,
  productDetail,
  storeId,
}) => {
  const navigate = useNavigate();

  const [selectedListId, setSelectedListId] = useState(null);
  const [listDetails, setListDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addProductsInList = async () => {
    setIsLoading(true);
    try {
      let payload = {
        list_id: selectedListId,
        product_ids: [productDetail.id],
      };
      const response = await API.addProductListItems(payload);
      if (response.status === "success") {
        navigate(`/store/your-lists/${storeId}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (listId) => {
    setSelectedListId(listId);
  };

  const fetchListDetails = async (page) => {
    setLoading(true);
    const queryParams = {
      page: page,
    };
    if (storeId) {
      queryParams.storeId = storeId;
    }

    try {
      const response = await API.getListDetails(queryParams);
      if (response.status === "success") {
        if (page === 1) {
          setListDetails(response.data);
        } else {
          setListDetails((prevVal) => ({
            ...prevVal,
            lists: [...prevVal.lists, ...response.data.lists],
          }));
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   setPage(1);
  //   fetchListDetails(1);
  // }, [storeId]);

  useEffect(() => {
    if (addProductListModal) {
      setPage(1);
      fetchListDetails(1);
    }
  }, [addProductListModal, storeId]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchListDetails(nextPage);
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
      <div className=" px-4 pb-8">
        <div className="px-4 pb-6">
          {loading && page === 1 ? (
            <div className="text-center my-40">
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 30,
                      color: "#1D892B",
                    }}
                    spin
                  />
                }
              />
            </div>
          ) : (
            <div
              className="max-h-[350px] pb-4 border-b "
              id="scrollableDiv"
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              {listDetails && listDetails.lists ? (
                <>
                  {listDetails.lists.length > 0 ? (
                    <>
                      <InfiniteScroll
                        dataLength={listDetails.lists.length}
                        next={fetchMoreData}
                        hasMore={
                          listDetails.lists.length < listDetails.total_lists
                        }
                        loader={
                          <div className="text-center mt-4 mb-10">
                            <Spin
                              indicator={
                                <LoadingOutlined
                                  style={{
                                    fontSize: 20,
                                    color: "#1D892B",
                                  }}
                                  spin
                                />
                              }
                            />
                          </div>
                        }
                        scrollThreshold={0.5}
                        scrollableTarget="scrollableDiv"
                      >
                        {listDetails.lists.map((list) => (
                          <div className="flex ">
                            <div className="py-1 cursor-pointer relative flex flex-col justify-between ">
                              <div className="pb-1 " key={list.list_id}>
                                <Checkbox
                                  onChange={() =>
                                    handleCheckboxChange(list.list_id)
                                  }
                                >
                                  {list?.title}
                                </Checkbox>
                              </div>
                            </div>
                          </div>
                        ))}
                      </InfiniteScroll>
                    </>
                  ) : (
                    <>No List available</>
                  )}
                </>
              ) : (
                <>No List available</>
              )}
            </div>
          )}

          <div className="py-1 text-[#2C890F] ">
            <Link
              to={`/store/your-lists/${storeId}`}
              className="text-[#2C890F] hover:text-black"
            >
              View my lists
            </Link>
          </div>
        </div>
        <div className="py-3 text-[#2C890F] hover:text-black ">
          <Link to={"/store/your-lists"} className="text-[#2C890F] ">
            Add new List
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full ${
              isLoading ? "opacity-50" : ""
            }`}
            onClick={() => addProductsInList()}
            disabled={isLoading}
          >
            <div className="flex items-center justify-center">
              <span className="block text-xl font-semibold leading-5 text-white">
                Done
              </span>
              {isLoading && (
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

export default AddproductToListModal;
