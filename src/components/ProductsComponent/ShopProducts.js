import React from "react";
import TickSvg from "../../assets/images/tick.svg";
import MinusSvg from "../../assets/images/minus.svg";
import DustbinSvg from "../../assets/images/dustbinSvg.svg";
import PlusSvg from "../../assets/images/plus.svg";
import { useSelector } from "react-redux";
import SingleProductOfShop from "./SingleProductOfShop";
const ShopProducts = ({
  category,
  openProductDetailModal,
  RemoveFromCart,
  AddtoCart,
  handleMouseLeave,
  handleMouseEnter,
  hoveredProductId,
  storeId,
  productDetail,
}) => {
  // const { cartItems } = useSelector((state) => state.cartItems);

  // const productItem = cartItems.find((item) => item.id === productDetail?.id);
  // console.log("productItem", productItem?.qty);

  // console.log("shopsCAtgeory", hoveredProductId);
  // console.log("first", cartItems[hoveredProductId]);
  return (
    <>
      <div key={category?.category_id}>
        <div className="flex items-center justify-between  ">
          <div className="flex items-center justify-center max-md:hidden mt-16 "></div>
        </div>

        <div>
          {category?.subcategories?.map((subCategory) => (
            <div key={subCategory?.subcategory_id}>
              <h2 className="flex mr-2 justify-between items-center">
                <div className="text-3xl font-bold leading-5 max-md:text-2xl max-md:mt-12 mt-8">
                  {subCategory?.subcategory_name}
                </div>
                {/* <div className="flex items-center justify-center">
                  <button className="flex w-full h-10 text-green-600 rounded-xl">
                    <span className="flex items-center gap-1 mt-2 ml-2 mr-6 overflow-hidden text-sm leading-5 text-ellipsis">
                      View all (80+)
                      <img src={TickSvg} alt="tickSvg" />
                    </span>
                  </button>
                </div> */}
              </h2>

              <div className="relative flex flex-row">
                <div className="w-full">
                  <ul className="w-full h-full min-h-[304px] grid grid-cols-5 gap-9 justify-between mt-8 max-2xl:grid-cols-6 max-lg:grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
                    {subCategory && subCategory?.products?.length > 0 ? (
                      <>
                        {subCategory?.products?.map((product) => (
                          <SingleProductOfShop
                            product={product}
                            openProductDetailModal={openProductDetailModal}
                            RemoveFromCart={RemoveFromCart}
                            AddtoCart={AddtoCart}
                            handleMouseLeave={handleMouseLeave}
                            handleMouseEnter={handleMouseEnter}
                            hoveredProductId={hoveredProductId}
                            storeId={storeId}
                            category={category}
                            subCategory={subCategory}
                          />
                        ))}
                      </>
                    ) : (
                      <div>No products found...</div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
