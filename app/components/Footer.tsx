import React from 'react'
import f1 from '../assets/f1.webp'
import f2 from '../assets/f2.webp'
import f3 from '../assets/f3.webp'
import logo from '../assets/logo1.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";
const Footer = () => {
  return (
   <div className='flex flex-col items-center  justify-center  w-full mt-4'>
    <div className='flex md:flex-row text-center flex-col w-full bg-red-600 h-fit p-4 items-center justify-center'>
    <p className='font-bold text-white text-3xl'>Get Started Today! Call us at
360-810-5420
or 
</p>
<button className='bg-black text-white h-8 p-1 ml-2'>Get a Free Estimate</button>
    </div>
<div className='flex flex-row items-center justify-center bg-white w-full h-28'>
  <img src={f1} className='md:h-16 h-12 mr-4 md:mr-10'/>
  <img src={f2} className='md:h-16 h-12 mr-4 md:mr-10'/>
  <img src={f3} className='md:h-16 h-12 mr-4 md:mr-10'/>

</div>

<div className='flex flex-col bg-gray-800 w-full'>
<div className='flex md:flex-row flex-col items-center justify-evenly'>
<div >
<img src={logo} className='h-28'/>
</div>
<div className="flex md:flex-row flex-col gap-3 md:gap-0 items-center ">
  <p className="relative text-lg font-medium group transition duration-300 text-white mr-4">
    Our Services
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
  </p>
  <p className="relative text-lg font-medium group transition duration-300 text-white mr-4 ">
  About Us
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
  </p>
  <p className="relative text-lg font-medium group transition duration-300 text-white mr-4">
  Areas We Service
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
  </p>
  <p className="relative text-lg font-medium group transition duration-300 text-white mr-4">
  Special Offers
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
  </p>
  <p className="relative text-lg font-medium group transition duration-300 text-white mr-4">
  Contact Us
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
  </p>
</div>
<div className='flex flex-row items-center mt-4 md:mt-0'>
<FaFacebookF className='text-white'/>
<FaGoogle className='text-white'/>
<RiFlowerFill className='text-white'/>
</div>
</div>
<div className='flex md:flex-row flex-col mt-8 items-center justify-evenly'>
  <div className='text-white'>© 2024 Sound Pest Control. All rights reserved.</div>
  <div className='flex md:flex-row flex-row justify-evenly mt-4 md:mt-0 '>
<div className='flex flex-col mr-5  md:mr-0'>
  <p className='font-bold text-white'>ADDRESS</p>
  <p className='text-white'>6701 Kitsap Way</p>
  <p className='text-white'>Bremerton WA 98312</p>
  <p className='text-white'>Tel:360-692-1616</p>
</div>
<div className='flex md:ml-4 flex-col'>
  <p className='font-bold text-white'>HOURS</p>
  <p className='text-white'>M-F: 8AM-5PM</p>
  <p className='text-white'>SAT: Closed</p>
  <p className='text-white'>SUN: Closed</p>

</div>
</div>
<div className='text-white'>Privacy Policy</div>
</div>

</div>
    </div>
  )
}

export default Footer