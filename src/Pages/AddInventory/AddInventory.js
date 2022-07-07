import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        const url = `http://localhost:5000/inventory`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }


    return (
        <form className=' my-5 rounded w-75 mx-auto p-5' onSubmit={handleSubmit(onSubmit)}>

            <input placeholder='Name' className='w-75 border border-4 rounded p-2' {...register("name", { required: "Name  is required" })} />
            <p>{errors.name?.message}</p>

            <input className='w-75 border border-4 rounded p-2' placeholder='Price' {...register("price", { required: "Email Address is required" })} />
            <p>{errors.price?.message}</p>

            <input className='w-75 border border-4 rounded p-2' placeholder='Quantity' {...register("quantity", { required: "Quantity is required" })} />
            <p>{errors.quantity?.message}</p>

            <input className='w-75 border border-4 rounded p-2' placeholder='Image Url' {...register("image", { required: "Image Url is required" })} />
            <p>{errors.image?.message}</p>

            <textarea className='w-75 border border-4 rounded p-2' placeholder='Description' {...register("description")} />


            <input className='w-75 border border-4 rounded p-2' placeholder='Supplier Name' {...register("supplier_name", { required: "Supplier Name is required" })} />
            <p>{errors.supplier?.message}</p>

            <input className='bg-success px-5 py-2 rounded text-white' type="submit" value='Add Inventory' />
        </form>
    );
};

export default AddInventory;