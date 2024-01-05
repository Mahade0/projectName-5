import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import './fainmation.css'

const Gotobtn = () => {
  const [visible,setIsVisible]=useState(false)
    const goBtn =()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    const handleScroll =()=>{
      let heightScroll=250;
      const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
      if(winScroll>heightScroll){
           setIsVisible(true)
      }else{
          setIsVisible(false)
      }
    }
    useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
    },[])
  return (
  <>
  {
    visible &&  <div>
    <button className='bg-blue-500 text-white p-4 text-xl md:text-3xl font-bold border border-gray-600 fixed bottom-10 z-50 rounded-full  right-[20px]' onClick={goBtn}>
    <FaArrowUp className='bouns' />
    </button>
</div>
  }
  </>
  )
}

export default Gotobtn