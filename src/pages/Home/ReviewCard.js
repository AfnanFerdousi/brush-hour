import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className='container-fluid flex justify-center'>
            <div className="flex flex-row card bg-base-100 shadow-xl items-center">
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={review?.image} alt='human' />
                    </div>
                </div>
                <div className="card-body items-center text-center">                    
                    <h2 className="text-xl font-bold">{review?.name}</h2>
                    <div className="rating rating-sm">
                        <p className='font-bold mr-1 text-primary'>{review?.rate}</p>
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                    </div>
                    <p className=''>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;