import React from 'react';
import gmailicon from '../../image/icon/270021.png'
import facbookicon from '../../image/icon/facebook.png'
import githubicon from '../../image/icon/889192.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    // sign in with google 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //   sign in with github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (error || error1) {
        return (
            <div>
                <p>Error: {error || error1.message}</p>

            </div>
        );
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        return (
            <div>
                <p>Signed In User</p>
            </div>
        );
    }
    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '3px' }} className='bg-success w-50' ></div>
                <p className='mt-2 fs-5 p-3'>Or</p>
                <div style={{ height: '3px' }} className='bg-success w-50' ></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img style={{ width: '35px' }} src={gmailicon} alt="" />
                    <span className='p-2'>Continue With Google</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
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