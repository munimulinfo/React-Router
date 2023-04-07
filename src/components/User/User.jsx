import React from 'react';
import './User.css'
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {firstName,age,id} = user;
    const nevigat = useNavigate();
    const handleNavigate = () => {
        nevigat(`/user/${id}`);
    }
    return (
        <div className='lol'>
            <h3>{firstName}</h3>
            <h3>{age}</h3>
            <p><Link to={`/user/${id}`}>Show details this user</Link></p>
            <button onClick={handleNavigate}>this is  go</button>
        </div>
    );
};

export default User;