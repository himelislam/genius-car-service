import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const userCheck = () => {
        console.log(user);
    }
    return (
        <header>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/experts'>Experts</Link>
                <Link to='/about'>About</Link>
                {user?
                <button onClick={()=> signOut(auth)}>Sign Out</button>
                :
                <Link to='/login'>Login</Link>}
                <button onClick={userCheck}>helll</button>
            </div>
        </header>
    );
};

export default Header;