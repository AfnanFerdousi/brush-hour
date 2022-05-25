import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.buyer}</td>
            <td>{order.phone}</td>
            <td>{order.orderAmount}</td>
            <td>{order.buyerAddress}</td>
            <td>{order.productName}</td>
            <td>{(!order.paid) ? <>
                <Link to={`/dashboard/payment/${order?._id}`} className="btn btn-success btn-sm">Pay</Link>
                <label htmlFor="deleting-confirm-2" className="btn btn-sm bg-red-500 ml-2 border-0" 
                onClick={() => setDeleteOrder(order)} >Cancel</label></> 
                : 
                <>
                <span className="text-success">Paid</span>
                <p className='font-bold'>Transaction id: <span className='text-orange-700'>{order?.transactionId}</span></p> 
                </>
                               
            }
            </td>
        </tr >
    );
};

export default OrderRow;