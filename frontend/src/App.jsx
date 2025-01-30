import React, { useEffect, useRef, useState } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation, navbarUp, navbarDown } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'
import Navbar from './components/Navbar.jsx'
import SubjectsCard from './components/SubjectsCard.jsx'
import SubjectPage from './pages/SubjectPage.jsx'
import Lenis from "@studio-freight/lenis"
const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const preLoaderRef = useRef()
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smooth scrolling speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    PreloaderAnimation()
  },[])
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if(e.deltaY > 0){
        
        navbarUp();
      } else {
        navbarDown();
      }
    });
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  }, [])

  return (
    <>
    <Preloader />
    <div className="app-container">
    <Navbar />
      <LandingPage />
      {/* <SubjectsCard /> */}
      {/* <SubjectPage /> */}
    </div>
    </>
    
  )
}
export default App
