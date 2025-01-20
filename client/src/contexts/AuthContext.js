import { React, createContext, useState, useEffect } from 'react';
import { login, register } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginUser = async (credentials) => {
        try {
            const response = await login(credentials);
            localStorage.setItem('jwt', response.token);
            setUser(response.user);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    const registerUser = async (credentials) => {
        try {
            const response = await register(credentials);
            localStorage.setItem('jwt', response.token);
            setUser(response.user);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    const logoutUser = () => {
        localStorage.removeItem('jwt');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, registerUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;