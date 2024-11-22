import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Apple Vault</h5>
                        <p>Your one-stop shop for Apple products and accessories.</p>
                        <p> We are a team of Apple enthusiasts who aim to provide the best products and services to our customers.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><Link to="/" className="text-light">Home</Link></li>
                            <li><Link to="/store" className="text-light">Store</Link></li>
                            <li><Link to="/cart" className="text-light">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="mailto:support@applevault.com" className="text-light">support@applevault.com</a></li>
                            <li><a href="tel:+1234567890" className="text-light">+1 234 567 890</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 footer-style">
                © 2024 Apple Vault
            </div>
        </footer>
    );
};

export default Footer;
