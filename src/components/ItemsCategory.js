import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItemToCart, RemoveItemFromCart } from "../utils/Reducers/CartSlice";
import {
  AddItem,
  DeleteTotalItems,
  RemoveItem,
} from "../utils/Reducers/ItemSlice";

const ItemsCategory = ({ category, setCartHandler }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const AddtoCart = (category, e) => {
    e.stopPropagation();
    dispatch(AddItem(category));
    dispatch(AddItemToCart(category));
    setIsHovered(false);
  };
  const RemoveFromCart = (category, e) => {
    e.stopPropagation();
    dispatch(RemoveItem(category));
    dispatch(RemoveItemFromCart(category));
  };

  return (
    <>
      <li
        class="flex flex-col relative "
        key={category.id}
        onClick={setCartHandler}
      >
        <div className="absolute z-10 top-1 right-1">
          <div className="inline-block rounded-[20px] p-[2px] bg-[#2C890F]">
            {category.qty ? (
              <div className="cursor-pointer flex flex-row relative items-center justify-evenly rounded-[20px] h-9 min-w-9 w-[125px]">
                <div className="absolute">
                  <div className="inline-block ">
                    <span className="flex justify-center items-center min-h-[40px] flex-nowrap">
                      <button
                        className="flex flex-nowrap justify-center items-center  relative left-[1px]"
                        onClick={(e) => RemoveFromCart(category, e)}
                      >
                        {category.qty > 1 ? (
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
                          {category?.qty}
                        </span>
                        <span className="pl-4">banana</span>
                      </span>
                      <button
                        className="flex flex-nowrap items-center relative right-[1px]"
                        onClick={(e) => AddtoCart(category, e)}
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
                onMouseEnter={handleMouseEnter}
                style={{
                  backgroundColor: isHovered ? "#226b0b" : "green",
                  transition: "width 0.3s ease-in-out", // Apply transition to width property
                  width: isHovered ? "127px" : "80px",
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
                    onClick={(e) => AddtoCart(category, e)}
                  >
                    {isHovered ? "Add to cart" : "Add"}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
        <div class="relative overflow-hidden rounded-xl">
          <div class="w-full h-[200px]">
            <img src={category.offerCategoryImg} alt="Product Image" />
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
            <span className="text-gray-500">{category.offerCategoryName}</span>
          </div>
          <div>
            <p className="mt-[6px] text-gray-400">
              {category.offerCategoryIngre}
            </p>
          </div>
          <div className="flex">
            <div className="text-gray-400">{category.offerCategoryWeight}</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ItemsCategory;
