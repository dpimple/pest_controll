import React from 'react'
import Logo from '../assets/logo.webp'
const NavbarLogo = () => {
  return ( 
    <div className='flex flex-col'>  
        <div className='flex flex-row items-center justify-between md:h-32 bg-white'>
      <div className='ml-16'><img src={Logo} className='h-28 transform transition duration-300 hover:scale-110'/></div>
      <div className='flex flex-col mr-16 items-end'>
        <p className='font-bold text-2xl'>Call Your Local Pest Pros Today!</p>
        <p className='font-bold text-4xl text-red-600'>Call Us Today! 360-810-5420</p>
      </div>

      </div>
      <div className='flex flex-row h-12 w-full items-center justify-center gap-6 bg-red-500 '>
      <div className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white">
      Our Services
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180">
        <path className="fill-current" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
      </svg>
    </div>
      <div className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white">About Us
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 ml-2  group-hover:text-white transition-transform group-hover:rotate-180">
        <path className="fill-current" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
      </svg></div>
      <div  className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white">Areas We Service <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180">
        <path className="fill-current" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
      </svg></div>
      <div  className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white">Special Offers</div>
      <div  className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white">Contact Us <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 ml-2  group-hover:text-white transition-transform group-hover:rotate-180">
        <path className="fill-current" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
      </svg></div>
      </div>

    </div>
  )
}

export default NavbarLogo