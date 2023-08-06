import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProduct,
  fetchProductById,
} from "../store/slices/ProductSlice";
import { STATUS } from "../Constant/Status";

const Product = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct("ahmed"));
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const specificProduct = (id) => {
    dispatch(fetchProductById(id));
  };
  if (status === STATUS.LOADING) {
    return <div>LOADING...</div>;
  }
  return (
    <div>
      {data?.map((value, i) => {
        return (
          <div key={i} style={{ border: "2px solid black" }}>
            <h1>{value.category}</h1>
            <div style={{ width: "200px" }}>
              <img src={value.image} alt="clothes" width={"100%"} />
            </div>
            <button onClick={() => handleDelete(value.id)}>delete</button>
            <button onClick={() => specificProduct(value.id)}>
              specific product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
