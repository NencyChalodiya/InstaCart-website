import React from "react";
import TickSvg from "../../assets/images/tick.svg";
import MinusSvg from "../../assets/images/minus.svg";
import DustbinSvg from "../../assets/images/dustbinSvg.svg";
import PlusSvg from "../../assets/images/plus.svg";
const ShopProducts = ({
  category,
  openProductDetailModal,
  RemoveFromCart,
  AddtoCart,
  handleMouseLeave,
  handleMouseEnter,
  hoveredProductId,
}) => {
  return (
    <>
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
                      <img src={TickSvg} alt="tickSvg" />
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
                                          RemoveFromCart(
                                            e,
                                            product,
                                            subCategory.subcategory_id,
                                            category.category_id
                                          )
                                        }
                                      >
                                        {product.qty > 1 ? (
                                          <img src={MinusSvg} alt="minusSvg" />
                                        ) : (
                                          <img
                                            src={DustbinSvg}
                                            alt="dustbinSvg"
                                          />
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
                                          AddtoCart(
                                            e,
                                            product,
                                            subCategory.subcategory_id,
                                            category.category_id
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
                                  <img src={PlusSvg} alt="plusIcon" />
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
    </>
  );
};

export default ShopProducts;
