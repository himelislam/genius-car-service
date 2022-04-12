import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

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
                {user ?
                    <button onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <Link to='/login'>Login</Link>}
                <button onClick={userCheck}>helll</button>
            </div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;