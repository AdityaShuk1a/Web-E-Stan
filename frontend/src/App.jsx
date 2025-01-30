import React, { useEffect } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
const App = () => {
  useEffect(() => {
    PreloaderAnimation()
  },[])
  return (

    
    <>
      <Preloader />

    </>
    
  )
}

export default App
