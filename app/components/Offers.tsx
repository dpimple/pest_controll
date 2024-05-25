import React from 'react'
import logo from '../assets/logo.webp'
import sofa from '../assets/sofa.jpg'
import gareenty from '../assets/garentee.png'
import { FaGoogle } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import '@fortawesome/fontawesome-free/css/all.css';
import dubai from '../assets/dubai.jpg'
const Offers = () => {
  return (
    <div className='flex flex-col'>
   <div className='flex md:flex-row flex-col w-full fit bg-slate-300' >
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
    <div className='flex flex-col md:w-1/2 h-fit '>
      <p className='font-bold text-4xl  p-6'>Save Some Cash Today!</p>
      <p className='text-lg p-6'>We know that choosing a pest control service is an important decision. Let us make it easy for you to get started with us with these exclusive special offers!</p>
      <button className='bg-btncolor  h-10 w-44 ml-5 text-white'>View All Saving</button>

    </div>
   </div>
   <div className="relative fit w-full">
      <div
        style={{ backgroundImage: `url(${sofa})` }}
        className="bg-cover  h-full w-full bg-gradient-to-b from-gray-600 to-gray-900 flex flex-row items-center">
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

   <div className='flex flex-row justify-evenly mt-4'>
  
  <div className='h-80 w-64 bg-white flex flex-col mr-10 items-center'>
    <div className='flex flex-row mt-8  items-center justify-evenly'>
  <FaGoogle size={30}/>
  <ReactStars
        count={5}
        value={5}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false} 
      /><p className='font-bold'>5 Star</p>
      </div>
      <div className='text-lg pr-4 pl-4'>
      reating a centered background image with black shades on the left and right sides enhances the visual appeal of a web component. Using Tailwind CSS
      </div>
      <p className='font-bold text-right '>amey gupta</p>
        </div>
  <div className='hidden h-80 w-64 bg-white md:flex flex-col mr-10 items-center'>
    <div className='flex flex-row mt-8  items-center justify-evenly'>
  <FaGoogle size={30}/>
  <ReactStars
        count={5}
        value={5}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false} 
      /><p className='font-bold'>5 Star</p>
      </div>
      <div className='text-lg pr-4 pl-4'>
      reating a centered background image with black shades on the left and right sides enhances the visual appeal of a web component. Using Tailwind CSS
      </div>
      <p className='font-bold text-right '>amey gupta</p>
        </div>
  <div className='hidden h-80 w-64 bg-white md:flex flex-col items-center'>
    <div className='flex flex-row mt-8  items-center justify-evenly'>
  <FaGoogle size={30}/>
  <ReactStars
        count={5}
        value={5}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false} 
      /><p className='font-bold'>5 Star</p>
      </div>
      <div className='text-lg pr-4 pl-4'>
      reating a centered background image with black shades on the left and right sides enhances the visual appeal of a web component. Using Tailwind CSS
      </div>
      <p className='font-bold text-right '>amey gupta</p>
        </div>
     

   </div>

</div>

<div>

</div>
<div style={{ backgroundImage: `url(${dubai})` }}
        className="bg-cover  h-fit w-full  flex flex-col items-center -mb-5">
          <div className=" bg-black opacity-50 h-full flex items-center flex-col">
          <div className='font-bold md:text-5xl text-xl text-white mt-10'>Areas We Service in Northwest Washington</div>
          <div className='text-white text-lg md:text-xl mt-4 md:mt-10 md:w-1/2 text-center'>With over 30 years of combined experience, Sound Pest Control is proud to be a leader in pest control throughout Northwest Washington. Our talented exterminators provide our exceptional services to:</div>
          <div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
          <div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
</div>
<div className='flex flex-row justify-evenly w-1/2 md:mt-5'>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
<div className='flex flex-row items-center text-lg text-white hover:underline transition duration-400'>
  <FaGreaterThan className='text-red-600 text-sm mr-1' /> Island
</div>
</div>


</div>
</div>
   </div>
  )
}

export default Offers