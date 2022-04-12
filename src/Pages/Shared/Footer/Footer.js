import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <footer className='container'>
            <p className='text-center my-5 text-dark'>Copyright @ {year}</p>
        </footer>
    );
};

export default Footer;