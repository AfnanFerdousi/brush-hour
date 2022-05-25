import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300 lg:px-10">
                <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-3xl">BRUSH HOUR</div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link to='/' className='rounded-lg'>Home</Link></li>
                            <li><Link to='/tools' className='rounded-lg'>Tools</Link></li>
                            <li><Link to='/blogs' className='rounded-lg'>Blogs</Link></li>
                            <li>
                                {
                                    user
                                        ?
                                        <Link to='/dashboard' className='rounded-lg'>Dashboard</Link>
                                        :
                                        <Link to='/dashboard' className='rounded-lg hidden'>Dashboard</Link>
                                }
                            </li>
                            <li>
                                {
                                    user
                                        ?
                                        <button className='btn btn-ghost rounded-lg' onClick={logout}>SIGN OUT</button>
                                        :
                                        <Link to='/login' className='btn btn-ghost rounded-lg'>LOGIN</Link>
                                }
                            </li>
                            <li>
                                {
                                    user ?
                                            <div className="btn sm:mt-3 text-white rounded-full">
                                                <h2>{user.displayName}</h2>
                                            </div>
                                        :
                                        <></>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/' className='rounded-lg'>Home</Link></li>
                            <li><Link to='/tools' className='rounded-lg'>Tools</Link></li>
                            <li><Link to='/purchase' className='rounded-lg'>Purchase</Link></li>
                            <li><Link to='/blogs' className='rounded-lg'>Blogs</Link></li>
                            <li>
                                {
                                    user
                                        ?
                                        <Link to='/dashboard' className='rounded-lg'>Dashboard</Link>
                                        :
                                        <Link to='/dashboard' className='rounded-lg hidden'>Dashboard</Link>
                                }
                            </li>
                            <li>
                                {
                                    user
                                        ?
                                        <button className='btn btn-ghost rounded-lg' onClick={logout}>SIGN OUT</button>
                                        :
                                        <Link to='/login' className='btn btn-ghost rounded-lg'>LOGIN</Link>
                                }
                            </li>
                            <li>
                                {
                                    user ?
                                            <div className="btn text-white rounded-full">
                                                <h2>{user.displayName}</h2>
                                            </div>
                                        :
                                        <></>
                                }
                            </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;