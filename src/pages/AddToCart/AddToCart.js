import React from "react";
import { Modal } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
const AddToCart = ({ addToCart, onBackClick }) => {
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
      open={addToCart}
      closable={false}
      width={1450}
      footer={false}
    >
      <div className="h-[700px] overflow-auto ">
        <div className="flex-grow flex-shrink px-4 pb-8">
          <div className="flex items-center ">
            <IoArrowBackOutline
              className="w-5 h-5 mr-2 cursor-pointer"
              onClick={onBackClick}
            />
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

          <div className="px-4 pt-8">
            <div className="w-full h-full">
              <div className="flex items-center justify-between ">
                <div className="flex items-center justify-between gap-6">
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

                <div className="mb-4">
                  <h2>
                    <div className="mt-4 mb-2"></div>
                    <span>Jameson Triple Distilled Irish Whiskey</span>
                  </h2>
                </div>
                <div>asdads</div>
              </div>
            </div>
          </div>
          <p>dasdasd</p>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCart;
