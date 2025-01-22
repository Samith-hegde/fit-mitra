import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser({ username, password });
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Submit</button>
            </form>

            <p>Don't have an account? <a href="/register">Register</a></p>
        </>
    )
}

export default Login