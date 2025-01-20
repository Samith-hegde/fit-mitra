import api from './api';

const getAllUsers = async () => {
    try {
        const response = await api.get('/users/getAllUsers');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const getUserById = async (id) => {
    try {
        const response = await api.get(`/users/getUserById/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const updateUser = async (user) => {
    try {
        const response = await api.put('/users/updateUserById', user);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteUser = async () => {
    try {
        const response = await api.delete('/users/deleteUser');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export { getAllUsers, getUserById, updateUser, deleteUser };