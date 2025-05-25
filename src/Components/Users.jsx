import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData()
    const [users, setUsers] = useState(initialUsers);
    console.log(users);


    // useEffect(() => {
    //     fetch('/')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])


    // useEffect(() => {
    //     axios.get('/')
    //         .then(data => {
    //             console.log(data.data);
    //         })
    // }, [])


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                // const d = `https://coffee-store-server-4opqoqak6-mahfuzarrahmanmunnas-projects.vercel.app/users${id}`
                // console.log(d);
                fetch(`https://coffee-store-server-4opqoqak6-mahfuzarrahmanmunnas-projects.vercel.app/users${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after deleted user', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });

                            // Update UI after deletion
                            setUsers(prev => prev.filter(user => user._id !== id));
                        }
                    })
                    .catch(err => {
                        console.error("Delete error:", err);
                    });


            }
        });
    }
    return (
        <div>
            <div className="text-3xl">{users.length}</div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.rest?.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.rest?.name}</div>
                                            <div className="text-sm opacity-50">{user?.rest?.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.phone}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user?.email}</span>
                                </td>
                                <td>{user?.lastSignInTime}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">V</button>
                                    <button className="btn btn-ghost btn-xs">E</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;