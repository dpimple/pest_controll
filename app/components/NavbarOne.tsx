

import '@fortawesome/fontawesome-free/css/all.css';
const NavbarOne = () => {
  return (
    <>
    <nav className='flex flex-col md:flex-row w-full md:h-14 h-24 justify-center md:justify-between items-center font-body  bg-gray-800 '>
      <div className='flex md:flex-row items-center mb-2 md:mb-0 md:ml-20'><p className="text-white font-bold md:text-lg mr-2">4.4 Star Rating</p>
      {/* <ReactStars
        count={5}
        value={4.4}
        size={30}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false} 
      /> */}
    <p className="text-white font-bold md:text-lg ml-2">82 reviews</p>
</div>
<div className="flex flex-row md:mr-20">
  <button className="bg-btncolor text-white font-bold p-1 md:p-2 mr-3">Contact Us</button>
  <button className="bg-btncolor text-white font-bold p-1 md:p-2 "> Special Offers</button>
</div>
    </nav>
    </>
  )
}

export default NavbarOne