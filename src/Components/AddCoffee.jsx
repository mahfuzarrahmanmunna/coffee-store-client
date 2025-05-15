import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        // const chef = form.chef.value;
        // const supplier = form.supplier.value;
        // const taste = form.taste.value;
        // const category = form.category.value;
        // const details = form.details.value;
        // const photo = form.photo.value;
        // console.log(name, chef, supplier,taste, category, details, photo);

        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);


        // Send coffee data to database
        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('after adding coffee', data);
                    Swal.fire({
                        title: "Coffee added successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className='px-24 bg-[#f4f3f0] mt-12'>
            <div className='text-center p-12'>
                <h1 className='text-6xl font-rancho text-header-primary'>Add coffee</h1>
                <p>
                    Use the form below to add a new coffee to your menu. Include the name, price, a short description, and an image URL so your customers can see and enjoy your newest creation!
                </p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {/* Name */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' placeholder="Enter coffee name" />
                    </fieldset>
                    {/* Chef */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Chef</label>
                        <input type="text" className="input w-full" name='chef' placeholder="Enter coffee chef" />
                    </fieldset>
                    {/* Supplier */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name='supplier' placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* Taste */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" name='taste' placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* price */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name='price' placeholder="Enter coffee price" />
                    </fieldset>
                    {/* Details */}
                    <fieldset className="fieldset   rounded-box  p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name='details' placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* Photo */}
                <fieldset className="fieldset  rounded-box  p-4">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name='photo' placeholder="Enter photo URL" />
                </fieldset>
                <div className='text-center px-4'>
                    <input className='mb-12 border w-full py-2 rounded font-rancho text-xl bg-[#D2B48C] cursor-pointer' type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;