import React from 'react';
import useAuth from '../../hook/UseAuth';
const Login = () => {
     const {signInUsingGoogle, user} = useAuth()

    /* const handleUserLogin= () =>{
        signInUsingGoogle()
    } */
    return (
        <div>
            <h1>Login Here</h1>
            <h4>previous user: {user.displayName}</h4>
            <p>{user.email}</p>
            <button onClick={signInUsingGoogle}>Login</button>
        </div>
    );
};

export default Login;