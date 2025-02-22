import React from 'react'
import Navbar from '../components/Navbar.jsx'
import SubjectsCard from '../components/SubjectsCard.jsx'
import RisingMoon from '../components/RisingMoon.jsx'
import SubjectSwiper from '../components/SubjectSwiper.jsx'
import Footer from '../components/Footer.jsx'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <RisingMoon />
    <div className='h-[100vh] w-screen flex justify-center items-center' >
    <SubjectSwiper />
    </div>
    <Footer />
    </>
   
  )
}

export default LandingPage