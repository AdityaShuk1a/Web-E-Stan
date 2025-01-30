import React from 'react'

const SubjectsCard = () => {
  return (
    <>
    <div className='h-[40vh] sm:h-[50vh] lg:h-[60vh] w-[95vw] sm:w-[90vw] lg:w-[80vw] overflow-hidden flex items-center justify-center relative bg-amber-200' >
        <div className="part1 h-full w-full bg-pink-200">
            
        </div>
        <div className="part2 h-full flex flex-col gap-[3vh] sm:gap-[5vh] lg:gap-[4vh] items-center justify-center w-full z-[999] bg-red-400">
            <div className="SubjectName flex text-2xl sm:text-4xl lg:text-7xl font-semibold flex-row gap-[1vh] sm:gap-[1.5vh] lg:gap-[2vh]" >
                <span>M</span>
                <span>A</span>
                <span>T</span>
                <span>H</span>
                <span>S</span>
            </div>
            <div className='bg-blue-300 rounded-4xl text-base sm:text-lg lg:text-xl' style={{
                padding: "1vh 1.5vh",
                '@media (min-width: 640px)': {
                    padding: "1.25vh 2vh"
                },
                '@media (min-width: 1024px)': {
                    padding: "1.5vh 2.5vh"
                }
            }} >
                Start Learning
            </div>
        </div>
        <div className="circle absolute z-[99] border-black" style={{
            height: '75%',
            width: '75%',
            borderRadius: '50%',
            borderWidth: 'min(2vh, 5px)',
            left: '58%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
        </div>
        <img 
            className='absolute z-[999]' 
            src="\src\assets\full-moon.png" 
            alt="" 
            style={{
                height: '37.5%',
                left: '25%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        />
    </div>
    </>
  )
}

export default SubjectsCard
