import React from 'react';
import useAuth from '../Hooks/useAuth';
import LoadingSpinner from '../Components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/sign-in' replace={true} />
    }
    console.log(user);
    return children
};

export default PrivateRoutes;