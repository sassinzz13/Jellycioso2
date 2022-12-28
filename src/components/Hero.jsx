import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div id="div_id" className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center
         flex flex-col justify-center'>
            <h1 className='uppercase text-greenwhich md:text-5xl sm:text-4xl text-3xl font-bold md:py-4 '>Palamig Ka Muna</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Our jellycious Buko Pandan</p>
                <Typed strings={['Malamig', 'Matamis', 'Masarap', 'Bili na']} typeSpeed={120} backSpeed={140} loop className='text-brownish md:text-xl sm:text-2xl text-xl font-bold uppercase'/>
            </div>
            <button className='bg-greenish w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer'><a href="https://www.facebook.com/profile.php?id=100086410388935">Visit our Fb Page</a></button>
        </div>

    </div>
  )
}

export default Hero