import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import AdminSlice from "./AdminSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  // it is called combine reducr
  reducer: {
    users: UserSlice,
    admin: AdminSlice,
    product: ProductSlice,
  },
});

export default store;
