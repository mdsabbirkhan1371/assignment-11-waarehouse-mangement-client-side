import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='bg-dark text-white p-5'>
                <h5 className='text-center'> <small>All Rights Reserved © {year} By- Bicycle Warehouse </small></h5>
            </footer>
        </div>
    );
};

export default Footer;