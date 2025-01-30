import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex  justify-around bg-emerald-800 items-center' style={{
      padding : "1vh"
    }}>
        <div className="part1">
          <img className='NavbarImage h-[6vh]' src="\src\assets\moon.png" alt="" />
        </div>
        <div className="part2 flex justify-around items-center  text-lg gap-[10vh] bg-red">
          <div className="button1 w-[] rounded-2xl bg-pink-300 " style={{
      padding : "1vh"
    }} >
            Home            
          </div>
          <div className="button1 rounded-2xl bg-blue-200 " style={{
      padding : "1vh"
    }}>
          Login
          </div>
        </div>
    </nav>
    <hr className='h-[1vh]' />
    </>
  )
}

export default Navbar