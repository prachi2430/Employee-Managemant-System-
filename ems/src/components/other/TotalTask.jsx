import React from 'react'

const TotalTask = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>
      <div className='p-10 w-[45%] bg-red-400 rounded-xl flex flex-col items-center justify-center space-y-3 mt-5'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

     <div className='p-10 w-[45%] bg-blue-300 rounded-xl flex flex-col items-center justify-center space-y-3 mt-5 '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-green-300
       rounded-xl flex flex-col items-center justify-center space-y-3 mt-5'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-yellow-300 rounded-xl flex flex-col items-center justify-center space-y-3 mt-5'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TotalTask