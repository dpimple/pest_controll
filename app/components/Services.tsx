import React from 'react'
import family from '../assets/family.jpg'
import ant from '../assets/ant.jpg'
import rat from '../assets/rat.jpg'
import { FaBug } from "react-icons/fa";
import { SiCockroachlabs } from "react-icons/si";
import { GiTribalPendant } from "react-icons/gi";
import { GiSeatedMouse } from "react-icons/gi";

const Services = () => {
  return (
  <div className='flex flex-col w-full h-fit bg-gray-900'>
    <div className=' border-red-500 border-b-8 w-fit mr-auto ml-auto mt-2'>
   <p className='font-bold text-white md:text-4xl text-2xl text-center '>Check Out Our Pest Services</p>
   </div>
   <div className='flex flex-wrap h-full w-full items-center justify-evenly pb-4 mt-4'>
    <div className="flex flex-row h-[400px] w-80 items-center md:mr-20 p-4 mb-5 bg-no-repeat bg-cover bg-center hover:bg-black hover:opacity-50" style={{ backgroundImage: `url(${family})` }} >
      <div className=' h-full w-full flex flex-col justify-end gap-5'>
        <div className='bg-red-600 h-11 w-11 rounded-full flex items-center justify-center'>
        <SiCockroachlabs  className='text-white text-2xl'/>
        </div>
        <div className='font-bold text-3xl text-white'>Pest Control</div>
        <div className='text-white text-lg'>
          have Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, soluta ducimus aperiam velit deserunt suscipit repudiandae 
        </div>
        <button className='bg-btncolor w-36 font-bold text-white h-8 mr-auto ml-auto hover:bg-white hover:text-red-800 opacity-100'>Learn More</button>
      </div>

    </div>

    <div className="flex flex-row h-[400px] w-80 items-center md:mr-20 p-4 mb-5 bg-no-repeat bg-cover bg-center hover:bg-black hover:opacity-50" style={{ backgroundImage: `url(${ant})` }} >
      <div className=' h-full w-full flex flex-col justify-end gap-5'>
        <div className='bg-red-600 h-11 w-11 rounded-full flex items-center justify-center'>
        <GiTribalPendant  className='text-white text-2xl'/>
        </div>
        <div className='font-bold text-3xl text-white'>Pest Control</div>
        <div className='text-white text-lg'>
          have Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, soluta ducimus aperiam velit deserunt suscipit repudiandae 
        </div>
        <button className='bg-btncolor w-36 font-bold text-white h-8 mr-auto ml-auto hover:bg-white hover:text-red-800 opacity-100'>Learn More</button>
      </div>

    </div>
    <div className="flex flex-row h-[400px] w-80 items-center p-4 mb-5 bg-no-repeat bg-cover bg-center hover:bg-black hover:opacity-50" style={{ backgroundImage: `url(${rat})` }} >
      <div className=' h-full w-full flex flex-col justify-end gap-5'>
        <div className='bg-red-600 h-11 w-11 rounded-full flex items-center justify-center'>
        <FaBug  className='text-white text-2xl'/>
        </div>
        <div className='font-bold text-3xl text-white'>Pest Control</div>
        <div className='text-white text-lg'>
          have Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, soluta ducimus aperiam velit deserunt suscipit repudiandae 
        </div>
        <button className='bg-btncolor w-36 font-bold text-white h-8 mr-auto ml-auto hover:bg-white hover:text-red-800 opacity-100'>Learn More</button>
      </div>

    </div>
    <div className="flex flex-row h-[400px] w-80 items-center p-4  bg-no-repeat bg-cover bg-center hover:bg-black hover:opacity-50" style={{ backgroundImage: `url(${rat})` }} >
      <div className=' h-full w-full flex flex-col justify-end gap-5'>
        <div className='bg-red-600 h-11 w-11 rounded-full flex items-center justify-center'>
        <GiSeatedMouse  className='text-white text-2xl'/>
        </div>
        <div className='font-bold text-3xl text-white'>Pest Control</div>
        <div className='text-white text-lg'>
          have Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, soluta ducimus aperiam velit deserunt suscipit repudiandae 
        </div>
        <button className='bg-btncolor w-36 font-bold text-white h-8 mr-auto ml-auto hover:bg-white hover:text-red-800 opacity-100'>Learn More</button>
      </div>

    </div>
    <div className="flex flex-row h-[400px] mt-4 md:mt-0 w-80 items-center p-4  bg-no-repeat bg-cover bg-center hover:bg-black hover:opacity-50" style={{ backgroundImage: `url(${family})` }} >
      <div className=' h-full w-full flex flex-col justify-end gap-5'>
        <div className='bg-red-600 h-11 w-11 rounded-full flex items-center justify-center'>
        <FaBug  className='text-white text-2xl'/>
        </div>
        <div className='font-bold text-3xl text-white'>Pest Control</div>
        <div className='text-white text-lg'>
          have Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, soluta ducimus aperiam velit deserunt suscipit repudiandae 
        </div>
        <button className='bg-btncolor w-36 font-bold text-white h-8 mr-auto ml-auto hover:bg-white hover:text-red-800 opacity-100'>Learn More</button>
      </div>

    </div>
    
   </div>
  </div>
  )
}

export default Services