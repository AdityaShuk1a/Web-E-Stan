import React, { useEffect, useRef, useState } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation, navbarUp, navbarDown } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'
import SubjectPage from './pages/SubjectPage.jsx'
import Lenis from "@studio-freight/lenis"
import CustomCursor from './components/CustomCursor.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage.jsx'
import ContentPage from './pages/ContentPage.jsx'
import MCQ from './pages/MCQ.jsx'
import { UserProvider } from './context/UserContext';

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
    <UserProvider>
      <CustomCursor x={mousePosition.x} y={mousePosition.y}  />
      <Preloader />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MCQ" element={<MCQ />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path='/SubjectPage' element={<SubjectPage />} ></Route>
      </Routes>
    </UserProvider>
  )
}
export default App
