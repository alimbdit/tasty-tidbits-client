import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefData, setChefData] = useState([]);

    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };


      

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
      };

 

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
      
  };

  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  };



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log('logged in user inside auth state observer', loggedUser);
      
        setUser(loggedUser);
      
     
      setLoading(false)
    });

    return () => {
      unSubscribe();
    };
  }, []);

//   const updateUserProfile = ( name, photo) => {
//     console.log(typeof(name), typeof(photo), auth.currentUser)
//         setLoading(true)
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo,
//           }); 
//       }
    

    const AuthInfo = {user, chefData, googleLogin, loading, setLoading, logIn, createUser, setUser, resetPassword, logOut  };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;