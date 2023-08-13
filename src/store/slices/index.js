import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import AdminSlice from "./AdminSlice";
import ProductSlice from "./ProductSlice";
import ProductSliceAdvance from "./ProductSliceAdvance";

const store = configureStore({
  // it is called combine reducr
  reducer: {
    users: UserSlice,
    admin: AdminSlice,
    product: ProductSlice,
    productAdvance: ProductSliceAdvance,
  },
});

export default store;
