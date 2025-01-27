import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../services/userService';

function EditProfile() {
    const { user, updateUserState } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio);
    const [fitness_goals, setFitnessGoals] = useState(user.fitness_goals);
    const [height, setHeight] = useState(user.height);
    const [weight, setWeight] = useState(user.weight);
    const [date_of_birth, setDateOfBirth] = useState(user.date_of_birth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const id = user.id;
            await updateUser({ id, username, email, bio, fitness_goals, height, weight, date_of_birth });
            await updateUserState({ id, username, email, bio, fitness_goals, height, weight, date_of_birth });
            navigate('/profile');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br/>
                 
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br/>
                 
                <label htmlFor="bio">Bio</label>
                <input type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
                <br/>
                 
                <label htmlFor="fitness_goals">Fitness Goals</label>
                <input type="text" value={fitness_goals} onChange={(e) => setFitnessGoals(e.target.value)}/>
                <br/>
                 
                <label htmlFor="height">Height (in cm) </label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
                <br/>
                 
                <label htmlFor="weight">Weight (in kg) </label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                <br/>
                 
                <label htmlFor="date_of_birth">Date of Birth</label>
                <input type="date" value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                <br/>
                 
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EditProfile;