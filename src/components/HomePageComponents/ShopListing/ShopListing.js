// ShopListing.js
import React, { useEffect, useState } from "react";
import API from "../../../services/api";
import { useNavigate } from "react-router-dom";

const ShopListing = ({ selectedCategoryId }) => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  // const [productsWithImages, setProductsWithImages] = useState([]);

  useEffect(() => {
    const fetchShopsByCategory = async (categoryId) => {
      try {
        const response = await API.getShopsByCategory(categoryId); // Pass category ID directly
        setShops(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedCategoryId !== null) {
      // Ensure selectedCategoryId is a number before passing it to fetchShopsByCategory
      if (!isNaN(selectedCategoryId)) {
        fetchShopsByCategory(selectedCategoryId);
      }
    }
  }, [selectedCategoryId]);
  //console.log(shops);
  const handleShopClick = async (storeId) => {
    // try {
    //   const response = await API.getProductsBasedShops(shopId);
    //   const productsWithImages = response.products.map((product) => ({
    //     ...product,
    //     images: response.images[product.id] || [], // Get images for the current product
    //   }));
    //   setProductsWithImages(productsWithImages);
    // } catch (error) {
    //   console.log(error);
    // }
    navigate(`/store/${storeId}/front`);
  };

  return (
    <>
      <div className=" mx-72 max-lg:mx-40 max-md:mx-4 max-sm:mx-4 mt-44">
        <div>
          <div>
            <ul className="grid justify-center w-full grid-cols-3 gap-6 px-0 py-1 m-0 max-2xl:grid-cols-2 max-xl:grid-cols-1">
              {shops.map((shop) => (
                <li
                  key={shop.store_id}
                  onClick={() => handleShopClick(shop.store_id)}
                >
                  <div className="h-full">
                    <div className="relative flex flex-row items-center h-full p-3 border rounded-lg flex-nowrap">
                      <button className="relative flex items-center justify-start w-full h-full gap-3 m-0 opacity-100 cursor-pointer ">
                        <div className="flex max-w-full max-h-full mr-3">
                          <img
                            src={shop.image_url}
                            alt={shop.store_id}
                            className="box-border relative flex justify-center w-16 h-14 overflow-hidden border rounded-xl"
                          ></img>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-start">
                            <span className="block text-lg font-semibold leading-6">
                              {shop.store_name}
                            </span>
                          </div>
                          {/* <div className="flex items-center text-[#3E9A39] text-xs gap-1 font-semibold">
                          <span>
                            <MdElectricBolt />
                          </span>
                          <span>{store.deliveryTime}</span>
                        </div> */}

                          <div className="flex flex-wrap items-center">
                            <span>
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="#242529"
                                xmlns="http://www.w3.org/2000/svg"
                                color="systemGrayscale80"
                                class="e-2bhlo8"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20 3H4v2c.801 0 1.281.32 1.698.706L3 12v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h10v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8l-2.698-6.294C18.72 5.32 19.2 5 20 5zM7.319 7 6 10.077V15h3V9h6v6h3v-4.923L16.681 7z"
                                ></path>
                              </svg>
                            </span>
                            <div className="text-sm leading-4">
                              Pickup available
                            </div>
                            <span className="ml-1 text-xs leading-5">
                              7.4 mi
                            </span>
                          </div>
                          <ul className="flex flex-wrap gap-1 text-sm leading-4 list-none">
                            <li className="text-sm leading-4">organic</li>
                            <li className="text-sm leading-4">Groceries</li>
                            <li className="text-sm leading-4">Butcher shop</li>
                          </ul>
                          <ul className="flex flex-wrap gap-1 text-xs leading-4 list-none">
                            <li className="text-sm leading-4">
                              <span className="bg-yellow-400">
                                In-store prices
                              </span>
                            </li>
                            <li className="text-sm leading-4">
                              <span>In-store prices</span>
                            </li>
                          </ul>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
    // <div className="mt-40">
    //   <h2>Shops</h2>
    //   <ul>
    //     {shops.map((shop) => (
    //       <li key={shop.id}>
    //         {shop.title}
    //         <img src={shop.logo} alt="shop-list" />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default ShopListing;
