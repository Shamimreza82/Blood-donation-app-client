import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, isLoading } = useAuth()
    const location = useLocation()

    if(isLoading){
        return <div className="min-h-screen flex justify-center items-center"> <span className="loading loading-bars loading-lg">LOading</span></div>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/register'></Navigate>
    }


    return children
};

export default PrivateRoute;