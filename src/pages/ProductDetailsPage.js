import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { products } from "./StorePageData";
import "../styles/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const formattedPrice = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(product.price);

  return (
    <div className="container product-details">
      <div className="row">
        <div className="col-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <div className="product-detail-container">
            <h1>{product.name}</h1>
          </div>
          <div className="product-detail-container">
            <p className="lead">{formattedPrice}</p>
          </div>
          <div className="product-detail-container">
            <p>{product.description}</p>
          </div>
          <div className="product-detail-container">
            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;