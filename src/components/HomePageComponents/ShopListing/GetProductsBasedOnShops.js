import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AddToCart from "../../../pages/AddToCart/AddToCart";
import HeaderProducts from "../HeaderOfProducts/HeaderProducts";
import API from "../../../services/api";
import { useNavigate } from "react-router-dom";
import DeliveryTimesModal from "../../../pages/DeliveryTimesModal/DeliveryTimesModal";
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
import ShopProducts from "../../ProductsComponent/ShopProducts";
import CategoryProducts from "../../ProductsComponent/CategoryProducts";
import ProductsOfSubcategory from "../../ProductsComponent/ProductsOfSubcategory";
import StoreFrontDetails from "../../ProductsComponent/StoreFrontDetails";
import TickSvg from "../../../assets/images/tick.svg";
import ArrowSvg from "../../../assets/images/arrow.svg";
import StoreFilteredProducts from "../../ProductsComponent/StoreFilteredProducts";
import TopStoreFrontDetails from "../../ProductsComponent/TopStoreFrontDetails";
import { productStoreSideBarData } from "../../../data/productStoreSideBarData";
import Checkout from "../../../pages/CheckoutPage/Checkout";

const GetProductsBasedOnShops = ({ storeFilteredProducts }) => {
  const { storeId, categoryId, productId, subcategoryId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addToCartModal, setaddToCartModal] = useState(false);
  const [deliveryTimeModal, openDeliveryTimeModal] = useState(false);
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
  //console.log("categoryItems", categoryItems.categoryItems);
  const { subcategoryItems } = useSelector((state) => state);
  //console.log("subcategoryItems", subcategoryItems.subCategoryItems);
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
                  <TopStoreFrontDetails
                    store={store}
                    openModalWithApiCall={openModalWithApiCall}
                    ArrowSvg={ArrowSvg}
                  />
                ))
              ) : (
                <div>Loading...</div>
              )}

              <button>
                <div className="flex items-center mt-1 cursor-pointer">
                  <img src={TickSvg} alt="tickSvg" />
                  <p className="text-sm leading-4 text-[#3C84CA]">
                    100% satisfaction guarantee
                  </p>
                  <img src={ArrowSvg} alt="arrowSvg" />
                </div>
              </button>
            </div>
          </div>
          <hr />
          <ul className="w-full px-3 py-4 list-none">
            {productStoreSideBarData.map((data) => (
              <li key={data.id}>
                <button
                  className={`box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap hover:bg-gray-100 
                   
                  `}
                >
                  <span className="flex items-center h-10">
                    <img src={data.iconSvg} alt="shopIconSvg" />
                  </span>
                  <span className="pt-2 pb-2 ml-2">{data.title}</span>
                </button>
              </li>
            ))}
          </ul>
          <hr />

          <ul className="px-3 pt-4 pb-3">
            {storeFrontDetails &&
              storeFrontDetails.length > 0 &&
              storeFrontDetails?.map((store) =>
                store?.categories?.map((category) => (
                  <StoreFrontDetails
                    category={category}
                    handleSubCatClick={handleSubCatClick}
                    selectedSubCategory={selectedSubCategory}
                    catItems={categoryItems.categoryItems}
                    handleSubProductClick={handleSubProductClick}
                  />
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
                              <img src={TickSvg} alt="tickSvg" />
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
                                <ProductsOfSubcategory
                                  product={product}
                                  openProductDetailModal={
                                    openProductDetailModal
                                  }
                                  RemoveFromSubCartCategoryProducts={
                                    RemoveFromSubCartCategoryProducts
                                  }
                                  AddtoCartSubCategoryProducts={
                                    AddtoCartSubCategoryProducts
                                  }
                                  handleMouseLeave={handleMouseLeave}
                                  handleMouseEnter={handleMouseEnter}
                                  hoveredProductId={hoveredProductId}
                                  items={subcategoryItems.subCategoryItems}
                                />
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
                <CategoryProducts
                  subCategory={subCategory}
                  openProductDetailModal={openProductDetailModal}
                  RemoveFromCartCategoryProducts={
                    RemoveFromCartCategoryProducts
                  }
                  AddtoCartCategoryProducts={AddtoCartCategoryProducts}
                  handleMouseLeave={handleMouseLeave}
                  handleMouseEnter={handleMouseEnter}
                  hoveredProductId={hoveredProductId}
                />
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
                            <StoreFilteredProducts cat={cat} />
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
                <ShopProducts
                  category={category}
                  openProductDetailModal={openProductDetailModal}
                  RemoveFromCart={RemoveFromCart}
                  AddtoCart={AddtoCart}
                  handleMouseLeave={handleMouseLeave}
                  handleMouseEnter={handleMouseEnter}
                  hoveredProductId={hoveredProductId}
                />
              ))}
            </div>
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
      {productDetail && <Checkout productDetail={productDetail} />}
    </>
  );
};

export default GetProductsBasedOnShops;
