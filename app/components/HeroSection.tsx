import React from 'react'
import family from '../assets/family.jpg'
import styles from '../styles/style.css'
const HeroSection = () => {
  return (
    <div className='flex flex-col font-body z-0'>
    <div className="flex  h-[500px] items-center w-full" style={{
  background: `linear-gradient(90deg, #090707 40%, transparent 50%), url(${family})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}>
     <div className='flex flex-col w-1/2 bg-right md:items-center md:justify-center h-full '>
        <p className='font-bold text-3xl md:text-6xl md:text-left md:ml-16 text-center   text-white'>Get Started Today with a Free Quote!</p>
        <p className='text-2xl md:font-bold md:text-left text-center md:text-3xl md:ml-16 mt-6 text-white'>Our team of experienced and professionally-trained exterminators understands that each pest infestation is unique, which is why we offer customized pest solutions.</p>
        <button className='bg-btncolor ml-auto mr-auto p-1 w-96 text-white font-bold text-lg md:ml-16 mt-6 hover:bg-white hover:text-red-700'>Get Your Free, No-Commitment Estimate</button>
        </div>  
     
      </div>
      <div className='flex flex-col md:flex-row h-fit font-bold text-3xl items-center justify-center text-center bg-orange-400 text-white p-8'>
      Are You Unhappy With Your Current Pest Control Company?
   <button className='bg-btncolor text-white text-xl mt-4  md:mt-0 h-10 ml-4 p-2 font-semibold'>Switch to sound Pest Control</button>
      </div>

  </div>
  )
}




export default HeroSection