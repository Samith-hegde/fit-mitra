import React, { useEffect } from 'react';
import useAuth  from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <h1>Profile</h1>
            {user && (
                <div>
                    <h4> Username: </h4> <p>{user.username}</p>
                    <h4> Username: </h4> <p>{user.email}</p>
                    <h4> Bio: </h4> <p>{user.bio ? user.bio : ' '}</p>
                    <h4> Fitness Goals: </h4> <p>{user.fitness_goals ? user.fitness_goals : ' '}</p>
                    <h4> Height: </h4> <p>{user.height ? user.height : ' '} cm </p>
                    <h4> Weight: </h4> <p>{user.weight ? user.weight : ' '} kg </p>
                    <h4> Date of Birth: </h4> <p>{user.date_of_birth ? user.date_of_birth : ' '}</p>
                </div>
            )}
            <button onClick={() => navigate('/profile/edit')}>Edit Profile</button>
            <button onClick={() => navigate('/')}>Go Back</button>
        </>
    )
}

export default Profile;