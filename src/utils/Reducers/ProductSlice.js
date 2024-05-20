import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const ProductSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    AddItem(state, action) {
      //console.log(action.payload);
      const CatgeoryIndex = state.items.findIndex(
        (item) => item.category_id === action?.payload?.category_id
      );
      //console.log("CatgeoryIndex", CatgeoryIndex);
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
    },

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
  },
});

export const { AddItem, RemoveItem, DeleteTotalItems, SetCategoryItems } =
  ProductSlice.actions;
export default ProductSlice.reducer;
