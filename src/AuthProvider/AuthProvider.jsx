import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.config/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    /// create user
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /// login user
    const loginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /// google Login

    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    /// logout user
    const logeOutUser = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    /// user Check 

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setIsLoading(false)
                console.log("Current user", currentUser);
                const user = { email: currentUser?.email }
                if(currentUser){
                    axiosPublic.post('/jwt', user )
                    .then(res => {
                        console.log(res.data.token);
                        if(res.data.token){
                            localStorage.setItem("token", res.data.token)
                        } 
                    }) 
                } else {
                     localStorage.removeItem("token")
                }
                

        
        
            })  
        return () => {
            unSubcribe()
        }
    }, [axiosPublic])


    const authInfo = {
        user,
        isLoading, 
        createUser, 
        loginUser, 
        logeOutUser,
        loginWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;