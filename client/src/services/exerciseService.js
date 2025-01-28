import api from './api';

const getAllExercises = async () => {
    try {
        const response = await api.get('/exercises/getAllExercises');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const createExercise = async (exercise) => {
    try {
        const response = await api.post('/exercises/createExercise', exercise);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const updateExercise = async (exercise) => {
    try {
        const response = await api.put('/exercises/updateExercise', exercise);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteExercise = async (id) => {
    try {
        const response = await api.delete(`/exercises/deleteExercise/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export { getAllExercises, createExercise, updateExercise, deleteExercise };