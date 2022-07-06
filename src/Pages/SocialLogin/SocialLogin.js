import React from 'react';
import gmailicon from '../../image/icon/270021.png'
import facbookicon from '../../image/icon/facebook.png'
import githubicon from '../../image/icon/889192.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '3px' }} className='bg-success w-50' ></div>
                <p className='mt-2 fs-5 p-3'>Or</p>
                <div style={{ height: '3px' }} className='bg-success w-50' ></div>
            </div>
            <div>
                <button
                    className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img style={{ width: '35px' }} src={gmailicon} alt="" />
                    <span className='p-2'>Continue With Google</span>
                </button>
                <button
                    className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img style={{ width: '35px' }} src={githubicon} alt="" />
                    <span className='p-2'>Continue With Github</span>
                </button>
                <button
                    className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img style={{ width: '35px' }} src={facbookicon} alt="" />
                    <span className='p-2'>Continue With Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;