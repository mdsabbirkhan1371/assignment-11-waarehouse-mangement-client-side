import React from 'react';
import error from '../../image/error/yellow-triangle-warning-sign-icon-isolated_53876-71267.webp'
const PagenotFound = () => {
    return (

        <div className='mx-auto text-center p-5'>
            <img style={{ height: '100px' }} src={error} alt="" />
            <h2>404</h2>
            <h3>The Requested Page is not Available At This is Moment!!</h3>


        </div>
    );
};

export default PagenotFound;