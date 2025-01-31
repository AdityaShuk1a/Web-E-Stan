import React, { useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const RisingMoon = () => {
  useEffect(() => {
    gsap.from('.LandingMoon', {
      rotate : 50,
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
        
        scrub: 8,
         },
    } )
    gsap.from('.LandingProps', {
      duration : 2,
      transform : "translateY(70) translateX(50)",
      repeat : -1,
    
    },)
    
},[]);
  
useEffect(() => {
  gsap.fromTo('.PageTitle h1', {
    x: -100,
    scale: 0,
    opacity: 0
  },{
    scale: 1,
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.PageTitle',
      start: 'top center',
      end: 'bottom top',
      toggleActions: "play none none reverse"
    
    }
  })
  gsap.fromTo('.Description p', {
    scale: 0,
    x: 100,
    opacity: 0
  },{
    scale: 1,
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.Description',
      start: 'top center', 
      end: 'bottom top',
      toggleActions: "play none none reverse"
      
    }
  })
},[])
  return (
    <>
    
           <div className="LandingMoonParent relative w-screen  h-[100vh] flex items-center justify-center">
      {/* Background Image */}
        <div className='absolute left-[10%]  h-[100vh]  w-[6vh] '  >
          <img className='LandingProps absolute top-[23%]' src="\src\assets\FloatingStuff\eraser.png" alt="" />
          <img className='LandingProps absolute top-[63%]' src="\src\assets\FloatingStuff\notepad.png" alt="" />
        </div>
        <div className='absolute left-[30%] h-[100vh]  w-[6vh]'  >
        <img className='LandingProps absolute top-[13%]' src="\src\assets\FloatingStuff\pencil.png" alt="" />
        <img className='LandingProps absolute top-[43%]' src="\src\assets\FloatingStuff\ruler.png" alt="" />
        </div>
        <div className='absolute left-[50%]  h-[100vh]  w-[6vh]'  >
        <img className='LandingProps absolute top-[23%]' src="\src\assets\FloatingStuff\eraser.png" alt="" />
       
        </div>
        <div className='absolute left-[70%]  h-[100vh]  w-[6vh]'  >
        <img className='LandingProps absolute top-[23%]' src="\src\assets\FloatingStuff\spell-book.png" alt="" />
        
        </div>
        <div className='absolute left-[90%]  h-[100vh] w-[6vh] '  >
        <img className='LandingProps absolute top-[23%]' src="\src\assets\FloatingStuff\pencil.png" alt="" />
        <img className='LandingProps absolute top-[63%]' src="\src\assets\FloatingStuff\eraser.png" alt="" />
        </div>
    
    <img className="LandingMoon    absolute top-1/2 w-[75%]" 
           src="src/assets/moonRealistic.webp" 
           alt="Moon Realistic" />
    
      
      
      

      {/* Centered Text */}
      <div className="LandingTitle absolute inset-0 flex flex-col  items-center justify-center text-white text-8xl font-bold">
        <div>GLOW WITH KNOWLEDGE</div>
        <div>LIKE THE MOON</div>
      </div>
      
    </div>
    <div className='h-[100vh] w-screen flex justify-evenly items-center ' >
        <div className='PageTitle flex flex-col border-[1px] rounded-3xl border-white justify-center text-8xl h-[80%] w-[45%] ' style={{padding : '2vh'}} >
            <h1 className='text-white ' >Moon Beam</h1>
            <h1 className='text-white ' >Academy</h1>
        </div>
        <div className='Description h-[80%] w-[45%] flex border-[1px] rounded-3xl text-white border-white items-center text-4xl 'style={{
          padding : '2vh'
        }} >
            <p className=''>
            MoonBeam is a captivating and interactive E-tutoring platform designed to make learning enjoyable for children. Packed with engaging animations and educational content, it transforms lessons into fun and visually appealing experiences. With a user-friendly interface and personalized learning paths, MoonBeam ensures that children stay motivated and excited about their studies. The platform offers a variety of activities, such as quizzes and games, to reinforce learning through play. Parents can track their child's progress and participate in their learning journey. Prioritizing safety and security, MoonBeam provides a secure environment for children to explore, learn, and grow, making it a magical world of fun-filled education. 🌟✨
            </p>
        </div>
    </div>
    </>
    
  );
};

export default RisingMoon;
