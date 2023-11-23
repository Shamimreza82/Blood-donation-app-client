import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {

    }, 
    {
        path: '/login', 
        element: <Login></Login>
    },
    {
        path: '/register', 
        element: <Register></Register>
    }
])

export default router; 