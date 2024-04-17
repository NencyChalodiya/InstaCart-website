import React from "react";
import { useParams } from "react-router-dom";
import { brandStoresData } from "../../../BrandStoreData/brandStoreData";
import { Link } from "react-router-dom";
const BrandStores = () => {
  const { id } = useParams();

  return (
    <>
      <div className="mt-44">
        <div className=" max-w-7xl">
          <div className="mb-8">
            <ul className="flex justify-between mx-52">
              {brandStoresData.map((items) => (
                <li>
                  <div className="w-[116px] text-center">
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
                </li>
              ))}
              <a href="/" className="text-center w-[116px] relative ml-4">
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandStores;
