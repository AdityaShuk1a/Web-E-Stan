import React from 'react'

const Preloader = () => {
  return (
    <>
    <div className='PreloaderParent h-[100vh] w-screen bg-red-400 flex items-center justify-center ' >
        <div className=' flex  justify-center items-center gap-4' >
            <img className='PreloaderImage aspect-1/1 h-[18vh]    object-cover z-[999]' src="/src/assets/moon.png" alt="" />
            <div className='overflow-hidden bg-pink-200 p-5' >
            <h1 className='PreloaderName text-7xl sd:text-2xl font-semibold' style={{
              mediaQuery: 'max-width: 768px',
              fontSize: '3vh',
            }} >
              MoonBeam Academy
            </h1>
            </div>
            
        </div>
</div>
    </>
    
  )
}

export default Preloader
