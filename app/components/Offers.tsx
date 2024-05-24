import React from 'react'
import logo from '../assets/logo.webp'
import sofa from ''
const Offers = () => {
  return (
    <div className='flex flex-col'>
   <div className='flex flex-row w-full h-[500px] bg-slate-300' >
    <div className='flex flex-row w-1/2 h-full items-center justify-evenly'>
    <div className='flex bg-gray-800 items-center justify-center w-full sm:w-72 h-[460px]'>
    <div className='border-dashed border-8 border-gray-400 w-full sm:w-64 h-[440px] flex flex-col items-center'>
      <p className='font-bold text-white text-5xl text-center'>$30 off pest control</p>
      <p className='text-white text-3xl text-center'>For New Customers</p>
      <button className='bg-btncolor text-white w-52 h-8 text-sm'>Redeem Offer</button>
      <img src={logo} className='w-36 h-24 mt-1'/>
      <p className='text-white'>Expires:</p>
      <p className='text-white'>05/31/2024</p>
    </div>
  </div>
  <div className='flex flex-row w-full sm:w-1/2 h-full items-center justify-evenly'>
  <div className='flex bg-white items-center justify-center w-full sm:w-72 h-[460px]'>
    <div className='border-dashed border-8 border-gray-400 w-full sm:w-64 h-[440px] flex flex-col items-center'>
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
    <div className='flex flex-col w-1/2 h-full '>
      <p className='font-bold text-4xl  p-6'>Save Some Cash Today!</p>
      <p className='text-lg p-6'>We know that choosing a pest control service is an important decision. Let us make it easy for you to get started with us with these exclusive special offers!</p>
      <button className='bg-btncolor  h-10 w-44 ml-5 text-white'>View All Saving</button>

    </div>
   </div>

   </div>
  )
}

export default Offers