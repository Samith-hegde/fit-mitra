import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [fitness_goals, setFitnessGoals] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    
    const { registerUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, password, email, bio, fitness_goals, height, weight, date_of_birth });
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1> Register </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br/>
                 
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
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

export default Register