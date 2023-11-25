import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import DonerHome from "./DashboardPages/Donor/DonerHome"

const DashboardLayout = () => {

    return (
      <div className='relative min-h-screen md:flex'>
      
        
        <Sidebar></Sidebar>
        <div className='flex-1  md:ml-80'>
   
          <div className='p-5'><Outlet></Outlet></div>
          
        </div>
      </div>
    )
  }
  
  export default DashboardLayout