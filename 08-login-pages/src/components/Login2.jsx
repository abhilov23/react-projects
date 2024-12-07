import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


import  loginImg from '../assets/login.jpg'

const Login2 = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img src={loginImg} alt='/' className='absolute w-full h-full object-cover mix-blend-overlay'/>
    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>Brand</h2>
            <div className='flex justify-between'>
                <p><FaFacebook/> Facebook</p>
                <p><FcGoogle/> Google</p>
            </div>
            <div>
                <label>Username</label>
                <input type='username'/>
            </div>
            <div>
                <label>Password</label>
                <input type='Password'/>
            </div>
            <button>Sign In</button>
            <p><input type="checkbox"/>Remember Me</p>
            <p>Not a member? Sign up now!</p>
        </form>
    </div>
    </div>
  )
}

export default Login2