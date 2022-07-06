import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Loading = () => {
    return (
        <div className='text-center my-5'>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;