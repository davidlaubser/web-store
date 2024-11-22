import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from './StorePageData';

const StorePage = () => {
    return (
        <div className='container'>
            <h1>Store</h1>
            <ProductGrid products={products} />
        </div>
    );
};

export default StorePage;