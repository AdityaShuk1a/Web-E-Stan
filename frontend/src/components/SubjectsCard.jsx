import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const SubjectsCard = ({subject}) => {
    useEffect(() => {
        gsap.fromTo('.Card', {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.Card',
                start: 'top 50%',
                end: 'bottom bottom',
            }
        })
        }, [])
  return (
    <>
    <div className='h-[35vh] Card sm:h-[40vh] lg:h-[45vh] w-[25vw] rounded-4xl sm:w-[30vw] lg:w-[35vw] overflow-hidden flex items-center justify-center relative bg-amber-200' >
        <div className="Part1 h-full w-full bg-pink-200">
            
        </div>
        <div className="Part2 h-full flex flex-col gap-[3vh] sm:gap-[5vh] lg:gap-[4vh] items-center justify-center w-full z-[999] bg-red-400">
            <div className="SubjectName flex text-2xl sm:text-4xl lg:text-7xl font-semibold flex-row gap-[1vh] sm:gap-[1.5vh] lg:gap-[2vh]" >
                <h1>{subject.title}</h1>
            </div>
            <div className='StartLearningBtn bg-blue-300 rounded-4xl text-base sm:text-lg lg:text-xl' style={{
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
        <div className="Circle absolute z-[1] border-black" style={{
            height: '55%',
            width: '55%',
            borderRadius: '50%',
            borderWidth: 'min(1.5vh, 4px)',
            left: '58%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
        </div>
        <img 
            className='PlanetImage absolute z-[2]' 
            src="\src\assets\full-moon.png" 
            alt="" 
            style={{
                height: '27.5%',
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
