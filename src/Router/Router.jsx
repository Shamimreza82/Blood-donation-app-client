import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyDonationRequest from "../pages/Dashboard/DashboardPages/Donor/MyDonationRequest";
import Profile from "../pages/Dashboard/Profile/Profile";
import UpdateProfile from "../pages/Dashboard/Profile/UpdateProfile";
import DonationRequst from "../pages/HomePage/DonationRequst";
import AllUsers from "../pages/Dashboard/DashboardPages/Admin/AllUsers";
import ContantManagement from "../pages/Dashboard/DashboardPages/Admin/ContantManagement";
import DonationRequestAdmin from "../pages/Dashboard/DashboardPages/Admin/DonationRequestAdmin";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import CreateDonationUpdate from "../pages/Dashboard/DashboardPages/Donor/CreateDonationUpdate";
import AllBloodDonationRequest from "../pages/Dashboard/DashboardPages/Admin/AllBloodDonationRequest";
import AddBlog from "../pages/Dashboard/DashboardPages/Admin/AddBlog";
import Blog from "../pages/Blog/Blog";
import DonorSearch from "../pages/Search/DonorSearch";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DetailsDonationRequest from "../pages/Dashboard/DashboardPages/Donor/detailsDonationRequest";
import Fundings from "../pages/Fundings/Fundings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/donorSearch",
    element: <DonorSearch></DonorSearch>,
  },
  {
    path: "/fundings",
    element: (
      <PrivateRoute>
        <Fundings></Fundings>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/donationRequest",
    element: (
      <PrivateRoute>
        <DonationRequst></DonationRequst>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },

      // donor Route
      {
        path: "/dashboard/myDonationRequest",
        element: <MyDonationRequest></MyDonationRequest>,
      },
      {
        path: "/dashboard/createDonation",
        element: (
          <PrivateRoute>
            <DonationRequst></DonationRequst>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/updateUser/:id",
        element: <UpdateProfile></UpdateProfile>,
      },

      /////////////////////Dashboard Routes/////////////////////

      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/contentManagement",
        element: <ContantManagement></ContantManagement>,
      },
      {
        path: "/dashboard/donationRequest",
        element: <DonationRequst></DonationRequst>,
      },
      {
        path: "/dashboard/createDonationUpdate/:id",
        element: <CreateDonationUpdate></CreateDonationUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/createDonationUpdate/${params.id}`),
      },
      {
        path: "/dashboard/allBloodDonationRequest",
        element: <AllBloodDonationRequest></AllBloodDonationRequest>,
      },
      {
        path: "/dashboard/contentManagement/add-Blog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/contentManagement/detailsDonationRequest/:id",
        element: (
          <PrivateRoute>
            <DetailsDonationRequest></DetailsDonationRequest>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/detailsDonationRequest/${params.id}`),
      },
    ],
  },
]);

export default router;
