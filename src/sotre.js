import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
