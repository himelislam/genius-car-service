import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithGithub} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement;
    const navigate = useNavigate();
    if(user2){
        console.log(user2);
    }
    if(user1){
        console.log(user1);
    }

    if(user1 || user2){
        navigate('/home')
    }

    if(error1 || error2){
        errorElement = <p className='text-danger'>Error: {error1?.message} {error2?.message}</p>
        console.log(errorElement);
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height : '2px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-3'>OR</p>
                <div style={{height : '2px'}} className='bg-primary w-50'></div>
            </div>
            <div className=''>
                {errorElement}
                <button onClick={()=> signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto mb-3'>Google Sign In</button>
                <button className='btn btn-primary w-50 d-block mx-auto mb-3'>Facebook Sign In</button>
                <button onClick={()=> signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto mb-3'>Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;