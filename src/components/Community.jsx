import React from 'react'
import {motion} from 'framer-motion'
import './cm.css'

const Community = () => {
  return (
    <div  className='w-full h-[100vh] bgImg bg-no-repeat bg-cover grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-16 px-6 md:px-28'>
        <div className=' z-10 flex flex-col items-center md:items-start'>
           <motion.h2
            initial={{x:-300,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:1,
              x:{type:'spring',stiffness:60},
              opacity:{duration:2},
              ease:'easeIn',
              duration:3
          }}
           className='text-[#E4801D] border-b border-[#E4801D] inline-block pb-2 text-4xl font-semibold'>Growth in Community</motion.h2>
           <motion.p className='text-white text-xl font-semibold mt-6 md:mt-12 text-justify'
             initial={{x:-300,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.60,
               x:{type:'spring',stiffness:60},
               opacity:{duration:2},
               ease:'easeIn',
               duration:1.5
           }}
           >
Finding happiness within a community is a journey of discovery, connection, and mutual growth.
 As we share experiences, support each other's goals, and navigate life's challenges together, 
 we encounter a unique kind of happiness. It's a joy that springs from belonging, from knowing that we are seen, 
 valued, and cherished. Through these rich, communal experiences, we not only find happiness,
 but also a sense of purpose and fulfillment.
           </motion.p>
        </div>
        <motion.div className='z-10 flex justify-end'
         initial={{x:300,opacity:0}}
         whileInView={{x:0,opacity:1}}
         transition={{delay:0.60,
           x:{type:'spring',stiffness:60},
           opacity:{duration:2},
           ease:'easeIn',
           duration:1.5
       }}
        >
            <img src="https://oneworldfamily.com/_nuxt/middle-right-section.aa77d010.webp" alt="img" />
        </motion.div>
        <span className='shadow'/>
    </div>
  )
}

export default Community