import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider.jsx'
import { useEffect } from 'react'

const Header = () => {
  const {loggedInUserData } = useContext(UserContext);
   useEffect(() => {
    if (loggedInUserData) { // Added check for loggedInUserData 
    }
  }, [loggedInUserData]);

  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>
        {loggedInUserData?.name ?? "Preachi"}👋
      </span></h1>
      <button className='bg-red-500 text-lg font-medium text-white px-5  py-3 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header