import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to ="/about">About</ActiveLink>
            <ActiveLink to ="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;