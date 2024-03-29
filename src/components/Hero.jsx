import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram  } from "react-icons/fa";
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import {motion} from 'framer-motion'
import Gotobtn from './Gotobtn';

const Hero = () => {
  const [text]= useTypewriter(
    {
      words:['Community.','Health','Nature','Family','Tranquality','Home'],
      loop:true,
      typeSpeed:80,
      deleteSpeed:80,
      delaySpeed:2000,

    }
  );
  return (
    <div className='relative w-full h-full flex items-start md:items-center md:mt-0 mt-10 justify-center'>
      <div className='absolute -left-4 -top-6 md:-left-[115px]'>
        <img src="https://oneworldfamily.com/_nuxt/monstera-small.1919168b.webp" alt="img" className='max-w-[200px] lg:max-w-[400px]  xl:max-w-[600px] 2xl:max-w-full'  />
      </div>
      <div className='flex items-center md:items-end gap-16 md:gap-28 flex-col md:w-[60%] mt-[180px] md:mt-0 overflow-hidden'>
        <h2 className='text-xl md:text-4xl font-semibold text-[#FAFAFF]'>RETURN TO</h2>
        <h1 className='font-bold text-4xl uppercase text-[#2A4516] lg:text-[80px] xl:text-[90px] md:ml-2 mt-10 md:mt-20 ml-8  absolute'>
          {text}
        </h1>
        <motion.p className='2xl:text-3xl lg:text-xl xl:text-2xl text-[14] text-justify mt-4 text-white md:text-end '
        initial={{x:400,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{delay:1,
          x:{type:'spring',stiffness:60},
          opacity:{duration:2},
          ease:'easeIn',
          duration:3
      }}
        >
          
Welcome to a tranquil sanctuary, where healing dances with nature,
community radiates warmth, and minds evolve endlessly.
        </motion.p>
      </div>
      <div className='flex items-end flex-col gap-2 md:gap-4 justify-end md:w-[40%] md:mt-0 mt-[50px]'>
      <FaFacebookF className='border-2 cursor-pointer  border-white rounded-full p-[6px] text-white text-[30px] md:text-[45px] font-semibold' />
      <FaTwitter className='border-2 cursor-pointer border-white rounded-full p-[6px] text-white text-[30px] md:text-[45px] font-semibold' />
      <FaLinkedin  className='border-2 cursor-pointer border-white rounded-full p-[6px] text-white text-[30px] md:text-[45px] font-semibold' />
      <FaInstagram className='border-2 cursor-pointer border-white rounded-full p-[6px] text-white text-[30px] md:text-[45px] font-semibold' />

      </div>
      <Gotobtn />
    </div>
  )
}

export default Hero