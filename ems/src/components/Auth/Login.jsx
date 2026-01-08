import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

   const [email , setEmail]=useState('');
   const [password , setPassword]=useState('');
   const submitHandler=(e)=>{
     e.preventDefault();
     handleLogin(email , password);
     setEmail('');
     setPassword('');
   }

  

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-black'>
      <div className='border-2 border-emerald-600 p-6 rounded-lg  h-80 w-80 flex flex-col justify-around'>
        <form className='flex flex-col space-y-5' onSubmit={(e)=>submitHandler(e)}>
          <input required className='border-2 h-10 text-amber-50  border-emerald-600 rounded-full' type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <div className='relative'>
            <input
              required
              className='border-2 h-10 text-amber-50 border-emerald-600 rounded-full pr-10 w-full'
              placeholder='Enter your password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button className='hover:text-blue-500 text-amber-50'>login</button>
        </form>
      </div>
    </div>
  )
}

export default Login