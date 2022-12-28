import React from 'react'
import ehman from '../assets/ehman.png'
import quote from '../assets/quote.png'
import hottie from '../assets/hottie.jpg'

const Review = () => {
  return (
    <div id="div_id3" className='w-full py-16 px-4 md:overflow-scroll'>
        <h1 className='text-gradient text-center text-[70px]'>Reviews</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white'>
    <img src={ehman} alt="product" className='md:block w-[200px] mx-auto my-4 shadow-lg shadow-greenwhich rounded-full cursor-pointer' />
    <div className='flex flex-col justify-center'>
        <p className='text-gradient font-bold uppercase'>Ehman Navarro</p> 
        <p className='font-poppins py-1'>"Masarap sya, maayos pag kakatimpla pero mas masarap sya<br></br> kung malamig lalo na ngayon mainit"</p>
        <p className='text-[50px] px-3 text-brownish'>&#42611; &#42611; &#42611; &#42611; &#42611;</p>
    </div>
    <img src={hottie} alt="product" className='md:block w-[200px] mx-auto my-4 shadow-lg shadow-greenwhich rounded-full cursor-pointer' />
    <div className='flex flex-col justify-center'>
        <p className='text-gradient font-bold uppercase'>Khris Toferson</p> <p className='text-brownish'>Grade 12 SHS Student</p>
        <p className='font-poppins py-1'>"Apaka sarap niya para kang kiniss ng crush mo"</p>
        <p className='text-[50px] px-3 text-brownish'>&#42611; &#42611; &#42611; &#42611; &#42611;</p>
        
    </div>
    </div>
    </div>
  )
}

export default Review