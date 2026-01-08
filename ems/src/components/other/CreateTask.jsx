import React from 'react'

const CreateTask = () => {
   const hadleformsubmit=(e)=>{
    e.preventDefault();
  }

  return (
   <>
    <div className='mt-7'>
      <h1 className='text-3xl font-bold text-gray-400 mb-5 '> 📝Create Task </h1>
      <form onSubmit={hadleformsubmit}>
        <h3>Task Title</h3>
        <input type="text" placeholder='Enter Task Title' className='w-full p-2 rounded-md bg-gray-800 mb-4'/>
        <h3>Task Description</h3>
        <textarea placeholder='Enter Task Description' className='w-full p-2 rounded-md bg-gray-800 mb-4'></textarea>
        <h3>Due Date</h3>
        <input type="date" className='w-full p-2 rounded-md bg-gray-800 mb-4'/>
        <h3>Assign To</h3>
        <input type="text" placeholder='Enter Employee Name' className='w-full p-2 rounded-md bg-gray-800 mb-4'/>
        <h3>category</h3>
        <input type='text' className='w-full p-2 rounded-md bg-gray-800 mb-4' placeholder='design, dev, etc'></input>
        <button type="submit" className='bg-amber-500 text-black px-4 py-2 rounded-md mt-4 hover:bg-amber-600' >Create Task</button>

      </form>
    </div>
   </>
  )
}

export default CreateTask