import React from 'react'
import UserCard from '../components/UserCard'

const UserPage = () => {

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
    <div className='flex flex-col bg-amber-400 h-[100vh] items-center   w-screen' >
        <div className='justify-start text-5xl w-full'  style={{
          padding : "4vh"
        }} >
          <div className='flex justify-between w-full ' >
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
        <div className='w-screen flex gap-[5vh] overflow-x-auto' >
        {useData.map((data) => (
          <UserCard key={data.id} user={data} />
        ))}
        </div>
        

    </div>
    </>
  )
}

export default UserPage
