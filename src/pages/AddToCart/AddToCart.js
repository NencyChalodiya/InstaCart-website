import React from "react";
import { Modal } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { offersCategory } from "../../data/offers";
const AddToCart = ({
  addToCartModal,
  onBackClick,
  itemsAdd,
  productDetail,
}) => {
  console.log("Productdetail", productDetail);
  return (
    <Modal
      // title={
      //   <div className="flex items-center px-4 pb-8 ">
      //     <IoArrowBackOutline
      //       className="w-5 h-5 mr-2 cursor-pointer"
      //       onClick={onBackClick}
      //     />
      //     <span className="text-base">Back</span>
      //   </div>
      // }
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

          {/* <div className="sticky z-10 bg-white mx-[-16px] px-4 flex justify-between rounded-t-lg ">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 rounded-xl">
                <img
                  src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_219facb5-3ddf-4425-973c-bd9f1c3f2eff.jpg"
                  alt="category-img"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex mr-2 flex-nowrap">
                  <span className="text-lg leading-5">
                    Jameson Triple Distilled Irish Whiskey
                  </span>
                </div>
                <div className="mr-2 text-lg leading-5 ">
                  <span>$29.89</span>
                  <span className="mx-2 text-sm text-gray-400">750ml</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-end w-56 my-auto ml-auto">
                  <div className="relative flex flex-wrap justify-between">
                    <button className="px-4 cursor-pointer relative text-white rounded-[27px] w-[48%] min-w-[180px] h-[48px] my-[2px] bg-[#277D0F]">
                      <sapn className="block mx-2 text-lg leading-5">
                        Add to cart
                      </sapn>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-3 gap-6 px-4 pt-8">
            <div className="col-span-1 bg-black">
              <div className="my-4 mr-4 ">
                <div className="flex items-center justify-center h-full bg-white">
                  <button className="relative w-[30px] h-[30px] rounded-[24px] border-[2px] bg-white flex items-center justify-center">
                    <span className="block">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="#343538"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m12 11.48 4.208 4.208 1.584-1.584L12 8.312l-5.792 5.792 1.584 1.584z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <ul className="flex flex-col justify-center w-full h-full">
                    <li className="inline-block p-1">
                      <button className="border p-1  m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                        <img
                          src="https://www.instacart.com/assets/domains/product-image/file/large_b7c18887-0fad-4c0f-a410-628cd79883bb.jpg"
                          alt="img-1"
                          className="h-auto max-w-full rounded-xl"
                        />
                      </button>
                    </li>
                    <li className="inline-block p-1">
                      <button className="border p-1  m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                        <img
                          src="https://www.instacart.com/assets/domains/product-image/file/large_4e3d7c50-92ef-46ee-988b-19a522a71167.jpg"
                          alt="img-1"
                          className="h-auto max-w-full rounded-xl"
                        />
                      </button>
                    </li>
                    <li className="inline-block p-1">
                      <button className="border p-1  m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                        <img
                          src="https://www.instacart.com/assets/domains/product-image/file/large_257312ec-baa4-4907-a8f8-6639a4419d11.jpg"
                          alt="img-1"
                          className="h-auto max-w-full rounded-xl"
                        />
                      </button>
                    </li>
                    <li className="inline-block p-1">
                      <button className="border p-1  m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                        <img
                          src="https://www.instacart.com/assets/domains/product-image/file/large_3fd1f56d-b73f-426e-b25b-96678d8ff361.jpg"
                          alt="img-1"
                          className="h-auto max-w-full rounded-xl"
                        />
                      </button>
                    </li>
                  </ul>
                  <button className="relative w-[30px] h-[30px] rounded-[24px] border-[2px] bg-white flex items-center justify-center">
                    <span className="block">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="#343538"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m12 11.48 4.208 4.208 1.584-1.584L12 8.312l-5.792 5.792 1.584 1.584z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="px-4 pt-8">
            
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="mb-6">
                      <button className=" w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center ">
                        <span className="block">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="#343538"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="m12 11.48 4.208 4.208 1.584-1.584L12 8.312l-5.792 5.792 1.584 1.584z"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <ul className="flex flex-col justify-center w-full h-full ">
                        <li className="inline-block p-1">
                          <button className="border p-1 m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                            <img
                              src="https://www.instacart.com/assets/domains/product-image/file/large_b7c18887-0fad-4c0f-a410-628cd79883bb.jpg"
                              alt="img-1"
                              className="h-auto max-w-full rounded-xl"
                            />
                          </button>
                        </li>
                        <li className="inline-block p-1">
                          <button className="border p-1 m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                            <img
                              src="https://www.instacart.com/assets/domains/product-image/file/large_b7c18887-0fad-4c0f-a410-628cd79883bb.jpg"
                              alt="img-1"
                              className="h-auto max-w-full rounded-xl"
                            />
                          </button>
                        </li>
                        <li className="inline-block p-1">
                          <button className="border p-1 m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                            <img
                              src="https://www.instacart.com/assets/domains/product-image/file/large_b7c18887-0fad-4c0f-a410-628cd79883bb.jpg"
                              alt="img-1"
                              className="h-auto max-w-full rounded-xl"
                            />
                          </button>
                        </li>
                        <li className="inline-block p-1">
                          <button className="border p-1 m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                            <img
                              src="https://www.instacart.com/assets/domains/product-image/file/large_b7c18887-0fad-4c0f-a410-628cd79883bb.jpg"
                              alt="img-1"
                              className="h-auto max-w-full rounded-xl"
                            />
                          </button>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <button className=" w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center">
                          <span className="block">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              fill="#343538"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="my-4 mx-auto max-h-[416px] max-w-[416px]">
                      <img
                        src="https://www.instacart.com/assets/domains/product-image/file/large_3fd1f56d-b73f-426e-b25b-96678d8ff361.jpg"
                        alt="main-img"
                        className="max-w-full h-80 rounded-xl "
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="mb-4">
                    <h2>
                      <span>Jameson Triple Distilled Irish Whiskey</span>
                    </h2>
                  </div>
                </div>
                <div>asdads</div>
              </div>
            
          </div> */}
          <div className="px-4 pt-8">
            <div className="flex max-md:flex-col items-center justify-between">
              <div className="flex max-md:flex-col items-center gap-6">
                <div className="gap-10 mr-8 max-lg:mt-[-250px] max-md:mt-0">
                  <div className="flex  max-lg:flex-col">
                    <div className="max-lg:order-2">
                      <div className="mb-6 max-lg:hidden">
                        <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center ">
                          <span className="block">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              fill="#343538"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m12 11.48 4.208 4.208 1.584-1.584L12 8.312l-5.792 5.792 1.584 1.584z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div>
                        <ul className="flex flex-col  justify-center w-full h-full max-lg:flex-row">
                          {/* Your list of images */}
                          <li className="lg:hidden">
                            <div className="mb-6">
                              <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center ">
                                <span className="block">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="#343538"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="m12 11.48 4.208 4.208 1.584-1.584L12 8.312l-5.792 5.792 1.584 1.584z"
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </li>

                          {productDetail ? (
                            <>
                              {productDetail?.product_images.map(
                                (productImg) => (
                                  <li className="inline-block p-1">
                                    <button className="border p-1 m-[1px] bg-white cursor-pointer w-[46px] flex rounded-xl">
                                      <img
                                        src={productImg}
                                        alt="img-1"
                                        className="h-auto max-w-full rounded-xl"
                                      />
                                    </button>
                                  </li>
                                )
                              )}
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
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="#343538"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-6 max-lg:hidden">
                          <button className="w-[30px] h-[30px] rounded-[24px] border-[2px] flex items-center justify-center">
                            <span className="block">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="#343538"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-center w-full ">
                      <div className="my-4 mx-auto max-h-[416px] w-[300px] ">
                        <img
                          src={itemsAdd?.offerCategoryImg}
                          alt="main-img"
                          className="w-full h-80 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-lg:flex-col">
                  <div className="mb-[35px]  w-full ">
                    <h2 className="mt-2 mb-2 ">
                      <span className="text-2xl font-bold leading-5 ">
                        {itemsAdd?.offerCategoryName}
                      </span>
                    </h2>
                    <div>
                      <div className="flex">
                        <span className="text-sm leading-4 ">
                          {itemsAdd?.offerCategoryWeight}
                        </span>
                      </div>
                    </div>
                    <div className="my-2">
                      <div>
                        <a href="/" className="text-sm leading-4">
                          <span>Shop all Jameson</span>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-4"></div>
                    <div className="mt-4">
                      <div className="border-t-[1px] border-b-[1px]">
                        <div className="min-h-[50px] flex items-center flex-wrap">
                          <div className="flex items-center justify-between w-full h-full">
                            <div className="text-base leading-4">Details</div>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#242529"
                              xmlns="http://www.w3.org/2000/svg"
                              color="systemGrayscale80"
                              size="16"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className=" border-b-[1px]">
                        <div className="min-h-[50px] flex items-center flex-wrap">
                          <div className="flex items-center justify-between w-full h-full">
                            <div className="text-base leading-4">
                              Ingredients
                            </div>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#242529"
                              xmlns="http://www.w3.org/2000/svg"
                              color="systemGrayscale80"
                              size="16"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className=" border-b-[1px]">
                        <div className="min-h-[50px] flex items-center flex-wrap">
                          <div className="flex items-center justify-between w-full h-full">
                            <div className="text-base leading-4">
                              Directions
                            </div>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#242529"
                              xmlns="http://www.w3.org/2000/svg"
                              color="systemGrayscale80"
                              size="16"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 12.52 7.792 8.314 6.208 9.896 12 15.688l5.792-5.792-1.584-1.584z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Additional details for the whiskey can go here */}
                  </div>
                  <div className="w-full  ml-6 max-md:ml-0 mb-[5px]  ">
                    <div className="border rounded-xl px-4 mb-[35px]  lg:w-[450px]  ">
                      <div className="mt-4">
                        <div>
                          <div className="flex items-end mb-1 ">
                            <span className="bg-[#FDDC22] text-2xl p-1 leading-5 font-bold">
                              $29.89
                            </span>
                            <div className="flex flex-col ml-1">
                              <p className="text-sm leading-4 text-gray-500">
                                $39.09
                              </p>
                            </div>
                            <span className="mt-[-2px] ml-2 bg-[#F6F7F8] py-[1px] px-2 text-[#2D2E32] font-medium">
                              24%off
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-grow"></div>
                      </div>
                      <div className="relative flex flex-col flex-wrap justify-between mt-4">
                        <button className="mb-4 cursor-pointer relative min-w-[180px] w-full h-14 rounded-xl text-base leading-4 text-black bg-[#E8E9EB]">
                          <span className="cursor-pointer">
                            <div className="flex items-center justify-between px-3">
                              <div></div>
                              <span>1</span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#343538"
                                xmlns="http://www.w3.org/2000/svg"
                                size="24"
                                color="systemGrayscale70"
                                aria-hidden="true"
                              >
                                <path d="M6 8h12l-6 8z"></path>
                              </svg>
                            </div>
                          </span>
                        </button>
                        <button className="px-4 mb-4 cursor-pointer relative min-w-[180px] w-full h-14 rounded-[27px] text-white bg-[#277D0F]">
                          <span className="block mx-2 text-base leading-5">
                            Add to cart
                          </span>
                        </button>
                      </div>

                      <div className="flex flex-wrap px-1 pt-3 pb-4">
                        <div className="mx-3 my-2">
                          <div>
                            <button className="relative m-auto leading-5 text-black bg-white cursor-pointer">
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
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8 5a3.5 3.5 0 0 0-3.5 3.5c0 2.286 1.225 4.532 2.83 6.47 1.59 1.92 3.444 3.41 4.467 4.166.124.09.28.09.403 0 1.025-.756 2.88-2.245 4.469-4.165C18.274 13.032 19.5 10.786 19.5 8.5a3.5 3.5 0 0 0-6.61-1.604l-.666 1.294a.25.25 0 0 1-.444 0l-.667-1.293A3.5 3.5 0 0 0 8 5M2.5 8.5A5.5 5.5 0 0 1 12 4.726 5.5 5.5 0 0 1 21.5 8.5c0 2.974-1.57 5.67-3.29 7.746-1.736 2.096-3.734 3.697-4.822 4.5a2.33 2.33 0 0 1-2.778 0c-1.088-.804-3.086-2.404-4.82-4.5C4.07 14.17 2.5 11.474 2.5 8.5"
                                    ></path>
                                  </svg>
                                  <span className="ml-1">Save</span>
                                </div>
                              </span>
                            </button>
                          </div>
                        </div>

                        <div className="mx-3 my-2">
                          <div>
                            <button className="relative m-auto leading-5 text-black bg-white cursor-pointer">
                              <span className="block overflow-hidden text-ellipsis">
                                <div className="flex items-center">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#242529"
                                    xmlns="http://www.w3.org/2000/svg"
                                    size="24"
                                    color="systemGrayscale80"
                                    aria-hidden="true"
                                  >
                                    <path d="M10 6h10v2H10zM7 11H4v2h3zM20 11H10v2h10zM10 16h10v2H10zM7 16H4v2h3zM7 6H4v2h3z"></path>
                                  </svg>
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
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#2B78C6"
                          xmlns="http://www.w3.org/2000/svg"
                          color="brandHighlightRegular"
                          size="16"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.534 4.201 12 2 9.466 4.201 6.122 3.91l-.756 3.27-2.877 1.73L3.8 12l-1.31 3.09 2.877 1.73.756 3.27 3.344-.291L12 22l2.534-2.201 3.344.291.756-3.27 2.876-1.73L20.2 12l1.31-3.09-2.876-1.73-.756-3.27zM11.1 15.604l5.847-5.858-1.416-1.412-4.474 4.482-2.373-2.234-1.37 1.456z"
                          ></path>
                        </svg>
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

          <div class="w-full py-2  ">
            <div class="w-full px-4 mb-6">
              <div class="flex items-center justify-between mt-4 mb-8">
                <div>
                  <h2 class="flex mr-2">
                    <div class="text-3xl font-bold leading-5">Related</div>
                  </h2>
                </div>
              </div>

              <div>
                <div>
                  <div className="relative flex flex-row">
                    <div className="w-full">
                      <ul className="grid justify-between w-full h-full grid-cols-4 gap-4 mt-2 isolate">
                        <li>
                          <div className="relative">
                            <div className="absolute top-[10px] right-6 ">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#72767E"
                                xmlns="http://www.w3.org/2000/svg"
                                tabindex="0"
                                size="24"
                                aria-label="save recipe"
                                data-testid="save-recipe-button"
                                role="button"
                                color="systemGrayscale50"
                                class="e-e0dnmk"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.163 3.319C5 3.639 5 4.059 5 4.9v13.717c0 1.285 0 1.928.27 2.316a1.5 1.5 0 0 0 1.01.624c.468.069 1.043-.219 2.193-.794l2.811-1.405c.263-.131.394-.197.532-.223a1 1 0 0 1 .368 0c.138.026.27.092.532.223l2.81 1.405c1.15.575 1.726.863 2.193.794a1.5 1.5 0 0 0 1.01-.624c.271-.387.271-1.03.271-2.316V4.9c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H7.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656"
                                  fill="#343538"
                                  fill-opacity="0.8"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 4.5v14.117c0 .254 0 .465.002.644q.238-.117.577-.287l2.811-1.405.051-.026c.187-.095.573-.292 1.006-.373a3 3 0 0 1 1.106 0c.433.08.82.278 1.006.373l.051.026 2.811 1.406.577.286c.002-.179.002-.39.002-.644V4.5H7M5.164 3.32C5 3.639 5 4.059 5 4.9v13.717c0 1.285 0 1.928.27 2.316a1.5 1.5 0 0 0 1.01.624c.468.069 1.043-.219 2.193-.794l2.811-1.405c.263-.131.394-.197.532-.223a1 1 0 0 1 .368 0c.138.026.27.092.532.223l2.81 1.405c1.15.575 1.726.863 2.193.794a1.5 1.5 0 0 0 1.01-.624c.271-.387.271-1.03.271-2.316V4.9c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H7.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <a className="relative block" href="/">
                              <div className="min-h-[246px]">
                                <div>
                                  <div className="mb-1">
                                    <div
                                      className="relative"
                                      //style={{ paddingTop: "calc(100%)" }}
                                    >
                                      <div className="flex items-center justify-center w-full h-full ">
                                        <img src="https://www.instacart.com/image-server/240x240/d3s8tbcesxr4jm.cloudfront.net/recipe-images/v3/soothing-hot-toddy/2_medium.jpg" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCart;
