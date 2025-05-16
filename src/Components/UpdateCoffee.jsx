import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { useLoaderData, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateCoffee = () => {
    const { name, quantity, supplier, taste, price, details, photo, _id } = useLoaderData()
    const navigate = useNavigate()
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee);

        // Send updated coffee in the database
        fetch(`https://coffee-store-server-4opqoqak6-mahfuzarrahmanmunnas-projects.vercel.app/coffees${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Updated Successfully!");
                    console.log('after updated data', data);
                }
                if (!data.modifiedCount) {
                    toast.error("Please change something. and then update!")
                    console.log(data);
                }
            })
    }
    return (
        <div className='px-24 bg-[#f4f3f0] mt-12'>
            <button className='font-rancho flex items-center gap-1 btn btn-dash btn-outline btn-info' onClick={() => navigate(-1)}>
                <BiLeftArrow /> Go Back
            </button>
            <div className='text-center p-12'>
                <h1 className='text-6xl font-rancho text-header-primary'>Update coffee</h1>
                <p>
                    Use the form below to add a new coffee to your menu. Include the name, price, a short description, and an image URL so your customers can see and enjoy your newest creation!
                </p>
            </div>
            <ToastContainer />
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {/* Name */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" defaultValue={name} name='name' placeholder="Enter coffee name" />
                    </fieldset>
                    {/* quantity */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input w-full" defaultValue={quantity} name='quantity' placeholder="Enter coffee quantity" />
                    </fieldset>
                    {/* Supplier */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" defaultValue={supplier} name='supplier' placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* Taste */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" defaultValue={taste} name='taste' placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* price */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" defaultValue={price} name='price' placeholder="Enter coffee price" />
                    </fieldset>
                    {/* Details */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" defaultValue={details} name='details' placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* Photo */}
                <fieldset className="fieldset  rounded-box  p-4">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" defaultValue={photo} name='photo' placeholder="Enter photo URL" />
                </fieldset>
                <div className='text-center px-4'>
                    <input className='mb-12 border w-full py-2 rounded font-rancho text-xl bg-[#D2B48C] cursor-pointer' type="submit" value="Update Coffee" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;