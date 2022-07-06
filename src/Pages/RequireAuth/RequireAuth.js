
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='mx-auto text-center my-5'>
            <h2 className='text-danger'>Your Email Is Not  Verified!!!</h2>
            <p className='text-success'>Please Verified your email address!!!</p>
            <button className='btn btn-primary text-center mx-4'
                onClick={async () => {
                    await sendEmailVerification();
                    toast("Check Your Email Now..")
                }}
            >
                send verification again...
            </button>
            <ToastContainer></ToastContainer>

        </div>

    }
    return children;
}


export default RequireAuth;
