import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import { fetchProducts } from "../features/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
