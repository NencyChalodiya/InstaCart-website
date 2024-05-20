import React, { useEffect, useState } from "react";
import HeaderProducts from "../../components/HomePageComponents/HeaderOfProducts/HeaderProducts";
import { MdElectricBolt } from "react-icons/md";
import Navbar from "../../components/LandingPageComponents/Navbar";
import API from "../../services/api";
import { useParams } from "react-router-dom";
import GetProductsBasedOnShops from "../../components/HomePageComponents/ShopListing/GetProductsBasedOnShops";
import { useNavigate } from "react-router-dom";

const SearchPageProducts = ({ setStoreFilteredProducts }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchDetails, setSearchDetails] = useState({
    searchquery: "",
  });
  const [searchResponse, setSearchResponse] = useState(null);
  const [filter, setFilter] = useState({});
  const [storeId, setStoreId] = useState(null);

  const searchapi = async (filter) => {
    if (!searchDetails.searchquery) {
      return; // Prevent API call if search query is empty or undefined
    }

    try {
      //console.log("search", searchDetails.searchquery);
      const queryParams = {
        query: searchDetails.searchquery,
      };
      const response = await API.Search(queryParams);
      //console.log(response);
      if (response.status === "success") {
        setSearchResponse(response.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.searchQuery) {
      setSearchDetails({ searchquery: params.searchQuery });
    }
  }, [params.searchQuery]);

  useEffect(() => {
    if (searchDetails.searchquery) {
      searchapi(filter);
    }
  }, [searchDetails.searchquery, filter]);
  //console.log("respinseSearch", searchResponse);

  const searchInsideStore = async (storeId) => {
    setStoreId(storeId);
    try {
      // console.log("storeId", searchDetails.storeId);
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

  return (
    <>
      <Navbar searchDetails={searchDetails.searchquery} />
      <div>
        {searchResponse ? (
          <>
            <div className="bg-white">
              <div className="max-w-7xl mx-auto mt-24">
                <div className="px-4 pb-5">
                  <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-8 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
                    {searchResponse.matchingStores.map((store) => (
                      <li key={store.store_id}>
                        <div className="h-full">
                          <div className="relative flex flex-row items-center h-full p-3  flex-nowrap">
                            <a
                              href="/"
                              className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer "
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
                                  <li className="text-xs leading-4">organic</li>
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
                  <hr />
                  <div>
                    <h1 className="text-2xl font-semibold mt-2">
                      Showing results for "{searchDetails.searchquery}"
                    </h1>
                  </div>
                  <ul>
                    <div className="border-b">
                      <div className="h-full">
                        <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-8 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
                          {searchResponse.matchingProducts.map(
                            (productStore) => (
                              <li key={productStore.store_id}>
                                <div className="h-full">
                                  <div className="relative flex flex-row items-center h-full p-3 flex-nowrap">
                                    <a
                                      href="/"
                                      className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer "
                                    >
                                      <div className="flex max-w-full max-h-full mr-3">
                                        <img
                                          src={productStore.store_logo}
                                          alt={productStore.store_id}
                                          className="box-border relative flex justify-center w-16 h-12 overflow-hidden border rounded-xl"
                                        ></img>
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
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <div className="border-b">
                          <div className="h-full ">
                            <div className="flex relative">
                              <div></div>
                              <div className="w-full">
                                <ul className="grid grid-cols-6 gap-4">
                                  {searchResponse.matchingProducts.map(
                                    (store) =>
                                      store.products.map((product) => (
                                        <li
                                          key={product.id}
                                          className="relative align-top"
                                          style={{
                                            flex: "0 1 calc(20% - 1rem)",
                                          }}
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
                                      ))
                                  )}
                                </ul>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b">
                      <div className="h-full ">
                        <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-8 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
                          {searchResponse.matchingProducts.map(
                            (productStore) => (
                              <li key={productStore.store_id}>
                                <div className="h-full">
                                  <div className="relative flex flex-row items-center h-full p-3 flex-nowrap">
                                    <a
                                      href="/"
                                      className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer "
                                    >
                                      <div className="flex max-w-full max-h-full mr-3">
                                        <img
                                          src={productStore.store_logo}
                                          alt={productStore.store_id}
                                          className="box-border relative flex justify-center w-16 h-12 overflow-hidden border rounded-xl"
                                        ></img>
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
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <div className="border-b">
                          <div className="h-full">
                            <div className="flex relative">
                              <div></div>
                              <div className="w-full">
                                {/* <ul className="grid grid-cols-6 gap-4">
                                  {searchResponse.matchingProducts.map(
                                    (store) =>
                                      store.products.map((product) => (
                                        <li
                                          key={product.id}
                                          className="relative align-top"
                                          style={{
                                            flex: "0 1 calc(20% - 1rem)",
                                          }}
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

                                      ))
                                      
                                  )

                                  }
                                 
                                  <li className="rounded-[12px] bg-[#F6F7F8] w-[115px] h-[115px] hover:bg-gray-200">
                                    <button
                                      className="flex h-full flex-col items-center justify-center cursor-pointer"
                                      onClick={() =>
                                        searchInsideStore(store.store_id)
                                      }
                                    >
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#343538"
                                        xmlns="http://www.w3.org/2000/svg"
                                        size="24"
                                        aria-hidden="true"
                                      >
                                        <path d="M15.796 13.119H4v-2.24h11.796l-4.088-4.088 1.584-1.584 6.792 6.792-6.792 6.792-1.584-1.584z"></path>
                                      </svg>
                                      <span className="underline">
                                        View All
                                      </span>
                                    </button>
                                  </li>
                                </ul> */}
                                <ul className="grid grid-cols-6 gap-4">
                                  {searchResponse.matchingProducts.map(
                                    (store) =>
                                      store.products.map((product) => (
                                        <li
                                          key={product.id}
                                          className="relative align-top"
                                          style={{
                                            flex: "0 1 calc(20% - 1rem)",
                                          }}
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
                                      ))
                                  )}

                                  {searchResponse.matchingProducts.map(
                                    (store) => (
                                      <li
                                        key={`view-all-${store.store_id}`}
                                        className="rounded-[12px] bg-[#F6F7F8] w-[115px] h-[115px] hover:bg-gray-200 flex justify-center items-center"
                                      >
                                        {/* {console.log("store", store.store_id)} */}
                                        <button
                                          className="flex h-full flex-col items-center justify-center cursor-pointer"
                                          onClick={() =>
                                            searchInsideStore(store.store_id)
                                          }
                                        >
                                          <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="#343538"
                                            xmlns="http://www.w3.org/2000/svg"
                                            size="24"
                                            aria-hidden="true"
                                          >
                                            <path d="M15.796 13.119H4v-2.24h11.796l-4.088-4.088 1.584-1.584 6.792 6.792-6.792 6.792-1.584-1.584z"></path>
                                          </svg>
                                          <span className="underline">
                                            View All
                                          </span>
                                        </button>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
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
