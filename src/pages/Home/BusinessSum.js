import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessSum = () => {
    return (
        <div className='my-20 bg-purple-200 p-10'>
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>WE ARE TRUSTWORTHY</h2>
            <div className="divider"></div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-2 items-center'>
                <div className="card card-side bg-base-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title text-center font-bold text-primary text-2xl">200+ Customers</h2>
                    </div>
                </div>
                <div className="card card-side bg-base-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title text-center font-bold text-primary text-2xl">120M+ Revenue</h2>
                    </div>
                </div>
                <div className="card card-side bg-base-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title text-center font-bold text-primary text-2xl">33K+ Reviews</h2>
                    </div>
                </div>
                <div className="card card-side bg-base-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title text-center font-bold text-primary text-2xl">50+ Tools</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSum;