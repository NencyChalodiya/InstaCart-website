import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BrandStoreCategoryPage from "./pages/BrandStoreCategoryPages/BrandStoreCategoryPage";
import OffersCategoryPage from "./pages/OffersCategoryPage/OffersCategoryPage";
import YourOrders from "./pages/StoreSidebarPages/YourOrders";
import YourLists from "./pages/StoreSidebarPages/YourLists";
import YourRecipes from "./pages/StoreSidebarPages/YourRecipes";
import AccountSettings from "./pages/StoreSidebarPages/AccountSettings/AccountSettings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Home />} />
        <Route path="/store/:storeId" element={<BrandStoreCategoryPage />} />
        <Route
          path="/store/:offerTitle/:offerId"
          element={<OffersCategoryPage />}
        />
        <Route path="/store/account/orders" element={<YourOrders />} />
        <Route path="/store/your-lists" element={<YourLists />} />
        <Route path="/store/recipes" element={<YourRecipes />} />
        <Route path="/store/account" element={<AccountSettings />} />
      </Routes>
    </>
  );
}

export default App;
