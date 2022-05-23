import React from 'react';

const Reviews = () => {
    return (
        <div className='my-10'>
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>WHAT OUR CUSTOMERS SAY</h2>
            <div className="divider"></div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-2 '>
                <div className="card bg-base-100 shadow-xl items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" alt='human' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pixa Norman</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" alt='human' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pixa Norman</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" alt='human' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pixa Norman</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" alt='human' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pixa Norman</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;