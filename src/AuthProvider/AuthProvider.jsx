import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import useAxiosPublic from '../Hooks/useAxiosPublic';
import auth from '../firebase.config/firebase.config';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAxiosPublic from '../Hooks/useAxiosPublic';


const provider = new GoogleAuthProvider();
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
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
            const userEmail = currentUser?.email || user?.email
            console.log(userEmail);

            setUser(currentUser)
            console.log("user login in", currentUser);
            setIsLoading(false)
            if(currentUser){
                axiosSecure.post('/jwt', {email: userEmail},)
                .then(res => {
                    console.log(res.data);
                })
            } 
            if(currentUser === null){
                console.log("ppppppppppppppp");
                    axiosPublic.post('/api/v1/logout')
                    .then(res => {
                        console.log(res.data);
                    })
             
            }
           
                
            })  
        return () => {
            unSubcribe()
        }
    }, [])


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