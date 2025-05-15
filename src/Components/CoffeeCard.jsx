import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Link, } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { photo, name, price, quantity, _id } = coffee

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
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // Remove the coffee from webpage
                            const remainingCoffee = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffee)
                        }
                    })


            }
        });
    }

    return (
        <div className="flex justify-between p-6 py-0 ps-0 rounded-2xl bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between items-center gap-12">
                <div className='space-y-6'>
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className="">
                    <div className="join join-vertical space-y-2">
                        <Link to={`coffee-details/${_id}`}>
                            <button className="btn join-item"><FaEye /></button>
                        </Link>
                        <Link to={`update-coffee/${_id}`}>
                            <button className="btn join-item"><FaEdit /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item"><FaDeleteLeft /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;