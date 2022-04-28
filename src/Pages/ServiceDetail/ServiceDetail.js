import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const [user, setUser] = useState({
        name : "Himel Islam",
        email : "himel12@gmail.com",
        address : "Akhalia, Sylhet",
        phone : "01787485414"
    })

    const handleUserState = event => {
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        console.log(newAddress);
        const newUser = {address: newAddress ,...rest};
        setUser(newUser)
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
                <h2>Please Order : {service.name}</h2>
                <form>
                    <input className='w-100 mb-2' type="text" value={user.name} name="name" id="" placeholder='Name' required />
                    <br />
                    <input className='w-100 mb-2' type="text" value={user.email} name="email" id="" placeholder='Email' required />
                    <br />
                    <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='Service' required />
                    <br />
                    <input className='w-100 mb-2' type="text" onChange={handleUserState} value={user.address} name="address" id="" placeholder='Address' required />
                    <br />
                    <input className='w-100 mb-2' type="text" value={user.phone} name="phone" id="" placeholder='Phone' required />
                    <br />
                    <input className='btn btn-primary' type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetail;