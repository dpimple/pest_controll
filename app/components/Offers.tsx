import React from 'react'
import logo from '../assets/logo.png'
import sofa from '../assets/sofa.jpg'
import gareenty from '../assets/garentee.png'
import { FaStar } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import '@fortawesome/fontawesome-free/css/all.css';
import dubai from '../assets/dubai.jpg'
const Offers = () => {
  return (
    <div className='flex flex-col'>
   <div className='flex md:flex-row flex-col w-full fit bg-slate-300 p-12' >
    <div className='flex md:flex-row flex-col  pl-12 pr-12 md:pl-0 md:pr-0 md:w-1/2 h-full items-center justify-evenly'>
    <div className='flex bg-gray-800 items-center justify-center w-full sm:w-72 h-fit'>
    <div className='border-dashed border-8 border-gray-400 w-full sm:w-64 h-fit flex flex-col items-center m-4'>
      <p className='font-bold text-white text-5xl text-center'>$30 off pest control</p>
      <p className='text-white text-3xl text-center'>For New Customers</p>
      <button className='bg-btncolor text-white w-52 h-8 text-sm'>Redeem Offer</button>
      <img src={logo} className='w-36 h-24 mt-1'/>
      <p className='text-white'>Expires:</p>
      <p className='text-white'>05/31/2024</p>
    </div>
  </div>
  <div className='flex flex-row w-full sm:w-1/2 h-full items-center justify-evenly'>
  <div className='flex bg-white items-center justify-center w-full sm:w-72 h-fit mt-4 md:mt-0'>
    <div className='border-dashed border-8 border-gray-400 w-full sm:w-64 h-fit m-4 flex flex-col items-center'>
      <p className='font-bold text-red-700 text-5xl text-center'>$30 off</p>
      <p className='text-black text-4xl text-center'>For Active & Veteran Military</p>
      <button className='bg-btncolor text-white mt-12 w-52 h-8 text-sm'>Redeem Offer</button>
      <img src={logo} className='w-36 h-24 mt-1'/>
      <p className='text-black'>Expires:</p>
      <p className='text-red-400'>05/31/2024</p>
    </div>
  </div>
</div>

    </div>
    <div className='flex flex-col md:w-1/2 h-full justify-center '>
      <p className='font-bold text-4xl pr-6 pl-6 pt-6'>Save Some Cash Today!</p>
      <p className='text-lg p-6'>We know that choosing a pest control service is an important decision. Let us make it easy for you to get started with us with these exclusive special offers!</p>
      <button className='bg-btncolor h-10 w-44 ml-5 text-white'>View All Saving</button>

    </div>
   </div>
   <div className="relative fit w-full">
   <div className="bg-cover bg-top h-full w-full flex flex-row items-center"
  style={{
    background: `
      linear-gradient(to right, #090707 15%, transparent 50%),
      linear-gradient(to left, #090707 15%, transparent 50%),
      url(${sofa})
    `,
    backgroundSize: "100%",
    backgroundRepeat:"no-repeat", // Adjust this value to make the background image smaller
    backgroundPosition: "center",
  }}
>
        <div className='flex flex-col md:w-1/2 p-12'>
          <p className='font-bold text-white text-4xl'>Serving Our Local Community</p>
          <p className='text-white text-lg'>We are highly committed to our community, and you'll know that by working with Sound Pest, you will have a hand in bettering the life of someone near you. Owner and operator of Sound Pest Control, Marty Huff, is the President of the Central Kitsap Food Bank. As a company, we make an effort to share our resources in conjunction with the food bank—making plenty of time to volunteer!</p>
        </div>
         <div className='hidden md:block' >
          <img src={gareenty} className='h-44'/>
         </div>
        </div>
    
    </div>
<div className='h-[450px] flex flex-col  bg-slate-300 '>
   <div className='font-bold text-lg flex items-center ml-auto mr-auto border-b-8 border-red-600 w-[75px] text-center mt-2'>Review</div>

   <div className='flex flex-row w-full h-full justify-evenly md:mt-8'>
  
 <div className=' flex flex-col h-4/5 md:h-[350px] w-1/4 bg-white pt-4'>
  <div className='flex flex-row items-center w-full justify-evenly'>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48"> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path> </svg>
  <div className='flex items-center'>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  </div>
<div className='font-bold -ml-3'>5 star review</div>
<RiDoubleQuotesR className='text-xl'/>
  </div>
  <div className='p-5 text-center'>
  Soft spoken and genuine  ,had gone for my mother's asthma treatment, she now has good control over it,thanks to the doctor
  </div>
  <div className='mt-auto p-5 font-bold'>shashikant shukla</div>
 </div>
     
 <div className=' flex flex-col h-4/5 md:h-[350px] w-1/4 bg-white pt-4 '>
  <div className='flex flex-row items-center w-full justify-evenly'>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48"> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path> </svg>
  <div className='flex items-center'>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  </div>
<div className='font-bold -ml-3'>5 star review</div>
<RiDoubleQuotesR className='text-xl'/>
  </div>
  <div className='p-5 text-center'>
  Thank you for the outstanding pest control service! Your team's professionalism, thoroughness, and eco-friendly approach were impressive. I'll happily recommend your agency to others.
  </div>
  <div className='mt-auto p-5 font-bold'>Warehouse Investment</div>
 </div>

 <div className=' flex flex-col h-4/5 md:h-[350px] w-1/4 bg-white pt-4'>
  <div className='flex flex-row items-center w-full justify-evenly'>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48"> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path> </svg>
  <div className='flex items-center'>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  <FaStar className='text-yellow-300 text-2xl'/>
  </div>
<div className='font-bold -ml-3'>5 star review</div>
<RiDoubleQuotesR className='text-xl'/>
  </div>
  <div className='p-5 text-center'>
  One word for their service,
OUTSTANDING.!!!
Using this service from past 4 years and as always you guys are wonderful and quick when it comes to service.
No cockroaches or insect visible for atleast 6months post pest control.
Keep it up .!!!!
  </div>
  <div className='mt-auto p-5 font-bold'>Arpit Joshi</div>
 </div>

   </div>

</div>


<div style={{ backgroundImage: `url(${dubai})` }}
        className="bg-cover  h-fit w-full  flex flex-col items-center md:-mb-4 ">
          <div className=" bg-black inset-0 opacity-50 h-full flex items-center flex-col p-8">
          <div className='font-bold md:text-5xl text-xl z-10 text-white '>Areas We Service in India</div>
          <div className='text-white text-lg md:text-xl z-20 mt-4 md:mt-10 md:w-1/2 text-center'>With over 15 years of combined experience, Sound Pest Control is proud to be a leader in pest control throughout India. Our talented exterminators provide our exceptional services to:</div>
          <div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
          <div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Mumbai
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' />  Thane
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Kalyan
</div>
<div className='flex flex-row items-center text-lg text-white  hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Bhiwandi
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Ulhasnagar
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Titwala 
</div>
</div>
</div>
</div>
   </div>
  )
}

export default Offers