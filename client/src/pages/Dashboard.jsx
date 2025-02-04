import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {

    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/profile">Profile</Link>
            <br />
            <Link to="/exercises">See All Exercises</Link>
            <br />
            <Link to="/workouts">See Your Workouts</Link>
        </>
    )
}

export default Dashboard