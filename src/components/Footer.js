import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>© 2024 Apple Vault. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a> |
                    <a href="/terms-of-service" className="footer-link"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
