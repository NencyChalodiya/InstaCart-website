import React from "react";
import Header from "../components/HomePageComponents/Header/Header";
import BrandStores from "../components/HomePageComponents/BrandStores/BrandStores";
import Offers from "../components/HomePageComponents/Offers/Offers";
import StoreToHelpYouSave from "../components/HomePageComponents/StoresToHelpYouSave/StoreToHelpYouSave";
import StoreFooter from "../components/HomePageComponents/StoreFooter/StoreFooter";
const Home = () => {
  return (
    <>
      <Header />
      <BrandStores />
      <Offers />
      <StoreToHelpYouSave />
      <StoreFooter />
    </>
  );
};

export default Home;
