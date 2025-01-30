import React, { useEffect, useRef } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'
import SubjectsCard from './components/SubjectsCard.jsx'
import SubjectPage from './pages/SubjectPage.jsx'

const App = () => {
  const preLoaderRef = useRef()
  useEffect(() => {
    if(PreloaderAnimation()){

    }
  },[])
  
  return (
    <>
    <Preloader />
    <div className="app-container">
      
      <LandingPage />
      {/* <SubjectsCard /> */}
      {/* <SubjectPage /> */}
    </div>
    </>
    
  )
}

export default App
