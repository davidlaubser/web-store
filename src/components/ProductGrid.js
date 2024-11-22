import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
