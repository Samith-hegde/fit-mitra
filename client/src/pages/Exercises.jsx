import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllExercises, createExercise } from '../services/exerciseService';

function Exercises() {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);
    const [filteredExercises, setFilteredExercises] = useState([]);
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('All');
    const [muscleGroups, setMuscleGroups] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const data = await getAllExercises();
                setExercises(data);
                setFilteredExercises(data);

                const uniqueMuscleGroups = [
                    'All',
                    ...new Set(data.map((exercise) => exercise.muscle_group))
                ];
                setMuscleGroups(uniqueMuscleGroups);
            } catch (error) {
                console.error(error);
            }
        }
        fetchExercises();
    }, []);

    const handleFilterChange = (e) => {
        const muscleGroup = e.target.value;
        setSelectedMuscleGroup(muscleGroup);

        if (muscleGroup === 'All') {
            setFilteredExercises(exercises);
        } else {
            setFilteredExercises(
                exercises.filter((exercise) => exercise.muscle_group === muscleGroup)
            );
        }
    };

    return (
        <>
            <h1>Exercises</h1>
            <label htmlFor="muscleGroupFilter">Filter by Muscle Group: </label>
            <select value={selectedMuscleGroup} onChange={handleFilterChange}>
                {muscleGroups.map((muscleGroup) => (
                    <option key={muscleGroup} value={muscleGroup}>
                        {muscleGroup}
                    </option>
                ))}
            </select>
            <ul>
                {filteredExercises.map((exercise) => (
                    <li key={exercise.id}>
                        <h3> Exercise: </h3> <h4>{exercise.name}</h4>
                        <h4> Description: </h4> <p>{exercise.description}</p>
                        <h4> Muscle Group: </h4> <p>{exercise.muscle_group}</p>
                    </li>
                ))}
            </ul>
            
            <button onClick={() => navigate('/exercises/create')}>Create Exercise</button>
            <button onClick={() => navigate('/')}>Go Back</button>
        </>
    )
}

export default Exercises;