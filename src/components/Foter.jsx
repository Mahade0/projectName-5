import React from 'react'
import './fanimation.css'
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Foter = () => {
  return (
    <footer className='relative w-full z-0 bg-[#3586FF]'>
      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>

      </div>
 <div className='md:px-28 px-6 flex flex-col py-4  gap-12 '>
      <div className='flex flex-col md:flex-row gap-6 md:gap-0  justify-between'>
        <div className='flex gap-4 md:gap-8 items-center md:items-start flex-col'>
          <h3 className='text-3xl font-semibold'>News Latter</h3>
          <div className='border-b border-black flex gap-2 pb-2'>
            <input type="email" required className='outline-none text-xl bg-[#3586FF] text-gray-200 placeholder-gray-200' placeholder='Enter your email' />
            <button className='text-xl font-semibold text-gray-200'>Subscribe</button>
          </div>
        </div>
        <div className='flex gap-4 md:gap-8 items-center md:items-start flex-col'>
          <h3 className='text-3xl font-semibold'>Information</h3>
          <div className='flex-col md:items-start items-center flex gap-2 pb-2'>
            <h5 className='text-[18px] font-semibold text-gray-200'>Our Community</h5>
            <h5 className='text-[18px] font-semibold text-gray-200'>Freedom Healing Center</h5>
            <h5 className='text-[18px] font-semibold text-gray-200'>OR Festival</h5>
            <h5 className='text-[18px] font-semibold text-gray-200'>Festival FAQ</h5>

          </div>
        </div>
        <div className='flex gap-4 md:gap-8 items-center md:items-start  flex-col'>
          <h3 className='text-3xl font-semibold'>Terms & Conditions</h3>
          <div className='flex-col items-center flex gap-2 '>
            <h5 className='text-[18px] font-semibold text-gray-200'>Terms of Service</h5>
            <h5 className='text-[18px] font-semibold text-gray-200'>Privacy Policy</h5>


          </div>
        </div>
        <div className='flex gap-4 md:gap-8  items-center md:items-start flex-col'>
          <h3 className='text-3xl font-semibold'>Contact Us</h3>
          <div className='flex-col md:items-start items-center flex gap-4  text-2xl'>
            <span className='flex gap-2 items-center'>
              <MdPhoneInTalk />
              <p>240-247-1299</p>
            </span>
            <span className='flex gap-2 items-center'>
              <MdEmail />
              <p>example@domain.com</p>
            </span>
            <div className='flex  gap-4 justify-around items-center '>
              <FaFacebookF className=' cursor-pointer  p-[8px] text-white bg-[#3C5999] rounded-full  text-[45px] font-semibold' />
              <FaTwitter className='bg-[#5EA9DE] rounded-full p-[8px] cursor-pointer text-white  text-[45px] font-semibold' />
              <FaLinkedinIn className='bg-[#027BBA] rounded-full p-[10px] cursor-pointer text-white  text-[45px] font-semibold' />
              <FaInstagram className='bg-[#C84C4D] rounded-full p-[8px] cursor-pointer text-white  text-[45px] font-semibold' />

            </div>
          </div>
        </div>

      </div>
      <div className='py-4 border-t-2 border-black'>

               <p className='text-center text-xl text-gray-200'>© Freedom Healing Church Inc. 2024</p>
      </div>
    </div>
    </footer>
   
  )
}

export default Foter