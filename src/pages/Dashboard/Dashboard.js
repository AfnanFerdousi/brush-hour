import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-400 p-5'>Welcome To Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-base-200 gap-y-2 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        !admin
                            ?
                            <>
                                <li><Link  to="/dashboard/orders">My Orders</Link></li>
                                <li><Link to="/dashboard/review">My Review</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/dashboard/manageOrder">Manage All Orders</Link></li>
                                <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                                <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                            </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;