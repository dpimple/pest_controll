import React from 'react'
import { GiSeatedMouse } from "react-icons/gi";
import { GiAnt } from "react-icons/gi";
import { SiCockroachlabs } from "react-icons/si";
const Problem = () => {
  return (
    <div className='flex flex-col w-full  items-center justify-center bg-gray-300'>
      <div className='text-3xl text-center mt-4'>What kind of <span className='font-bold text-3xl'>problem </span>are you having? <span className='font-bold text-2xl'>Select all that apply.</span></div>
      <div className='flex flex-col m-4  items-center justify-center'>
        <div className='flex flex-row gap-6 '>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl pl-2 pr-2 w-48 h-14 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiSeatedMouse className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Rodents</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 w-48  h-14 rounded-3xl pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Carpenter Ants</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48  h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Odorous House Ants</p> </div>
          
        </div>
        <div className='flex flex-row gap-6 mt-6'>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Termites</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><SiCockroachlabs className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Bed Bugs</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiSeatedMouse className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Moles</p> </div>
          
        </div>
        <div className='flex flex-row gap-6 mt-6'>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Termites</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><SiCockroachlabs className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Bed Bugs</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiSeatedMouse className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Moles</p> </div>
          
        </div>
        <div className='flex flex-row gap-6 mt-6'>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Termites</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><SiCockroachlabs className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Bed Bugs</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiSeatedMouse className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Moles</p> </div>
          
        </div>
        <div className='flex flex-row gap-6 mt-6'>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Termites</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><SiCockroachlabs className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Bed Bugs</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiSeatedMouse className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Moles</p> </div>
          
        </div>
        <div className='flex flex-row gap-6 mt-6'>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Termites</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><SiCockroachlabs className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Bed Bugs</p> </div>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiSeatedMouse className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Moles</p> </div>
          
        </div>
        <div className='flex flex-row gap-6 mt-6'>
          <div className='group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600'>
          <div className='flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2'><GiAnt className='text-red-600 group-hover:text-white h-10 w-10'/> </div><p className='text-2xl'>Termites</p> </div>
        
          
        </div>
      </div>
      <div className='flex flex-row mt-9 items-center '>
       <button className='bg-btncolor p-2 mr-8 text-white font-bold'>More Option</button>
       <button className='bg-btncolor p-2 text-white font-bold'>Get My Solution</button>

      </div>

    </div>
  )
}
export default Problem