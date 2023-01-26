import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0hrPH2cLojiURK74I446s6HjHcPirYw3vyPdVfm8lKYFkLq9S5werxHr74Qk09FM63vy1HxlUPC41xOybHSKhI00sgSQ8V8M');

const Payment = () => {
    const { id } = useParams();
    const url = `https://brush-hour-server-ten.vercel.app/payment/${id}`;
    const { data: product, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(product);

    return (
        <div>
            <h2 className='lg:ml-4 mb-4 capitalize text-3xl'>Hello, {product?.buyer}</h2>
            <div className='flex flex-col'>
                <div className="card w-50 max-w-md bg-yellow-100 text-primary-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Please pay for {product?.productName}</h2>
                        <p>You ordered <span className='font-bold'>{product?.orderAmount} tools</span></p>
                        <p>Please Pay <span className='font-bold'>${product?.price}</span></p>
                    </div>
                </div>
                <div className="card w-50 max-w-md bg-yellow-100 mt-6 text-primary-content shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm product={product} />
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;