import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem(product));
    };

    const formattedPrice = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
    }).format(product.price);

    return (
        <div className="card product-card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{formattedPrice}</p>
                <Link to={`/store/${product.department}/${product.id}`} className="btn btn-success view-product-btn">
                    View Product
                </Link>
                <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
