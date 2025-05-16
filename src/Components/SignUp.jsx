import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext)
    console.log(createUser);

    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password')
        console.log(email, password);

        // Create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Up successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(user);
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUP} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="John Doe" />
                        {/*  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="johndoe@gmail.com" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="******" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;