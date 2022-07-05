import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './SignUP.css'


const SignUP = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <form className=' mt-5 rounded w-50 bg-secondary mx-auto p-5' onSubmit={handleSubmit(onSubmit)}>

            <input placeholder='Name' className='w-50 border border-4 rounded p-2' {...register("name", { required: "Name is required" })} />
            <p>{errors.name?.message}</p>
            <input placeholder='Email' className='w-50 border border-4 rounded p-2' {...register("mail", { required: "Email Address is required" })} />
            <p>{errors.mail?.message}</p>
            <input className='w-50 border border-4 rounded p-2' placeholder='Password' {...register("password", { required: "Email Address is required" })} />
            <p>{errors.password?.message}</p>
            <p className='text-white account'>Already have an account?<Link to='/login'>Login Here</Link></p>

            <input className='bg-success px-5 py-2 rounded text-white' type="submit" value='SignUp' />
        </form>
    );
};

export default SignUP;