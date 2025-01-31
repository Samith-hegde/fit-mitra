import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createExercise, updateExercise } from '../services/exerciseService';
import { useLocation } from 'react-router-dom';

function CreateExercise() {
    const navigate = useNavigate();
    const location = useLocation();
    const exercise = location.state?.exercise || { name: '', description: '', muscle_group: '' };

    const [name, setName] = useState(exercise.name);
    const [description, setDescription] = useState(exercise.description);
    const [muscleGroup, setMuscleGroup] = useState(exercise.muscle_group);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (exercise.name) {
                await updateExercise({ id: exercise.id, name, description, muscle_group: muscleGroup });
            } else {
                await createExercise({ name, description, muscle_group: muscleGroup });
            }
            navigate('/exercises');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1> {exercise.name ? "Edit Exercise" : "Create Exercise"} </h1>
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

