import React, { useState, useEffect } from 'react';
import { getAllWorkouts, templateWorkout } from '../services/workoutService';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('pastWorkouts');

    useEffect(() => {
        const fetchWorkoutsData = async () => {
            try {
                const workoutsData = await getAllWorkouts();
                setWorkouts(workoutsData);
                const templatedWorkouts = workoutsData.filter(workout => workout.isTemplate);
                setTemplates(templatedWorkouts);
            } catch (error) {
                console.error(error);
            }
        }

        fetchWorkoutsData();
    }, []);

    useEffect(() => {
        if (workouts.length > 0) {
            setLoading(false);
        }
    }, [workouts]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const startWorkout = (workout) => {
        console.log(workout);
        // Redirect to workout page
    }

    return (
        <div>
            <h1> Workouts </h1>
            <button onClick={() => startWorkout()}> Start a New Workout </button>
            
            <div>
                <button onClick={() => handleTabClick('pastWorkouts')}> Past Workouts </button>
                <button onClick={() => handleTabClick('templates')}> Templates </button>
            </div>

            {loading ? <p> Loading... </p> : (
                <div>
                    {activeTab === 'pastWorkouts' && (
                        <div>
                            <h2> Past Workouts </h2>
                            {workouts.map(workout => (
                                <div key={workout._id}>
                                    <p> {workout.title} </p>
                                    <p> {workout.date} </p>
                                    <p> {workout.duration} </p>
                                    <p> {workout.notes ? workout.notes : ''} </p>
                                    <p> {workout.status} </p>
                                    <button> See details </button>
                                    <button onClick={() => templateWorkout(workout._id)}> Template Workout </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'templates' && (
                        <div>
                            <h2> Templates </h2>
                            {templates.map(workout => (
                                <div key={workout._id}>
                                    <p> {workout.title} </p>
                                    <p> {workout.date} </p>
                                    <p> {workout.duration} </p>
                                    <p> {workout.notes ? workout.notes : ''} </p>
                                    <p> {workout.status} </p>
                                    <button> See details </button>
                                    <button onClick={() => startWorkout(workout)}> Start Workout </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            
        </div>
    )
}

export default Workouts;