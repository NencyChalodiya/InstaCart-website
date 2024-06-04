import React, { useState } from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import CreateListModal from "./CreateListModal";

import SideArrowSvg from "../../assets/images/sideArrowSvg.svg";

const YourLists = () => {
  const [openList, setOpenList] = useState(false);
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

              <div className="grid grid-cols-2">
                <div className="py-2 pr-4">
                  <div className="p-4 box-border  rounded-[12px] min-h-[391px] min-w-[343px] relative shadow-xl bg-white">
                    <div>
                      <a href="#">
                        <div className="flex justify-between">
                          <div className="flex justify-start flex-grow ">
                            <img
                              src="https://s3.amazonaws.com/instacart-media/7NEMb9vWSGiyRN5VyytK_user_placeholder_circle.png"
                              alt="logo"
                              className="mr-2 h-[45px] w-[45px] border rounded-[50%]"
                            />
                            <div className="flex flex-col justify-around flex-grow">
                              <h2 className="pb-1">Costco</h2>
                              <h3>Nency Chalodiya</h3>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex justify-end items-center">
                              <span className="mr-2">Show item</span>
                              <img src={SideArrowSvg} alt="side-arrow-svg" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="my-4"></div>
                      <div className="flex">
                        <div className="relative h-full "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateListModal
          openList={openList}
          onCancel={() => setOpenList(false)}
        />
      </div>
    </>
  );
};

export default YourLists;
