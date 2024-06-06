import React, { useState } from "react";

import Navbar from "../../../components/LandingPageComponents/Navbar";

import LockIconSvg from "../../../assets/images/LockIcon.svg";
import EllipsesSvg from "../../../assets/images/ellipsesSvg.svg";
import UploadSvg from "../../../assets/images/uploadSvg.svg";
import EditDeleteDetailsModal from "./EditDeleteDetailsModal";

const ListProductDetails = ({ handleListClick }) => {
  const [editDeleteDetailsModal, openEditDeleteDetailsModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mt-28  mx-auto max-w-[1451px]">
          <div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center aspect-[16/9] max-h-[430px] p-[53px] bg-[#F6F7F8] rounded-l-lg">
                <div className="text-left">
                  <div className="flex justify-between">
                    <h2 className="flex">
                      <div className="pt-1">
                        <img src={LockIconSvg} alt="lock-icon-Svg" />
                      </div>
                      CVS
                    </h2>
                    <div className="flex mt-3 ml-auto">
                      <button
                        className="ml-2 cursor-pointer relative w-9 h-9 bg-[#E8E9EB] rounded-full flex justify-center items-center"
                        onClick={() => openEditDeleteDetailsModal(true)}
                      >
                        <span className="block text-ellipsis">
                          <img src={EllipsesSvg} alt="menu-svg" />
                        </span>
                      </button>
                      <button className="ml-2 cursor-pointer relative w-9 h-9 bg-[#E8E9EB] rounded-full flex justify-center items-center">
                        <span className="block text-ellipsis">
                          <img src={UploadSvg} alt="upload-svg" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      src="https://s3.amazonaws.com/instacart-media/7NEMb9vWSGiyRN5VyytK_user_placeholder_circle.png"
                      alt="profile-logo"
                      className="w-9 h-9 rounded-[50px] mb-2 mr-3"
                    />
                    <span className="pt-2">Nency Chalodiya</span>
                  </div>
                  <p className="my-2">sdxscd</p>
                  <div className="py-6 ">
                    <a href="#">
                      <div className="flex justify-between">
                        <img
                          src="https://www.instacart.com/image-server/55x55/www.instacart.com/assets/domains/warehouse/logo/118/6ede4bd3-cc58-4e32-b10b-24ed1d656131.png"
                          className="h-[55px] w-[55px] border rounded-[50%]"
                        />
                        <div className="flex-grow pl-3">
                          <div>CVS</div>
                          <div>Available in 1148</div>
                          <div></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <button
                    className="px-4 mb-2 cursor-pointer w-full h-[56px] rounded-[27px] relative bg-[#E8E9EB]"
                    onClick={() => handleListClick}
                  >
                    Edit items
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="https://www.instacart.com/assets/inspiration/lists_banners/banner_12-a79fee4e1aaee6a6ad70ef3818446c9dcbc2f94d1e0a97ed2dd23d3b5ad05492.png"
                  alt="cover-image"
                  className="h-[408px] rounded-r-lg"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <ul className="w-full h-full overflow-x-auto grid grid-cols-6 ">
              <li className="w-[197px] min-w-[157px] max-w-[197px] ">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] pl-4">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-[197px] min-w-[157px] max-w-[197px] mr-4">
                <div>
                  <div className="h-full">
                    <div className="relative h-full rounded-[12px]">
                      <a className="relative flex flex-col h-full text-left opacity-100 ">
                        <div className="relative">
                          <div className="mb-2">
                            <div
                              className="relative"
                              style={{
                                paddingTop: "calc(100%)",
                              }}
                            >
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <img
                                  src="https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_296491c5-4d35-432d-bea8-edd7facdfa0b.jpg"
                                  className="max-w-full min-h-full rounded-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex">
                              <div className="py-[1px] px-1">
                                <span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    $
                                  </span>
                                  <span className="mr-[2px] font-bold text-2xl leading-5 text-gray-700">
                                    4
                                  </span>
                                  <span className="text-sm font-bold text-gray-700 align-super">
                                    49
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-gray-500">avocado</h2>
                          </div>
                          <div className="flex">
                            <div className="text-gray-400">4 ct</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <EditDeleteDetailsModal
        editDeleteDetailsModal={editDeleteDetailsModal}
        onCancel={() => openEditDeleteDetailsModal(false)}
      />
    </>
  );
};

export default ListProductDetails;
