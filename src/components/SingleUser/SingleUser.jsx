import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleUser = () => {
    const useData = useLoaderData();
    const nebigate = useNavigate();
    const handleNebigate = () => {
        nebigate(-1);
    }
    return (
        <div>
           <h2>{useData.firstName}</h2>
           <h2>{useData.email}</h2>
           <h3>{useData.address.address}</h3>
           <h3>{useData.image}</h3>
           <h3>{useData.bank.cardNumber}</h3>
           <h3>{useData.domain}</h3>
           <button onClick={handleNebigate}>tmi akhon back a jaba</button>
           
        </div>
    );
};

export default SingleUser;