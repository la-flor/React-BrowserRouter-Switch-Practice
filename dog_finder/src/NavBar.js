import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ dogs }) {
    const links = dogs.map(dog => (
        <NavLink 
            to={`/dogs/${dog.name.toLowerCase()}`} 
            key={dog.name}>
            &nbsp;&nbsp;

            { dog.name }
        </NavLink>
    ));
    return (
        <nav>
            <NavLink exact to='/dogs'>Home</NavLink>
            {links}
        </nav>
    )
};

export default NavBar;