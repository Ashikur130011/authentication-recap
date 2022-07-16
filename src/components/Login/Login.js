import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const {signInUsingGoogle, user} = useFirebase()
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