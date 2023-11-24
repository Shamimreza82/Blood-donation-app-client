import { useState } from 'react'
// Components
// import Logo from '../../Shared/Logo'
import MenuItem from './MenuItem'


import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import ToggleButton from './ToggleButton'
import useAuth from '../../../Hooks/useAuth'
import useUserInfo from '../../../Hooks/useUserInfo'
import { useNavigate } from 'react-router-dom'




const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
  const {logeOutUser} =useAuth()
  const [singelUser] = useUserInfo()
  const navigate = useNavigate()


    // For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
//   Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
         
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4   rounded-lg justify-center items-center  mx-auto'>
            <div className="flex flex-col items-center -mx-2">
            <img className="object-cover w-24 h-24 mx-2 rounded-full" src={singelUser?.image} alt="avatar"/>
            <h4 className="mx-2 mt-2 font-medium text-gray-800 ">{singelUser?.Name}</h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{singelUser?.email}</p>
            <p className="mx-2 mt-1 text-sm font-medium text-green-600 ">{singelUser?.role}</p>
        </div>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-2'>
            {/* If a user is host */}
            {/* <ToggleButton toggleHandler={toggleHandler} /> */}
            <nav>

              {/* donner Routes */}

              <MenuItem
              icon={FcSettings}
              label='Profile'
              address='/dashboard/profile'
              />
              <MenuItem
                icon={BsGraphUp}
                label='My Donation'
                address='/dashboard/myDonationRequest'
              />
              <MenuItem
                icon={BsGraphUp}
                label='Create Donation'
                address='/dashboard/createDonation'
              />


              {/* Admin Role */}


              { singelUser?.role === 'admin' && <MenuItem
                icon={BsGraphUp}
                label='All Users'
                address='/dashboard/allUsers'
              />}
              {singelUser?.role === 'admin' || singelUser?.role === 'volunteer' && <MenuItem
                icon={BsGraphUp}
                label='Donation Request'
                address='/dashboard/donationRequest'
              />}
              <MenuItem
                icon={BsGraphUp}
                label='Content Mangement'
                address='/dashboard/contentManagement'
              />
              {/* volienteer router  */}

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          
            <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
           <GrLogout className='w-5 h-5' />

            <span onClick={() => logeOutUser(navigate('/'))} className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar