import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";
import useAuth from "../../Hooks/useAuth";
import { LuLogIn } from "react-icons/lu";


const Navber2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {logeOutUser, user} = useAuth()

  return (
    <div>
      <nav className="md:py-2 md:fixed  z-50 w-full "> 
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={logo} className="md:h-16 h-12" alt="Flowbite Logo" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100  focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-red-700 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={
              isOpen
                ? "hidden w-full md:block md:w-auto "
                : "w-full md:block md:w-auto "
            }
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-red-500 md:bg-transparent  dark:border-gray-700">
              <li>
               
              </li>
              <li>
                <Link
                to='/donationRequest'
                  className="block md:text-base md:bg-red-600 hover:scale-105 duration-200 md:font-bold md:uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:p-0 dark:text-white md:text-white md:dark:hover:text-red-600 md:py-1 md:px-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Donation Request
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className="block md:text-base md:bg-red-600 hover:scale-105 duration-200 md:font-bold md:uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:p-0 dark:text-white md:text-white md:dark:hover:text-red-600 md:py-1 md:px-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              {
                user ? <>
                <li>
                <Link
                to='/dashboard'
                  className="block md:text-base md:bg-green-600 hover:scale-105 duration-200 md:font-bold md:uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:p-0 dark:text-white md:text-white md:dark:hover:text-red-600 md:py-1 md:px-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Dashboard
                </Link>
              </li>
                
                </> : <>
                <li>
                <Link
                to='/register'
                  className="block md:text-base md:bg-red-600 hover:scale-105 duration-200 md:font-bold md:uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:p-0 dark:text-white md:text-white md:dark:hover:text-red-600 md:py-1 md:px-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Registration
                </Link>
              </li>
                
                </>
              }
              {
                user ? <>
                 <li>
                <button 
                  onClick={() => logeOutUser ()}
                  className="block md:text-base md:bg-red-600 hover:scale-105 duration-200 md:font-bold md:uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:p-0 dark:text-white md:text-white md:dark:hover:text-red-600 md:py-1 md:px-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  LogOut
                </button>
              </li>
                </>: <>
                <li>
                <Link 
                  to='/login'
                  className="block md:text-base md:bg-red-600 hover:scale-105 duration-200 md:font-bold md:uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:p-0 dark:text-white md:text-white md:dark:hover:text-red-600 md:py-1 md:px-2 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login <LuLogIn className="inline-flex text-xl"></LuLogIn>
                </Link>
                
              </li>
              </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber2;
