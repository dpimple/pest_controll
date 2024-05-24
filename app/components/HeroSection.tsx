import React from 'react'
import family from '../assets/family.jpg'
const HeroSection = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex flex-row h-[500px] items-center  bg-cover bg-center ">
     <div className='flex flex-col w-[900px] bg-black h-full '>
        <p className='font-bold text-7xl ml-16 mt-8 text-white'>Get Started Today with a Free Quote!</p>
        <p className='font-bold text-3xl ml-16 mt-6 text-white'>Our team of experienced and professionally-trained exterminators understands that each pest infestation is unique, which is why we offer customized pest solutions.</p>
        <button className='bg-btncolor p-1 w-96 text-white font-bold text-lg ml-16 mt-6'>Get Your Free, No-Commitment Estimate</button>
        </div>  
      <img src={family} className='w-[800px] h-[500px]'/>
      </div>
      <div className='flex flex-row h-24 font-bold text-3xl items-center justify-center bg-orange-400 text-white'>
      Are You Unhappy With Your Current Pest Control Company?
   <button className='bg-btncolor text-white text-xl h-10 ml-4 p-1 font-normal'>Switch to sound Pest control</button>
      </div>

  </div>
  )
}

export default HeroSection