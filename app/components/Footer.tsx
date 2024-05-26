import React from 'react'
import f1 from '../assets/f1.webp'
import f2 from '../assets/f2.webp'
import f3 from '../assets/f3.webp'
import logo from '../assets/logo.png'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";
const Footer = () => {
  return (
   <div className='flex flex-col items-center  justify-center  w-full mt-4 font-body'>
    <div className='flex md:flex-row text-center flex-col w-full bg-red-600 h-fit p-8 items-center justify-center'>
    <p className='font-bold text-white text-3xl'>Get Started Today! Call us at
360-810-5420
or 
</p>
<button className='bg-black text-white font-semibold p-2 ml-2 text-center flex justify-center'>Get a Free Estimate</button>
    </div>
<div className='flex flex-row items-center justify-center bg-white w-full h-28'>
  <img src={f1} className='md:h-16 h-12 mr-4 md:mr-10'/>
  <img src={f2} className='md:h-16 h-12 mr-4 md:mr-10'/>
  <img src={f3} className='md:h-16 h-12 mr-4 md:mr-10'/>

</div>

<div className='flex flex-row justify-evenly bg-gray-800 w-full  p-6'>
<div className='flex flex-col w-72
gap-4  '>
<img src={logo}  className='h-44 w-44'/>
<div className='text-white'>Suvidha Pest Control established in 2010 with sole interest in pest management business in Mumbai, Maharashtra.</div>
<div className='felx flex-col'>
<div className='flex flex-row  items-center gap-2 text-white'><FaPhone className='text-orange-300' /> +91 970256 67541</div>
<div  className='flex flex-row  items-center gap-2 text-white'><FaPhone className='text-orange-300' /> +91 970256 67541</div>
<div  className='flex flex-row  items-center gap-2 text-white'><FaPhone  className='text-orange-300'/> +91 970256 67541</div>
<div  className='flex flex-row  items-center gap-2 text-white'>
<IoMdMail className='text-orange-300' />suvidapestcontrol4@gmail.com</div>
</div>
</div>
<div className='flex flex-col gap-5 w-72 mt-5'>
 <div className='font-blod text-2xl text-white '><span className='underline decoration-red-500 '>Our</span> Service</div>
 <div className='flex flex-col'>
<p className='text-white'>Pest Control Services</p>
<p className='text-white'>Termite Control</p>
<p className='text-white'>Bed bugs tretment</p>
<p className='text-white'>Wood borer</p>
<p className='text-white'>Honey comb</p>
<p className='text-white'>Rodent control</p>
 </div>
</div>
<div className='flex flex-col gap-5 w-52  mt-5'>
 <div className='font-blod text-2xl text-white '><span className='underline decoration-red-500 '>Qui</span>cklink</div>
 <div className='flex flex-col'>
<p className='text-white'>Home</p>
<p className='text-white'>About</p>
<p className='text-white'>Help Center</p>
<p className='text-white'>Services</p>
 </div>
</div>
<div className='flex flex-col w-96  mt-5'>
<div className='font-blod text-2xl text-white '><span className='underline decoration-red-500 '>Get</span>in Touch</div>
<div>
  <p className='text-white'>Enter your email, phone no. and receive the latest news from us</p>
  <div className='flex flex-row border bottom-1 border-white items-center justify-between'>
<p className='text-white'>email@example.com</p>
<IoMdMail className='text-white'/>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default Footer