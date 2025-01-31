import React from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
const UserCard = ({user}) => {
  return (
    <div className='border-2 border-black' style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30vw",
        minWidth: "27vw",
        height: "45vh",
        padding: "2vw",
        gap: "2vh",
        backgroundColor: "#F7F9FC",
        borderRadius: "1vh",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        border: "1px solid #E8ECF4",
        position: "relative",
      }}>
        <div className="w-full flex justify-center" style={{
          height: "12vh",
        }}>
          <img 
            src={user.image || ""}
            alt={`${user.name}'s profile`} 
            className="rounded-lg h-full"
            style={{
              objectFit: "contain",
              width: "auto",
              height: "20vh"
            }}
          />
        </div>
        
        <h3 className="font-semibold text-center" style={{
          fontSize: "1.2vw",
          marginTop: "1vh",
          color: "#2D3748",
          position: "relative",
        }}>
          {user.name}
          
        </h3>
        
        <div style={{ 
          position: "absolute",
          bottom: "2vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}>
            <Link to="/LandingPage" >
            
            
          <CustomButton 
            buttonName="Click Me"
            style={{
              backgroundColor: "#4299E1",
              color: "#FFFFFF",
              padding: "1vh 2vw",
              borderRadius: "0.5vh",
              fontSize: "1vw",
            }} 
          />
          </Link>
          <CustomButton 
            buttonName="Another Action"
            style={{
              backgroundColor: "#68D391",
              color: "#FFFFFF",
              padding: "1vh 2vw",
              borderRadius: "0.5vh",
              fontSize: "1vw",
            }} 
          />
        </div>
      </div>
  )
}

export default UserCard
