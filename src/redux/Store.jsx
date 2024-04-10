import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
