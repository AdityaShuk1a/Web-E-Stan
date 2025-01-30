import React from 'react'

const Preloader = () => {
  return (
    <>
    <div className='PreloaderParent z-[9999] absolute h-[100vh] w-screen bg-red-400 ' >
    <div className='h-[100vh] flex flex-col left-[15%]  absolute w-[7vh]'>
        <img className=' StarOne absolute top-[13%]' src="\src\assets\star.png" alt="" /><img className='StarTwo absolute top-[53%]' src="\src\assets\star.png" alt="" /><img className='StarThree absolute top-[83%]' src="\src\assets\star.png" alt="" />
      </div>
    <div className='h-[100vh] flex flex-col left-[48%] absolute w-[7vh] '>
    <img className='StarTwo absolute top-[6%]' src="\src\assets\star.png" alt="" /><img className='StarOne absolute top-[33%]' src="\src\assets\star.png" alt="" /><img className='StarTwo absolute top-[83%]' src="\src\assets\star.png" alt="" />
      </div>
    <div className=' h-[100vh] flex flex-col left-[83%] absolute w-[7vh] '>
    <img  className='StarThree absolute top-[43%]' src="\src\assets\star.png" alt="" /><img  className=' StarOne absolute top-[73%]' src="\src\assets\star.png" alt="" />
      </div>
      <div className='h-[100vh] w-screen  flex items-center justify-center' >
      <div className=' flex absolute  justify-center items-center gap-4' >
            <img className='PreloaderImage aspect-1/1 h-[18vh]    object-cover z-[999]' src="/src/assets/moon.png" alt="" />
            <div className='overflow-hidden flex flex-nowrap p-5' >
            <h1 className='PreloaderName text-[4vh]  font-semibold'  >
              MoonBeam Academy
            </h1>
            </div>
            
        </div>
      </div>
      
        
</div>
    </>
    
  )
}

export default Preloader
