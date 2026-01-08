
import React from 'react'
import { useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider.jsx'
const App = () => {

  const [user , setUser] = useState(null);
  // const [loggedInUserData , setLoggedInUserData] = useState(null);
  const data = useContext(AuthContext);
  

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
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
    }else if(data){
      const employee = data.employee.find(e=> e.class === "employee" );
      
      if(employee){
        setUser('employee');
        console.log('employee login as' + employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee'}));
      }
    }else{
      alert('Invalid credentials');
    }
  };
 
  
 

  return (
    <div>
     {!user ? <Login handleLogin={handleLogin} /> : ""}
     {user === 'admin' && <AdminDashboard />}
     {user === 'employee' && <EmployeeDashboard />}

    </div>
    
  )
}
export default App;