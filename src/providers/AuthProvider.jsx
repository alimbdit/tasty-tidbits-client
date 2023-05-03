import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    

    const AuthInfo = { chefData, googleLogin };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;