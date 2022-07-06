import React from 'react';
import gmailicon from '../../image/icon/270021.png'
import facbookicon from '../../image/icon/facebook.png'
import githubicon from '../../image/icon/889192.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from "react-router-dom"; import Loading from '../Loading/Loading';
const SocialLogin = () => {
    // sign in with google 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //   sign in with github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (error || error1) {
        return (
            <div>
                <p>Error: {error || error1.message}</p>

            </div>
        );
    }
    if (loading || loading1) {
        return <Loading></Loading>;
    }
    if (user || user1) {
        return (
            navigate(from, { replace: true })

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