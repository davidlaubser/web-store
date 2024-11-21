import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <Link to="/" className="navbar-brand-link">Apple Vault</Link>
      </div>
      <div className="navbar-center">
        <form className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
          />
          <button type="submit" className="btn btn-outline-success">Search</button>
        </form>
      </div>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
