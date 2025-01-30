import React, { useEffect } from 'react'
import {gsap} from 'gsap'
const CustomCursor = ({x, y}) => {
    useEffect(() => {
        gsap.from('.CustomCursor', {
            rotate : 360,
            duration : 6,
            repeat : -1,
            yoyo : true,
            ease : 'sine.inOut'

        })
        
    },[])
    window.addEventListener('click', (e) => {
        gsap.fromTo('.CustomCursor', {
            scale : 2,
            duration : 0.6
        },{
            scale : 1,
            duration : 0.6
        })
    })
  return (
    <>
    <div className='CustomCursor fixed ' style={{
        top: y,
        left: x,
        pointerEvents: "none",
        zIndex: 9999,
        width: "4vw",
        height: "4vw",
        transform: "translate(-50%, -50%)",
    }}>
      <img src="\src\assets\space-travel.png" alt="" />
      </div>
    </>
    
  )
}

export default CustomCursor
