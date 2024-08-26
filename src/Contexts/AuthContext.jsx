
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import "../Firebase";
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { saveUserData } from "../components/Database";


const AuthContext = React.createContext();

export function useAuth(){

        return useContext(AuthContext);
}

export function AuthProvider({children}) {
    
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();

    useEffect(()=> {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [auth])

    // signUp function
    async function signUp(email, password, username){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

              // Save user data to Firestore
                await saveUserData(user.uid, {
                    username,
                    email,
                    score: 0,
                    password  // Initialize score to 0
                });

            // signUp update
            await updateProfile(user, {
                displayName: username
            });
            setCurrentUser(user);
            
        }catch(err) {
            console.log("error signing in", err);
            throw err;
        }
        
    }

    async function login(email, password){

        return  signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth);
    }

    const value = {
        signUp,
        login,
        logOut,
        currentUser,
    };
    
    return(
        <AuthContext.Provider value={value}>
             {!loading && children}
        </AuthContext.Provider>
    );
}