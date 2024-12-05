import React from 'react'
import LoginImg from '../assets/login.jpg';



const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
     <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
     </div>

     <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full m-auto bg-white p-4'>
            <h2 className='text-4xl font-bold text-center py-6'>Brand</h2>
            <div className='flex flex-col py-2 shadow-md'>
                <label>Username</label>
                <input type="text" />
            </div>
            <div className='flex flex-col py-2 shadow-md'>
                <label>Password</label>
                <input type="password" />
            </div>
            <button className='border w-full my-5 py-2  hover:bg-[#64748b] p-1 shadow-xl hover:text-white'>Sign-In</button>
            <div>
                <p>
                    <p className='w-full my-1 py-1 text-center'> <input type='checkbox'/> Remember Me</p>
                    <p className='w-full my-1 py-1 text-center hover:text-[#64748b]'>Create an account?</p>
                </p>
            </div>
        </form>
     </div>
    </div>
  )
}

export default Login