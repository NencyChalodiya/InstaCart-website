import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { MdElectricBolt } from "react-icons/md";

import { Pagination } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import ViewAllSvg from "../../assets/images/viewAll.svg";

import Navbar from "../../components/LandingPageComponents/Navbar";
import API from "../../services/api";

import "./Pagination.css";
import InfiniteScroll from "react-infinite-scroll-component";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../../components/atoms/Spinner";

const CustomLeftArrow = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="custom-arrow left"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <LeftOutlined
        style={{
          fontSize: "15px",
          color: isHovered ? "#fff" : "#000",
        }}
      />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="custom-arrow right"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <RightOutlined
        className="custom-right-icon"
        style={{
          fontSize: "15px",
          color: isHovered ? "#fff" : "#000",
        }}
      />
    </div>
  );
};

const SearchPageProducts = ({ setStoreFilteredProducts }) => {
  const [searchDetails, setSearchDetails] = useState({
    searchquery: "",
  });
  const [searchResponse, setSearchResponse] = useState(null);
  const [storeId, setStoreId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsStorePage, setProductsStorePage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 2;

  const navigate = useNavigate();
  const params = useParams();

  const searchapi = async (page, productsStorePage) => {
    if (!searchDetails.searchquery) {
      return;
    }

    try {
      setLoading(true);
      const queryParams = {
        query: searchDetails.searchquery,
        storePage: page,
        storeLimit: pageSize,
        productsStorePage: productsStorePage,
      };
      const response = await API.Search(queryParams);
      if (response.status === "success") {
        setSearchResponse(response.data);
        if (productsStorePage === 1) {
          setSearchResponse(response.data);
        } else {
          setSearchResponse((prev) => ({
            ...prev,
            matchingProducts: [
              ...prev.matchingProducts,
              ...response.data.matchingProducts,
            ],
          }));
        }
      } else {
        console.error("Search API error:", response.msg);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.searchQuery) {
      setSearchDetails({ searchquery: params.searchQuery });
    }
  }, [params.searchQuery]);

  useEffect(() => {
    if (searchDetails.searchquery) {
      setProductsStorePage(1);
      searchapi(currentPage, 1);
    }
  }, [searchDetails.searchquery, currentPage]);

  const fetchMoreData = () => {
    const nextPage = productsStorePage + 1;
    setProductsStorePage(nextPage);
    searchapi(currentPage, nextPage);
  };

  const searchInsideStore = async (storeId) => {
    setStoreId(storeId);
    try {
      let queryParam = {
        query: searchDetails.searchquery,
        storeId: storeId,
      };

      const response = await API.SearchInsideStore(queryParam);
      console.log(response);
      if (response.status === "success") {
        setStoreFilteredProducts(response.data);
        navigate(`/store/search/${searchDetails.searchquery}/${storeId}`);
      }
    } catch (error) {
      console.error("SearchInsideStore API error:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Navbar searchDetails={searchDetails.searchquery} />
      <div>
        {searchResponse ? (
          <>
            <div className="bg-white">
              <div className="max-w-7xl mx-auto mt-24">
                <div className="px-4 pb-5">
                  <div>
                    <ul className="grid justify-center w-full grid-cols-2 gap-6 px-0 py-8 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
                      {searchResponse.matchingStores.map((store) => (
                        <li key={store.store_id}>
                          <div className="h-full border rounded-xl">
                            <div className="relative flex flex-row items-center h-full p-3 flex-nowrap">
                              <a
                                href="/"
                                className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer"
                              >
                                <div className="flex max-w-full max-h-full mr-3">
                                  <img
                                    src={store.store_logo}
                                    alt={store.store_name}
                                    className="box-border relative flex justify-center w-16 h-12 overflow-hidden border rounded-xl"
                                  ></img>
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                  <span className="block text-base font-semibold leading-6">
                                    {store.store_name}
                                  </span>
                                  <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                                    <span>
                                      <MdElectricBolt />
                                    </span>
                                    <span>Delivery by 12:15</span>
                                  </div>

                                  <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                                    <li className="text-xs leading-4">
                                      organic
                                    </li>
                                    <li className="text-xs leading-4">
                                      Groceries
                                    </li>
                                    <li className="text-xs leading-4">
                                      Butcher shop
                                    </li>
                                  </ul>
                                  <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                                    <li className="text-xs leading-4">
                                      <span className="bg-yellow-400">
                                        In-store prices
                                      </span>
                                    </li>
                                    <li className="text-xs leading-4">
                                      <span>In-store prices</span>
                                    </li>
                                  </ul>
                                </div>
                                <div></div>
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={searchResponse.total_matching_stores}
                      onChange={handlePageChange}
                      itemRender={(page, type, originalElement) => {
                        if (type === "prev") {
                          return <a>Previous</a>;
                        }
                        if (type === "next") {
                          return <a>Next</a>;
                        }

                        return originalElement;
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold mt-2">
                      Showing results for "{searchDetails.searchquery}"
                    </h1>
                  </div>
                  {loading && productsStorePage == 1 ? (
                    <div className="text-center my-40">
                      <Spinner />
                    </div>
                  ) : (
                    <ul>
                      <div className="border-b">
                        {searchResponse.matchingProducts &&
                        searchResponse.matchingProducts.length > 0 ? (
                          <>
                            <InfiniteScroll
                              dataLength={
                                searchResponse.matchingProducts.length
                              }
                              next={fetchMoreData}
                              hasMore={
                                searchResponse.matchingProducts.length <
                                searchResponse.total_stores_with_matching_products
                              }
                              loader={
                                <div className="text-center mt-4 mb-10">
                                  <Spinner fontsize={20} />
                                </div>
                              }
                              scrollThreshold={0.5}
                              className="custom-infinite-scroll"
                            >
                              {searchResponse.matchingProducts.map(
                                (productStore) => (
                                  <div key={productStore.store_id}>
                                    {/* Store Details */}
                                    <div className="h-full">
                                      <div className="relative flex flex-row items-center h-full p-3 flex-nowrap">
                                        <a
                                          href="/"
                                          className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer"
                                        >
                                          <div className="flex max-w-full max-h-full mr-3">
                                            <img
                                              src={productStore.store_logo}
                                              alt={productStore.store_id}
                                              className="box-border relative flex justify-center w-16 h-12 overflow-hidden border rounded-xl"
                                            />
                                          </div>
                                          <div className="flex flex-col gap-[2px]">
                                            <span className="block text-base font-semibold leading-6">
                                              {productStore.store_name}
                                            </span>
                                            <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                                              <span>
                                                <MdElectricBolt />
                                              </span>
                                              <span>Delivery by 12:15</span>
                                            </div>

                                            {/* Additional store info */}
                                            <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                                              <li className="text-xs leading-4">
                                                organic
                                              </li>
                                              <li className="text-xs leading-4">
                                                Groceries
                                              </li>
                                              <li className="text-xs leading-4">
                                                Butcher shop
                                              </li>
                                            </ul>
                                            {/* In-store prices */}
                                            <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                                              <li className="text-xs leading-4">
                                                <span className="bg-yellow-400">
                                                  In-store prices
                                                </span>
                                              </li>
                                              <li className="text-xs leading-4">
                                                <span>In-store prices</span>
                                              </li>
                                            </ul>
                                          </div>
                                        </a>
                                      </div>
                                    </div>

                                    {/* Products */}
                                    <div className="border-b">
                                      <div className="h-full">
                                        <div className="carousel-container">
                                          <Carousel
                                            responsive={responsive}
                                            customLeftArrow={
                                              <CustomLeftArrow />
                                            }
                                            customRightArrow={
                                              <CustomRightArrow />
                                            }
                                          >
                                            {productStore.products.map(
                                              (product) => (
                                                <li
                                                  key={product.id}
                                                  className="relative align-top flex"
                                                >
                                                  <span className="relative">
                                                    <button className="relative">
                                                      <div className="flex relative">
                                                        <img
                                                          src={product.image}
                                                          alt={product.title}
                                                          className="w-[130px] h-[130px]"
                                                        />
                                                      </div>
                                                      <p className="mt-2 break-words text-left">
                                                        {product.title}
                                                      </p>
                                                    </button>
                                                  </span>
                                                </li>
                                              )
                                            )}
                                            <li
                                              key={`view-all-${productStore.store_id}`}
                                              className="rounded-[12px] bg-[#F6F7F8] w-[115px] h-[115px] hover:bg-gray-200 flex justify-center items-center"
                                            >
                                              <button
                                                className="flex h-full flex-col items-center justify-center cursor-pointer"
                                                onClick={() =>
                                                  searchInsideStore(
                                                    productStore.store_id
                                                  )
                                                }
                                              >
                                                <img
                                                  src={ViewAllSvg}
                                                  alt="viewAllSvg"
                                                />
                                                <span className="underline">
                                                  View All
                                                </span>
                                              </button>
                                            </li>
                                          </Carousel>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                            </InfiniteScroll>
                          </>
                        ) : (
                          <>No matching products found!</>
                        )}
                      </div>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>Store and Products not found</div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchPageProducts;
