import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';

const Header = () => {
    const{user, logOut} = useFirebase()
    const handleLogOut = () => {
        logOut()
        console.log("Clicked");
    }
    return (
        <div>
            <NavLink to="home">Home </NavLink>
            <NavLink to="about"> About </NavLink>
            <NavLink to="login"> Login </NavLink>
            
            <span> {user.displayName} </span>
            {user.email && <button onClick={handleLogOut}>Log Out</button>}
        </div>
    );
};

export default Header;