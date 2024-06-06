import React, { useState, useEffect } from "react";
import Navbar from "../../../components/LandingPageComponents/Navbar";
import CreateListModal from "../List/CreateListModal";

import SideArrowSvg from "../../../assets/images/sideArrowSvg.svg";
import { useParams, Link } from "react-router-dom";
import API from "../../../services/api";
import ListProductDetails from "./ListProductDetails";

const YourLists = () => {
  const { storeId } = useParams();
  const [openList, setOpenList] = useState(false);
  const [getCoverImage, setCoverImage] = useState([]);
  const [shopsStore, setShopStore] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [screen, setScreen] = useState(1);
  const [listDetails, setListDetails] = useState([]);
  const [userSettingsDetail, setUserSettingsDetail] = useState(null);

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
      //console.log(response);
      if (response.status === "success") {
        setScreen(3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchListDetails = async () => {
    try {
      const response = await API.getListDetails(storeId);

      if (response.status === "success") {
        setListDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("listDetails", listDetails);

  useEffect(() => {
    if (storeId !== null) {
      fetchListDetails();
    }
  }, [storeId]);

  const getAccountSettingsDetails = async () => {
    try {
      //console.log("dkjasnd");
      const response = await API.GetUserDetails();
      console.log(response);
      if (response.status === "success") {
        //console.log(response.user);
        setUserSettingsDetail(response.data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAccountSettingsDetails();
  }, []);

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
    <>
      <Navbar />
      <div>
        <div className="bg-white">
          <div className="min-h-screen bg-white">
            <div className="pt-16">
              <div className="flex items-center justify-between">
                <div className="px-16 pt-8 pb-1 text-3xl font-bold leading-7 text-[#343538] max-md:text-xl  max-md:px-5">
                  Your lists
                </div>
                <div className="px-16 pt-12 pb-1 max-md:px-5">
                  <button
                    className="ml-2  cursor-pointer relative rounded-[27px] w-[186px] h-14 px-4 pt-[14px] pb-4 bg-[#343538] text-xl text-white max-md:w-[150px] hover:bg-gray-700"
                    onClick={() => setOpenList(true)}
                  >
                    <span className="">Create new</span>
                  </button>
                </div>
              </div>
              <div>
                <div className="flex px-16 max-md:flex-col max-md:px-5">
                  <span className="">
                    <button className="box-border border-[2px] min-w-[58px] h-8 rounded-[18px] m-1 relative px-4 bg-[#E8E9EB]">
                      All
                    </button>
                  </span>
                  <span className="">
                    <button className="box-border border-[2px] min-w-[58px] h-8 rounded-[18px] m-1 relative px-4 bg-[#E8E9EB]">
                      Created by me
                    </button>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 px-16 ">
                {listDetails && listDetails.lists ? (
                  listDetails.lists.length > 0 ? (
                    <>
                      {listDetails.lists.map((list) => (
                        <Link
                          to={`/store/your-lists/listProductDetail/${list.list_id}`}
                          className="py-2 pr-4"
                          key={list.list_id}
                        >
                          <div className="p-4 box-border  rounded-[12px] min-h-[391px] min-w-[343px] relative shadow-xl bg-white">
                            <div>
                              <div>
                                <div className="flex justify-between">
                                  <div className="flex justify-start flex-grow ">
                                    <img
                                      src="https://s3.amazonaws.com/instacart-media/7NEMb9vWSGiyRN5VyytK_user_placeholder_circle.png"
                                      alt="logo"
                                      className="mr-2 h-[45px] w-[45px] border rounded-[50%]"
                                    />
                                    <div className="flex flex-col justify-around flex-grow">
                                      <h2 className="text-xl font-semibold">
                                        {list?.title}
                                      </h2>
                                      <h3 className="text-gray-500">
                                        {userSettingsDetail?.firstName}{" "}
                                        {userSettingsDetail?.lastName || "-"}
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="flex justify-between">
                                    <div className="flex justify-end items-center">
                                      <span className="mr-2">Show item</span>
                                      <img
                                        src={SideArrowSvg}
                                        alt="side-arrow-svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="my-4"></div>
                              <div className="flex overflow-x-scroll">
                                <div className="relative h-full  ">
                                  <div>
                                    <ul className="flex w-full h-full">
                                      {list.products &&
                                      list.products.length > 0 ? (
                                        <>
                                          {list.products.map((product) => (
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
                                                              paddingTop:
                                                                "calc(100%)",
                                                            }}
                                                          >
                                                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                                              <img
                                                                src={
                                                                  product?.image
                                                                }
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
                                                                  {
                                                                    product?.selling_price
                                                                  }
                                                                </span>
                                                                <span className="text-sm font-bold text-gray-700 align-super">
                                                                  49
                                                                </span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <h2 className="text-gray-500">
                                                            {product?.title}
                                                          </h2>
                                                        </div>
                                                        <div className="flex">
                                                          <div className="text-gray-400">
                                                            {product?.label}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          ))}
                                        </>
                                      ) : (
                                        <>No Products Added for this list....</>
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <>
                      {" "}
                      <div className="max-w-[375px] mx-auto">
                        <div className="pt-12 pb-12 text-center">
                          <img
                            src="https://www.instacart.com/image-server/235x135/www.instacart.com/assets/recipes/no_lists-3d0b6f731f2bbca4ccd85f40832745164d85dd27ea3292369822cd593834d85c.png"
                            alt="list-img"
                            className="block mx-auto mb-3 max-w-[235px] max-h-[132px] w-full h-full"
                          />
                          <div className="text-sm leading-4 text-[#797D85] font-medium">
                            No list yet
                          </div>
                          <p className="text-sm leading-4 text-[#8A8D94]">
                            Lists you create will saved here
                          </p>
                        </div>
                        <div className="text-center text-[#0000EE] underline font-medium active:text-purple-600 hover:text-red-600">
                          <a href="#" onClick={() => setOpenList(true)}>
                            Create a list
                          </a>
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  <>Loading...</>
                )}
              </div>
            </div>
          </div>
        </div>
        <CreateListModal
          openList={openList}
          onCancel={() => setOpenList(false)}
          getCoverImage={getCoverImage}
          shopsStore={shopsStore}
          setTitle={setTitle}
          setDescription={setDescription}
          addList={addList}
          handleScreenChange={handleScreenChange}
          handleStoreSelect={handleStoreSelect}
          handleCoverImageSelect={handleCoverImageSelect}
          handleBack={handleBack}
          title={title}
          description={description}
          selectedStore={selectedStore}
          selectedCoverImage={selectedCoverImage}
          screen={screen}
        />
        {openList && (
          <ListProductDetails handleListClick={() => setOpenList(true)} />
        )}
      </div>
    </>
  );
};

export default YourLists;
