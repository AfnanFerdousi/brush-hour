import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        const makeAdmin = () => {
            fetch('https://brush-hour-server-ten.vercel.app/user', {
                method: "GET",
                "content-type": "application/json",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` }
            })
                .then(res => res.json())
                .then(data => setUsers(data))
        }
        makeAdmin();
    }, [users])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl pl-5">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;