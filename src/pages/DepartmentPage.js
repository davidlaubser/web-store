import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products } from './StorePageData';

const DepartmentPage = () => {
    const { department } = useParams();
    const filteredProducts = products.filter(product => product.department === department);

    return (
        <div className="container">
            <h1>{department.charAt(0).toUpperCase() + department.slice(1)}</h1>
            <ProductGrid products={filteredProducts} />
        </div>
    );
};

export default DepartmentPage;
