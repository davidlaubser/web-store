import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username));
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='container-login'>
                <div className="form-group form-group-login">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-login">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
