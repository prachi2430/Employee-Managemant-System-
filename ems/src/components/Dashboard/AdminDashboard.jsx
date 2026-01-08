import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import TaskList from '../TaskList/TaskList.jsx'
function AdminDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C]  w-screen text-amber-50 min-h-screen'>
    <Header />
     <CreateTask />
     <TaskList />
    </div>
  )
}

export default AdminDashboard