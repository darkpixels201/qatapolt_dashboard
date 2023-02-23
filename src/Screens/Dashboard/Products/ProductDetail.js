import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productListArray from "../../../Components/ProductListArray";

const ProductDetail = () => {
  const { id } = useParams();
  console.log("UseparamID",id);

  const productList = useSelector((state) => state.productReducer);
  const { products, deleteProducts } = productList;
  console.log("ReducerID", products)
  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          {item.id == id ? (
            <>
              <h2>Name:{item.name}</h2>
              <h2>Price:{item.Price}</h2>
              <h2>Stock:{item.stock}</h2>
              <h2>Descripton:{item.des}</h2>
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
