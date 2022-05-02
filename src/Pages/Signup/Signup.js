import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorM, setErrorM] = useState('');
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate()
    // const location = 

    // const from = 



    // const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile] = useUpdateProfile(auth);
    const [token] = useToken(user)

    // if(error){
    //     console.log('ajajajaj');
    //     const message = error?.message
    //     setErrorM(message)
    // }

    if (token) {
        navigate('/')
        console.log('user Found', user);
        // navigate(from)
    }

    const handleNameInput = event => {
        setName(event.target.value)
    }

    const handleEmailInput = event => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    // handle Create User with Email and Password
    const handleSignUp = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            setErrorM('Your Password Mismatched')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName:name})
        console.log('update profile');
        
        
    }



    // // handle Login With Google
    // const handleGoogleSignIn = event => {
    //     signInWithGoogle()
    //     event.preventDefault();
    // }
    return (
        <div className='form2-container'>
            <div>
                <form onSubmit={handleSignUp}>
                    <h2 className='form-title'>Sign Up</h2>
                    <div className="input-group1">
                        <label htmlFor="Email">Name</label>
                        <input onBlur={handleNameInput} type="text" name="" id="" required />
                    </div>
                    <div className="input-group1">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailInput} type="email" name="" id="" required />
                    </div>
                    <div className="input-group1">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordInput} type="password" name="" id="" required />
                    </div>
                    <div className="input-group1">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="" id="" required />
                    </div>
                    <div>
                        <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label style={
                            agree?
                            {color:'blue'}
                            :
                            {color: 'red'}
                        } 
                    htmlFor="terms" className='ps-2'>Accept Genious Car Terms And Conditions</label>
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <p style={{color: 'red'}}>{errorM}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input disabled={!agree} className='form-submit' type="submit" value="Sign Up" />
                </form>

                <p>
                    Alreacy Have An Account? <Link className='form-link' to='/login'>Login</Link>
                </p>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;