import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './About.css'

const About = () => {
    const data = useLoaderData();
    return (
        <div className='lols'>
            {
                data.users.map(user => <User
                     key={user.id}
                     user={user}
                ></User>)
            }
        </div>
    );
};

export default About;