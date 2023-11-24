import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyDonationRequest from "../pages/Dashboard/DashboardPages/Donor/MyDonationRequest";
import CreateDonation from "../pages/Dashboard/DashboardPages/Donor/CreateDonation";
import Profile from "../pages/Dashboard/Profile/Profile";
import UpdateProfile from "../pages/Dashboard/Profile/UpdateProfile";

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

            //// donor Route
            {
                path: '/dashboard/myDonationRequest', 
                element: <MyDonationRequest></MyDonationRequest>
            }, 
            {
                path: '/dashboard/createDonation', 
                element: <CreateDonation></CreateDonation>
            }, 

            ////// app rols 
            {
                path: '/dashboard/profile', 
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/updateUser/:id', 
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    }
])

export default router; 