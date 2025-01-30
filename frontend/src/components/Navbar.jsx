import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col sm:flex-row justify-evenly items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg rounded-b-2xl" style={{ padding: '2vh 1.5rem' }}>
      <button className="navbar-logo-container flex items-center justify-center w-full sm:w-auto mb-3 sm:mb-0">
        <img 
          src="src/assets/moon.png" 
          alt="Logo" 
          className="navbar-logo h-8 sm:h-12 md:h-16 w-auto hover:scale-110 transition-transform duration-200"
        />
      </button>
      <div className="navbar-buttons-container flex flex-col sm:flex-row gap-0 sm:gap-16 w-full sm:w-auto items-center justify-evenly bg-white/20 backdrop-blur-sm rounded-xl border-2 border-white/30" style={{ padding: '0.25rem' }}>
        <button className="navbar-contact-btn flex justify-evenly items-center w-3/4 sm:w-auto text-sm sm:text-lg md:text-xl text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md" style={{ padding: '0.25rem' }}>
          Contact Us
        </button>
        <button className="navbar-logout-btn flex justify-evenly items-center w-3/4 sm:w-auto text-sm sm:text-lg md:text-xl text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md" style={{ padding: '0.25rem' }}>
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default Navbar