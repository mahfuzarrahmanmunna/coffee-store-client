import React, {  } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    // const {user}= use()
    const link = <>
        {/* home */}
        <li>
            <NavLink to="/" className={({ isActive }) =>
                isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
            }
            >
                Home
            </NavLink>
        </li>
        {/* Add coffee */}
        <li>
            <NavLink to="/add-coffee" className={({ isActive }) =>
                isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
            }
            >
                Add Coffee
            </NavLink>
        </li>
        {/* SignIn*/}
        <li>
            <NavLink to="/sign-in" className={({ isActive }) =>
                isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
            }
            >
                Sign in
            </NavLink>
        </li>
        <li>
            <NavLink to="/sign-up" className={({ isActive }) =>
                isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
            }
            >
                Sign up
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;