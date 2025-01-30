import React, { useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const RisingMoon = () => {
  useEffect(() => {
    gsap.from('.LandingMoon', {
      rotate : 360,
      duration : 12,
      repeat : -1,
      yoyo : true,
      ease : 'sine.inOut'
    })

    // Add parallax scroll effect
    const lenis = window.lenis; // Assuming Lenis is initialized globally
    
    window.addEventListener( "wheel" ,(e) => {
      const moon = document.querySelector('.LandingMoon');
      // Move the moon 1.5x faster than normal scroll
      if(e.deltaY < 0){
        moon.style.transform = `translateY(${e.scroll * -1.5}vh)`;
      }
      
    });

    

    // Cleanup
    return () => {
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
    };
  },[]);

  useEffect(() => {

    gsap.fromTo('.LandingMoon', {
      scale : 1.5,
      
    },{
      scale : 0,
      ease : "sine.inOut",
      scrollTrigger: {  
        trigger: '.LandingMoonParent',
        start: 'top center',
        end: 'bottom center',
        markers: true,
        scrub: 8,
        markers: true },
    } )
},[]);
  
  return (
    <>
    
           <div className="LandingMoonParent relative w-screen  h-[100vh] flex items-center justify-center">
      {/* Background Image */}
    
    <img className="LandingMoon    absolute top-1/2 w-[75%]" 
           src="src/assets/moonRealistic.webp" 
           alt="Moon Realistic" />
    
      
      
      

      {/* Centered Text */}
      <div className="LandingTitle absolute inset-0 flex flex-col  items-center justify-center text-white text-6xl font-bold">
        <div>GLOW WITH KNOWLEDGE</div>
        <div>LIKE THE MOON</div>
      </div>
      
    </div>
    <div className='h-[100vh] w-screen  z-[999]' >

    </div>
    </>
    
  );
};

export default RisingMoon;
