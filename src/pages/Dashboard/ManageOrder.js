import React, { useEffect, useState } from 'react';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);
    

    useEffect(() => {
        const getAllOrders = () => {
            const url = "http://localhost:5000/purchase";
            fetch(url, {
                method: "GET",
                "content-type": "application/json",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` }
            })
                .then(res => res.json())
                .then(data => setManageOrder(data))
        }
        getAllOrders();
    }, [manageOrder])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrder.map((allOrder, index) =>
                                <ManageOrderRow allOrder={allOrder} key={allOrder._id} index={index}></ManageOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;