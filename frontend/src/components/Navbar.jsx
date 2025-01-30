import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col sm:flex-row justify-evenly items-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-3 sm:py-4 bg-blue-100 shadow-md">
      <div className="navbar-logo-container flex items-center justify-center w-full sm:w-auto mb-3 sm:mb-0 bg-green-100 p-2 rounded-md">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="navbar-logo h-6 sm:h-8 w-auto"
        />
      </div>
      
      <div className="navbar-buttons-container flex flex-col sm:flex-row gap-0 sm:gap-16 w-full sm:w-auto items-center justify-evenly bg-yellow-100 p-2 rounded-md">
        <button className="navbar-contact-btn flex justify-evenly items-center w-1/4 sm:w-auto px-4 py-2 text-gray-600 hover:text-gray-800 bg-purple-100">
          Contact Us
        </button>
        <button className="navbar-logout-btn flex justify-evenly items-center w-1/4 sm:w-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default Navbar