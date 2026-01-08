import { useEffect } from 'react' 
import React, { createContext }  from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { setLocalStorage } from '../utils/localStorage'

 const AuthContext = createContext()
const {employees,  admin } = getLocalStorage();
const authData = { employees,  admin };

const AuthProvider = ({children}) => {

  useEffect(() => {
    // Seed localStorage only once
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }
  }, []);

  return (
 
      <AuthContext.Provider value={authData}>
        {children}
      </AuthContext.Provider>
   
  )
}
export {AuthContext};
export default AuthProvider