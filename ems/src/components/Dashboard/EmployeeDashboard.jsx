import React from 'react'
import Header from '../other/Header.jsx'
import TotalTask from '../other/TotalTask.jsx'
import TaskList from '../TaskList/TaskList.jsx'
const EmployeeDashboard = ({loggedInUserData}) => {
  console.log('EmployeeDashboard received data:', loggedInUserData);
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen text-amber-50'>
      <Header />
      <TotalTask />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard