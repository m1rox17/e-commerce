import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/Cart/cartSlice";
import wishlistReducer from "./redux/Wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
