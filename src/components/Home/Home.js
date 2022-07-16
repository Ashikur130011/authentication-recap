import React from 'react';
import useAuth from '../../hook/UseAuth';


const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>This is {user.displayName}</h1>
        </div>
    );
};

export default Home;