import React, { useState, useEffect } from "react";
import API from "../../services/api";

import { Modal } from "antd";
import CrossSvg from "../../assets/images/cross.svg";
import SideArrowSvg from "../../assets/images/sideArrowSvg.svg";
import { IoArrowBackOutline } from "react-icons/io5";

const CreateListModal = ({ openList, onCancel }) => {
  const [getCoverImage, setCoverImage] = useState([]);
  const [screen, setScreen] = useState(1);
  const [shopsStore, setShopStore] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchCoverImages = async () => {
    try {
      const response = await API.getListCoverImages();
      if (response.status === "success") {
        setCoverImage(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoverImages();
  }, []);

  const fetchStoreShops = async () => {
    const response = await API.getShopsByCategory(1);
    console.log(response);
    if (response.status === "success") {
      setShopStore(response.data.storeData);
    }
  };

  useEffect(() => {
    fetchStoreShops();
  }, []);

  const addList = async () => {
    try {
      let payload = {
        store_id: selectedStore.store_id,
        title: title,
        description: description,
        cover_photo_id: selectedCoverImage,
      };
      const response = await API.createList(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScreenChange = () => {
    setScreen(screen + 1);
  };

  const handleBack = () => {
    // Decrement screen state on "Back" click
    setScreen(screen - 1);
  };

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    handleBack();
  };

  const handleCoverImageSelect = (imageId) => {
    setSelectedCoverImage(imageId);
  };

  return (
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

              <div>
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
      </div>
    </Modal>
  );
};

export default CreateListModal;
