import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataLoading, setDataLoading] = useState(true);

    const [chefData, setChefData] = useState([]);
    // const [blogs, setBlogs] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [reviews, setReviews] = useState([]);

   

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

   

    useEffect(()=>{
        fetch('https://tasty-tidbits-server-alimbdit.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
        setDataLoading(false)
    },[])

    // useEffect(() => {
    //   fetch("https://tasty-tidbits-server-alimbdit.vercel.app/blog").then(res => res.json()).then(data => setBlogs(data))
    //   setDataLoading(false)
    // } ,[])

    useEffect(() => {
      fetch("https://tasty-tidbits-server-alimbdit.vercel.app/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
        setDataLoading(false)
    }, []);

   

    useEffect(() => {
      fetch("https://tasty-tidbits-server-alimbdit.vercel.app/recipes/")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
        setDataLoading(false)
    }, []);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };


      

    const googleLogin = () => {
      // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = () => {
       return signInWithPopup(auth, githubProvider)
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
    // setLoading(true)
    return sendPasswordResetEmail(auth, email)
  };



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log('logged in user inside auth state observer', loggedUser);
      setLoading(false)
      
      // setDataLoading(false)
      setUser(loggedUser);
      console.log(loading, user)
    });
    return () => {
      unSubscribe();
    };
  }, [loading]);

  // const updateUserProfile = ( name, photo) => {
  //   console.log(typeof(name), typeof(photo), auth.currentUser)
  //       setLoading(true)
  //       return updateProfile(auth.currentUser, {
  //           displayName: name, photoURL: photo,
  //         }); 
  //     }
    

    const AuthInfo = {user, chefData, googleLogin, gitHubLogin, loading, setLoading, logIn, createUser, setUser, resetPassword, logOut, reviews, recipes,dataLoading,auth   };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;