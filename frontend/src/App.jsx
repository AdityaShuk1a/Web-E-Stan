import React, { useEffect, useRef } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'

const App = () => {
  const preLoaderRef = useRef()
  useEffect(() => {
    if(PreloaderAnimation()){

    }
  },[])
  
  return (
    <div className="app-container">
      <Preloader />
      <LandingPage />
    </div>
  )
}

export default App
