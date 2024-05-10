import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/LandingPageComponents/Navbar";
import { offers } from "../../data/offers";
import { offersCategory } from "../../data/offers";
import ItemsCategory from "../../components/ItemsCategory";
//import HeaderAddToCart from "../../components/HeaderAddToCart";
import HeaderProducts from "../../components/HomePageComponents/HeaderOfProducts/HeaderProducts";
import { useSelector } from "react-redux";
import AddToCart from "../AddToCart/AddToCart";
const OffersCategoryPage = () => {
  const [addToCartModal, setaddToCartModal] = useState(false);
  const [itemsAdd, setItemsAdd] = useState(null);

  const { Items } = useSelector((state) => state);
  //console.log(Items.items);
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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#C7C8CD"
                  xmlns="http://www.w3.org/2000/svg"
                  color="systemGrayscale30"
                  size="12"
                  class="e-ozd7xs"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                  ></path>
                </svg>
              </a>
              <button>
                <div className="flex items-center mt-1 cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#2B78C6"
                    xmlns="http://www.w3.org/2000/svg"
                    size="16"
                    color="brandHighlightRegular"
                    class="e-15ro776"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.534 4.201 12 2 9.466 4.201 6.122 3.91l-.756 3.27-2.877 1.73L3.8 12l-1.31 3.09 2.877 1.73.756 3.27 3.344-.291L12 22l2.534-2.201 3.344.291.756-3.27 2.876-1.73L20.2 12l1.31-3.09-2.876-1.73-.756-3.27zM11.1 15.604l5.847-5.858-1.416-1.412-4.474 4.482-2.373-2.234-1.37 1.456z"
                    ></path>
                  </svg>
                  <p className="text-sm leading-4 text-[#3C84CA]">
                    100% satisfaction guarantee
                  </p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="12"
                    data-testid="chevron-cta"
                    class="e-1hchw5q"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                    ></path>
                  </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-1bvo66g"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 3H6l-4 8h2v10h5v-7h6v7h5V11h2zM8 7h8v3H8z"
                    ></path>
                  </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M7.631 18.702a8 8 0 0 1-3.149-3.966l1.88-.684a6 6 0 1 0 1.395-6.295L10 10H4V4l2.343 2.343a8 8 0 1 1 1.288 12.359"></path>
                  </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M10 6h10v2H10zM7 11H4v2h3zM20 11H10v2h10zM10 16h10v2H10zM7 16H4v2h3zM7 6H4v2h3z"></path>
                  </svg>
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

                  <div className="flex flex-row items-center justify-end ml-1 flex-nowrap">
                    <span className="mr-2 text-base leading-4 ">View More</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#343538"
                      xmlns="http://www.w3.org/2000/svg"
                      size="20"
                      color="systemGrayscale70"
                      aria-hidden="true"
                    >
                      <path d="M15.796 13.119H4v-2.24h11.796l-4.088-4.088 1.584-1.584 6.792 6.792-6.792 6.792-1.584-1.584z"></path>
                    </svg>
                  </div>
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

                  <div className="relative h-full overflow-hidden">
                    {/* <ul className="flex flex-row w-full h-full">
                      {offersCategory.map((category) => (
                        <ItemsCategory category={category} />
                      ))}
                    </ul> */}
                  </div>
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
                        <button class="flex w-full h-10 text-green-600 rounded-xl">
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
                        </button>
                      </div>
                      <div class="flex items-center ml-4 mr-2 min-h-20">
                        <div class="rounded-3xl">
                          <button class="relative flex items-center justify-center w-10 h-10 mr-2 text-gray-600 bg-gray-400 rounded-3xl">
                            <span class="flex overflow-hidden text-ellipsis">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="#C7C8CD"
                                xmlns="http://www.w3.org/2000/svg"
                                color="systemGrayscale30"
                                class="e-1xkhv85"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="m11.48 11.999 4.208-4.208-1.584-1.584-5.792 5.792 5.792 5.792 1.584-1.584z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="rounded-3xl">
                          <button class="relative flex items-center justify-center w-10 h-10 mr-2 text-gray-600 bg-gray-400 rounded-3xl">
                            <span class="flex overflow-hidden text-ellipsis">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="#343538"
                                xmlns="http://www.w3.org/2000/svg"
                                color="systemGrayscale70"
                                class="e-1xkhv85"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
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
