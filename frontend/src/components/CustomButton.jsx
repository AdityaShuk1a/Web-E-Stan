import React, { useState } from 'react'
import { easeInOut, motion } from "framer-motion"

const CustomButton = ({ buttonName }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHover(true)}  
      onMouseLeave={() => setHover(false)} 
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "0.8rem",
        fontSize: "clamp(12px, 1.6vw, 20px)",
        gap: "clamp(8px, 2vh, 25px)"
      }}
    > 
      <div style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "black",
        borderRadius: "0.8rem",
        border: "2px solid #D8B4FE",
        width: "100%",
        height: "100%",
        padding: "clamp(4px, 0.6vh, 7px)"
      }}> 
        <p style={{
          fontSize: "clamp(1.8vh, 1.1vw, 14px)",
          color: "white",
          whiteSpace: "nowrap",
          margin: 0,
          padding: 0
        }}>
          {buttonName} 
        </p>
      </div> 

      <motion.div  
        animate={hover ? { y: "-76%", scale: 1.2 } : { y: 0 }} 
        transition={{ ease: easeInOut, delay: 0.01 }} 
        style={{
          position: "absolute",
          width: "clamp(80px, 20vh, 200px)",
          height: "clamp(80px, 20vh, 200px)",
          borderRadius: "50%",
          mixBlendMode: "difference",
          backgroundColor: "#88bbd3",
          zIndex: 10
        }}
      /> 
    </div>
  )
}

export default CustomButton
