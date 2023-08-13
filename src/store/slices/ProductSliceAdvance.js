import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../Constant/Status";
import axios from "axios";

const productSliceAdvance = createSlice({
  name: "productSliceAdvance",
  initialState: {
    status: STATUS.IDLE,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder
      // 1st parameter action hota ha jo craete async khud generate karta ha
      .addCase(fetchProductAdvance.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProductAdvance.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProductAdvance.rejected, (state, action) => {
        state.error = action.payload;
        state.status = STATUS.ERROR;
      })
      .addCase(fetchProductByIdAdvance.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProductByIdAdvance.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProductByIdAdvance.rejected, (state, action) => {
        state.error = action.payload;
        state.status = STATUS.ERROR;
      });
  },
});

export default productSliceAdvance.reducer;

export const fetchProductAdvance = createAsyncThunk(
  "product/fetch",
  async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);
    return res;
  }
);
export const fetchProductByIdAdvance = createAsyncThunk(
  "productById/fetch",
  async (id) => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.data);
    return res;
  }
);
