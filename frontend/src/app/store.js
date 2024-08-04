import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import { fetchProducts } from "../features/productSlice";
import { productsApi } from "../features/productsAPI";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(fetchProducts());

export default store;
