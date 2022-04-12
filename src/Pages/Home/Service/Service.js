import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price, id} = service;

    const navigate = useNavigate();
    return (
        <div id='services' className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigate(`/services/${id}`)}>Book {name}</button>
        </div>
    );
};

export default Service;