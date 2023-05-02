import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])

    

    const AuthInfo = { chefData };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;