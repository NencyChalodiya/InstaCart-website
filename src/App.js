import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import BrandStoreCategoryPage from "./pages/BrandStoreCategoryPages/BrandStoreCategoryPage";
import OffersCategoryPage from "./pages/OffersCategoryPage/OffersCategoryPage";
import YourOrders from "./pages/StoreSidebarPages/YourOrders";
import YourLists from "./pages/StoreSidebarPages/List/YourLists";
import YourRecipes from "./pages/StoreSidebarPages/YourRecipes";
import AccountSettings from "./pages/StoreSidebarPages/AccountSettings/AccountSettings";
import InstaCart_Plus from "./pages/StoreSidebarPages/InstaCart_Plus";
import Refferals from "./pages/StoreSidebarPages/Refferals";
import Gift_Cards from "./pages/StoreSidebarPages/Gift_Cards";
import Manage_promos from "./pages/StoreSidebarPages/Manage_promos";
import HelpCenter from "./pages/StoreSidebarPages/HelpCenter";
import ForgotPassword from "./pages/ForgotPassword";
import GetProductsBasedOnShops from "./components/HomePageComponents/ShopListing/GetProductsBasedOnShops";
import Addresses from "./pages/StoreSidebarPages/Address/Addresses";
import Checkout from "./pages/CheckoutPage/Checkout";
import SearchPageProducts from "./pages/SearchPageProducts/SearchPageProducts";
import ListProductDetails from "./pages/StoreSidebarPages/List/ListProductDetails";
import GiftImagesProducts from "./components/HomePageComponents/ShopListing/GiftImagesProducts/GiftImagesProducts";
import ShowAll from "./components/HomePageComponents/BrandStores/ShowAll";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [storeFilteredProducts, setStoreFilteredProducts] = useState([]);
  const [listDetails, setListDetails] = useState([]);

  const accessToken = localStorage.getItem("accessToken") ?? null;
  useEffect(() => {
    if (!location.pathname.includes("/change-password")) {
      if (!accessToken) {
        navigate("/");
      } else {
        navigate("/store");
      }
    }
  }, [accessToken]);
  return (
    <>
      <Routes>
        {accessToken ? (
          <>
            <Route path="/store" element={<Home />} />
            <Route
              path="/store/:storeId"
              element={<BrandStoreCategoryPage />}
            />
            <Route
              path="/store/:offerTitle/:offerId"
              element={<OffersCategoryPage />}
            />
            <Route path="/store/orders" element={<YourOrders />} />
            <Route path="/store/your-lists" element={<YourLists />} />
            <Route path="/store/your-lists/:storeId" element={<YourLists />} />
            <Route path="/store/recipes" element={<YourRecipes />} />
            <Route path="/store/account" element={<AccountSettings />} />
            <Route path="/store/instacart-plus" element={<InstaCart_Plus />} />
            <Route path="/store/referrals" element={<Refferals />} />
            <Route path="/store/gift-cards" element={<Gift_Cards />} />
            <Route path="/store/manage_promos" element={<Manage_promos />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route
              path="/store/:storeId/front"
              element={<GetProductsBasedOnShops />}
            />
            <Route
              path="/store/:storeId/front/collection/:categoryId"
              element={<GetProductsBasedOnShops />}
            />

            <Route
              path="/store/:storeId/front/collection/:categoryId/:subcategoryId"
              element={<GetProductsBasedOnShops />}
            />

            {/* <Route path="/products/:productId" element={<AddToCart />} /> */}
            {/* <Route path="/product/:productId" component={<AddToCart />} /> */}
            <Route path="/store/addresses" element={<Addresses />} />
            <Route path="/store/checkout/:storeId" element={<Checkout />} />
            <Route
              path="/store/search/:searchQuery"
              element={
                <SearchPageProducts
                  setStoreFilteredProducts={setStoreFilteredProducts}
                />
              }
            />
            <Route
              path="/store/search/:searchQuery/:storeId"
              element={
                <GetProductsBasedOnShops
                  storeFilteredProducts={storeFilteredProducts}
                />
              }
            />
            <Route
              path="/store/your-lists/listProductDetail/:listId"
              element={<ListProductDetails />}
            />
            <Route
              path="/store/hub/popular_gifts"
              element={<GiftImagesProducts />}
            />
            <Route path="/store/allStores" element={<ShowAll />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/change-password/:resettoken"
              element={<ForgotPassword />}
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
