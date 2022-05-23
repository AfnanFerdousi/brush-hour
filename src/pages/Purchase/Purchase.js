import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState();
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [error, setError] = useState("")
    // console.log("testing tool",tool)



    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });

    }, []);
    // console.log(drill)
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
            price: tool.price
        }
        console.log("sending purchase data====>", purchase)
        fetch("http://localhost:5000/purchase", {
            method: 'POST',
            headers: {
                "content-type":"application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.success);
                console.log("data testing",data);
                if (data.success) {
                    toast(`Your order for ${tool.toolName} is successful`);
                    reset();
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
                        <h1 className="text-5xl font-bold">Purchase now!</h1>
                        <h2 className="text-3xl font bold">Drill Name: {tool?.toolName}</h2>
                        <p className=" text-1xl">Price: {tool?.price}</p>
                        <p className=" text-1xl">Available Quantity: {tool?.available}</p>
                        <p className="text-1xl">{tool?.desc}</p>

                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" readOnly placeholder="text" {...register("buyer", { required: true })} value={user.displayName} className="input  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" readOnly {...register("email", { required: true })} placeholder="Email" value={user.email} className="input  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="phone" placeholder="Phone"{...register("phone", { required: true })} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text"  {...register("address", { required: true })} placeholder="Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order amount</span>
                            </label>
                            <input type="number"  {...register("orderAmount", { required: true, min: 1, max: tool?.quantity })} placeholder="Quantity" className="input input-bordered" />
                        </div>
                        {/* <p className="text-red-500">{error}</p> */}
                        <p className="text-red-500">{errors.orderAmount?.type === 'min' && "You have to at least buy 1"}</p>
                        <p className="text-red-500">{errors.orderAmount?.type === 'max' && `You can't buy more than ${tool.quantity}`}</p>
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