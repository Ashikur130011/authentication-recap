import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/UseAuth';
const Header = () => {
    const{user, logOut} = useAuth()
    
    return (
        <div>
            <NavLink to="home">Home </NavLink>
            <NavLink to="about"> About </NavLink>
            <NavLink to="login"> Login </NavLink>
            
            <span> {user.displayName} </span>
            {user.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;