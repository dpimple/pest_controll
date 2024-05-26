import React, { useState } from 'react';
import { Link } from "@remix-run/react";
import Logo from '../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import styles from '../styles/style.css'
const NavbarLogo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  return ( 
    <div className='flex flex-col font-body z-50'>  
        <div className='hidden  md:flex flex-row items-center justify-between md:h-32 bg-white '>
      <div className='ml-16'><img src={Logo} className='h-28 transform transition duration-300 hover:scale-110'/></div>
      <div className='flex flex-col mr-16 items-end'>
        <p className='hidden md:block md:font-bold md:text-2xl '>Call Your Local Pest Pros Today!</p>
        <p className='font-bold text-4xl text-red-600 hidden md:block'>Call Us Today! 360-810-5420</p>
      </div>

      </div>
      <div className='hidden  md:flex flex-row h-12 w-full md:relative drop-down items-center justify-center gap-6 bg-red-500 z-30 '>
      <div className="relative">
      <div
        className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        Our Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180"
        >
          <path
            className="fill-current"
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <div className="absolute left-0  py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"  onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}>
          {/* Dropdown Content */}
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
             Pest Control
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Ant Control
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Bed Bug Tretment
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Rodent Control
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Mole Control
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Crawl Space Repair
          </Link>
        </div>
      )}
    </div>
    <div className="relative">
      <div
        className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white"
        onMouseEnter={() => setIsDropdownOpen1(true)}
        onMouseLeave={() => setIsDropdownOpen1(false)}
      >
       About Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180"
        >
          <path
            className="fill-current"
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </div>
      {isDropdownOpen1 && (
        <div className="absolute left-0  py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"  onMouseEnter={() => setIsDropdownOpen1(true)}
        onMouseLeave={() => setIsDropdownOpen1(false)}>
          {/* Dropdown Content */}
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Our Blog
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Common Pests
          </Link>
        
        </div>
      )}
    </div>
    <div className="relative">
      <div
        className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white"
        onMouseEnter={() => setIsDropdownOpen2(true)}
        onMouseLeave={() => setIsDropdownOpen2(false)}
      >
        Areas We Service
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180"
        >
          <path
            className="fill-current"
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </div>
      {isDropdownOpen2 && (
        <div className="absolute left-0  py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"  onMouseEnter={() => setIsDropdownOpen2(true)}
        onMouseLeave={() => setIsDropdownOpen2(false)}>
          {/* Dropdown Content */}
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
             Mumbai
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Thane
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
         Kalyan
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Bhiwandi
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Ulhasnagar
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Ambernath
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Titwala
          </Link>
        </div>
      )}
    </div>
    <div className="relative">
      <div
        className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white"
      
      >
       Special Offers
        
      </div>
      
    </div>
    <div className="relative">
      <div
        className="group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white"
        onMouseEnter={() => setIsDropdownOpen4(true)}
        onMouseLeave={() => setIsDropdownOpen4(false)}
      >
      Contact Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180"
        >
          <path
            className="fill-current"
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </div>
      {isDropdownOpen4 && (
        <div className="absolute left-0  py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-1"  onMouseEnter={() => setIsDropdownOpen4(true)}
        onMouseLeave={() => setIsDropdownOpen4(false)}>
          {/* Dropdown Content */}
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
           Get A Free Quote
          </Link>
          <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Refer A Friend
          </Link>
        </div>
      )}
    </div>
    
      </div>
      <div className='md:hidden flex flex-row h-16 w-full justify-around'>
  <img src={Logo} className='h-14'/>
 <div className='flex items-center font-bold  text-lg text-red-700'>
  MENU
 <IoMdMenu className='text-4xl m-2' />
 </div>
      </div>

    </div>
  )
}


export default NavbarLogo