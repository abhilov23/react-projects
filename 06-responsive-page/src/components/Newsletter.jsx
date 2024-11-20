import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
       <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
       <div className='lg:col-span-2'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold  font-bold py-2'>Want tips and trips to optimize your flow?</h1>
        <p> Sign up to our news letter and stay up to date.</p>
       </div>
       <div className='my-4'>
         <input type='email' placeholder='Enter Email'/>
         <button className='hover:bg-[#00df9a] bg-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-2 ml-6  text-black shadow'>Notify me!</button>
       </div>
       </div>
    </div>
  )
}

export default Newsletter