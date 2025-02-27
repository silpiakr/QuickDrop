// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import auth from '@/firebase/firebase.config';
// import { Loader } from 'lucide-react';


// export const AuthContext = createContext(null);

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);

//     }

//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const signOutUser = () => {
//         setLoading(true);
//         return signOut(auth)
//     }

//     const updateUserProfile = (updateData) => {
//         return updateProfile(auth.currentUser, updateData)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             setLoading(false);
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, []);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         signOutUser,
//         updateUserProfile,
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {loading ? <Loader /> : children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { app } from "@/firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const signIn = (email, password) => {
        setLoading();
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google signIn
    const goolgeSignIn = () => {
        setLoading();
        return signInWithPopup(auth, googleProvider);
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return() => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        goolgeSignIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;