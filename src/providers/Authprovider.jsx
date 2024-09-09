import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext(null);

const auth = getAuth(app);


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [Loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return () => unsubscribe(); 

    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        Loading,


    };
  

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
};

export default Authprovider;
