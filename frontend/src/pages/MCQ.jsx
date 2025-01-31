import React, { useState, useEffect } from 'react'
import CustomButton from '../components/CustomButton';
import {gsap} from "gsap"

const MCQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo('.title', {
            opacity : 0,
            y : -100,
            duration : 1,
            ease : "power2.out"
        }, {
            opacity : 1,
            y : 0,
            duration : 1,
            ease : "power2.out",
            toggleActions : "play reverse play reverse"
        })
        tl.fromTo('.content', {
            opacity : 0,
            y : -100,
            duration : 1,
            ease : "power2.out"
        }, {
            opacity : 1,
            y : 0,
            duration : 1,
            ease : "power2.out",
            toggleActions : "play reverse play reverse"
        })
        tl.fromTo('.button', {
            opacity : 0,
            y : -100,
            duration : 1,
            ease : "power2.out"
        }, {
            opacity : 1,
            y : 0,
            duration : 1,
            ease : "power2.out",
            toggleActions : "play reverse play reverse"
        })
        
    }, [])
  const goBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
    <div className="flex h-[100vh]  " style={{
        padding : "4vh"
    }}>
      <div className="flex flex-col items-start p-8 w-1/4 bg-lavender-200 border-2  bg-white rounded-xl" style={{
        padding : "4vh"
      }}>
        <div className="mb-8 text-5xl font-bold " style={{
            marginBottom : "4vh"
        }} >Questions:</div>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="mb-4" style={{
            marginBottom : "4vh"
          }}>
            <a href={`#question-${index + 1}`} className="text-3xl">{`Question ${index + 1}`}</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center p-8 w-3/4">
        <div className="mb-8 text-5xl font-bold" style={{
            marginBottom : "4vh"
        }}  >Select the correct answer:</div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-[95%]" id={`question-${currentQuestion}`}>
          <div className="mb-4 text-3xl font-medium " style={{padding : "4vh"}} >What is the capital of France?</div>
          <div className="flex flex-col gap-[4vh]" style={{padding : "4vh"}} >
            {["Paris", "London", "Berlin", "Madrid"].map((option, index) => (
              <label key={index} className="flex items-center mb-4 text-2xl">
                <input type="radio" name="question" value={option} className="mr-2" />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button className="mt-8  text-white py-4 px-8 rounded absolute bottom-4 right-4 text-3xl" onClick={() => alert('Result calculated!')}>
          <CustomButton buttonName="Submit" />
        </button>
        <div className="mt-8  text-white py-4 px-8 rounded absolute bottom-4 left-4 text-3xl" onClick={goBack}>
          <CustomButton buttonName="Go Back" />
        </div>
      </div>
    </div>
    </>
  )
}

export default MCQ
