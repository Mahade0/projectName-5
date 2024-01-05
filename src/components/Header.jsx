import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import {motion} from 'framer-motion'
const Header = () => {
  const [togle,setTogle]=useState(false)
  return (
    <div className='flex justify-between pt-8 relative '>
        <div className='text-[#2A4516] font-serif text-4xl cursor-pointer font-bold'>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-12 items-center'>
            <button className='bg-[#FEEBB3] text-[#294617] hidden md:block font-serif text-xl font-semibold px-6 py-2 rounded-[25px]'>Or Festival</button>
            <div className='flex flex-col gap-[5px] cursor-pointer' onClick={()=>setTogle(!togle)}>
              <span className='w-8 rounded-sm h-1 bg-[#FEEBB3] shadow-md shadow-black' />
              <span className='w-8 rounded-sm h-1 bg-[#FEEBB3] shadow-md shadow-black' />
              <span className='w-8 rounded-sm h-1 bg-[#FEEBB3] shadow-md shadow-black' />

            </div>
        </div>
        <motion.div className={`${togle?'block ':'hidden '} z-50 fixed duration-300 w-full md:w-[30%] h-[100vh] rounded-l-[25px]  bg-black/80 top-0 -right-32 p-6 flex flex-col gap-8 pt-8 `} 
        
        >
          <span onClick={()=>setTogle(false)}><ImCross  className='text-2xl text-white font-semibold absolute right-[35%] cursor-pointer mt-2'/></span>
          <div className='flex flex-col gap-8'>
            <h4 className='text-2xl text-[#fecc60]'>OR Festival</h4>
            <ul className='flex flex-col gap-4 pl-8'>
              <li className='text-[#fecc60] hover:text-[#a08b5d] duration-300 cursor-pointer text-xl'>Festival FAQ</li>
              <li className='text-[#fecc60] hover:text-[#a08b5d] duration-300 cursor-pointer text-xl'>Schedule</li>
              <li className='text-[#fecc60] hover:text-[#a08b5d] duration-300 cursor-pointer text-xl'>Impact</li>
              <li className='text-[#fecc60] hover:text-[#a08b5d] duration-300 cursor-pointer text-xl'>Buy Tickets</li>
            </ul>
            <h4 className='text-2xl text-[#fecc60]'>Contact</h4>

          </div>

        </motion.div>

    </div>
  )
}

export default Header