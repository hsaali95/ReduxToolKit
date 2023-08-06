import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../Constant/Status";
import axios from "axios";

const productSlice = createSlice({
  name: "product",
  initialState: {
    status: STATUS.IDLE,
    data: [],
    error: "",
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { setProduct, setStatus, setError } = productSlice.actions;

// normal thunks
// name will be for use of parameter in api call
export const fetchProduct = (name) => {
  const fechProductThunk = async (dispatch, getState) => {
    // In Redux Toolkit, the getState function is typically used in
    // asynchronous thunk actions to access the current state of the Redux store
    // const a = getState();
    dispatch(setStatus(STATUS.LOADING));
    try {
      // agar parameters se data get karna ha to aese hoga
      // const res = await axios.get(`https://fakestoreapi.com/products?name=${name}`);

      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProduct(res.data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setStatus(STATUS.IDLE));
    }
  };
  return fechProductThunk;
};
export const fetchProductById = (id) => {
  const fetchProductByIdThunk = async (dispatch, getState) => {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      let { data } = getState().product;
      const updateRecord = data.filter((value) => value.id === res.data.id);
      dispatch(setProduct(updateRecord));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setStatus(STATUS.IDLE));
    }
  };
  return fetchProductByIdThunk;
};
export const deleteProduct = (id) => {
  const deleteProductThunk = async (dispatch, getState) => {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await axios.delete(`https://fakestoreapi.com/products/${id}`);
      let { data } = getState().product;
      const updateRecord = data.filter((value) => value.id !== res.data.id);
      dispatch(setProduct(updateRecord));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setStatus(STATUS.IDLE));
    }
  };
  return deleteProductThunk;
};
