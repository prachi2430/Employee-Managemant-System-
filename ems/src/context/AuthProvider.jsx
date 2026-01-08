import React, { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage'
 const AuthContext = createContext()
const {employee,  admin } = getLocalStorage();
const authData = { employee,  admin };

const AuthProvider = ({children}) => {
  return (
 
      <AuthContext.Provider value={authData}>
        {children}
      </AuthContext.Provider>
   
  )
}
export {AuthContext};
export default AuthProvider