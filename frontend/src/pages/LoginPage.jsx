import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent font-[Host Grotesk] p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-8 " style={{
          padding: "4vh"
        }} >
          <h4 className="text-7xl font-extrabold text-white mb-8">
            
            Login
            
            </h4>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div className="flex items-center space-x-2">
              <a 
                href="/otp-verification"
                className="text-blue-600 hover:text-blue-800 cursor-pointer font-bold text-xl"
              >
                Verify Email
              </a>
            </div>
            <div className="flex justify-center">
              <button className="w-[20vh] h-[6vh] bg-blue-600 text-white rounded-md hover:bg-blue-700 text-2xl font-bold" style={{padding: "1vh"}}>
              <Link to="/UserPage">
            Login
            </Link>
              </button>
            </div>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-8" style={{
          padding: "4vh"
        }} >
          <h4 className="text-7xl font-extrabold text-white mb-8">Sign Up</h4>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Username</label>
              <input 
                type="text" 
                placeholder="Choose a username" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3">
                <label className="block text-gray-600 font-bold text-2xl mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
                />
              </div>
              <div className="w-full md:w-1/3">
                <label className="block text-gray-600 font-bold text-2xl mb-2">Middle Name</label>
                <input 
                  type="text" 
                  placeholder="M." 
                  className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
                />
              </div>
              <div className="w-full md:w-1/3">
                <label className="block text-gray-600 font-bold text-2xl mb-2">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Contact No.</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>

            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm your password" 
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>

            <div className="flex justify-center">
              <button className="w-[20vh] h-[6vh] bg-green-600 text-white rounded-md hover:bg-green-700 text-2xl font-bold" style={{padding: "1vh"}}>
              <Link to="/UserPage">
            Sign Up
            </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
