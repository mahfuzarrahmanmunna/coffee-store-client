import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const RootLayouts = () => {
    return (
        <div className='font-raleway'>
            <Header />
            <div className='max-w-7xl mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayouts;