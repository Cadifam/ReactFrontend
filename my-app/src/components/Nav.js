import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="header-nav">
            <ul>
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/Articles">Articles</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/RegistrationForm">Register</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;