import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Drawer } from "antd";

const HeaderTotalCartItems = ({
  HeaderTotalItemsDrawer,
  onCancel,
  cartItems,
}) => {
  const navigate = useNavigate();
  const storedShopsData = JSON.parse(localStorage.getItem("shopsData"));

  const uniqueStoreIds = [...new Set(cartItems?.map((item) => item.storeId))];
  // console.log("shopData", uniqueStoreIds);

  const filteredShopData = storedShopsData?.filter((store) =>
    uniqueStoreIds.includes(`${store.store_id}`)
  );
  const getProductsByStoreId = (storeId) => {
    return cartItems.filter((product) => product.storeId == storeId);
  };
  const matchingProducts = (id) => {
    let image = [];
    const filteredProducts = getProductsByStoreId(id);
    filteredProducts.forEach((ele) => {
      image.push(ele.image);
    });

    return image;
  };

  const handleOnClick = (storeId) => {
    navigate(`/store/${storeId}/front`);
  };

  return (
    <Drawer
      title={<div className="text-center">Carts</div>}
      open={HeaderTotalItemsDrawer}
      onClose={onCancel}
      width={520}
    >
      {filteredShopData?.map((shop) => (
        <>
          <div className="m-2">
            <div className="rounded-[12px] shadow-md">
              <div className="flex p-3">
                <div className="flex mr-3 max-w-full max-h-full rounded-[8px]">
                  <img
                    src={shop?.image_url}
                    alt="shop-image"
                    className="inline-block max-w-full relative rounded-[50%] shadow-sm h-[44px] border"
                  />
                </div>
                <div className="block">
                  <h2>{shop?.store_name}</h2>
                  <span>Personal cart</span>
                </div>
              </div>
              <div className="mx-5 mb-3">
                <div>
                  <ul className="list-none flex min-h-[36px]">
                    {matchingProducts(shop?.store_id).map((img) => (
                      <li className="inline-block">
                        <img
                          src={img}
                          alt="products-img"
                          className="inline-block w-[36px] h-[36px]"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-3">
                <button
                  className="px-4 cursor-pointer rounded-[27px] h-[54px] w-full bg-[#277D0F]"
                  onClick={() => handleOnClick(shop.store_id)}
                >
                  <span className="mx-2 block text-white text-xl">
                    Continue Shopping
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </Drawer>
  );
};

export default HeaderTotalCartItems;
