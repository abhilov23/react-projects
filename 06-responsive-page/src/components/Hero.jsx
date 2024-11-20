import React from 'react'
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl  text-4xl font-bold md:py-4'>Growing with data.</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-3'>Fast, Flexible financing for</p>
            <ReactTyped strings={['BTB', 'BTC', 'SAAS']}
             typeSpeed={120} 
             backspeed={140}
             className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
              loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms.</p>
         <button className='hover:bg-[#00df9a] bg-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started!</button>
        </div>
    </div>
  )
}

export default Hero