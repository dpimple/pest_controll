import React from 'react'
import family from '../assets/family.jpg'
const HeroSection = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex flex-row h-[500px] items-center w-full  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${family})` }}>
     <div className='flex flex-col w-[900px] bg-right bg-black opacity-75 h-full '>
        <p className='font-bold text-3xl md:text-7xl md:ml-16 text-center mt-8 text-white'>Get Started Today with a Free Quote!</p>
        <p className='text-2xl md:font-bold text-center md:text-3xl md:ml-16 mt-6 text-white'>Our team of experienced and professionally-trained exterminators understands that each pest infestation is unique, which is why we offer customized pest solutions.</p>
        <button className='bg-btncolor ml-auto mr-auto p-1 w-96 text-white font-bold text-lg md:ml-16 mt-6'>Get Your Free, No-Commitment Estimate</button>
        </div>  
     
      </div>
      <div className='flex flex-col md:flex-row h-fit font-bold text-3xl items-center justify-center text-center bg-orange-400 text-white pt-4 pb-4'>
      Are You Unhappy With Your Current Pest Control Company?
   <button className='bg-btncolor text-white text-xl mt-4 md:mt-0 h-10 ml-4 p-1 font-normal'>Switch to sound Pest control</button>
      </div>

  </div>
  )
}

export default HeroSection