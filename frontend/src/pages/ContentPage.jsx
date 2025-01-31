import React, { useEffect } from 'react'
import CustomButton from '../components/CustomButton'
import {gsap} from 'gsap'

const ContentPage = ({Topic}) => {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo('.title', {
            opacity : 0,
            y : -100,
            duration : 1,
            ease : "power2.out"
        }, {
            opacity : 1,
            delay : 0.5,
            y : 0,
            duration : 1,
            ease : "power2.out",
            toggleActions : "play reverse play reverse"
        })
        tl.fromTo('.content', {
            opacity : 0,
            delay : 0.5,
            y : -100,
            duration : 1,
            ease : "power2.out"
        }, {
            opacity : 1,
            y : 0,
            duration : 1,
            ease : "power2.out",
            toggleActions : "play reverse play reverse"
        })
    }, [])
  return (
    <>
    <div className='flex   h-[100vh] justify-center    w-screen' >
        <div className='flex flex-col justify-center bg-white items-center border-2 border-black w-[70%] h-full rounded-4xl' style={{
            padding : "3vh"
        }} >
            <div className="title text-5xl font-bold" style={{
                padding : "2vh"
            }} >Topic.name</div>
            <div className="content text-3xl border-2 border-black font-bold w-[80%] h-full bg-white rounded-4xl" style={{
                padding : "2vh"
            }} >Topic.content
            <div className='absolute bottom-7 left-7 ' >
            <CustomButton buttonName="Click Me" />
            </div>
            <div className='absolute bottom-7 right-7 ' >
            <CustomButton buttonName="Click Me" />
            </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ContentPage
