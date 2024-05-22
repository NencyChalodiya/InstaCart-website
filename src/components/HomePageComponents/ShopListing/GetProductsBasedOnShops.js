import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { brandStoresData } from "../../../BrandStoreData/brandStoreData";
import AddToCart from "../../../pages/AddToCart/AddToCart";
//import Navbar from "../../LandingPageComponents/Navbar";
import HeaderProducts from "../HeaderOfProducts/HeaderProducts";
import API from "../../../services/api";
import { useNavigate } from "react-router-dom";
import DeliveryTimesModal from "../../../pages/DeliveryTimesModal/DeliveryTimesModal";
import Loader from "react-js-loader";
import { Category } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { SetCategoryItems } from "../../../utils/Reducers/ProductSlice";
import { SetCategoryItemsProducts } from "../../../utils/Reducers/CategorySlice";
import { SetSubCategoryItemsProducts } from "../../../utils/Reducers/SubCategorySlice";
import { AddItem, RemoveItem } from "../../../utils/Reducers/ProductSlice";
import {
  AddCategoryItem,
  RemoveCategoryItem,
} from "../../../utils/Reducers/CategorySlice";
import {
  AddSubCategoryItem,
  RemoveSubCategoryItem,
} from "../../../utils/Reducers/SubCategorySlice";
import {
  AddItemToCart,
  RemoveItemFromCart,
} from "../../../utils/Reducers/CartSlice";
const GetProductsBasedOnShops = ({ storeFilteredProducts }) => {
  const { storeId, categoryId, productId, subcategoryId } = useParams();
  // console.log("StoreId", storeId);
  // console.log("categroyId", categoryId);
  // console.log("productId", productId);
  // console.log("subCatgeory", subcategoryId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addToCartModal, setaddToCartModal] = useState(false);
  const [deliveryTimeModal, openDeliveryTimeModal] = useState(false);
  //const [storeData, setstoreData] = useState(null);
  //const [brandsStoreLogo, setbrandsStoreLogo] = useState(null);
  // const [productsWithImages, setProductsWithImages] = useState([]);
  // const [shopsSubCategory, setShopsSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [storeFrontDetails, setStoreFrontDetails] = useState([]);
  const [storeSubcategory, setStoreSubCatgeory] = useState([]); //Catgeory products
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [storeProducts, setStoreProducts] = useState([]); //Shop products state
  //const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [subCatProducts, setSubCatProducts] = useState([]);
  const { productItems } = useSelector((state) => state);
  //console.log("productsItems", productItems.items);
  const { categoryItems } = useSelector((state) => state);
  console.log("categoryItems", categoryItems.categoryItems);
  const { subcategoryItems } = useSelector((state) => state);
  console.log("subcategoryItems", subcategoryItems.subCategoryItems);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const AddtoCart = (e, product, subCategoryId, categoryId) => {
    e.stopPropagation();
    dispatch(
      AddItem({
        ...product,
        subcategory_id: subCategoryId,
        category_id: categoryId,
      })
    );
    dispatch(
      AddItemToCart({
        ...product,
        subcategory_id: subCategoryId,
        category_id: categoryId,
      })
    );
  };
  const RemoveFromCart = (e, product, subCategoryId, categoryId) => {
    e.stopPropagation();
    dispatch(
      RemoveItem({
        ...product,
        subcategory_id: subCategoryId,
        category_id: categoryId,
      })
    );
    dispatch(
      RemoveItemFromCart({
        ...product,
        subcategory_id: subCategoryId,
        category_id: categoryId,
      })
    );
  };

  const AddtoCartCategoryProducts = (e, product, subCategoryId) => {
    e.stopPropagation();
    dispatch(
      AddCategoryItem({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
    dispatch(
      AddItemToCart({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
  };
  const RemoveFromCartCategoryProducts = (e, product, subCategoryId) => {
    e.stopPropagation();
    dispatch(
      RemoveCategoryItem({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
    dispatch(
      RemoveItemFromCart({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
  };

  const AddtoCartSubCategoryProducts = (e, product, subCategoryId) => {
    e.stopPropagation();
    dispatch(
      AddSubCategoryItem({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
    dispatch(
      AddItemToCart({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
  };
  const RemoveFromSubCartCategoryProducts = (e, product, subCategoryId) => {
    e.stopPropagation();
    dispatch(
      RemoveSubCategoryItem({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
    dispatch(
      RemoveItemFromCart({
        ...product,
        subcategory_id: subCategoryId,
      })
    );
  };

  useEffect(() => {
    const fetchStoreFrontDetails = async () => {
      try {
        const response = await API.getStoreFrontDetails(storeId);
        //console.log(response);
        setStoreFrontDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStoreFrontDetails();
  }, [storeId]);
  //console.log("storeFrontDetails", storeFrontDetails);

  useEffect(() => {
    const fetchProductsOfShop = async () => {
      try {
        const response = await API.getProductsOfShop(storeId);
        console.log(response);
        //setStoreProducts(response.data);
        dispatch(SetCategoryItems(response.data));
        //setIsDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (storeId) fetchProductsOfShop();
  }, [storeId]);
  //console.log("storeProducts", storeProducts);

  const handleSubCatClick = async (categoryId) => {
    setSelectedSubCategory(categoryId);

    navigate(`/store/${storeId}/front/collection/${categoryId}`);
  };

  const handleSubProductClick = (subcategoryId) => {
    setSelectedSubCategory(subcategoryId);
    navigate(
      `/store/${storeId}/front/collection/${categoryId}/${subcategoryId}`
    );
  };

  useEffect(() => {
    const fetchStoreSubCategory = async () => {
      try {
        const response = await API.getStoreSubCategory(categoryId);
        //console.log(response); // Use the response data as needed
        //setStoreSubCatgeory(response.data);
        dispatch(SetCategoryItemsProducts(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    if (categoryId) fetchStoreSubCategory();
  }, [categoryId]);

  useEffect(() => {
    const fetchProductsOfSubCategory = async () => {
      try {
        const response = await API.getProductsOfSubCategory(subcategoryId);
        //console.log(response);
        //setSubCatProducts(response.data);
        dispatch(SetSubCategoryItemsProducts(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    if (subcategoryId) fetchProductsOfSubCategory();
  }, [subcategoryId]);

  //console.log("subCategory", storeSubcategory);

  const fetchStoreDeliveryDetails = async () => {
    try {
      setLoading(true);
      const response = await API.getStoreDeliveryDetails(storeId);
      //console.log(response);
      setDeliveryDetails(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openModalWithApiCall = () => {
    openDeliveryTimeModal(true);

    fetchStoreDeliveryDetails(); // Call the API when opening the modal
  };

  const fetchProductDetail = async (productId) => {
    try {
      const response = await API.getIndividualProductDetail(productId);
      //console.log(response);
      setProductDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("Productdetail", productDetail);

  const openProductDetailModal = (productId) => {
    setaddToCartModal(true);

    fetchProductDetail(productId);
    // navigate(`/product/${productId}`);
  };

  return (
    <>
      <HeaderProducts storeId={storeId} />
      <div className="h-full bg-white">
        <div
          className="fixed z-10 w-64 overflow-y-auto bg-white border-r-2 top-20"
          style={{ height: `calc(100% - 80px)` }}
        >
          <div className="sticky bg-white z-1 will-change-transform backdrop-blur-sm">
            <div className="flex flex-col items-center px-1 pt-6 pb-4 text-center flex-nowrap">
              {storeFrontDetails ? (
                storeFrontDetails.map((store) => (
                  <div key={store.store_id} className="relative">
                    <a
                      href="/"
                      className="flex flex-col items-center no-underline"
                    >
                      <img
                        src={store?.logo}
                        className="w-auto h-20 border rounded-full aspect-square"
                        alt="Store Logo"
                      />
                      <h2 className="mt-1 text-xl leading-5">
                        {store?.store_name}
                      </h2>
                    </a>
                    <button
                      className="relative flex items-center mt-1 text-sm leading-4 text-gray-500"
                      onClick={() => openModalWithApiCall()}
                    >
                      {store?.messages[0]
                        ? store.messages[0]
                        : "View pricing policy"}
                      {/* {store?.messages[0]} */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#C7C8CD"
                        xmlns="http://www.w3.org/2000/svg"
                        color="systemGrayscale30"
                        size="12"
                        class="e-ozd7xs"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                        ></path>
                      </svg>
                    </button>
                    {/* Other details */}
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}

              {/* <a
                href="/"
                className="relative flex items-center mt-1 text-sm leading-4 text-gray-400"
              >
                View pricing policy
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#C7C8CD"
                  xmlns="http://www.w3.org/2000/svg"
                  color="systemGrayscale30"
                  size="12"
                  class="e-ozd7xs"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                  ></path>
                </svg>
              </a> */}
              <button>
                <div className="flex items-center mt-1 cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#2B78C6"
                    xmlns="http://www.w3.org/2000/svg"
                    size="16"
                    color="brandHighlightRegular"
                    class="e-15ro776"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.534 4.201 12 2 9.466 4.201 6.122 3.91l-.756 3.27-2.877 1.73L3.8 12l-1.31 3.09 2.877 1.73.756 3.27 3.344-.291L12 22l2.534-2.201 3.344.291.756-3.27 2.876-1.73L20.2 12l1.31-3.09-2.876-1.73-.756-3.27zM11.1 15.604l5.847-5.858-1.416-1.412-4.474 4.482-2.373-2.234-1.37 1.456z"
                    ></path>
                  </svg>
                  <p className="text-sm leading-4 text-[#3C84CA]">
                    100% satisfaction guarantee
                  </p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="12"
                    data-testid="chevron-cta"
                    class="e-1hchw5q"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                    ></path>
                  </svg>
                </div>
              </button>
              {/* <span>
                <a
                  href="/"
                  className="relative flex items-center mt-1 text-sm leading-4 text-gray-400"
                >
                  Earn with Safeway for U®
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#C7C8CD"
                    xmlns="http://www.w3.org/2000/svg"
                    color="systemGrayscale30"
                    size="12"
                    class="e-ozd7xs"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                    ></path>
                  </svg>
                </a>
              </span> */}
            </div>
          </div>
          <hr />
          <ul className="w-full px-3 py-4 list-none">
            <li>
              <button
                className={`box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap hover:bg-gray-100 
                 
                `}
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-1bvo66g"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 3H6l-4 8h2v10h5v-7h6v7h5V11h2zM8 7h8v3H8z"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Shop</span>
              </button>
            </li>

            <li>
              <button className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap hover:bg-gray-100">
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M7.631 18.702a8 8 0 0 1-3.149-3.966l1.88-.684a6 6 0 1 0 1.395-6.295L10 10H4V4l2.343 2.343a8 8 0 1 1 1.288 12.359"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Buy it again</span>
              </button>
            </li>

            <li>
              <button className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap hover:bg-gray-100 ">
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M10 6h10v2H10zM7 11H4v2h3zM20 11H10v2h10zM10 16h10v2H10zM7 16H4v2h3zM7 6H4v2h3z"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Lists</span>
              </button>
            </li>
          </ul>
          <hr />
          {/* <ul className="px-3 pt-4 pb-3">
            {shopsSubCategory.map((subCategory) => (
              <li
                key={subCategory.id}
                onClick={() => handleSubCatClick(subCategory.id)}
                className={`${
                  selectedSubCategory === subCategory.id
                    ? "bg-[#242529] text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                } px-3 py-2 cursor-pointer rounded-lg`}
              >
                {subCategory.name}
              </li>
            ))}
          </ul> */}
          <ul className="px-3 pt-4 pb-3">
            {storeFrontDetails &&
              storeFrontDetails.length > 0 &&
              storeFrontDetails?.map((store) =>
                store?.categories?.map((category) => (
                  <>
                    <li
                      key={category.category_id}
                      onClick={() => handleSubCatClick(category.category_id)}
                      className={`${
                        selectedSubCategory === category.category_id
                          ? "bg-[#242529] text-white"
                          : "bg-white hover:bg-gray-100 text-gray-700"
                      } px-3 py-2 cursor-pointer rounded-lg`}
                    >
                      <h2 className="text-base leading-5 font-medium">
                        {" "}
                        {category?.category_name}
                      </h2>
                    </li>
                    <div>
                      {selectedSubCategory === category.category_id && (
                        <ul>
                          {categoryItems.categoryItems.map((subCategory) => (
                            <li
                              key={subCategory?.subcategory_id}
                              onClick={() =>
                                handleSubProductClick(
                                  subCategory?.subcategory_id
                                )
                              }
                              className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 cursor-pointer rounded-lg "
                            >
                              <h3 className="text-sm leading-5">
                                {" "}
                                {subCategory?.subcategory_name}
                              </h3>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ))
              )}
          </ul>
        </div>

        {subcategoryId ? (
          <>
            {" "}
            {subcategoryItems.subCategoryItems &&
            subcategoryItems.subCategoryItems.products ? (
              <>
                {" "}
                <div className="ml-72">
                  <div className="h-14"></div>

                  <div key={subcategoryItems.subCategoryItems.subcategory_id}>
                    <div className="flex items-center justify-between mt-6">
                      <h2 className="flex mr-2">
                        <div className="text-3xl font-bold leading-5 max-md:text-2xl">
                          {subcategoryItems.subCategoryItems?.subcategory_name}
                        </div>
                      </h2>
                      <div className="flex items-center justify-center  max-md:hidden">
                        <div className="flex items-center justify-center">
                          <button className="flex w-full h-10 text-green-600 rounded-xl">
                            <span className="flex items-center gap-1 mt-2 ml-2 mr-6 overflow-hidden text-sm leading-5 text-ellipsis">
                              View all (80+)
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="#242529"
                                xmlns="http://www.w3.org/2000/svg"
                                color="systemGrayscale80"
                                size="14"
                                className="e-jyj61s"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center ml-4 mr-2 min-h-20">
                          {/* Previous code for buttons */}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="relative flex flex-row">
                        <div className="w-full">
                          <ul className="w-full h-full min-h-[304px] grid grid-cols-5 gap-9 justify-between mt-2 max-2xl:grid-cols-6 max-lg:grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
                            {subcategoryItems.subCategoryItems.products.map(
                              (product) => (
                                <li
                                  key={product.id}
                                  className="relative flex flex-col cursor-pointer"
                                  onClick={() =>
                                    openProductDetailModal(product.id)
                                  }
                                >
                                  <div className="absolute z-10 top-1 right-1">
                                    <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
                                      {product.qty ? (
                                        <div className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 w-[125px]">
                                          <div className="absolute">
                                            <div className="inline-block ">
                                              <span className="flex justify-center items-center min-h-[40px] flex-nowrap">
                                                <button
                                                  className="flex flex-nowrap justify-center items-center  relative  right-[8px]"
                                                  onClick={(e) =>
                                                    RemoveFromSubCartCategoryProducts(
                                                      e,
                                                      product,
                                                      subcategoryItems
                                                        .subCategoryItems
                                                        .subcategory_id
                                                    )
                                                  }
                                                >
                                                  {product.qty > 1 ? (
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="#FFFFFF"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      size="24"
                                                      color="systemGrayscale00"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M4 10.879h16v2.24H4z"
                                                      ></path>
                                                    </svg>
                                                  ) : (
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="#FFFFFF"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      size="24"
                                                      color="systemGrayscale00"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M7 6V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4v2h-2l-1 14H6L5 8H3V6zm3-2h4a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m3 15v-8h2v8zm-2-8H9v8h2z"
                                                      ></path>
                                                    </svg>
                                                  )}
                                                </button>
                                                <span className="px-1 text-sm leading-4 text-white ">
                                                  <span className="w-[1px] absolute">
                                                    {product?.qty}
                                                  </span>
                                                  <span className="pl-4">
                                                    ct
                                                  </span>
                                                </span>
                                                <button
                                                  className="flex flex-nowrap items-center relative left-[8px]"
                                                  onClick={(e) =>
                                                    AddtoCartSubCategoryProducts(
                                                      e,
                                                      product,
                                                      subcategoryItems
                                                        .subCategoryItems
                                                        .subcategory_id
                                                    )
                                                  }
                                                >
                                                  <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="#FFFFFF"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    size="24"
                                                    color="systemGrayscale00"
                                                    aria-hidden="true"
                                                  >
                                                    <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                                  </svg>
                                                </button>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <button
                                          className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9"
                                          onMouseLeave={handleMouseLeave}
                                          onMouseEnter={() =>
                                            handleMouseEnter(product.id)
                                          }
                                          style={{
                                            backgroundColor:
                                              hoveredProductId === product.id
                                                ? "#226b0b"
                                                : "green",
                                            transition:
                                              "width 0.3s ease-in-out", // Apply transition to width property
                                            width:
                                              hoveredProductId === product.id
                                                ? "130px"
                                                : "80px",
                                          }}
                                        >
                                          <div className="flex items-center px-2">
                                            <svg
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="#FFFFFF"
                                              xmlns="http://www.w3.org/2000/svg"
                                              size="24"
                                              color="systemGrayscale00"
                                              aria-hidden="true"
                                            >
                                              <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                            </svg>

                                            <span
                                              className="text-white"
                                              onClick={(e) =>
                                                AddtoCartSubCategoryProducts(
                                                  e,
                                                  product,
                                                  subcategoryItems
                                                    .subCategoryItems
                                                    .subcategory_id
                                                )
                                              }
                                            >
                                              {hoveredProductId === product.id
                                                ? "Add to cart"
                                                : "Add"}
                                            </span>
                                          </div>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="relative overflow-hidden rounded-xl">
                                      <div className="w-full h-[200px] object-cover">
                                        <ul>
                                          <li>
                                            <img
                                              src={product?.image}
                                              alt={`Product ${product.id}`}
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="px-2 mt-2 ">
                                      <div className="py-[1px] px-1 flex items-center">
                                        <div>
                                          <span className="text-sm font-bold text-gray-700 align-super">
                                            $
                                          </span>
                                          <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                            {product?.actual_price}
                                          </span>
                                          <span className="text-sm font-bold text-gray-700 align-super">
                                            49
                                          </span>
                                        </div>
                                        <div>
                                          <span className="text-gray-500 ml-2">
                                            <s>{product?.selling_price}</s>
                                          </span>
                                        </div>
                                      </div>

                                      <div className="">
                                        <span className="text-gray-600">
                                          {product?.title}
                                        </span>
                                      </div>
                                      <div>
                                        <span className="text-gray-500">
                                          {product?.label}
                                        </span>
                                      </div>
                                      <div>
                                        <span className="bg-[#FDDC22] ">
                                          {product?.discount_label}
                                        </span>
                                      </div>
                                      <div>
                                        <p className="mt-[6px] text-gray-400">
                                          {/* {product.details.length > 100
                              ? product.details.substring(0, 100) +
                                "..."
                              : product.details} */}
                                        </p>
                                      </div>
                                      <div className="flex">
                                        <div className="text-gray-400">
                                          {/* {product?.m_qty} {product?.measurement} */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </>
        ) : categoryId ? (
          <>
            {" "}
            <div className="ml-72">
              <div className="h-14"></div>

              {categoryItems.categoryItems.map((subCategory) => (
                <div key={subCategory.subcategory_id}>
                  <div className="flex items-center justify-between mt-6">
                    <h2 className="flex mr-2">
                      <div className="text-3xl font-bold leading-5 max-md:text-2xl">
                        {subCategory?.subcategory_name}
                      </div>
                    </h2>
                    <div className="flex items-center justify-center  max-md:hidden">
                      <div className="flex items-center justify-center">
                        <button className="flex w-full h-10 text-green-600 rounded-xl">
                          <span className="flex items-center gap-1 mt-2 ml-2 mr-6 overflow-hidden text-sm leading-5 text-ellipsis">
                            View all (80+)
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="#242529"
                              xmlns="http://www.w3.org/2000/svg"
                              color="systemGrayscale80"
                              size="14"
                              className="e-jyj61s"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center ml-4 mr-2 min-h-20">
                        {/* Previous code for buttons */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative flex flex-row">
                      <div className="w-full">
                        <ul className="w-full h-full min-h-[304px] grid grid-cols-5 gap-9 justify-between mt-2 max-2xl:grid-cols-6 max-lg:grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
                          {subCategory.products.map((product) => (
                            <li
                              key={product.id}
                              className="relative flex flex-col cursor-pointer"
                              onClick={() => openProductDetailModal(product.id)}
                            >
                              <div className="absolute z-10 top-1 right-1">
                                <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
                                  {product.qty ? (
                                    <div className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 w-[125px]">
                                      <div className="absolute">
                                        <div className="inline-block ">
                                          <span className="flex justify-center items-center min-h-[40px] flex-nowrap">
                                            <button
                                              className="flex flex-nowrap justify-center items-center  relative  right-[8px]"
                                              onClick={(e) =>
                                                RemoveFromCartCategoryProducts(
                                                  e,
                                                  product,
                                                  subCategory.subcategory_id
                                                )
                                              }
                                            >
                                              {product.qty > 1 ? (
                                                <svg
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="#FFFFFF"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  size="24"
                                                  color="systemGrayscale00"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M4 10.879h16v2.24H4z"
                                                  ></path>
                                                </svg>
                                              ) : (
                                                <svg
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="#FFFFFF"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  size="24"
                                                  color="systemGrayscale00"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M7 6V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4v2h-2l-1 14H6L5 8H3V6zm3-2h4a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m3 15v-8h2v8zm-2-8H9v8h2z"
                                                  ></path>
                                                </svg>
                                              )}
                                            </button>
                                            <span className="px-1 text-sm leading-4 text-white ">
                                              <span className="w-[1px] absolute">
                                                {product?.qty}
                                              </span>
                                              <span className="pl-4">ct</span>
                                            </span>
                                            <button
                                              className="flex flex-nowrap items-center relative left-[8px]"
                                              onClick={(e) =>
                                                AddtoCartCategoryProducts(
                                                  e,
                                                  product,
                                                  subCategory.subcategory_id
                                                )
                                              }
                                            >
                                              <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="#FFFFFF"
                                                xmlns="http://www.w3.org/2000/svg"
                                                size="24"
                                                color="systemGrayscale00"
                                                aria-hidden="true"
                                              >
                                                <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                              </svg>
                                            </button>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <button
                                      className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9"
                                      onMouseLeave={handleMouseLeave}
                                      onMouseEnter={() =>
                                        handleMouseEnter(product.id)
                                      }
                                      style={{
                                        backgroundColor:
                                          hoveredProductId === product.id
                                            ? "#226b0b"
                                            : "green",
                                        transition: "width 0.3s ease-in-out", // Apply transition to width property
                                        width:
                                          hoveredProductId === product.id
                                            ? "130px"
                                            : "80px",
                                      }}
                                    >
                                      <div className="flex items-center px-2">
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="#FFFFFF"
                                          xmlns="http://www.w3.org/2000/svg"
                                          size="24"
                                          color="systemGrayscale00"
                                          aria-hidden="true"
                                        >
                                          <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                        </svg>

                                        <span
                                          className="text-white"
                                          onClick={(e) =>
                                            AddtoCartCategoryProducts(
                                              e,
                                              product,
                                              subCategory.subcategory_id
                                            )
                                          }
                                        >
                                          {hoveredProductId === product.id
                                            ? "Add to cart"
                                            : "Add"}
                                        </span>
                                      </div>
                                    </button>
                                  )}
                                </div>
                              </div>
                              <div>
                                <div className="relative overflow-hidden rounded-xl">
                                  <div className="w-full h-[200px] object-cover">
                                    <ul>
                                      <li>
                                        <img
                                          src={product?.image}
                                          alt={`Product ${product.id}`}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="px-2 mt-2 ">
                                  <div className="py-[1px] px-1 flex items-center">
                                    <div>
                                      <span className="text-sm font-bold text-gray-700 align-super">
                                        $
                                      </span>
                                      <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                        {product?.actual_price}
                                      </span>
                                      <span className="text-sm font-bold text-gray-700 align-super">
                                        49
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500 ml-2">
                                        <s>{product?.selling_price}</s>
                                      </span>
                                    </div>
                                  </div>

                                  <div className="">
                                    <span className="text-gray-600">
                                      {product?.title}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">
                                      {product?.label}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="bg-[#FDDC22] ">
                                      {product?.discount_label}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="mt-[6px] text-gray-400">
                                      {/* {product.details.length > 100
                        ? product.details.substring(0, 100) +
                          "..."
                        : product.details} */}
                                    </p>
                                  </div>
                                  <div className="flex">
                                    <div className="text-gray-400">
                                      {/* {product?.m_qty} {product?.measurement} */}
                                    </div>
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
              ))}
            </div>
          </>
        ) : storeFilteredProducts ? (
          <div>
            <div className="ml-72">
              <div className="h-14"></div>

              <div>
                <div className="flex items-center justify-between  ">
                  <div className="flex items-center justify-center max-md:hidden mt-16"></div>
                </div>

                <div>
                  <div>
                    <div className="relative flex flex-row">
                      <div className="w-full">
                        <ul className="w-full h-full min-h-[304px] grid grid-cols-5 gap-9 justify-between mt-8 max-2xl:grid-cols-6 max-lg:grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
                          {storeFilteredProducts.map((cat) => (
                            <div
                              key={cat?.id}
                              className="relative flex cursor-pointer"
                            >
                              <div className="absolute z-10 top-1 right-1">
                                <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
                                  <button className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 bg-[#2C890F]">
                                    <div className="flex items-center px-2">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#FFFFFF"
                                        xmlns="http://www.w3.org/2000/svg"
                                        size="24"
                                        color="systemGrayscale00"
                                        aria-hidden="true"
                                      >
                                        <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                      </svg>
                                      <span className="pl-1 text-white">
                                        Add
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="relative overflow-hidden rounded-xl">
                                <div className="w-full h-[200px] object-cover">
                                  <img
                                    src={cat?.image}
                                    alt={`Product ${cat.id}`}
                                  />
                                </div>
                                <div className="px-2 mt-24">
                                  <div className="py-[1px] px-1 flex items-center">
                                    <div>
                                      <span className="text-sm font-bold text-gray-700 align-super">
                                        $
                                      </span>
                                      <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                        {cat?.actual_price}
                                      </span>
                                      <span className="text-sm font-bold text-gray-700 align-super">
                                        49
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500 ml-2">
                                        <s>{cat?.selling_price}</s>
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-gray-600">
                                      {cat?.title}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">
                                      {cat?.label}
                                    </span>
                                  </div>

                                  <div>
                                    <p className="mt-[6px] text-gray-400">
                                      {/* {product.details.length > 100
                              ? product.details.substring(0, 100) + "..."
                              : product.details} */}
                                    </p>
                                  </div>
                                  <div className="flex">
                                    <div className="text-gray-400">
                                      {/* {product?.m_qty} {product?.measurement} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="ml-72">
              <div className="h-14"></div>

              {productItems.items.map((category) => (
                <div key={category?.category_id}>
                  <div className="flex items-center justify-between  ">
                    <div className="flex items-center justify-center max-md:hidden mt-16"></div>
                  </div>

                  <div>
                    {category.subcategories.map((subCategory) => (
                      <div key={subCategory.subcategory_id}>
                        <h2 className="flex mr-2 justify-between items-center">
                          <div className="text-3xl font-bold leading-5 max-md:text-2xl">
                            {subCategory.subcategory_name}
                          </div>
                          <div className="flex items-center justify-center">
                            <button className="flex w-full h-10 text-green-600 rounded-xl">
                              <span className="flex items-center gap-1 mt-2 ml-2 mr-6 overflow-hidden text-sm leading-5 text-ellipsis">
                                View all (80+)
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="#242529"
                                  xmlns="http://www.w3.org/2000/svg"
                                  color="systemGrayscale80"
                                  size="14"
                                  className="e-jyj61s"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </h2>

                        <div className="relative flex flex-row">
                          <div className="w-full">
                            <ul className="w-full h-full min-h-[304px] grid grid-cols-5 gap-9 justify-between mt-8 max-2xl:grid-cols-6 max-lg:grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
                              {subCategory.products.map((product) => (
                                <div
                                  key={product.id}
                                  className="relative flex cursor-pointer"
                                  onClick={() =>
                                    openProductDetailModal(product.id)
                                  }
                                >
                                  <div className="absolute z-10 top-1 right-1">
                                    <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
                                      {product.qty ? (
                                        <div className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 w-[125px]">
                                          <div className="absolute">
                                            <div className="inline-block ">
                                              <span className="flex justify-center items-center min-h-[40px] flex-nowrap">
                                                <button
                                                  className="flex flex-nowrap justify-center items-center  relative  right-[8px]"
                                                  onClick={(e) =>
                                                    RemoveFromCart(
                                                      e,
                                                      product,
                                                      subCategory.subcategory_id,
                                                      category.category_id
                                                    )
                                                  }
                                                >
                                                  {product.qty > 1 ? (
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="#FFFFFF"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      size="24"
                                                      color="systemGrayscale00"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M4 10.879h16v2.24H4z"
                                                      ></path>
                                                    </svg>
                                                  ) : (
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="#FFFFFF"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      size="24"
                                                      color="systemGrayscale00"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M7 6V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4v2h-2l-1 14H6L5 8H3V6zm3-2h4a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m3 15v-8h2v8zm-2-8H9v8h2z"
                                                      ></path>
                                                    </svg>
                                                  )}
                                                </button>
                                                <span className="px-1 text-sm leading-4 text-white ">
                                                  <span className="w-[1px] absolute">
                                                    {product?.qty}
                                                  </span>
                                                  <span className="pl-4">
                                                    ct
                                                  </span>
                                                </span>
                                                <button
                                                  className="flex flex-nowrap items-center relative left-[8px]"
                                                  onClick={(e) =>
                                                    AddtoCart(
                                                      e,
                                                      product,
                                                      subCategory.subcategory_id,
                                                      category.category_id
                                                    )
                                                  }
                                                >
                                                  <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="#FFFFFF"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    size="24"
                                                    color="systemGrayscale00"
                                                    aria-hidden="true"
                                                  >
                                                    <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                                  </svg>
                                                </button>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <button
                                          className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9"
                                          onMouseLeave={handleMouseLeave}
                                          onMouseEnter={() =>
                                            handleMouseEnter(product.id)
                                          }
                                          style={{
                                            backgroundColor:
                                              hoveredProductId === product.id
                                                ? "#226b0b"
                                                : "green",
                                            transition:
                                              "width 0.3s ease-in-out", // Apply transition to width property
                                            width:
                                              hoveredProductId === product.id
                                                ? "130px"
                                                : "80px",
                                          }}
                                        >
                                          <div className="flex items-center px-2">
                                            <svg
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="#FFFFFF"
                                              xmlns="http://www.w3.org/2000/svg"
                                              size="24"
                                              color="systemGrayscale00"
                                              aria-hidden="true"
                                            >
                                              <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                                            </svg>

                                            <span
                                              className="text-white"
                                              onClick={(e) =>
                                                AddtoCart(
                                                  e,
                                                  product,
                                                  subCategory.subcategory_id,
                                                  category.category_id
                                                )
                                              }
                                            >
                                              {hoveredProductId === product.id
                                                ? "Add to cart"
                                                : "Add"}
                                            </span>
                                          </div>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <div className="relative overflow-hidden rounded-xl">
                                    <div className="w-full h-[200px] object-cover">
                                      <img
                                        src={product?.image}
                                        alt={`Product ${product.id}`}
                                      />
                                    </div>
                                    <div className="px-2 mt-20">
                                      <div className="py-[1px] px-1 flex items-center">
                                        <div>
                                          <span className="text-sm font-bold text-gray-700 align-super">
                                            $
                                          </span>
                                          <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                            {product?.actual_price}
                                          </span>
                                          <span className="text-sm font-bold text-gray-700 align-super">
                                            49
                                          </span>
                                        </div>
                                        <div>
                                          <span className="text-gray-500 ml-2">
                                            <s>{product?.selling_price}</s>
                                          </span>
                                        </div>
                                      </div>
                                      <div>
                                        <span className="text-gray-600">
                                          {product?.title}
                                        </span>
                                      </div>
                                      <div>
                                        <span className="text-gray-500">
                                          {product?.label}
                                        </span>
                                      </div>
                                      <div>
                                        <span className="bg-[#FDDC22]">
                                          {product?.discount_label}
                                        </span>
                                      </div>
                                      <div>
                                        <p className="mt-[6px] text-gray-400">
                                          {/* {product.details.length > 100
                              ? product.details.substring(0, 100) + "..."
                              : product.details} */}
                                        </p>
                                      </div>
                                      <div className="flex">
                                        <div className="text-gray-400">
                                          {/* {product?.m_qty} {product?.measurement} */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* {storeProducts.map((category) => (
              <div key={category.category_id}>
                
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.subcategory_id}>
                    <h2 className="text-2xl font-bold leading-5">
                      {subcategory.subcategory_name}
                    </h2>
                    <ul className="grid grid-cols-5 gap-9 justify-between mt-2">
                      {subcategory.products.map((product) => (
                        <li
                          key={product.id}
                          className="relative flex flex-col cursor-pointer"
                        >
                          <img
                            src={product.image}
                            alt={`Product ${product.id}`}
                          />
                          <div>
                            <span>{product.title}</span>
                            <span>{product.label}</span>
                            <div>
                              <span>{product.actual_price}</span>
                              <span>{product.selling_price}</span>
                              {product.discount_label && (
                                <span>{product.discount_label}</span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => openProductDetailModal(product.id)}
                          >
                            Add to Cart
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))} */}
          </div>
        )}
      </div>
      <AddToCart
        addToCartModal={addToCartModal}
        onBackClick={() => setaddToCartModal(false)}
        productDetail={productDetail}
      />
      <DeliveryTimesModal
        deliveryTimeModal={deliveryTimeModal}
        onCancel={() => openDeliveryTimeModal(false)}
        deliveryDetails={deliveryDetails}
        isLoading={isLoading}
      />
    </>
  );
};

export default GetProductsBasedOnShops;
