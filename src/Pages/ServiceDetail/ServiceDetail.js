import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `https://infinite-cliffs-56801.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleOrderSubmit = event => {
        event.preventDefault()
        const order = {
            email : user.email,
            service : service.name,
            serviceId : serviceId,
            address : event.target.address.value,
            phone : event.target.phone.value,
        }
        axios.post('https://infinite-cliffs-56801.herokuapp.com/order', order)
        .then(response => {
            console.log(response);
            const {data} = response;
            if(data.insertedId){
                toast('Your Order Placed Successfully!!')
                console.log(data.insertedId);
                event.target.reset()
            }
        })
    }

    // const [user, setUser] = useState({
    //     name : "Himel Islam",
    //     email : "himel12@gmail.com",
    //     address : "Akhalia, Sylhet",
    //     phone : "01787485414"
    // })

    // const handleUserState = event => {
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     console.log(newAddress);
    //     const newUser = {address: newAddress ,...rest};
    //     setUser(newUser)
    // }
    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
                <h2>Please Order : {service.name}</h2>
                <form onSubmit={handleOrderSubmit}>
                    <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='Name' required disabled readOnly/>
                    <br />
                    <input className='w-100 mb-2' type="text" value={user?.email} name="email" id="" placeholder='Email' required disabled readOnly/>
                    <br />
                    <input className='w-100 mb-2' type="text" value={service?.name} name="service" id="" placeholder='Service' required />
                    <br />
                    <input className='w-100 mb-2' type="text"  name="address" id="" placeholder='Address' required />
                    <br />
                    <input className='w-100 mb-2' type="text"  name="phone" id="" placeholder='Phone' required />
                    <br />
                    <input className='btn btn-primary' type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetail;