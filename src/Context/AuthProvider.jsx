import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    // create User with google
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const currentUser = auth.currentUser
    // console.log(currentUser);

    // const deleteUser = async () => {
    //     if (auth.currentUser) {
    //         await 
    //     }
    // }

    // signin with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser,
        signIn
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;