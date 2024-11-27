import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            dispatch(login(username));
            setError('');
            setSuccessMessage(`Logged in as ${username}, welcome back!`);
        } else {
            setSuccessMessage('');
            setError('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="container-login">
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
                <div className="form-group form-group-login">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <small className="text-danger">{error}</small>}
                {successMessage && <small className="text-success">{successMessage}</small>}
                <button type="submit" className="btn btn-primary btn-login">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;