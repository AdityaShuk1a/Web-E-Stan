import React, { useEffect, useRef } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'
import SubjectsCard from './components/SubjectsCard.jsx'

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
      <SubjectsCard />
    </div>
  )
}

export default App
