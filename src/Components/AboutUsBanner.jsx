import React, { useEffect, useState } from 'react';

const AboutUsBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <>
      {/* Main Banner Section */}
      <div
        className="relative h-full w-full"
        style={{ backgroundImage: 'url("/Assets/Images/aboutus.jpg")' }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
        <div className="absolute inset-0 bg-[#012236] opacity-70"></div>
        {/* Content Above the Overlay */}
        <header
          className={`relative pt-20 flex flex-col justify-center items-center text-center h-80 text-white font-poppins transition-all duration-1000 ease-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <nav className="mt-4 text-lg text-gray-300">
            <a href="/" className="hover:underline font-semibold text-xl">
              Home
            </a>{' '}
            / <span className="text-xl font-semibold">About Us</span>
          </nav>
        </header>
      </div>
    </>
  );
};

export default AboutUsBanner;
