import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
    }, 
    {
        path: '/login', 
        element: <Login></Login>
    },
    {
        path: '/register', 
        element: <Register></Register>
    }, 
    {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>, 
        children: [
            
        ]
    }
])

export default router; 