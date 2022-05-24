import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl items-center">
                <div className="avatar mb-[-15px]">
                    <div className="w-20 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" alt='human' />
                    </div>
                </div>
                <div className="card-body items-center text-center">

                    <div className="rating rating-md">
                        <p className='font-bold mr-1 text-primary'>{review.rate}</p>
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" readOnly />
                    </div>
                    <h2 className="text-xl font-bold">{review.name}</h2>
                    <p className=''>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;