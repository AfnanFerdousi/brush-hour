import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Purchase = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [tool, setTool] = useState();
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `https://brush-hour-server-ten.vercel.app/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });

    }, []);
    const onSubmit = data => {

        const purchase = {
            buyer: data.buyer,
            buyerEmail: data.email,
            phone: data.phone,
            buyerAddress: data.address,
            orderAmount: data.orderAmount,
            paid: false,
            productId: tool._id,
            productName: tool.toolName,
            price: Number(tool.price * data.orderAmount)
        }
        fetch("https://brush-hour-server-ten.vercel.app/purchase", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data.success);
                // console.log("data testing",data);
                if (data.success) {
                    toast(`Your order for ${tool.toolName} is successful`);
                    reset();
                    navigate(`/dashboard/orders`)
                }
                else {
                    toast.error(`Your order for ${tool.toolName} has failed!`)
                }

            })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* <div className="text-center lg:text-left"> */}
                    <div className="card-body">
                        <img src={tool?.img} alt="" />
                        <h1 className="text-4xl font-bold">Purchase now</h1>
                        <h2 className="text-3xl font bold text-primary">{tool?.toolName}</h2>
                        <p className=" text-xl font-bold">Price: ${tool?.price}</p>
                        <p className=" text-xl">Available Quantity: {tool?.available}</p>
                        <p className="">{tool?.desc}</p>

                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" readOnly placeholder="text" {...register("buyer", { required: true })} value={user.displayName} className="input  input-bordered" />
                            <p className='text-red-500 label-text-alt'>
                                {errors.buyer?.type === 'required' && "Name is required"}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" readOnly
                                {...register("email", { required: true })}
                                placeholder="Email"
                                value={user.email}
                                className="input  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="phone"
                                placeholder="Phone"
                                {...register("phone", { required: true })}
                                className="input input-bordered" />
                            <p className='text-red-500 label-text-alt'>
                                {errors.phone?.type === 'required' && "Phone is required"}
                            </p>
                            <p className='text-red-500 label-text-alt'>
                                {errors.phone?.type === 'min' && "Phone number must be 11 characters"}
                            </p>
                            <p className='text-red-500 label-text-alt'>
                                {errors.phone?.type === 'required' && "Phone number must be 11 characters"}
                            </p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                {...register("address", { required: true })} placeholder="Address"
                                className="input input-bordered" />
                            <p className='text-red-500 label-text-alt'>
                                {errors.address?.type === 'required' && "Address is required"}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order amount</span>
                            </label>
                            <input
                                type="number"
                                {...register("orderAmount", { required: true, min: 10, max: tool?.available })}
                                placeholder="Quantity"
                                className="input input-bordered" />
                            <p className='text-red-500 label-text-alt'>
                                {errors.orderAmount?.type === 'required' && "Quantity is required"}
                            </p>
                            <p className='text-red-500 label-text-alt'>
                                {errors.orderAmount?.type === 'min' && "Quantity can not be less than 10"}
                            </p>
                            <p className='text-red-500 label-text-alt'>
                                {errors.orderAmount?.type === 'max' && `Quantity can not be more than ${tool?.available}`}
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;