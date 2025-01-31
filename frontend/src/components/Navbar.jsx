import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='Navbar' >
    <nav className=" flex flex-col sm:flex-row justify-evenly items-center  shadow-lg rounded-b-2xl" style={{ padding: '2vh 2vw' }}>
      <button className="LogoContainer flex items-center  justify-center w-full sm:w-auto mb-3 sm:mb-0">
        <Link to="/"> 
        <img 
          src="src/assets/moon.png" 
          alt="Logo" 
          className="NavbarLogo h-[4vh] sm:h-[6vh] md:h-[8vh] w-auto hover:scale-110 transition-transform duration-200"
        />
        </Link>
      </button>
      <div className="BtnsContainer flex flex-col sm:flex-row gap-0 sm:gap-16 w-full sm:w-auto items-center justify-evenly backdrop-blur-sm rounded-xl  " style={{ padding: '1vh 1vw' }}>
        <button className="ContactBtn text-white flex border-2 justify-evenly items-center w-3/4 sm:w-auto text-[1.5vh] sm:text-[2vh] md:text-[2.5vh] font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md" style={{ padding: '1vh 2vw' }}>
          Contact Us
        </button>
        <button className="LogoutBtn text-white flex border-2 justify-evenly items-center w-3/4 sm:w-auto text-[1.5vh] sm:text-[2vh] md:text-[2.5vh]  font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-md" style={{ padding: '1vh 2vw' }}>
          <Link to="/login">Log In</Link>
        </button>
      </div>

{/* testing git  */}

    </nav>
    <hr className='NavbarLine h-[0.2vh] w-screen bg-white top-[10vh]' />
    </div>
    
    </>
  )
}

export default Navbar