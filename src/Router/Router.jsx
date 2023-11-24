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
import DonationRequst from "../pages/HomePage/DonationRequst";
import AllUsers from "../pages/Dashboard/DashboardPages/Admin/AllUsers";
import ContantManagement from "../pages/Dashboard/DashboardPages/Admin/ContantManagement";
import DonationRequestAdmin from "../pages/Dashboard/DashboardPages/Admin/DonationRequestAdmin";
import DashboardHome from "../pages/Dashboard/DashboardHome";

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
        path: '/donationRequest', 
        element: <PrivateRoute>
            <DonationRequst></DonationRequst>
        </PrivateRoute>
    }, 
    {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>, 
        children: [
            {
                index: true, 
                element: <DashboardHome></DashboardHome>
            },

            //// donor Route
            {
                path: '/dashboard/myDonationRequest', 
                element: <MyDonationRequest></MyDonationRequest>
            }, 
            {
                path: '/dashboard/createDonation', 
                element: <CreateDonation></CreateDonation>
            }, 

            //////////////////////// app rols 
            {
                path: '/dashboard/profile', 
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/updateUser/:id', 
                element: <UpdateProfile></UpdateProfile>
            }, 

            ////// admin role
            {
                path: '/dashboard/allUsers', 
                element: <AllUsers></AllUsers>
            }, 
            {
                path: '/dashboard/contentManagement', 
                element: <ContantManagement></ContantManagement>
            }, 
            {
                path: '/dashboard/donationRequest', 
                element: <DonationRequestAdmin></DonationRequestAdmin>
            }, 

        ]
    }
])

export default router; 