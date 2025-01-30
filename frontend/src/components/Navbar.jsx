import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar flex flex-col sm:flex-row justify-evenly items-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-4 sm:py-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg rounded-b-2xl">
      <button className="flex items-center justify-center w-full sm:w-auto mb-3 sm:mb-0">
        <img 
        className="navbarContactBtn h-8 sm:h-12 md:h-16 w-auto hover:scale-110 transition-transform duration-200"
          src="src/assets/moon.png" 
          alt="Logo" 
          
        />
      </button>
      <div className="NavbarButtonsContainer flex flex-col sm:flex-row gap-0 sm:gap-16 w-full sm:w-auto items-center justify-evenly bg-white/20 backdrop-blur-sm p-4 rounded-xl border-2 border-white/30">
        <button className="navbarContactBtn flex justify-evenly items-center w-3/4 sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-xl text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md">
          Contact Us
        </button>
        <button className="navbarContactBtn flex justify-evenly items-center w-3/4 sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-xl text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md">
          Log Out
        </button>
      </div>
    </nav>
    <hr className='h-[0.2vh] w-screen bg-black absolute top-[8vh]' />
    </>
  )
}

export default Navbar