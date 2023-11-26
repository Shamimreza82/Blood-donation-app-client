import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loeading from "../component/Loeading/Loeading";


const PrivateRoute = ({children}) => {

    const {user, isLoading } = useAuth()
    const location = useLocation()

    if(isLoading){
        return <Loeading></Loeading>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/register'></Navigate>
    }


    return children
};

export default PrivateRoute;