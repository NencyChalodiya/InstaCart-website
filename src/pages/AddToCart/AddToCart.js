import React, { useRef, useState, useEffect } from "react";
import API from "../../services/api";
import { offersCategory } from "../../data/offers";
import AddproductToListModal from "../StoreSidebarPages/List/AddproductToListModal";
import { updateCartItem } from "../../utils/Reducers/ProductSlice";

import { Modal } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import UpsideArrowSvg from "../../assets/images/upsideArrow.svg";
import DownSideArrowSvg from "../../assets/images/downSideArrow.svg";
import BoldedDownArrow from "../../assets/images/boldedDownSideArrow.svg";
import ListIconSvg from "../../assets/images/listIcon.svg";
import TickSvg from "../../assets/images/tick.svg";

const AddToCart = ({
  addToCartModal,
  onBackClick,
  itemsAdd,
  productDetail,
  storeId,
  AddtoCart,
}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);
  const [mainImage, setMainImage] = useState(
    productDetail?.image ? productDetail.image[0] : "default_image_path_here"
  );
  const [isSaved, setIsSaved] = useState(false);
  const [addProductListModal, openAddProductListModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);

  console.log("cartItemssqwsqq", cartItems);
  const detailRef = useRef(null);
  const IngredientRef = useRef(null);
  const directionRef = useRef(null);

  // console.log("productDetail:", productDetail);
  // console.log("productDetail.id:", productDetail?.id);
  // console.log("cartItems:", cartItems);
  // console.log("selectedValue", selectedValue);

  const item = cartItems.find((item) => item.id === productDetail?.id);
  // console.log("item", item);
  // if (item) {
  //   console.log("cartItems.qty", item.qty);
  // } else {
  //   console.log(
  //     "Product not found in cartItems or productDetail is undefined."
  //   );
  // }

  useEffect(() => {
    const item = cartItems.find((item) => item.id === productDetail?.id);
    if (item) {
      setSelectedValue(item?.qty);
    } else {
      setSelectedValue(1);
    }
  }, [cartItems, productDetail]);

  const scrollToDetail = () => {
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (IngredientRef.current) {
      IngredientRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (directionRef.current) {
      directionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const saveProducts = async () => {
    try {
      let payload = {
        productId: productDetail.id,
      };
      const response = await API.addToSavedProducts(payload);
      if (response.status === "success") {
        setIsSaved(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSavedProduct = async (productId) => {
    try {
      const response = await API.delSavedProducts(productId);
      if (response.status === "success") {
        setIsSaved(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productDetail?.image && productDetail.image.length > 0) {
      setMainImage(productDetail.image[0]);
    }
  }, [productDetail]);

  const handleClick = () => {
    if (isSaved) {
      deleteSavedProduct(productDetail.id);
    } else {
      saveProducts();
    }
  };

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    document.getElementById("dropdown").click();
  };

  const handleSelectChange = (e) => {
    const newQty = parseInt(e.target.value, 10);
    console.log("newQty", newQty);
    setSelectedValue(newQty);
    // const updatedCartItems = cartItems.map((item) => {
    //   if (item.id === productDetail.id) {
    //     return { ...item, qty: newQty };
    //   }
    //   return item;
    // });
    // dispatch(updateCartItem(updatedCartItems));
  };
  console.log("selected value", selectedValue);

  if (selectedValue !== item?.qty) {
    console.log("selectedValue == item?.qty");
  } else {
    console.log("dsfgklshgflagsf");
  }
  return (
    <Modal
      centered
      open={addToCartModal}
      closable={false}
      width={1450}
      footer={false}
    >
      <div className="h-[700px] overflow-auto ">
        <div className="flex-grow flex-shrink px-4 pb-8">
          <div
            className="flex items-center cursor-pointer"
            onClick={onBackClick}
          >
            <IoArrowBackOutline className="w-5 h-5 mr-2 cursor-pointer" />
            <span className="text-base">Back</span>
          </div>
          <div className="px-4 pt-8">
            <div className="flex max-md:flex-col items-center justify-between">
              <div className="flex max-md:flex-col items-center gap-6">
                <div className="gap-10 mr-8 max-lg:mt-[-250px] max-md:mt-0">
                  <div className="flex  max-lg:flex-col">
                    <div className="max-lg:order-2">
                      <div className="mb-6 max-lg:hidden">
                        <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center ">
                          <span className="block">
                            <img src={UpsideArrowSvg} alt="upsideArrow-svg" />
                          </span>
                        </button>
                      </div>
                      <div>
                        <ul className="flex flex-col  justify-center w-full h-full max-lg:flex-row">
                          <li className="lg:hidden">
                            <div className="mb-6">
                              <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center ">
                                <span className="block">
                                  <img
                                    src={DownSideArrowSvg}
                                    alt="downSideArrow-svg"
                                  />
                                </span>
                              </button>
                            </div>
                          </li>

                          {productDetail && productDetail?.image ? (
                            <>
                              {productDetail?.image.map((productImg) => (
                                <li className="inline-block p-1">
                                  <button
                                    className="border p-1 m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl hover:border-2 hover:border-black "
                                    onMouseEnter={() =>
                                      handleImageClick(productImg)
                                    }
                                  >
                                    <img
                                      src={productImg}
                                      alt="img-1"
                                      className="h-auto max-w-full rounded-xl"
                                    />
                                  </button>
                                </li>
                              ))}
                            </>
                          ) : (
                            <>
                              <div>Loading...</div>
                            </>
                          )}

                          <li>
                            <div className="mt-6 lg:hidden">
                              <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center">
                                <span className="block">
                                  <img
                                    src={UpsideArrowSvg}
                                    alt="upsideArrow-svg"
                                  />
                                </span>
                              </button>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-6 max-lg:hidden">
                          <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center">
                            <span className="block">
                              <img
                                src={DownSideArrowSvg}
                                alt="downSideArrow-svg"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>{" "}
                    {productDetail ? (
                      <>
                        <div className="flex items-center w-full ">
                          <div className="my-4 mx-auto max-h-[416px] w-[300px] ">
                            <img
                              src={mainImage}
                              alt="main-img"
                              className="w-full h-80 rounded-xl"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                </div>

                {productDetail ? (
                  <>
                    <div className="flex max-lg:flex-col">
                      <div className="mb-[35px]  w-full ">
                        <h2 className="mt-2 mb-2 ">
                          <span className="text-2xl font-bold leading-5 ">
                            {productDetail?.title}
                          </span>
                        </h2>
                        <div>
                          <div className="flex">
                            <span className="text-base leading-4 ">
                              {productDetail?.label}{" "}
                            </span>
                            <span className="text-base leading-4 ml-5">
                              {productDetail?.per_unit_price}
                            </span>
                          </div>
                        </div>
                        <div className="my-2">
                          <div>
                            <a href="/" className="text-sm leading-4 underline">
                              <span>Shop all simply</span>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-wrap mt-4"></div>
                        <div className="mt-4">
                          <div
                            className="border-t-[1px] border-b-[1px] cursor-pointer"
                            onClick={scrollToDetail}
                          >
                            <div className="min-h-[50px] flex items-center flex-wrap">
                              <div className="flex items-center justify-between w-full h-full">
                                <div className="text-base leading-4">
                                  Details
                                </div>
                                <img
                                  src={DownSideArrowSvg}
                                  alt="downSideArrow-svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" border-b-[1px]">
                            <div
                              className="min-h-[50px] flex items-center flex-wrap cursor-pointer"
                              onClick={scrollToDetail}
                            >
                              <div className="flex items-center justify-between w-full h-full">
                                <div className="text-base leading-4">
                                  Ingredients
                                </div>
                                <img
                                  src={DownSideArrowSvg}
                                  alt="downSideArrow-svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" border-b-[1px]">
                            <div
                              className="min-h-[50px] flex items-center flex-wrap cursor-pointer"
                              onClick={scrollToDetail}
                            >
                              <div className="flex items-center justify-between w-full h-full">
                                <div className="text-base leading-4">
                                  Directions
                                </div>
                                <img
                                  src={DownSideArrowSvg}
                                  alt="downSideArrow-svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full  ml-6 max-md:ml-0 mb-[5px]  ">
                        <div className="border rounded-xl px-4 mb-[35px]  lg:w-[450px]  ">
                          <div className="mt-4">
                            <div>
                              <div className="flex items-end mb-1 ">
                                {productDetail?.actual_price ===
                                productDetail?.selling_price ? (
                                  <>
                                    <span className=" text-2xl p-1 leading-5 font-bold">
                                      ${productDetail?.actual_price}
                                    </span>
                                    <span className="mt-[-2px] ml-2 bg-[#F6F7F8] py-[1px] px-2 text-[#2D2E32] font-medium">
                                      24%off
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span className="bg-[#FDDC22] text-2xl p-1 leading-5 font-bold">
                                      {productDetail?.actual_price}
                                    </span>
                                    <div className="flex flex-col ml-1">
                                      <p className="text-sm leading-4 text-gray-500">
                                        {productDetail?.selling_price}
                                      </p>
                                    </div>
                                    <span className="mt-[-2px] ml-2 bg-[#F6F7F8] py-[1px] px-2 text-[#2D2E32] font-medium">
                                      24%off
                                    </span>
                                  </>
                                )}
                                <div>
                                  <span className="ml-4 bg-[#FDDC22]  text-lg leading-4">
                                    {productDetail?.discount_label}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex-grow"></div>
                          </div>
                          <div className="relative flex flex-col flex-wrap justify-between mt-4">
                            {item && item?.qty >= 1 ? (
                              <>
                                <button
                                  className={`mb-4 cursor-pointer relative min-w-[180px] w-full h-14 rounded-xl text-base leading-4  ${
                                    selectedValue !== item?.qty
                                      ? "text-black bg-[#E8E9EB]"
                                      : "text-white bg-[#277D0F]"
                                  }`}
                                  onClick={handleButtonClick}
                                >
                                  <span className="cursor-pointer">
                                    <div className="flex items-center justify-between px-3">
                                      <span className="cursor-pointer flex-grow ">
                                        {selectedValue !== item?.qty
                                          ? `${selectedValue}`
                                          : `${selectedValue} in cart`}
                                      </span>
                                      <select
                                        id="dropdown"
                                        name="items"
                                        value={selectedValue}
                                        onChange={(value) =>
                                          handleSelectChange(value)
                                        }
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                      </select>
                                      <img
                                        src={BoldedDownArrow}
                                        alt="bolded-arrow"
                                      />
                                    </div>
                                  </span>
                                </button>
                                {selectedValue !== item?.qty && (
                                  <button
                                    className="px-4 mb-4 cursor-pointer relative min-w-[180px] w-full h-14 rounded-[27px] text-white bg-[#277D0F]"
                                    onClick={(e) =>
                                      AddtoCart(
                                        e,
                                        productDetail,
                                        productDetail.subcategory_id,
                                        productDetail.category_id,
                                        storeId,
                                        selectedValue
                                      )
                                    }
                                  >
                                    <span className="block mx-2 text-base leading-5">
                                      Update quantity
                                    </span>
                                  </button>
                                )}
                              </>
                            ) : (
                              <>
                                <button
                                  className={`mb-4 cursor-pointer relative min-w-[180px] w-full h-14 rounded-xl text-base leading-4 text-black bg-[#E8E9EB] `}
                                  onClick={handleButtonClick}
                                >
                                  <span className="cursor-pointer">
                                    <div className="flex items-center justify-between px-3">
                                      <span className="cursor-pointer flex-grow ">
                                        {selectedValue} {""}
                                      </span>
                                      <select
                                        id="dropdown"
                                        name="items"
                                        value={selectedValue}
                                        onChange={(value) =>
                                          handleSelectChange(value)
                                        }
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                      </select>
                                      <img
                                        src={BoldedDownArrow}
                                        alt="bolded-arrow"
                                      />
                                    </div>
                                  </span>
                                </button>

                                <button
                                  className="px-4 mb-4 cursor-pointer relative min-w-[180px] w-full h-14 rounded-[27px] text-white bg-[#277D0F]"
                                  onClick={(e) =>
                                    AddtoCart(
                                      e,
                                      productDetail,
                                      productDetail.subcategory_id,
                                      productDetail.category_id,
                                      storeId,
                                      selectedValue
                                    )
                                  }
                                >
                                  <span className="block mx-2 text-base leading-5">
                                    Add to cart
                                  </span>
                                </button>
                              </>
                            )}
                          </div>

                          <div className="flex flex-wrap px-1 pt-3 pb-4">
                            <div className="mx-3 my-2">
                              <div>
                                <button
                                  className="relative m-auto leading-5 text-black bg-white cursor-pointer"
                                  onClick={() => handleClick()}
                                >
                                  <span className="block overflow-hidden text-ellipsis">
                                    <div className="flex items-center">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#242529"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="systemGrayscale80"
                                        size="24"
                                        aria-hidden="true"
                                      >
                                        {isSaved ? (
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8 3a5.5 5.5 0 0 0-5.5 5.5c0 2.974 1.57 5.67 3.29 7.746 1.734 2.096 3.732 3.696 4.82 4.5.83.61 1.948.611 2.778 0 1.088-.803 3.086-2.404 4.821-4.5C19.93 14.17 21.5 11.474 21.5 8.5A5.5 5.5 0 0 0 12 4.726 5.49 5.49 0 0 0 8 3"
                                          ></path>
                                        ) : (
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8 5a3.5 3.5 0 0 0-3.5 3.5c0 2.286 1.225 4.532 2.83 6.47 1.59 1.92 3.444 3.41 4.467 4.166.124.09.28.09.403 0 1.025-.756 2.88-2.245 4.469-4.165C18.274 13.032 19.5 10.786 19.5 8.5a3.5 3.5 0 0 0-6.61-1.604l-.666 1.294a.25.25 0 0 1-.444 0l-.667-1.293A3.5 3.5 0 0 0 8 5M2.5 8.5A5.5 5.5 0 0 1 12 4.726 5.5 5.5 0 0 1 21.5 8.5c0 2.974-1.57 5.67-3.29 7.746-1.736 2.096-3.734 3.697-4.822 4.5a2.33 2.33 0 0 1-2.778 0c-1.088-.804-3.086-2.404-4.82-4.5C4.07 14.17 2.5 11.474 2.5 8.5"
                                          ></path>
                                        )}
                                      </svg>
                                      <span className="ml-1">
                                        {isSaved ? "Saved" : "Save"}
                                      </span>
                                    </div>
                                  </span>
                                </button>
                              </div>
                            </div>

                            <div className="mx-3 my-2">
                              <div>
                                <button
                                  className="relative m-auto leading-5 text-black bg-white cursor-pointer"
                                  onClick={() => openAddProductListModal(true)}
                                >
                                  <span className="block overflow-hidden text-ellipsis">
                                    <div className="flex items-center">
                                      <img
                                        src={ListIconSvg}
                                        alt="listIcon-svg"
                                      />
                                      <span className="ml-1">Add to list</span>
                                    </div>
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="mx-3 my-2"></div>
                            <div className="mx-3 my-2"></div>
                          </div>
                        </div>

                        <div className="mb-2">
                          <div className="flex items-center justify-center">
                            <img src={TickSvg} alt="tick-svg" />
                            <a
                              href="/"
                              className="mx-1 leading-4 text-sm underline text-[#343538] font-semibold "
                            >
                              100% satisfaction gaurantee
                            </a>
                          </div>
                          <div className="flex items-center justify-center text-[#82868D]">
                            <div className="mx-1">
                              Place your order with peace of mind
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
          </div>

          <div class="w-full py-6  ">
            <div class="w-full px-4 mb-6">
              <div class="flex items-center justify-between mt-4 mb-8">
                <div>
                  <h2 class="flex mr-2">
                    <div class="text-3xl font-bold leading-5">Best Sellers</div>
                  </h2>
                </div>
              </div>

              <div>
                <div class="relative flex flex-row">
                  <div class="w-full">
                    <ul class="w-full h-full min-h-[304px] grid grid-cols-8 max-lg:grid-cols-3 gap-4 justify-between mt-2 max-sm:grid-cols-2 max-xl:grid-cols-4 max-3xl:grid-cols-5">
                      {offersCategory.map((category) => (
                        <li class="flex flex-col">
                          <div class="relative overflow-hidden rounded-xl">
                            <div class="w-full h-[200px]">
                              <img
                                src={category.offerCategoryImg}
                                alt="Product Image"
                              />
                            </div>
                          </div>
                          <div class="px-2 mt-1">
                            <div className="py-[1px] px-1 ">
                              <span className="text-sm font-bold text-gray-700 align-super">
                                $
                              </span>
                              <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                {category.offerCategoryPrice}
                              </span>
                              <span className="text-sm font-bold text-gray-700 align-super">
                                49
                              </span>
                            </div>
                            <div className="">
                              <span className="text-gray-500">
                                {category.offerCategoryName}
                              </span>
                            </div>
                            <div>
                              <p className="mt-[6px] text-gray-400">
                                {category.offerCategoryIngre}
                              </p>
                            </div>
                            <div className="flex">
                              <div className="text-gray-400">
                                {category.offerCategoryWeight}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-wrap gap-4 px-4 border-b">
            <div className="flex-grow flex-shrink">
              {productDetail ? (
                <>
                  <div className="w-full mt-4" ref={detailRef}>
                    <h2 className="text-base leading-4 font-semibold">
                      Details
                    </h2>
                    <div className="mt-3">
                      <p className="text-gray-500">
                        {productDetail?.product_description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-4" ref={IngredientRef}>
                    <h2 className="text-base leading-4 font-semibold">
                      Ingredients
                    </h2>
                    <div className="mt-3">
                      <p className="text-gray-500">
                        {productDetail?.product_ingredients}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-4" ref={directionRef}>
                    <h2 className="text-base leading-4 font-semibold">
                      Direction
                    </h2>
                    <div className="mt-3">
                      <p className="text-gray-500">
                        {productDetail?.product_directions}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <AddproductToListModal
        addProductListModal={addProductListModal}
        onCancel={() => openAddProductListModal(false)}
        productDetail={productDetail}
        storeId={storeId}
      />
    </Modal>
  );
};

export default AddToCart;
