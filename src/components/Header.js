import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={`${process.env.PUBLIC_URL}/images/storeLogo.png`} alt="Apple Vault Logo" className="logo-image" />
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
          <li className="nav-item dropdown">
            <button className="btn nav-link dropdown-toggle" id="departmentDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Shop by Department
            </button>
            <ul className="dropdown-menu" aria-labelledby="departmentDropdown">
              <li><Link className="dropdown-item" to="/store/phones">Phones</Link></li>
              <li><Link className="dropdown-item" to="/store/laptops">Laptops</Link></li>
              <li><Link className="dropdown-item" to="/store/tablets">Tablets</Link></li>
              <li><Link className="dropdown-item" to="/store/accessories">Accessories</Link></li>
            </ul>
          </li>
        </ul>
        <div className="navbar-center">
          <SearchBar />
        </div>
        <ul className="navbar-nav ms-auto">
          {user.username ? (
            <>
              <li className="nav-item">
                <span className="navbar-text">Signed in as: {user.username}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleSignOut}>Sign Out</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart ({totalQuantity})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
