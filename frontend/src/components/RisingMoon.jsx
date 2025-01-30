import React from 'react';

const RisingMoon = () => {
  return (
    <div className="relative bg-transparent h-screen flex items-center justify-center">
      {/* Background Image */}
      <img className="absolute top-1/2 w-screen" 
           src="src/assets/moonRealistic.webp" 
           alt="Moon Realistic" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-6xl font-bold">
        <div>GLOW WITH KNOWLEDGE</div>
        <div>LIKE THE MOON</div>
      </div>
    </div>
  );
};

export default RisingMoon;
