import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BrandStoreCategoryPage from "./pages/BrandStoreCategoryPages/BrandStoreCategoryPage";
import OffersCategoryPage from "./pages/OffersCategoryPage/OffersCategoryPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Home />} />
        <Route path="/store/:storeId" element={<BrandStoreCategoryPage />} />
        <Route path="/store/:offerTitle/:offerId" element={<OffersCategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
