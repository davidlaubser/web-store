import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${query}`);
    };

    return (
        <form className="d-flex search-bar" onSubmit={handleSearch}>
            <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
