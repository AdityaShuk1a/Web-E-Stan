import React, { useState } from 'react';

const SubjectPage = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <div className="h-[100vh] bg-gray-100 flex flex-col">
      {/* Main container with full height */}
      <div className="flex flex-col h-full px-4" >
        {/* Header Section - 20% of viewport height */}
        <div className="h-[20vh] bg-blue-50 flex flex-col sm:flex-row justify-between items-center px-8 py-6 shadow-md rounded-xl">
          <h1 className="text-6xl font-bold mb-4 sm:mb-0 text-blue-800">Subject Name</h1>
          <button 
            onMouseEnter={() => setIsGlowing(!isGlowing)} 
            onMouseLeave={() => setIsGlowing(!isGlowing)}
            className="flex items-center h-[4vh] w-fit gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg"
          >
            Access Knowledge
            <svg 
              className={`w-6 h-6 text-4xl ${isGlowing ? 'text-yellow-300 animate-pulse' : 'text-gray-200'}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
            </svg>
          </button>
        </div>

        {/* Content Section - 80% of viewport height */}
        <div className="h-[80vh] flex flex-col sm:flex-row gap-8 p-8 bg-gray-100">
          {/* Left Side - Class and Topics */}
          <div className="w-full sm:w-1/2 space-y-8 h-full">
            {/* Class Dropdown */}
            <div className="relative group h-[15%] min-h-[100px]">
              <div className="h-full p-6 flex justify-items-start items-center bg-purple-50 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-all border-2 border-purple-200">
                <h2 className="text-xl font-semibold text-purple-800"  style={{
                margin : "2vh"
              }}  >Select Class</h2>
                <div className="hidden group-hover:block absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-xl z-10">
                  <div className="p-2 bg-purple-50">
                    <div className="p-3 hover:bg-purple-100  border-b-2 border-black text-2xl rounded cursor-pointer transition-all" style={{
                        padding : "4vh"
                    }}>Class 9</div>
                    <div className="p-3 hover:bg-purple-100  border-b-2 border-black text-2xl rounded cursor-pointer transition-all" style={{
                        padding : "4vh"
                    }}>Class 9</div>
                    <div className="p-3 hover:bg-purple-100  border-b-2 border-black text-2xl rounded cursor-pointer transition-all" style={{
                        padding : "4vh"
                    }}>Class 9</div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Topics - Takes remaining height */}
            <div className="space-y-4 h-[80%] overflow-x-hidden flex flex-col justify-center items-center  overflow-y-auto">
              <div className="p-6 bg-green-50 flex items-center justify-center  rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-green-200" style={{
                padding : "4vh"
              }}>
                <div className='h-[15vh] w-screen flex items-center justify-center' >
                <h3 className="text-lg font-medium text-green-800">Topic 1</h3>
                </div>
                
              </div>
              <div className="p-6 bg-green-50 flex items-center justify-center  rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-green-200" style={{
                padding : "4vh"
              }}>
                <div className='h-[15vh] w-screen flex items-center justify-center' >
                <h3 className="text-lg font-medium text-green-800">Topic 1</h3>
                </div>
                
              </div>
              <div className="p-6 bg-green-50 flex items-center justify-center  rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-green-200" style={{
                padding : "4vh"
              }}>
                <div className='h-[15vh] w-screen flex items-center justify-center' >
                <h3 className="text-lg font-medium text-green-800">Topic 1</h3>
                </div>
                
              </div>
                           
            </div>
          </div>

          {/* Right Side - Chatbot */}
          <div className="w-full sm:w-1/2 bg-amber-50 rounded-xl shadow-lg p-8 flex flex-col h-full border-2 border-amber-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex-grow flex flex-col sm:flex-row gap-4">
              {/* Chat Messages Area */}
              <div className="flex-grow overflow-y-auto p-4 bg-white rounded-lg sm:mr-4 shadow-inner">
                {/* Example messages */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg max-w-[80%] animate-fadeIn hover:scale-102 transition-transform">
                  <p className="text-lg">Hello! How can I help you today?</p>
                </div>
                <div className="mb-4 p-3 bg-green-50 rounded-lg max-w-[80%] ml-auto animate-fadeIn hover:scale-102 transition-transform">
                  <p className="text-lg">I have a question about physics.</p>
                </div>
              </div>

              {/* Mascot Area */}
              <div className="w-full sm:w-48 md:w-64 flex items-center justify-center">
                {/* Mascot placeholder with animation */}
                <div className="w-full aspect-square bg-amber-200 rounded-2xl shadow-md 
                    hover:shadow-xl transition-all duration-300 
                    animate-bounce-slow hover:scale-105
                    flex items-center justify-center overflow-hidden">
                  {/* Your mascot image will go here */}
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Ask your question..."
                className="flex-grow p-4 border-2 h-[6vh] border-amber-200 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-amber-400 
                  transition-all duration-300 hover:border-amber-300
                  text-lg"
              />
              <button className="px-8 py-4 bg-amber-500 text-white rounded-lg 
                hover:bg-amber-600 transition-all duration-300 
                transform hover:scale-105 active:scale-95
                shadow-md hover:shadow-lg text-lg font-medium" style={{
                    padding : "2vh"
                }}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
