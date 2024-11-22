import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { products } from "./StorePageData";
import "../styles/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { department, id } = useParams();
  const product = products[department].find((product) => product.id === id);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(product));
  };

  const formattedPrice = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(product.price);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="col-6">
          <h1>{product.name}</h1>
          <p>{formattedPrice}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;