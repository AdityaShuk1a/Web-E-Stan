import React, { useEffect, useRef, useState } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation, navbarUp, navbarDown } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'
import Navbar from './components/Navbar.jsx'
import SubjectsCard from './components/SubjectsCard.jsx'
import SubjectPage from './pages/SubjectPage.jsx'
import Lenis from "@studio-freight/lenis"
import CustomCursor from './components/CustomCursor.jsx'
import SubjectSwiper from './components/SubjectSwiper.jsx'
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
    window.addEventListener('mousemove', (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
    window.addEventListener('wheel', (e) => {
      if(e.deltaY > 0){
        
        navbarUp();
      } else {
        navbarDown();
      }
    });
    return () => {
      window.removeEventListener('mousemove', (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
      window.removeEventListener('wheel', (e) => {
        if(e.deltaY > 0){
          
          navbarUp();
        } else {
          navbarDown();
        }
      });
    }
  }, [])

  return (
    <div className="app-container">
      {/* <Preloader /> */}
      {/* <LandingPage /> */}
      {/* <SubjectsCard /> */}
      <SubjectPage />
    </div>
  )
}
export default App
