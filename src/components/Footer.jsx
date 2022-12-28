import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>JELLYCIOSO.</h1>
        <p className='py-4'>Team Bill Gates | All rights reserved</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='hidden md:lg:col-span-2 md:flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-gray-400'>Navigation</h6>
        <ul className='flex shadow-red-200 shadow-xl font-poppins w-[430px] cursor-pointer rounded-xl'>
            <li className='px-3 py-2 text-[20px]'><a href="#div_id">Home</a></li>
            <li className='px-3 py-2 text-[20px]'><a href="#div_id1">About</a></li>
            <li className='px-3 py-2 text-[20px]'><a href="#div_id2">Gallery</a></li>
            <li className='px-3 py-2 text-[20px]'><a href="#div_id3">Review</a></li>
            <li className='px-3 py-2 text-[20px]'><a href="#div_id4">Location</a></li>
        </ul>
    </div>
<h1 className='text-black text-right '>If you are seeing this Poggers, please hire me @izamidev 
Facebook: https://www.facebook.com/profile.php?id=100067753743140</h1>
    
    
      </div>
    </div>
  );
};

export default Footer;