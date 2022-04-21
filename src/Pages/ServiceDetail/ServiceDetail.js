import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect(()=> {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center taxt-primary'> {service.name}</h2>
            <h2 className='text-center taxt-primary'>{service.price}</h2>
        </div>
    );
};

export default ServiceDetail;