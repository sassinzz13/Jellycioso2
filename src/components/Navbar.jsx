import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-scroll'


id:{
    name: "dead"
}

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick= () => setNav(!nav)
    const handleNav = () => {
        setNav(!nav)
    }
    const closeMenu = () => setClick(false)

  return (
    <div className='bg-black relative top-0 flex justify-between items-center h-24 mx-auto px-4
     text-white shadow-lg  md:shadow-cyan-500/50 rounded-2xl max-w-[1920px]'>
        <img src={logo2} alt="/" className='h-[100px]' />
        <h1 className='w-full text-3xl font-bold text-gradient'>Jellycioso</h1>
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4 hover:bg-greenish/30'><a href="/">Home</a></li>
            <li className='p-4 hover:bg-greenish/30'><a href="#div_id1">About</a></li>
            <li className='p-4 hover:bg-greenish/30'><a href="#div_id2">Gallery</a></li>
            <li className='p-4 hover:bg-greenish/30'><a href="#div_id3">Review</a></li>
            <li className='p-4 hover:bg-greenish/30'><a href="#div_id4">Location</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
        {!nav? <AiOutlineMenu size={20} />  : <AiOutlineClose size={20} />}
            
        </div>
        <div className={nav? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav? <AiOutlineMenu size={20} />  : <AiOutlineClose size={20} />}
        

        <h1 className='w-full text-3xl font-bold text-gradient m-4'>Jellycioso</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'><a href="/">Home</a></li>
            <li className='p-4 border-b border-gray-600'><a href="#div_id1">About</a></li>
            <li className='p-4 border-b border-gray-600'><a href="#div_id2">Gallery</a></li>
            <li className='p-4 border-b border-gray-600'><a href="#div_id3">Review</a></li>
            <li className='p-4'><a href="#div_id4">Location</a></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar