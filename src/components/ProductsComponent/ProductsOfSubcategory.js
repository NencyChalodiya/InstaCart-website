import React from "react";
import MinusSvg from "../../assets/images/minus.svg";
import DustbinSvg from "../../assets/images/dustbinSvg.svg";
import PlusSvg from "../../assets/images/plus.svg";
const ProductsOfSubcategory = ({
  product,
  openProductDetailModal,
  RemoveFromSubCartCategoryProducts,
  AddtoCartSubCategoryProducts,
  handleMouseLeave,
  handleMouseEnter,
  hoveredProductId,
  items,
}) => {
  return (
    <>
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
                          RemoveFromSubCartCategoryProducts(
                            e,
                            product,
                            items.subcategory_id
                          )
                        }
                      >
                        {product.qty > 1 ? (
                          <img src={MinusSvg} alt="minusSvg" />
                        ) : (
                          <img src={DustbinSvg} alt="dustbinSvg" />
                        )}
                      </button>
                      <span className="px-1 text-sm leading-4 text-white ">
                        <span className="w-[1px] absolute">{product?.qty}</span>
                        <span className="pl-4">ct</span>
                      </span>
                      <button
                        className="flex flex-nowrap items-center relative left-[8px]"
                        onClick={(e) =>
                          AddtoCartSubCategoryProducts(
                            e,
                            product,
                            items.subcategory_id
                          )
                        }
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
                  transition: "width 0.3s ease-in-out", // Apply transition to width property
                  width: hoveredProductId === product.id ? "130px" : "80px",
                }}
              >
                <div className="flex items-center px-2">
                  <img src={PlusSvg} alt="plusIcon" />

                  <span
                    className="text-white"
                    onClick={(e) =>
                      AddtoCartSubCategoryProducts(
                        e,
                        product,
                        items.subcategory_id
                      )
                    }
                  >
                    {hoveredProductId === product.id ? "Add to cart" : "Add"}
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
                  <img src={product?.image} alt={`Product ${product.id}`} />
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
              <span className="text-gray-600">{product?.title}</span>
            </div>
            <div>
              <span className="text-gray-500">{product?.label}</span>
            </div>
            <div>
              <span className="bg-[#FDDC22] ">{product?.discount_label}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductsOfSubcategory;
