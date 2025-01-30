import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="Navbar flex flex-col sm:flex-row justify-evenly items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg rounded-b-2xl" style={{ padding: '2vh 2vw' }}>
      <button className="LogoContainer flex items-center justify-center w-full sm:w-auto mb-3 sm:mb-0">
        <img 
          src="src/assets/moon.png" 
          alt="Logo" 
          className="NavbarLogo h-[4vh] sm:h-[6vh] md:h-[8vh] w-auto hover:scale-110 transition-transform duration-200"
        />
      </button>
      <div className="BtnsContainer flex flex-col sm:flex-row gap-0 sm:gap-16 w-full sm:w-auto items-center justify-evenly bg-white/20 backdrop-blur-sm rounded-xl border-2 border-white/30" style={{ padding: '1vh 1vw' }}>
        <button className="ContactBtn flex justify-evenly items-center w-3/4 sm:w-auto text-[1.5vh] sm:text-[2vh] md:text-[2.5vh] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md" style={{ padding: '1vh 2vw' }}>
          Contact Us
        </button>
        <button className="LogoutBtn flex justify-evenly items-center w-3/4 sm:w-auto text-[1.5vh] sm:text-[2vh] md:text-[2.5vh] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md" style={{ padding: '1vh 2vw' }}>
          Log Out
        </button>
      </div>

{/* testing git  */}

    </nav>
    <hr className='h-[0.2vh] w-screen bg-black top-[10vh]' />
    </>
  )
}

export default Navbar