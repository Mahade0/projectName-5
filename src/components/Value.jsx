import React from 'react'
import './cm.css'
const Value = () => {
  return (
    <div className='bgimages w-full  md:h-[100vh] h-full flex flex-col items-center justify-center gap-8 px-6 md:px-28 '>
      <div className='flex flex-col items-center gap-4 mt-16 md:mt-4'>
        <h2 className='text-[#E4801D] text-4xl font-semibold'>Values</h2>
        <p className='text-white text-xl font-semibold text-justify max-w-[600px]'>
        Our mission is to facilitate personal growth, helping individuals explore their full potential,
         and then, like a well-sprung coil, contract back into a better, more refined version of themselve
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:mb-20 mb-32'>
        <img src="https://oneworldfamily.com/_nuxt/tree-plant.d788ef9f.webp" alt="img" className='' />
       <div className='flex flex-col gap-8'>
       <img src="https://oneworldfamily.com/_nuxt/walking_track_at_hill.65aa824a.webp" alt="img" className='' />
        <img src="https://oneworldfamily.com/_nuxt/walking_track_at_island_hills.2a8246fb.webp" alt="img" className='' />
       </div>

      </div>
    </div>
  )
}

export default Value