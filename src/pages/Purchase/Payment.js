import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;

    // const { data: product, isLoading } = useQuery(['payment', id], () => fetch(url, {
    //     method: "GET",
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem("accessToken")}`
    //     }
    // }).then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2 className='lg:ml-4 mb-4 capitalize text-3xl'>Hello, {id}</h2>
            <div className='flex flex-col'>
                <div className="card w-50 max-w-md bg-primary text-primary-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Please pay for </h2>
                        <p>You ordered <span className='font-bold'></span></p>
                        <p>Please Pay <span className='font-bold'>$</span></p>
                        <div className="card-actions justify-end">
                            <button className="btn">Make Payment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 max-w-md bg-primary mt-6 text-primary-content shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;