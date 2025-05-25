import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import axios from 'axios';

const SignIn = () => {
    const { signIn } = use(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);

        const { email, password } = Object.fromEntries(formData.entries())
        console.log(email, password);

        // sign in here with email and password
        signIn(email, password)
            .then(result => {
                const user = result.user;
                const signInInfo = {
                    email,
                    lastSignInTime: user?.metadata?.lastSignInTime
                }

                // Patch method with axios
                axios.patch('http://localhost:3000/users', signInInfo)
                    .then(data => {
                        console.log(data.data);
                    })


                // Patch method with fetch the data into database
                // fetch(`https://coffee-store-server-4opqoqak6-mahfuzarrahmanmunnas-projects.vercel.app/users`, {
                //     method: "PATCH",
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(signInInfo)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('after updated patch', data);
                //     })
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-2xl text-center font-bold'>Sign in Now</h1>
                <form onSubmit={handleSignIn} className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Sign in</button>
                    <p>
                        You don't have any account. Please <Link to='/sign-up' className='underline text-blue-500'>Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;