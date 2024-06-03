import React from "react";
import { useParams } from "react-router-dom";
import { brandStoresData } from "../../../BrandStoreData/brandStoreData";
import { Link } from "react-router-dom";
//import Carousel from "@itseasy21/react-elastic-carousel";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const BrandStores = () => {
  const { id } = useParams();
  // const isExtraSmallScreen = useMediaQuery("(max-width: 639px)"); // xs
  // const isSmallScreen = useMediaQuery(
  //   "(min-width: 640px) and (max-width: 767px)"
  // ); // sm
  // const isMediumScreen = useMediaQuery(
  //   "(min-width: 768px) and ( max-width: 1023px)"
  // ); // md
  // const isLargeScreen = useMediaQuery(
  //   "(min-width: 1024px) and ( max-width: 1279px)"
  // ); // lg
  // const isExtraLargeScreen = useMediaQuery(
  //   "( min-width: 1280px) and (max-width: 1535px) "
  // ); // xl
  // const isExtraExtraLargeScreen = useMediaQuery("(min-width: 1536px)"); // 2xl
  // const itemsToShow = isExtraSmallScreen
  //   ? 3
  //   : isSmallScreen
  //   ? 4
  //   : isMediumScreen
  //   ? 6
  //   : isLargeScreen
  //   ? 5
  //   : isExtraLargeScreen
  //   ? 7
  //   : isExtraExtraLargeScreen
  //   ? 9
  //   : 9;
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };

  return (
    <>
      <div>
        <div className="mr-[260px] max-lg:mr-10">
          <div className="flex mb-8">
            <div
              // pagination={false}
              // itemsToShow={itemsToShow}
              // showArrows={false}
              className="flex justify-between mt-4 ml-72 max-lg:ml-0 "
            >
              {brandStoresData.map((items) => (
                <div>
                  <div className="w-[135px] text-center">
                    <div className="pl-3 pr-3">
                      <Link
                        to={`/store/${items.id}`}
                        className="relative block"
                      >
                        <div>
                          <span className="relative flex justify-center pt-1 pb-1 bg-white border rounded-lg">
                            <img
                              src={items.img}
                              alt="store-brand-img"
                              className="block "
                            />
                          </span>
                          <div className="text-center mt-2 mr-[-7px] ml-[-7px] overflow-hidden text-sm font-medium">
                            {items.title}
                          </div>
                          <div className="mr-[-7px] ml-[-7px]">
                            <span className="text-sm leading-5">
                              <span className="overflow-hidden overflow-ellipsis">
                                {items.deliveryTime}
                              </span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/" className="relative mt-4 text-center">
              <div className="pt-3">
                <div className="rounded-[50%] items-center justify-center flex w-12 h-12 bg-[#343538]">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="ArrayRightIcon"
                    aria-hidden="true"
                    color="systemGrayscale00"
                    class="e-1m01c8l"
                  >
                    <path d="M15.796 13.119H4v-2.24h11.796l-4.088-4.088 1.584-1.584 6.792 6.792-6.792 6.792-1.584-1.584z"></path>
                  </svg>
                </div>
              </div>
              <div className="mt-3 text-sm leading-4 w-14">
                Show all
                <span className="block text-xs leading-5 text-gray-400">
                  66 stores
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandStores;
