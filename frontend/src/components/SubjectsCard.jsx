import React from 'react'

const SubjectsCard = () => {
  return (
    <>
    <div className='sm:h-[50vh] lg:h-[60vh] lg:w-[80vw] sm:w-[90vw] overflow-hidden flex items-center justify-center relative bg-amber-200' >
        <div className="part1 h-full w-full bg-pink-200">
            
        </div>
        <div className="part2 h-full flex flex-col lg:gap-[4vh] sm:gap-[7vh] items-center justify-center w-full z-[999] bg-red-400">
            <div className="SubjectName flex lg:text-7xl sm:text-3xl  font-semibold flex-row lg:gap-[1vh] sm:gap-[2vh]" >
                <span>M</span>
                <span>A</span>
                <span>T</span>
                <span>H</span>
                <span>S</span>
            </div>
            <div className='bg-blue-300 rounded-4xl lg:text-xl sm:text-lg' style={{
                padding: "1.5vh",
                paddingLeft: "2vh",
                paddingRight: "2vh"
            }} >
                Start Learning
            </div>
        </div>
        <div className="circle lg:h-[60vh] lg:w-[50vh] sm:h-[40vh] sm:w-[40vh] lg:rounded-full absolute z-[99] lg:border-[3px] sm:rounded-full sm:border-[5px] border-black">

        </div>
        <img className='absolute lg:h-[30vh] sm:h-[10vh] lg:left-[25%] sm:left-[5%] z-[999]' src="\src\assets\full-moon.png" alt="" />
        
    </div>
    </>
    
  )
}

export default SubjectsCard
