import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img src="/images/storeLogo.png" alt="Apple Vault Logo" className="logo-image" />
        Apple Vault
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store">Store</Link>
          </li>
        </ul>
        <div className="navbar-center">
          <SearchBar />
        </div>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
