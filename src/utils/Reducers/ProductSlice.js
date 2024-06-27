import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  // newCartItems: {},
};

const ProductSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    AddItem(state, action) {
      console.log("action.payload", action.payload.selectedQty);
      const CatgeoryIndex = state.items.findIndex(
        (item) => item.category_id === action?.payload?.category_id
      );
      //console.log("CatgeoryIndex", CatgeoryIndex);
      const subCategoryIndex = state.items[
        CatgeoryIndex
      ].subcategories.findIndex(
        (item) => item.subcategory_id === action?.payload?.subcategory_id
      );

      const itemIndex = state.items[CatgeoryIndex].subcategories[
        subCategoryIndex
      ].products.findIndex((item) => item.id === action?.payload?.id);

      if (itemIndex !== -1 && CatgeoryIndex !== -1 && subCategoryIndex !== -1) {
        if (action.payload.selectedQty != undefined) {
          state.items[CatgeoryIndex].subcategories[subCategoryIndex].products[
            itemIndex
          ].qty = action.payload.selectedQty;
        } else {
          if (
            state?.items[CatgeoryIndex]?.subcategories[subCategoryIndex]
              ?.products[itemIndex]?.qty
          ) {
            state.items[CatgeoryIndex].subcategories[subCategoryIndex].products[
              itemIndex
            ].qty += 1;
          } else {
            state.items[CatgeoryIndex].subcategories[subCategoryIndex].products[
              itemIndex
            ].qty = 1;
          }
        }
      }
    },

    // AddNewItem(state, action) {
    //   const { storeId, product } = action.payload;
    //   const storeIndex = `${storeId}-${product.id}`;
    //   console.log("Adding new item:", product);
    //   console.log("Store Index:", storeIndex);

    //   if (!state.newCartItems[storeIndex]) {
    //     state.newCartItems[storeIndex] = { product: product, qty: 1 };
    //   } else {
    //     state.newCartItems[storeIndex].qty += 1;
    //   }

    //   console.log(
    //     "State after adding new item:",
    //     JSON.parse(JSON.stringify(state.newCartItems))
    //   );
    // },

    RemoveItem(state, action) {
      const CatgeoryIndex = state.items.findIndex(
        (item) => item.category_id === action?.payload?.category_id
      );
      const subCategoryIndex = state.items[
        CatgeoryIndex
      ].subcategories.findIndex(
        (item) => item.subcategory_id === action?.payload?.subcategory_id
      );
      const itemIndex = state.items[CatgeoryIndex].subcategories[
        subCategoryIndex
      ].products.findIndex((item) => item.id === action?.payload?.id);
      if (itemIndex !== -1 && CatgeoryIndex !== -1 && subCategoryIndex !== -1) {
        if (
          state?.items[CatgeoryIndex]?.subcategories[subCategoryIndex]
            ?.products[itemIndex]?.qty > 1
        ) {
          state.items[CatgeoryIndex].subcategories[subCategoryIndex].products[
            itemIndex
          ].qty -= 1;
        } else {
          delete state.items[CatgeoryIndex].subcategories[subCategoryIndex]
            .products[itemIndex].qty;
        }
      }
    },

    DeleteTotalItems(state, action) {
      const CatgeoryIndex = state.items.findIndex(
        (item) => item.category_id === action?.payload?.category_id
      );

      const subCategoryIndex = state.items[
        CatgeoryIndex
      ].subcategories.findIndex(
        (item) => item.subcategory_id === action?.payload?.subcategory_id
      );
      console.log("subCategoryIndex", subCategoryIndex);

      const itemIndex = state.items[CatgeoryIndex].subcategories[
        subCategoryIndex
      ].products.findIndex((item) => item.id === action?.payload?.id);

      if (itemIndex !== -1 && CatgeoryIndex !== -1 && subCategoryIndex !== -1) {
        delete state.items[CatgeoryIndex].subcategories[subCategoryIndex]
          .products[itemIndex].qty;
      }
    },

    SetCategoryItems(state, action) {
      // console.log("action", action.payload);
      state.items = action.payload || [];
    },
    updateCartItem(state, action) {
      state.cartItems = action.payload;
      console.log("updateCartItem", action.payload);
    },
  },
});

export const {
  AddItem,
  AddNewItem,
  RemoveItem,
  DeleteTotalItems,
  SetCategoryItems,
  updateCartItem,
} = ProductSlice.actions;
export default ProductSlice.reducer;
