import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import { Helmet } from "react-helmet"


const DashboardLayout = () => {

    return (
      <div className='relative min-h-screen md:flex'>
            <Helmet>
                <title>Life Lines | Dashboard</title>
            </Helmet>
        <Sidebar></Sidebar>
        <div className='flex-1  md:ml-80'>
          <div className='p-5'><Outlet></Outlet></div>
        </div>
      </div>
    )
  }
  
  export default DashboardLayout