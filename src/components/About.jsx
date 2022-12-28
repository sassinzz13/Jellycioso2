import React from 'react'
import product from '../assets/product.jpg'
import team from '../assets/team.png'

const About = () => {
  return (
    <div id="div_id1" className='w-full py-16 px-4 md:overflow-scroll'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white'>
        <img src={product} alt="product" className='hidden md:block w-[500px] mx-auto my-4 shadow-lg shadow-greenwhich rounded-2xl cursor-pointer' />
        <div className='flex flex-col justify-center'>
            <p className='text-greenish font-bold uppercase'>Our Product</p>
            <h1 className='font-bold capitalize md:text-4xl sm:text-3xl text-2xl py2'>Jellycioso special buko pandan</h1>
            <p className='font-poppins py-2'>This buko pandan was specially made by our production team 
                consisting of professionals and has carefully went through quality check ran by our management. 
                <p className='font-bold text-[20px]'>Available at our store for ₱20php</p>
            </p>
        </div>
        <img src={product} alt="product" className='w-[500px] mx-auto my-4 shadow-lg shadow-greenwhich rounded-2xl md:hidden ' />
        </div>
        <div className='w-full py-16  md:py-[10%]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white'>
        <div className='flex flex-col justify-center'>
            <p className='text-greenish font-bold uppercase'>Who are we</p>
            <h1 className='font-bold capitalize md:text-4xl sm:text-3xl text-2xl py-2'>We are Team Bill Gates</h1>
            <p className='font-poppins py-2'> We are a group of students who are tasked to sell a product
            for a project at school, the product we have chosen is a famous filipino
            made sweet called buko pandan, since the philippines is a really hot place 
            we decided to make a chill product to cool off our customers.</p>
            <h1 className='py-4 font-bold md:absolute top-[155%] md:left-[69%] md:py-4'>See Our Organizational Structure</h1>
            <img src={team} alt="product" className='cursor-pointer w-[500px] mx-auto my-4  shadow-lg shadow-brownish rounded-2xl md:mx-[120%] md:absolute top-[160%] md:left-[-60%]' />
        </div>
        
        </div>
    </div>
    </div>

    
  )
}

export default About