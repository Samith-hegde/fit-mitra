import api from './api';

/*
router.get('/getAllWorkouts', getAllWorkouts);
router.get('/getWorkout/:id', getWorkout);
router.post('/createWorkout', createWorkout);
router.put('/templateWorkout/:id', templateWorkout);
router.put('/updateWorkout/:id', updateWorkout);
router.delete('/deleteWorkout/:id', deleteWorkout);
*/

const getAllWorkouts = async () => {
    try {
        const response = await api.get('/workouts/getAllWorkouts');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const getWorkout = async (id) => {
    try {
        const response = await api.get(`/workouts/getWorkout/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const createWorkout = async (workout) => {
    try {
        const response = await api.post('/workouts/createWorkout', workout);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const templateWorkout = async (id) => {
    try {
        const response = await api.put(`/workouts/templateWorkout/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const updateWorkout = async (id, workout) => {
    try {
        const response = await api.put(`/workouts/updateWorkout/${id}`, workout);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteWorkout = async (id) => {
    try {
        const response = await api.delete(`/workouts/deleteWorkout/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export { getAllWorkouts, getWorkout, createWorkout, templateWorkout, updateWorkout, deleteWorkout };