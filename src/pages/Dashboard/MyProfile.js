import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import MyProfileModal from './MyProfileModal';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [users, setUsers] = useState([]);
    const [updateProfile, setUpdateProfile] = useState(null);

    // console.log(user);

    const {data: profile, isLoading, refetch} = useQuery('myProfile', () => fetch(`https://polar-lowlands-05694.herokuapp.com/user/${user?.email}`).then(res => res.json())
    )
    // console.log("this is profile",profile);
    useEffect(() => {
        const myProfile = () => {
            fetch(`https://polar-lowlands-05694.herokuapp.com/user/${user?.email}`, {
                method: "GET",
                "content-type": "application/json",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` }
            })
                .then(res => res.json())
                .then(data => setUsers(data))
        }
        myProfile();
    }, [users])

    // console.log(users.data);

    return (
        <div className="mt-6 bg-purple-100 flex flex-cols justify-center items-center">
            <div className="card flex items-center flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <div className="card flex items-center bg-base-100 shadow-xl">
                    <div className="avatar mt-2">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={users.image} alt="me" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user.displayName}</h2>
                        <h2 className="text-blue-500">Email: {users.email}</h2>
                        <h2 className="font-bold">{users.education}</h2>
                        <h2 className="font-bold">Phone Number: {users.phone}</h2>
                        <h2 className="font-bold">My Address: {users.location}</h2>
                        <h2 ><span className="font-bold">My LinkedIn:</span> <a className="text-blue-500">{users.linkedin}</a>
                        </h2>
                        <div className="card-actions">
                            <label htmlFor="update-modal" className="btn btn-primary"
                                onClick={() => setUpdateProfile(profile)} >UPDATE</label>
                        </div>
                    </div>
                </div>
            </div>
            {updateProfile && <MyProfileModal updateProfile={updateProfile}></MyProfileModal>}
        </div>
    );
};

export default MyProfile;