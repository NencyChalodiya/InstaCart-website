import React from "react";
import { Link } from "react-router-dom";

import { Modal } from "antd";
import CrossSvg from "../../../assets/images/cross.svg";
import SideArrowSvg from "../../../assets/images/sideArrowSvg.svg";
import SearchSvg from "../../../assets/images/search.svg";
import { IoArrowBackOutline } from "react-icons/io5";

const CreateListModal = ({
  openList,
  onCancel,
  getCoverImage,
  shopsStore,
  setTitle,
  setDescription,
  addList,
  handleScreenChange,
  handleStoreSelect,
  handleCoverImageSelect,
  handleBack,
  title,
  description,
  selectedStore,
  selectedCoverImage,
  screen,
}) => {
  return (
    <>
      <Modal
        title={
          <div>
            {/* Sign up */}
            {screen === 1 && (
              <div className="border-b mb-2">
                <button className="cursor-pointer" onClick={onCancel}>
                  <img src={CrossSvg} alt="crossIconImg" />
                </button>
                <div>
                  <h2 className="text-3xl font-bold">Create List</h2>
                </div>
              </div>
            )}

            {screen === 2 && (
              <div>
                <IoArrowBackOutline
                  className="w-6 h-6 mr-2 text-green-600 cursor-pointer"
                  onClick={handleBack}
                />
                <span className="mb-2 text-3xl font-bold">Choose store</span>
              </div>
            )}

            {screen === 3 && (
              <div className="border-b mb-2">
                <button className="cursor-pointer" onClick={onCancel}>
                  <img src={CrossSvg} alt="crossIconImg" />
                </button>
                <div>
                  <h2 className="text-xl ">Add items to List</h2>
                </div>
              </div>
            )}
          </div>
        }
        centered
        open={openList}
        footer={null}
        width={500}
        bodyStyle={{ padding: 0 }}
        closable={false}
      >
        <div className="h-[700px] overflow-y-auto px-4 pb-8">
          {screen === 1 && (
            <>
              <div className="border-b pb-2">
                <button
                  className="w-full bg-transparent cursor-pointer"
                  onClick={() => handleScreenChange()}
                >
                  <div className="flex justify-between items-center w-full py-3">
                    <div className="flex justify-start items-center">
                      {selectedStore ? (
                        <>
                          <img
                            src={selectedStore?.image_url}
                            alt="selected-store-img"
                            className="w-12 h-12 rounded-full border"
                          />
                          <div className="flex flex-col items-start pl-3">
                            <div className="text-base leading-4">
                              {selectedStore?.store_name}
                            </div>
                            <div className="text-sm leading-4 mt-1 text-gray-500">
                              Your list will be shoppable at this store
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            src="https://www.instacart.com/image-server/48x/www.instacart.com/assets/inspiration/lists/retailer_icon_placeholder-63a3e2b01979f35da0e1870724fce461e1878cf4a1109d8d5e383d3ce715635c.png"
                            alt="create-list-img-store"
                          />
                          <div className="flex flex-col items-start pl-3">
                            <div className="text-sm leading-4">
                              Choose a store (Required)
                            </div>
                            <div className="text-sm leading-4">
                              Your list will be shoppable at this store
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex  items-center">
                      <img src={SideArrowSvg} alt="sideArrowSvg" />
                    </div>
                  </div>
                </button>
                <div className="border-b-[1px] pt-2"></div>
                <div className="py-3">
                  <div className="py-2">
                    <div className="flex flex-row flex-nowrap items-center rounded-xl h-14 box-border max-w-[600px]">
                      <div className="relative flex-grow h-full ">
                        <input
                          className="box-border w-full h-full px-3 py-2 bg-transparent border outline-none roundd-xl hover:outline-gray-600 "
                          placeholder="Add the title (Required)"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <div className="flex flex-row flex-nowrap items-center border-none rounded-xl h-14 box-border max-w-[600px]">
                    <div className="relative flex-grow h-full ">
                      <textarea
                        className="box-border w-full h-full px-3 py-2 bg-transparent border outline-none roundd-xl hover:outline-gray-600 "
                        placeholder="Add the description (optional)"
                        rows="4"
                        cols="50"
                        maxLength="110"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-1 pb-1 text-base leading-4 mt-2 mb-2 font-semibold">
                Add a cover photo to your list
              </div>
              <div className="flex flex-col justify-between gap-6">
                <ul className="inline-block">
                  <div className="grid grid-cols-3 justify-start w-full pt-1 pl-[2px] pb-2 gap-6">
                    {getCoverImage &&
                      getCoverImage.coverImages &&
                      getCoverImage.coverImages.map((img) => (
                        <li key={img.id}>
                          <button
                            className={`w-[133px] h-[100px] rounded-xl hover:border hover:border-black ${
                              selectedCoverImage === img.id
                                ? "border-2 border-black"
                                : ""
                            }`}
                            onClick={() => handleCoverImageSelect(img.id)}
                          >
                            <img
                              src={img?.image}
                              alt="cover-images"
                              className="w-[133px] h-[96px] rounded-xl"
                            />
                          </button>
                        </li>
                      ))}
                  </div>
                </ul>

                <div className="absolute bottom-0 bg-white z-10 left-0 right-0 my-3 border-t pt-3">
                  <button
                    type="submit"
                    className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full "
                    onClick={() => addList()}
                  >
                    <div className="flex items-center justify-center">
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Next
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}

          {screen === 2 && (
            <>
              {shopsStore.map((store) => (
                <div className="pb-5 border-b" key={store.store_id}>
                  <button
                    className="flex w-full text-left"
                    onClick={() => handleStoreSelect(store)}
                  >
                    <span className="basis-[60px]">
                      <img
                        src={store?.image_url}
                        className="inline-block max-w-full relative top-3 rounded-full w-[48px] h-[48px] border"
                      />
                    </span>
                    <span className="flex flex-col flex-grow pt-3">
                      <span>
                        <span className="inline">{store?.store_name}</span>
                      </span>
                      <span>
                        <span className="inline">{store.messages[2]}</span>
                      </span>
                    </span>
                  </button>
                </div>
              ))}
            </>
          )}

          {screen === 3 && (
            <>
              <div className="pb-[50px] bg-white">
                <div className=" w-full">
                  <button className="cursor-pointer flex relative w-full h-[40px] rounded-[8px] items-center bg-[#F6F7F8] mt-2">
                    <span className="ml-3">Search CVS...</span>
                    <span className="flex ml-auto mr-3">
                      <img src={SearchSvg} alt="searchSvg" />
                    </span>
                  </button>
                  <div className="flex mt-3 ">
                    <span className="relative">
                      <button className="box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer">
                        Current List
                      </button>
                    </span>
                    <span className="relative">
                      <button className="box-border border min-w-[58px] h-[32px] rounded-[18px] px-4 relative m-1 cursor-pointer">
                        Buy it again
                      </button>
                    </span>
                  </div>
                  <div className="text-center py-12 ">
                    <img
                      src="https://www.instacart.com/assets/recipes/no_items_bia-215c7c6ec26a6a0af4f87134b677bf6505850b1340cfbf39bd9e603968fbb6cb.png"
                      alt="logo-image"
                      className="block mx-auto mb-3 max-w-[235px] max-h-[132px] w-full h-full "
                    />
                    <h1>Reordering will be easy</h1>
                    <p>
                      Items you order will show up here so you can buy them
                      again easily
                    </p>
                    <Link
                      to={`/store/${selectedStore.store_id}/front`}
                      className="iniline-block mt-6 text-[#2C890F] hover:text-[#2C890F]"
                    >
                      Browse categories
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 bg-white z-10 left-0 right-0 my-3 border-t pt-3">
                <button
                  type="submit"
                  className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-full "
                >
                  <div className="flex items-center justify-center">
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Done Editing list
                    </span>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CreateListModal;
