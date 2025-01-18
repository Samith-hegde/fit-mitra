import api from './api';

const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        const jwt = response.data.token;
        localStorage.setItem('jwt', jwt);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const register = async (credentials) => {
    try {
        const response = await api.post('/auth/register', credentials);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export { login, register };