import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email: loginEmail, password: loginPassword };
    try {
      await axios.post('http://localhost:5000/posttask', loginData);
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const signupData = {
      username,
      email: signupEmail,
      password: signupPassword,
      firstName,
      middleName,
      lastName,
      contactNo,
      confirmPassword,
    };
    try {
      await axios.post('http://localhost:5000/posttask', signupData);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent font-[Host Grotesk] p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-8" style={{ padding: "4vh" }}>
          <h4 className="text-7xl font-extrabold text-white mb-8">Login</h4>
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
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
              <button type="submit" className="w-[20vh] h-[6vh] bg-blue-600 text-white rounded-md hover:bg-blue-700 text-2xl font-bold" style={{ padding: "1vh" }}>
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-8" style={{ padding: "4vh" }}>
          <h4 className="text-7xl font-extrabold text-white mb-8">Sign Up</h4>
          <form className="space-y-6" onSubmit={handleSignupSubmit}>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Username</label>
              <input 
                type="text" 
                placeholder="Choose a username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3">
                <label className="block text-gray-600 font-bold text-2xl mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
                />
              </div>
              <div className="w-full md:w-1/3">
                <label className="block text-gray-600 font-bold text-2xl mb-2">Middle Name</label>
                <input 
                  type="text" 
                  placeholder="M." 
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
                />
              </div>
              <div className="w-full md:w-1/3">
                <label className="block text-gray-600 font-bold text-2xl mb-2">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Contact No.</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>

            <div>
              <label className="block text-gray-600 font-bold text-2xl mb-2">Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm your password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[8vh] px-4 border rounded-md placeholder-black placeholder-bold focus:outline-none focus:ring-2 text-xl" 
              />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="w-[20vh] h-[6vh] bg-green-600 text-white rounded-md hover:bg-green-700 text-2xl font-bold" style={{ padding: "1vh" }}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
