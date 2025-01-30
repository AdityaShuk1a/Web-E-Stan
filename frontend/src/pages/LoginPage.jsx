import React from 'react';

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-transparent font-[Host Grotesk]">
      <div className="w-[60%] bg-white rounded-xl shadow-xl flex overflow-hidden">
        
        {/* Left: Login Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md" />
            </div>
            {/* Verify Email Link */}
            <div className="flex items-center space-x-2">
              <a 
                href="/otp-verification"  // Use a link to navigate to the OTP page
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                Verify Email
              </a>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>

        {/* Vertical Divider */}
        <div className="w-[2px] bg-gray-300 h-3/4 self-center"></div>

        {/* Right: Signup Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <form className="space-y-4">
            {/* Username, Email, and Password at the start */}
            <div>
              <label className="block text-gray-600 mb-1">Username</label>
              <input type="text" placeholder="Choose a username" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md" />
            </div>

            {/* Personal Info (First, Middle, Last Name, Contact No., and Confirm Password) */}
            <div className="flex space-x-2">
              <div className="w-1/3">
                <label className="block text-gray-600 mb-1">First Name</label>
                <input type="text" placeholder="John" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-600 mb-1">Middle Name</label>
                <input type="text" placeholder="M." className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full px-4 py-2 border rounded-md" />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Contact No.</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Confirm Password</label>
              <input type="password" placeholder="Confirm your password" className="w-full px-4 py-2 border rounded-md" />
            </div>

            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Sign Up
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
