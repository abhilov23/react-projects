import React from 'react'
import Laptop from "../assets/Laptop.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
        <div className='flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold'>Data analytics Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '> Manage data analytics centrally</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Id assumenda praesentium fuga odit at? Repudiandae ea,
                facilis dicta repellendus mollitia perferendis voluptatum reiciendis maxime,
                 enim a nisi corporis at. Ab.</p>
                 <button className='hover:bg-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white shadow mx-auto md:mx-0'>Get Started!</button>
        </div>
     </div>
    </div>
  )
}

export default Analytics