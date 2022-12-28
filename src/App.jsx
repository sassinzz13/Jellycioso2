import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Review from './components/Review'
import Location from './components/Location'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Review />
      <Location />
      
      <Footer />
      
    </div>
   
  )
}

export default App