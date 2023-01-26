import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const AddReview = data => {
        const review = {
            rate: data.rating,
            review: data.review,
            name: data.name,
            image: data.image
        }

        fetch("https://brush-hour-server-ten.vercel.app/review", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.success);
                // console.log("data testing",data);
                if (data.success) {
                    toast(`You successfully made a review`);
                    reset();
                }
                else {
                    toast.error(`Could not post your review!`)
                }

            })
    }
    return (
        <div className="bg-purple-100 mt-10 flex justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(AddReview)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                {...register("name",
                                    { required: true })}
                            />
                            <p className='text-red-500 text-sm ml-2'>
                                {errors.name?.type === 'required' && "Name is required"}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                placeholder="rating"
                                className="input input-bordered"
                                {...register("rating",
                                    { required: true, min: 1, max: 5 }
                                )}
                            />
                            <p className='text-red-500 text-sm ml-2'>
                                {errors.rating?.type === 'required' && "Rating is required"}
                            </p>
                            <p className='text-red-500 text-sm ml-2'>
                                {errors.rating?.type === 'min' && `Order Quantity Must Be More Than 1`}
                            </p>
                            <p className='text-red-500 text-sm ml-2'>
                                {errors.rating?.type === 'max' && `Order Quantity Can Not Be More Than 5`}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <input
                                type="text"
                                name="review"
                                placeholder="Your Review"
                                className="input input-bordered"
                                {...register("review",
                                    { required: true })}
                            />
                            <p className='text-red-500 text-sm ml-2'>
                                {errors.review?.type === 'required' && "Review is required"}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input
                                type="url"
                                name="image"
                                placeholder="Your Image"
                                className="input input-bordered"
                                {...register("image",
                                    { required: true })}
                            />
                            <p className='text-red-500 text-sm ml-2'>
                                {errors.image?.type === 'required' && "Image is required"}
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;