import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react';
const Navbar = () => {
   const [nav,setNav] = useState(false);

   const handleNav = ()=>{
     setNav(!nav);
   }

  return (
    <div className='text-white flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 '>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
        <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
            <li className="p-4">Services</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : < AiOutlineMenu size={20}/>}
        </div>
        <div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left=[-100%] hidden'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
                <ul className="pt-2 uppercase">
            <li className="p-4  border-gray-600">Home</li>
            <li className="p-4  border-gray-600">Company</li>
            <li className="p-4  border-gray-600">About</li>
            <li className="p-4  border-gray-600">Contact</li>
            <li className="p-4  border-gray-600">Services</li> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar