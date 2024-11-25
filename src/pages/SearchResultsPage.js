import React from "react";
import { useLocation } from "react-router-dom";
import { products } from "./StorePageData";
import ProductGrid from "../components/ProductGrid";

const SearchResultsPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Search Results for: "{query}"</h1>
            {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <div>No products found</div>
            )}
        </div>
    );
};

export default SearchResultsPage;