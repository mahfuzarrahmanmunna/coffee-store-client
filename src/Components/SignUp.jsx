import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const SignUp = () => {
    const { user } = use(AuthContext)
    console.log(user);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Email" />
                        {/*  */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;