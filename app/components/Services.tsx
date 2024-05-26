import React from 'react'
import { GiRat } from "react-icons/gi";
import { GiAnt } from "react-icons/gi";
const Services = () => {
  return (
  <div className='flex flex-row h-72 bg-white justify-evenly w-full items-center p-4'>
    <div className='flex flex-col h-64 w-1/4 border-2 border-black justify-center items-center '>
     <div className=' bg-black text-white font-bold h-28 w-full text-center -mt-3 p-1 border-b-8 border-red-700'>Rodents</div>
     <div className='z-50 -mt-10  flex items-center bg-red-700 border-2 border-white justify-center rounded-full h-20 w-20'>
     <GiRat className='text-6xl'/>
     </div>
     <div className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugiat nobis</div>
     <button className='bg-btncolor w-2/3 p-1'>learn more</button>
    </div>
    <div className='flex flex-col h-64 w-1/4 border-2 border-black justify-center items-center '>
     <div className=' bg-black text-white font-bold h-28 w-full text-center -mt-3 p-1 border-b-8 border-red-700'>Odorous House Ants</div>
     <div className='z-50 -mt-10  flex items-center bg-red-700 border-2 border-white justify-center rounded-full h-20 w-20'>
     <GiAnt className='text-6xl text-white'/>
     </div>
     <div className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugiat nobis</div>
     <button className='bg-btncolor w-2/3 p-1'>learn more</button>
    </div>
    <div className='flex flex-col h-64 w-1/4 border-2 border-black justify-center items-center '>
     <div className=' bg-black text-white font-bold h-28 w-full text-center -mt-3 p-1 border-b-8 border-red-700'>Carpenter Ants</div>
     <div className='z-50 -mt-10  flex items-center bg-red-700 border-2 border-white justify-center rounded-full h-20 w-20'>
     <GiAnt className='text-6xl text-red-950'/>
     </div>
     <div className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugiat nobis</div>
     <button className='bg-btncolor w-2/3 p-1'>learn more</button>
    </div>
  
  </div>
  )
}

export default Services