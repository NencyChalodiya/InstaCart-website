import React, { useState, useEffect } from "react";

import MinusSvg from "../../assets/images/minus.svg";
import DustbinSvg from "../../assets/images/dustbinSvg.svg";
import PlusSvg from "../../assets/images/plus.svg";
import { useSelector } from "react-redux";

const SingleProductOfShop = ({
  product,
  openProductDetailModal,
  RemoveFromCart,
  AddtoCart,
  handleMouseLeave,
  handleMouseEnter,
  hoveredProductId,
  storeId,
  category,
  subCategory,
}) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const productItem = cartItems.find((item) => item.id === product?.id);
  console.log("productItem", productItem?.qty);

  const [qty, setQty] = useState(productItem?.qty ? productItem?.qty : 0);

  useEffect(() => {
    if (productItem) {
      setQty(productItem?.qty);
    } else {
      setQty(0);
    }
  }, [productItem]);

  return (
    <div
      key={product?.id}
      className="relative flex cursor-pointer"
      onClick={() => openProductDetailModal(product?.id)}
    >
      <div className="absolute z-10 top-1 right-1">
        <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
          {qty ? (
            <div className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 w-[125px]">
              <div className="absolute">
                <div className="inline-block ">
                  <span className="flex justify-center items-center min-h-[40px] flex-nowrap">
                    <button
                      className="flex flex-nowrap justify-center items-center  relative  right-[8px]"
                      onClick={(e) => {
                        setQty(qty - 1);
                        RemoveFromCart(
                          e,
                          product,
                          subCategory.subcategory_id,
                          category.category_id,
                          storeId
                        );
                      }}
                    >
                      {qty > 1 ? (
                        <img src={MinusSvg} alt="minusSvg" />
                      ) : (
                        <img src={DustbinSvg} alt="dustbinSvg" />
                      )}
                    </button>
                    <span className="px-1 text-sm leading-4 text-white ">
                      <span className="w-[1px] absolute">{qty}</span>
                      <span className="pl-4">ct</span>
                    </span>
                    <button
                      className="flex flex-nowrap items-center relative left-[8px]"
                      onClick={(e) => {
                        setQty(qty + 1);
                        AddtoCart(
                          e,
                          product,
                          subCategory.subcategory_id,
                          category.category_id,
                          storeId
                        );
                      }}
                    >
                      <img src={PlusSvg} alt="plusIcon" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(product.id)}
              style={{
                backgroundColor:
                  hoveredProductId === product.id ? "#226b0b" : "green",
                transition: "width 0.3s ease-in-out",
                width: hoveredProductId === product.id ? "130px" : "80px",
              }}
            >
              <div className="flex items-center px-2">
                <img src={PlusSvg} alt="plusIcon" />
                <span
                  className="text-white"
                  onClick={(e) => {
                    setQty(qty + 1);
                    AddtoCart(
                      e,
                      product,
                      subCategory.subcategory_id,
                      category.category_id,
                      storeId
                    );
                  }}
                >
                  {hoveredProductId === product.id ? "Add to cart" : "Add"}
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl">
        <div className="w-full  object-cover">
          <img src={product?.image} alt={`Product ${product.id}`} />
        </div>
        <div className="px-2 mt-4">
          <div className="py-[1px] px-1 flex items-center">
            <div>
              <span className="text-sm font-bold text-gray-700 align-super">
                $
              </span>
              <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                {product?.selling_price}
              </span>
              <span className="text-sm font-bold text-gray-700 align-super">
                49
              </span>
            </div>
            <div>
              <span className="text-gray-500 ml-2">
                <s>{product?.actual_price}</s>
              </span>
            </div>
          </div>
          <div>
            <span className="text-gray-600">{product?.title}</span>
          </div>
          <div>
            <span className="text-gray-500">{product?.label}</span>
          </div>
          <div>
            <span className="bg-[#FDDC22]">{product?.discount_label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductOfShop;
