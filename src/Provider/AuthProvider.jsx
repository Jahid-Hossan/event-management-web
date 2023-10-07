import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [allData, setAllData] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    // popup login
    const popUpGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // password  Sign Up
    const passwordSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password  login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    const logOut = () => {
        return signOut(auth)
    }

    // state change
    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubs()
        }
    }, [])

    const info = {
        allData,
        popUpGoogle,
        passwordSignUp,
        logIn,
        user,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;