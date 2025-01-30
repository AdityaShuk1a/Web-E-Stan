import React, { useEffect, useRef } from 'react'
import Preloader from './components/Preloader'
import { PreloaderAnimation } from './animations/Animations'
import Lenis from 'lenis'
import { use } from 'react'
const App = () => {
  const preLoaderRef = useRef()
  useEffect(() => {
    if(PreloaderAnimation()){

    }
  },[])
  return (
    <>
    <div className='relative'  >
    <Preloader />
    </div>
    </>
    
  )
}

export default App
