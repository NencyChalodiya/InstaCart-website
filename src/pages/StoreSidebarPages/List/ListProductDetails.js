import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import API from "../../../services/api";

import Navbar from "../../../components/LandingPageComponents/Navbar";
import EditDeleteDetailsModal from "./EditDeleteDetailsModal";
import AddToCart from "../../AddToCart/AddToCart";
import EditDetailModal from "./EditDetailModal";

import LockIconSvg from "../../../assets/images/LockIcon.svg";
import EllipsesSvg from "../../../assets/images/ellipsesSvg.svg";
import UploadSvg from "../../../assets/images/uploadSvg.svg";
import { MdElectricBolt } from "react-icons/md";
import EditListItems from "./EditListItems";

const ListProductDetails = () => {
  const navigate = useNavigate();
  const { storeId, listId } = useParams();
  const [editDeleteDetailsModal, openEditDeleteDetailsModal] = useState(false);
  const [productListDetail, setProductListDetail] = useState([]);
  const [addToCartModal, setaddToCartModal] = useState(false);
  const [productDetail, setProductDetail] = useState([]);
  const [userSettingsDetail, setUserSettingsDetail] = useState(null);
  const [editDetailModal, openEditDetailModal] = useState(false);
  const [currentListDetails, setCurrentListDetails] = useState(null);
  const [editListItemModal, openEditListItemModal] = useState(false);

  const fetchListDetails = async () => {
    const queryParams = {};
    if (storeId) {
      queryParams.storeId = storeId;
    }
    if (listId) {
      queryParams.listId = listId;
    }
    try {
      const response = await API.getListDetails(queryParams);
      console.log(response);
      if (response.status === "success") {
        setProductListDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListDetails();
  }, []);

  const fetchProductDetail = async (productId) => {
    try {
      const response = await API.getIndividualProductDetail(productId);
      setProductDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openProductDetailModal = (productId) => {
    setaddToCartModal(true);
    fetchProductDetail(productId);
  };

  const getAccountSettingsDetails = async () => {
    try {
      //console.log("dkjasnd");
      const response = await API.GetUserDetails();
      console.log(response);
      if (response.status === "success") {
        //console.log(response.user);
        setUserSettingsDetail(response.data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccountSettingsDetails();
  }, []);

  const deleteTheList = async () => {
    try {
      const response = await API.deleteList(listId);
      console.log(response);
      if (response.status === "success") {
        openEditDeleteDetailsModal(false);
        navigate("/store/your-lists");
        fetchListDetails();
      }
    } catch (error) {}
  };

  const handleEditDetailClick = (list) => {
    setCurrentListDetails(list);
    openEditDetailModal(true);
    openEditDeleteDetailsModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {productListDetail && productListDetail.lists ? (
          <>
            {productListDetail.lists.length > 0 ? (
              <>
                {productListDetail.lists.map((list) => (
                  <div className="mt-28  mx-auto max-w-[1451px]">
                    <div>
                      <div className="grid grid-cols-2">
                        <div className="flex flex-col justify-center max-h-[430px] p-[53px] bg-[#F6F7F8] rounded-l-lg">
                          <div className="text-left">
                            <div className="flex justify-between">
                              <h2 className="flex">
                                <div className="pt-1">
                                  <img src={LockIconSvg} alt="lock-icon-Svg" />
                                </div>
                                {list?.title}
                              </h2>
                              <div className="flex mt-3 ml-auto">
                                <button
                                  className="ml-2 cursor-pointer relative w-9 h-9 bg-[#E8E9EB] rounded-full flex justify-center items-center"
                                  onClick={() =>
                                    openEditDeleteDetailsModal(true)
                                  }
                                >
                                  <span className="block text-ellipsis">
                                    <img src={EllipsesSvg} alt="menu-svg" />
                                  </span>
                                </button>
                                <button className="ml-2 cursor-pointer relative w-9 h-9 bg-[#E8E9EB] rounded-full flex justify-center items-center">
                                  <span className="block text-ellipsis">
                                    <img src={UploadSvg} alt="upload-svg" />
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="flex">
                              <img
                                src="https://s3.amazonaws.com/instacart-media/7NEMb9vWSGiyRN5VyytK_user_placeholder_circle.png"
                                alt="profile-logo"
                                className="w-9 h-9 rounded-[50px] mb-2 mr-3"
                              />
                              <span className="pt-2">
                                {" "}
                                {userSettingsDetail?.firstName}{" "}
                                {userSettingsDetail?.lastName || "-"}
                              </span>
                            </div>
                            <p className="my-2">{list?.description}</p>
                            <div className="py-6 ">
                              <Link
                                to={`/store/${storeId}/front`}
                                key={list.store_id}
                              >
                                <div className="flex justify-between">
                                  <img
                                    src={list?.store_logo}
                                    className="h-[55px] w-[55px] border rounded-[50%]"
                                  />
                                  <div className="flex-grow pl-3">
                                    <div>{list?.store_name}</div>
                                    <div>Available in 1148</div>
                                    <div className="flex items-center text-[#3E9A39] text-sm gap-1 font-semibold">
                                      <span>
                                        <MdElectricBolt />
                                      </span>
                                      <san>Delivery</san>
                                      <span>{list?.next_delivery_time}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <button
                              className="px-4 mb-2 cursor-pointer w-full h-[56px] rounded-[27px] relative bg-[#E8E9EB]"
                              onClick={() => openEditListItemModal(true)}
                            >
                              Edit items
                            </button>
                          </div>
                        </div>
                        <div>
                          <img
                            src={list?.cover_image_url}
                            alt={list?.title}
                            className="min-h-full rounded-r-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 ">
                      <ul className="w-full h-full overflow-x-auto grid grid-cols-6 ">
                        {list.products && list.products.length > 0 ? (
                          <>
                            {list.products.map((product) => (
                              <li
                                className="w-[197px] min-w-[157px] max-w-[197px] cursor-pointer"
                                onClick={() =>
                                  openProductDetailModal(product.id)
                                }
                              >
                                <div>
                                  <div className="h-full">
                                    <div className="relative h-full rounded-[12px]">
                                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                                        <div className="relative">
                                          <div className="mb-2">
                                            <div
                                              className="relative"
                                              style={{
                                                paddingTop: "calc(100%)",
                                              }}
                                            >
                                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                                <img
                                                  src={product?.image}
                                                  className="max-w-full min-h-full rounded-[12px]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <div>
                                            <div className="flex">
                                              <div className="py-[1px] px-1">
                                                <span>
                                                  <span className="text-sm font-bold text-gray-700 align-super">
                                                    $
                                                  </span>
                                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                                    {product?.selling_price}
                                                  </span>
                                                  <span className="text-sm font-bold text-gray-700 align-super">
                                                    49
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <h2 className="text-gray-500">
                                              {product?.title}
                                            </h2>
                                          </div>
                                          <div className="flex">
                                            <div className="text-gray-400">
                                              {product?.label}
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </>
                        ) : (
                          <>No Products selected for this list</>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>No Information for this list found.</>
            )}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
      <EditDeleteDetailsModal
        editDeleteDetailsModal={editDeleteDetailsModal}
        onCancel={() => openEditDeleteDetailsModal(false)}
        deleteTheList={deleteTheList}
        handleEditDetail={() => handleEditDetailClick(currentListDetails)}
      />
      <AddToCart
        addToCartModal={addToCartModal}
        onBackClick={() => setaddToCartModal(false)}
        productDetail={productDetail}
        storeId={storeId}
      />
      <EditDetailModal
        editDetailModal={editDetailModal}
        onCancel={() => openEditDetailModal(false)}
        listId={listId}
        currentListDetails={currentListDetails}
        refreshListDetails={fetchListDetails}
      />
      <EditListItems
        editListItemModal={editListItemModal}
        onCancel={() => openEditListItemModal(false)}
        productListDetail={productListDetail}
        listId={listId}
      />
    </>
  );
};

export default ListProductDetails;
