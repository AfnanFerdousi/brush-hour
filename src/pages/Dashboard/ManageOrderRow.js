import React from 'react';

const ManageOrderRow = ({ allOrder, index }) => {
    console.log(allOrder);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{allOrder.productName}</td>
            <td>{allOrder.phone}</td>
            <td>{allOrder.buyerEmail}</td>
            <td>{(!allOrder.paid) ?
                <>
                <span className="text-red-500">UNPAID</span>
                </>
                : 
                <button className="btn btn-success btn-sm">Deliver</button>
            }
            </td>
        </tr >
    );
};

export default ManageOrderRow;