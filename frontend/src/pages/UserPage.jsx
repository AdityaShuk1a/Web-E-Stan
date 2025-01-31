import React, { useEffect } from 'react'
import UserCard from '../components/UserCard'
import {gsap} from "gsap"

const UserPage = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline()
  //   tl.fromTo('.title', {
  //     opacity : 0,
  //     y : -100,
  //     duration : 1,
  //     ease : "power2.out"
  //   }, {
  //     opacity : 1,
  //     y : 0,
  //     duration : 1,
  //     ease : "power2.out",
  //     toggleActions : "play reverse play reverse"
  //   })
  //   tl.fromTo('.users', {
  //     opacity : 0,
  //     y : -100,
  //     duration : 1,
  //     ease : "power2.out"
  //   }, {
  //     opacity : 1,
  //     y : 0,
  //     duration : 1,
  //     ease : "power2.out",
  //     stagger : 0.5,
  //     toggleActions : "play reverse play reverse"
  //   })

  // })

  const useData = [
    {
      id : 1,
      userName : "chunu",
      userData : [
        {

        }
      ]
    },
    {
      id : 2,
      userName : "Munu",
      userData : [
        {

        }
      ]
    }
  ]

  return (
    <>
    <div className='flex flex-col h-[100vh] items-center   w-screen' >
        <div className='justify-start text-5xl w-full'  style={{
          padding : "4vh"
        }} >
          <div className='title flex justify-between w-full text-white font-medium' >
          <h1>

            Hello User!
          </h1>
          <button className='hover:bg-blue-700'  style={{
            
            padding : "2vh",
            backgroundColor: "#4299E1",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "0.5vh",
            cursor: "pointer",
          }}>
            Add User
          </button>
          </div>
        </div>
        <div className='users w-screen flex gap-[5vh] overflow-x-auto' >
        {useData.map((data) => (
          <UserCard key={data.id} user={data} />
        ))}
        </div>
        

    </div>
    </>
  )
}

export default UserPage
