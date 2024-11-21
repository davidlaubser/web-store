import React from 'react';

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{`Price: $${product.price.toFixed(2)}`}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
