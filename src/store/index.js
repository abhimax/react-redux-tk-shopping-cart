import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});
export default store;
