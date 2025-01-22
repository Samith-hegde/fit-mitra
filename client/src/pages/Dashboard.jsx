import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {

    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/profile">Profile</Link>
        </>
    )
}

export default Dashboard