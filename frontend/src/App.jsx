import React, { useEffect, useRef } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'
import SubjectsCard from './components/SubjectsCard.jsx'
import SubjectPage from './pages/SubjectPage.jsx'
import RisingMoon from './components/RisingMoon.jsx'

const App = () => {
  const preLoaderRef = useRef()
  useEffect(() => {
    if(PreloaderAnimation()){

    }
  },[])
  
  return (
    <div className="app-container">
      {/* <Preloader /> */}
      {/* <LandingPage /> */}
      {/* <SubjectsCard /> */}
      {/* <SubjectPage /> */}
      <RisingMoon />
    </div>
  )
}

export default App
