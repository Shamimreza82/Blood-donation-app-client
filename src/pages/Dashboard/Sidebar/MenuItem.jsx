import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-2  transition-colors duration-200 transform  hover:bg-red-200 hover:rounded-md   hover:text-gray-900 ${
          isActive ? 'bg-red-500  text-white rounded-md' : 'text-gray-600 '
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem