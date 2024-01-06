import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Home = () => {
  return (
    <>
    <div className='bg-[#EBA83B] w-full h-[100vh] md:h-[100vh] px-4 md:px-28'>
    <Header/>
    <Hero />
    </div>
    </>
  )
}

export default Home