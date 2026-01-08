
import React from 'react'
import { useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider.jsx'
import { UserContext } from './context/UserProvider.jsx'
const App = () => {

  const [user , setUser] = useState(null);
 
  const data = useContext(AuthContext);
  const {setLoggedInUserData } = useContext(UserContext);

  // useEffect(() => {
  //   if(data){
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //   }}
  // }, []);


   const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == 'adminSecure123'){
      setUser('admin');
      const admin = data.admin.find((a)=> a.email === email);
      console.log('Admin data found:', admin);
      setLoggedInUserData(admin);
      
      
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
    }else if(data){
      const employee = data.employees.find((e)=>{ return e.class === "employee" && e.email === email} );
      console.log('Searching for employee with email:', employee);
      
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee'}));
      }
    }else{
      alert('Invalid credentials');
    }
  };
 
  
 

  return (
    <div>
    {!user? <Login handleLogin={handleLogin} />
    : user === 'admin'? <AdminDashboard /> 
      : user === 'employee'? <EmployeeDashboard  />
        : null
}

     

    </div>
    
  )
}
export default App;