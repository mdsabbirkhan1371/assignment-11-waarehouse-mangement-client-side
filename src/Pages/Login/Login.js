import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    // login with mail and password 

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // input value from react form hooks 
    const { register, formState: { errors }, handleSubmit } = useForm();

    // login handle 
    const onSubmit = (data) => {
        console.log(data);
        const { mail, password } = data;
        signInWithEmailAndPassword(mail, password)
    }
    // some condition 
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In Successful</p>
            </div>
        );
    }
    return (
        <div>
            <form className=' my-5 rounded w-75 bg-secondary mx-auto p-5' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Email' className='w-75 border border-4 rounded p-2' {...register("mail", { required: "Email Address is required" })} />
                <p>{errors.mail?.message}</p>
                <input className='w-75 border border-4 rounded p-2' placeholder='Password' {...register("password", { required: "Email Address is required" })} />
                <p>{errors.password?.message}</p>
                <p className='text-white account'>Don't have an account?<Link to='/signup'>Register Here</Link></p>

                <input className='bg-success px-5 py-2 rounded text-white' type="submit" value='Login' />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Login;