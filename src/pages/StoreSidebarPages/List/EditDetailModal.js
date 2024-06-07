import React, { useState, useEffect } from "react";

import API from "../../../services/api";

import { Modal } from "antd";

import CrossSvg from "../../../assets/images/cross.svg";
import SideArrowSvg from "../../../assets/images/sideArrowSvg.svg";

const EditDetailModal = ({
  editDetailModal,
  onCancel,
  listId,
  currentListDetails,
  refreshListDetails,
}) => {
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [getCoverImage, setCoverImage] = useState([]);
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
    if (currentListDetails) {
      setTitle(currentListDetails.title);
      setDescription(currentListDetails.description);
      setSelectedCoverImage(currentListDetails.cover_image_id);
    }
    fetchCoverImages();
  }, [currentListDetails]);

  const handleEditListDetails = async () => {
    try {
      let payload = {
        title: title,
        cover_photo_id: selectedCoverImage,
        description: description,
      };
      const response = await API.editListDetails(listId, payload);
      console.log(response);
      if (response.status === "success") {
        onCancel();
        refreshListDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCoverImageSelect = (imageId) => {
    setSelectedCoverImage(imageId);
  };

  return (
    <Modal
      title={
        <div>
          <div className="border-b mb-2">
            <button className="cursor-pointer" onClick={onCancel}>
              <img src={CrossSvg} alt="crossIconImg" />
            </button>
          </div>
        </div>
      }
      centered
      open={editDetailModal}
      closable={false}
      footer={false}
    >
      <div className="h-[700px] overflow-y-auto px-4 pb-8">
        <div className="border-b pb-2">
          <button className="w-full bg-transparent cursor-pointer">
            <div className="flex justify-between items-center w-full py-3">
              <div className="flex justify-start items-center">
                <div>
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
                </div>
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
              onClick={() => handleEditListDetails()}
            >
              <div className="flex items-center justify-center">
                <span className="block text-xl font-semibold leading-5 text-white">
                  Done
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditDetailModal;
