import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorM, setErrorM] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);

    if(token){
        navigate(from, {replace:true})  
    }

    // if(error){
    //     setErrorM(error.message)
    // }

    const handleEmailInput = event => {
        setEmail(event.target.value)
    }
    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }


    const handleLogin = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password)
        // const {data} = await axios.post('https://infinite-cliffs-56801.herokuapp.com/login', {email})
        // localStorage.setItem('accessToken', data.accessToken)
       
    }
    return (
        <div className='form2-container'>
            <div>
                <form onSubmit={handleLogin}>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group1">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailInput} type="email" name="" id="" required/>
                    </div>
                    <div className="input-group1">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordInput} type="password" name="" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create A New Account.</Link>
                </p>
                <p>
                    Forget Password? <Link onClick={async ()=> {await sendPasswordResetEmail(email); alert('sent email')}} className='form-link' to='/signup'>Reset Password</Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;