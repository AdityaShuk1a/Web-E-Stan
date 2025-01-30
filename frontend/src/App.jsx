import React, { useEffect } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
import LandingPage from './pages/LandingPage.jsx'

const App = () => {
  useEffect(() => {
    PreloaderAnimation()
  },[])
  
  return (
    <div className="app-container">
      <Preloader />
      <LandingPage />
    </div>
  )
}

export default App
