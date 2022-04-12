import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorM, setErrorM] = useState('');



    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // if(error){
    //     console.log('ajajajaj');
    //     const message = error?.message
    //     setErrorM(message)
    // }

    if (user) {
        console.log('user Found', user);
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
    const handleSignUp = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setErrorM('Your Password Mismatched')
            return;
        }
        createUserWithEmailAndPassword(email, password)
        
    }



    // handle Login With Google
    const handleGoogleSignIn = event => {
        signInWithGoogle()
        event.preventDefault();
    }
    return (
        <div className='form2-container'>
            <div>
                <form onSubmit={handleSignUp}>
                    <h2 className='form-title'>Sign Up</h2>
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
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <p style={{color: 'red'}}>{errorM}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>

                <p>
                    Alreacy Have An Account? <Link className='form-link' to='/login'>Login</Link>
                </p>

                <div>
                    <button onClick={handleGoogleSignIn} >Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;