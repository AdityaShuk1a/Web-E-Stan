import React from 'react'
import CustomButton from '../components/CustomButton'


const ContentPage = ({Topic}) => {
  return (
    <>
    <div className='flex  bg-amber-400 h-[100vh] justify-center    w-screen' >
        <div className='flex flex-col justify-center items-center w-[80%] h-full rounded-4xl' >
            <div className="title text-5xl font-bold" style={{
                padding : "2vh"
            }} >Topic.name</div>
            <div className="content text-3xl font-bold w-[80%] h-full bg-amber-500 rounded-4xl" style={{
                padding : "2vh"
            }} >Topic.content
            <div className='absolute bottom-7 left-7 ' >
            <CustomButton buttonName="Click Me" />
            </div>
            <div className='absolute bottom-7 right-7 ' >
            <CustomButton buttonName="Click Me" />
            </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ContentPage
