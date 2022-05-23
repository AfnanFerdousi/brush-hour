import React from 'react';
import {useNavigate} from 'react-router-dom';

const ToolCard = (item) => {
    const navigate = useNavigate();

    const navigateToItemDetails = id => {
        navigate(`/purchase/${id}`,{state: {id}})
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={item.item.img} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.item.toolName}</h2>
                <h2 className='text-xl'>Price: {item.item.price}</h2>
                <h2>Minimum Order: {item.item.minOrder}</h2>
                <h2>Available: {item.item.available}</h2>
                <p>{item.item.desc}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToItemDetails(item.item._id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;