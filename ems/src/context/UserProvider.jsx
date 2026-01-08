import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext();
const UserProvider = ({children}) => {
  const [loggedInUserData , setLoggedInUserData] = useState(null);
  
  return (
    <>
      <UserContext.Provider value={{loggedInUserData, setLoggedInUserData}}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserProvider;
export {UserContext};