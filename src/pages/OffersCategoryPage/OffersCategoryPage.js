import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { offers } from "../../data/offers";
import ItemsCategory from "../../components/ItemsCategory";
import HeaderProducts from "../../components/HomePageComponents/HeaderOfProducts/HeaderProducts";
import AddToCart from "../AddToCart/AddToCart";

import ArrowSvg from "../../assets/images/arrow.svg";
import TickSvg from "../../assets/images/tick.svg";
import ShopIconSvg from "../../assets/images/shopIcon.svg";
import BuySvg from "../../assets/images/buyAgain.svg";
import ListIconSvg from "../../assets/images/listIcon.svg";

const OffersCategoryPage = () => {
  const [addToCartModal, setaddToCartModal] = useState(false);
  const [itemsAdd, setItemsAdd] = useState(null);

  const { Items } = useSelector((state) => state);
  console.log("Items.items", Items.items);
  const recipes = [
    "Recipes",
    "Snacks & Candy",
    "Meat & Seafood",
    "Produce",
    "Beverages",
    "Dairy & Eggs",
    "Frozen",
    "Wine",
    "Prepared Foods",
    "Bakery",
    "Household",
    "Deli",
    "Beer & Cider",
    "Liquor",
    "Canned Goods & Soups",
    "Floral",
    "Personal Care",
    "BreakFast",
    "Pets",
    "Dry Goods & Pasta",
  ];
  const [brandOfferLogo, setbrandOfferLogo] = useState(null);
  const params = useParams();

  useEffect(() => {
    offers.map((o) => {
      if (o.id == params.offerId) {
        setbrandOfferLogo(o);
      }
    });
  }, [params]);

  const openAddtoCartModal = (category) => {
    setaddToCartModal(true);
    setItemsAdd(category);
  };

  return (
    <>
      {/* <HeaderAddToCart /> */}
      <HeaderProducts />
      <div className="h-full bg-white">
        <div
          className="fixed z-10 w-64 overflow-y-auto bg-white border-r-2 top-20"
          style={{ height: `calc(100% - 80px)` }}
        >
          <div className="sticky bg-white z-1 will-change-transform backdrop-blur-sm">
            <div className="flex flex-col items-center px-1 pt-6 pb-4 text-center flex-nowrap">
              {brandOfferLogo ? (
                <div className="relative">
                  <a
                    href="/"
                    className="flex flex-col items-center no-underline"
                  >
                    <img
                      src={brandOfferLogo.brandLogo}
                      className="w-auto h-20 border-2 rounded-full aspect-square"
                    />
                    <h2 className="mt-1 text-xl leading-5">
                      {brandOfferLogo.brandStoreOfferTitle}
                    </h2>
                  </a>
                </div>
              ) : (
                <div>Loading...</div>
              )}

              <a
                href="/"
                className="relative flex items-center mt-1 text-sm leading-4 text-gray-400"
              >
                View pricing policy
                <img src={ArrowSvg} alt="arrowSvg" />
              </a>
              <button>
                <div className="flex items-center mt-1 cursor-pointer">
                  <img src={TickSvg} alt="tickSvg" />
                  <p className="text-sm leading-4 text-[#3C84CA]">
                    100% satisfaction guarantee
                  </p>
                  <img src={ArrowSvg} alt="arrowSvg" />
                </div>
              </button>
            </div>
          </div>
          <hr />
          <ul className="w-full px-3 py-4 list-none">
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <img src={ShopIconSvg} alt="shop-icon-svg" />
                </span>
                <span className="pt-2 pb-2 ml-2">Shop</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <img src={BuySvg} alt="buy-it-again" />
                </span>
                <span className="pt-2 pb-2 ml-2">Buy it again</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <img src={ListIconSvg} alt="list-icon-svg" />
                </span>
                <span className="pt-2 pb-2 ml-2">Lists</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="px-3 pt-4 pb-3">
            {recipes.map((recipe) => (
              <li>
                <a
                  href="/"
                  className="box-border relative flex items-center w-full pb-4 pl-3 pr-3 text-sm leading-5 text-gray-700 rounded-lg cursor-pointer flex-nowrap "
                >
                  <span>{recipe}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-64 ">
          <div className="h-14"></div>

          <div className="w-full py-6 ">
            <div className="w-full px-10 mb-6 ">
              <div className="flex items-center justify-between mt-6 ">
                <a href="/">
                  <img
                    src="https://display.instacart.com/cdn-cgi/image/dpr=1,q=50,sharpen=1,f=auto,animate=false,metadata=copyright/public/bf934b9d-9bcc-460c-af85-4a2833184a73-1.jpg"
                    className="flex mr-2 rounded-xl"
                  />
                </a>
              </div>
              <div className="box-border relative p-4 mt-10 mb-6 border-2 rounded-xl">
                <a
                  href="/"
                  className="flex flex-row justify-between mb-4 flex-nowrap"
                >
                  <div className="flex justify-start">
                    <img
                      src="https://display.instacart.com/cdn-cgi/image/dpr=1,q=50,sharpen=0,f=auto,animate=false,metadata=copyright,/public/1e809001-2bcf-40da-9d5f-451c5b7f50d0-1.jpg"
                      alt="cupcake-img"
                      className="mr-2 border-2 rounded-full h-11 w-11"
                    />
                    <div className="flex flex-col justify-around flex-nowrap">
                      <h2 className="text-2xl font-bold leading-6">
                        Love is Wine
                      </h2>
                      <div className="  text-sm leading-4 mt-[2px] ">
                        <div>
                          <span>Spo</span>
                          <span style={{ display: "inline-block" }}>
                            nsored
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex flex-row items-center justify-end ml-1 flex-nowrap">
                    <span className="mr-2 text-base leading-4 ">View More</span>
                  </div> */}
                </a>

                <div className="flex flex-row flex-nowrap">
                  <div className="w-auto">
                    <div className="rounded-xl">
                      <div className="relative flex justify-center">
                        <button className="relative cursor-pointer rounded-xl">
                          <img
                            src="https://display.instacart.com/cdn-cgi/image/dpr=1,q=60,sharpen=0,f=auto,animate=false,metadata=copyright,/public/782af1e1-8b1a-4402-b3e5-8c87bfcf437f-1.png"
                            alt="wine-img"
                            className="w-full mb-10 h-72 rounded-xl"
                          />
                        </button>
                        <div className="absolute flex items-center justify-end right-3 top-3"></div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-full overflow-hidden"></div>
                </div>
              </div>
              <div class="w-full py-6">
                <div class="w-full px-8 mb-6">
                  <div class="flex items-center justify-between mt-4">
                    <div>
                      <h2 class="flex mr-2">
                        <div class="text-3xl font-bold leading-5">
                          Best Sellers
                        </div>
                      </h2>
                    </div>
                    <div class="flex items-center justify-center align-baseline">
                      <div class="flex items-center justify-center">
                        {/* <button class="flex w-full h-10 text-green-600 rounded-xl">
                          <span class="flex items-center gap-1 mt-2 ml-2 mr-2 overflow-hidden text-sm leading-5 text-ellipsis">
                            View all (80+)
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="#242529"
                              xmlns="http://www.w3.org/2000/svg"
                              color="systemGrayscale80"
                              size="14"
                              class="e-jyj61s"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                              ></path>
                            </svg>
                          </span>
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="relative flex flex-row">
                      <div class="w-full">
                        <ul class="w-full h-full min-h-[304px] grid grid-cols-7 gap-2 justify-between mt-2 max-2xl:grid-cols-5 max-lg:grid-cols-3 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1">
                          {Items.items.map((category) => (
                            <ItemsCategory
                              category={category}
                              setCartHandler={() =>
                                openAddtoCartModal(category)
                              }
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddToCart
        addToCartModal={addToCartModal}
        onBackClick={() => setaddToCartModal(false)}
        itemsAdd={itemsAdd}
      />
    </>
  );
};

export default OffersCategoryPage;
