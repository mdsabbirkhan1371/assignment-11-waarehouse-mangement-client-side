import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './SignUP.css'

import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const SignUP = () => {
    // create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    // submit form 
    const onSubmit = (data) => {
        console.log(data)
        let { mail, name, password } = data;
        createUserWithEmailAndPassword(mail, password, name)
    };
    // some condition 
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return (
            alert("Registered Successful")
        );
    }

    return (
        <div>
            <form className=' my-5 rounded w-75 bg-secondary mx-auto p-5' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Name' className='w-75 border border-4 rounded p-2' {...register("name", { required: "Name is required" })} />
                <p>{errors.name?.message}</p>
                <input placeholder='Email' className='w-75 border border-4 rounded p-2' {...register("mail", { required: "Email Address is required" })} />
                <p>{errors.mail?.message}</p>
                <input className='w-75 border border-4 rounded p-2' placeholder='Password' {...register("password", { required: "Email Address is required" })} />
                <p>{errors.password?.message}</p>
                <p className='text-white account'>Already have an account?<Link to='/login'>Login Here</Link></p>

                <input className='bg-success px-5 py-2 rounded text-white' type="submit" value='Register' />
            </form>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default SignUP;