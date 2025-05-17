import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const SignUp = () => {
    const { createUser } = use(AuthContext)
    console.log(createUser);

    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);


        const { email, password, ...rest } = Object.fromEntries(formData.entries())

        // const userProfile = {
        //     email,
        //     ...rest
        // }

        // const email = formData.get('email');
        // const password = formData.get('password')
        // console.log(email, password, userProfile);

        // Create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                const userProfile = {
                    email,
                    rest,
                    creationTime: user?.metadata?.creationTime,
                    lastSignInTime: user?.metadata?.lastSignInTime,
                }
                // save the data into database
                fetch('https://coffee-store-server-two-red.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Sign Up successful",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            console.log('after adding into the database', data);
                        }
                    })
                console.log(user);
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUP} className="fieldset">
                        <h1 className='text-2xl text-center font-bold'>Sign Up Now</h1>
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="John Doe" />
                        {/* Address */}
                        <label className="label">Address</label>
                        <input type="text" className="input" name='address' placeholder="address" />
                        {/* Phone */}
                        <label className="label">Phone</label>
                        <input type="text" className="input" name='phone' placeholder="013....." />
                        {/* Photo URL */}
                        <label className="label">Photo</label>
                        <input type="text" className="input" name='photo' placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="johndoe@gmail.com" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="******" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                        <p>
                            You have already an account. please <Link to='/sign-in' className='underline text-blue-500'>Signin</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;