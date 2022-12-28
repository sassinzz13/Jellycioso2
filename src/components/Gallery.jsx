import React from 'react'
import crew from '../assets/crew.jpg'
import product from '../assets/product.jpg'
import team from '../assets/team.png'
import Fade from 'react-reveal/Fade';

const Gallery = () => {
  return (
    <div id="div_id2" className='w-full py-16 px-4'>
        <Fade bottom>
        <h1 className='text-gradient text-[30px] md:text-[60px] text-center'>Our gallery</h1>
        </Fade>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white'>
        <Fade bottom>
        <img src={product} alt="product" className=' md:block w-[500px] mx-auto my-4 shadow-lg shadow-greenwhich rounded-2xl cursor-pointer' />
        <div className='flex flex-col justify-center'>     
            <h1 className='font-bold capitalize md:text-4xl sm:text-3xl text-2xl py-2'>Jellycioso special buko pandan</h1>
            <p className='font-poppins py-2'>Our very first and main product
            </p>
        </div>
        </Fade>

        
        
        </div>
        
        <div className='w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white'>
        <Fade bottom>
        <img src={crew} alt="product" className=' md:block w-[500px] mx-auto my-4 shadow-lg shadow-greenwhich rounded-2xl cursor-pointer' />
        <div className='flex flex-col justify-center'>
            
            <h1 className='font-bold capitalize md:text-4xl sm:text-3xl text-2xl py-2'>The selling of our product</h1>
            <p className='font-poppins py-2'>This picture commemorates our first day of selling
            </p>
            
        </div>
        </Fade>
        

        
        
        </div>
        

        

        
    </div>
    </div>
  )
}

export default Gallery