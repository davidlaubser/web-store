import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';
import '../styles/CartPage.css';

const CartPage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [helpVisible, setHelpVisible] = useState(false);

    const formattedTotalAmount = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
    }).format(cart.totalAmount);

    const handleHelpClick = () => {
        setHelpVisible(true);
    };

    const closeHelpMessage = () => {
        setHelpVisible(false);
    };

    return (
        <div className="container">
            <h1>Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.items.map(item => {
                        const formattedPrice = new Intl.NumberFormat('en-ZA', {
                            style: 'currency',
                            currency: 'ZAR',
                        }).format(item.price);

                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{formattedPrice}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeItem(item))}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="shipment-method">
                <label htmlFor="shipment" className="shipment-label">Select Shipment Method: </label>
                <select id="shipment" className="shipment-select">
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                </select>
                <button className="btn btn-info btn-sm" onClick={handleHelpClick}>Help</button>
            </div>
            <div className="total-amount">
                <h2>Total Amount: {formattedTotalAmount}</h2>
            </div>
            {helpVisible && (
                <div className="help-modal">
                    <div className="help-content">
                        <h3>Shipment Options</h3>
                        <p><strong>Standard:</strong> Delivery within 5-7 business days. Cost-effective for non-urgent items.</p>
                        <p><strong>Express:</strong> Delivery within 1-2 business days. Suitable for urgent deliveries.</p>
                        <button className="btn btn-secondary btn-sm" onClick={closeHelpMessage}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
