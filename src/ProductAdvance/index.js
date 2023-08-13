import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../Constant/Status";
import {
  fetchProductAdvance,
  fetchProductByIdAdvance,
} from "../store/slices/ProductSliceAdvance";
import { type } from "@testing-library/user-event/dist/type";

const ProductAdvance = () => {
  const dispatch = useDispatch();
  const {
    data: product,
    status,
    error,
  } = useSelector((state) => state.productAdvance);
  useEffect(() => {
    console.log("productdetails", product);
  }, [product]);
  useEffect(() => {
    // dispatch(fetchProductAdvance("jano kese ho"));
    dispatch(fetchProductByIdAdvance(1));
  }, []);
  const specificProduct = (id) => {
    dispatch(fetchProductByIdAdvance(id));
  };

  if (status === STATUS.LOADING) {
    return <div>LOADING...</div>;
  }
  return (
    <div>
      {/* {!product.length > 1
        ? ""
        : product?.map((value, i) => {
            return (
              <div key={i} style={{ border: "2px solid black" }}>
                <h1>{value.category}</h1>
                <div style={{ width: "200px" }}>
                  <img src={value.image} alt="clothes" width={"100%"} />
                </div>
                <button onClick={() => specificProduct(value.id)}>
                  specific product
                </button>
              </div>
            );
          })} */}

      <h1>details here</h1>
      <div style={{ border: "2px solid black" }}>
        <h1>{product.category}</h1>
        <div style={{ width: "200px" }}>
          <img src={product.image} alt="clothes" width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default ProductAdvance;
