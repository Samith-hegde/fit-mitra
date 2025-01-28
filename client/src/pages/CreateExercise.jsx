import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createExercise } from '../services/exerciseService';

function CreateExercise() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createExercise({ name, description, muscle_group: muscleGroup, is_custom: true });
            navigate('/exercises');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Create Exercise</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

                <label htmlFor="description">Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                <label htmlFor="muscleGroup">Muscle Group</label>
                <input type="text" value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)} required/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreateExercise

