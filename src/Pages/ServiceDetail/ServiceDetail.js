import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center taxt-primary'>Description {params.serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;