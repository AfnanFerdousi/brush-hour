import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='my-10'>
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>WHAT OUR CUSTOMERS SAY</h2>
            <div className="divider"></div>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:pl-8 lg:pr-8 gap-y-2 gap-x-2'>
                 {
                    review.map(reviewItem => <ReviewCard key={reviewItem._id} 
                        review={reviewItem}></ReviewCard>)
                } 
            </div>
        </div>
    );
};

export default Reviews;