

import { useEffect, useState } from 'react'
import useAuth from '../../../Hooks/useAuth'
import { userSingleData } from '../../../api/ultis'
import axiosInterseptor from '../../../api/auth'
import useUserInfo from '../../../Hooks/useUserInfo'
// import useRole from '../../../hooks/useRole'
// import { Helmet } from 'react-helmet-async'

const Profile = () => {
const [singleUser] = useUserInfo()

  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <Helmet>
        <title>Profile</title>
      </Helmet> */}
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={singleUser?.image}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
            {/* {role && role.toUpperCase()} */}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Role: {singleUser?.role}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                {singleUser?.Name}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{singleUser?.email}</span>
              </p>

              <div>
                <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
            <div className='flex gap-10'>
            <p className='flex flex-col'>
                District:
                <span className='font-bold text-black '>
                {singleUser?.district
}
                </span>
              </p> 
            <p className='flex flex-col'>
                Upazila:
                <span className='font-bold text-black '>
                {singleUser?.upazilia}
                </span>
              </p> 
            <p className='flex flex-col'>
                Blood Group
                <span className='font-bold text-black '>
                {singleUser?.bloodGroup}
                </span>
              </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile