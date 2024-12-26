import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa'; // Import the rocket icon

const ServiceBanner = () => {
   
   const [isLoaded, setIsLoaded] = useState(false);
   const handleLoad = () => {
    setIsLoaded(true); // Content is loaded
  };

  return (
    <>
    {/* Loader */}
    {!isLoaded && (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    )}
    <div className="h-screen w-full relative overflow-hidden font-poppins">
      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src="/Assets/Images/Service.webp"
        alt="Service Banner"
        onLoad={handleLoad} // Trigger handleLoad when the image is loaded
      />

      {/* Gradient Overlay from Left (Darker) to Right (Lighter) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-85"></div>

      {/* Flexbox Container for Text and Image */}
      <div className="absolute top-[20%] lg:top-[25%] w-full text-white px-4 sm:px-6 md:px-10 lg:px-16 py-6">
        {/* Content */}
        <div className="max-w-full md:max-w-3/4 lg:max-w-2/3 mx-auto">
          {/* Header with Rocket Icon */}
          <div className="flex items-center gap-3">
            <motion.div
              className=""
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FaRocket className="text-4xl sm:text-5xl text-[#f7ab0a]" />
            </motion.div>
            <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#f7ab0a]">
              Our Services
            </p>
          </div>

          {/* Headline */}
          <p className="text-2xl sm:text-2xl md:text-3xl w-[70%] lg:text-4xl  font-extrabold mt-4">
            Our world-class services to achieve <span className="text-[#f7ab0a]">Business Success.</span>
          </p>

          {/* Subtext */}
          <p className="text-md w-[90%] sm:text-base md:text-lg  lg:text-xl mt-4">
            At Devtrain SMC PTV (LTD), we are dedicated to empowering your business with top-tier services designed to drive growth, efficiency, and innovation.
          </p>

          {/* Button */}
          <a
            href="/Careers"
            className="bg-[#089084] text-white h-10 sm:h-12 md:h-14 w-28 sm:w-36 md:w-44 rounded-full mt-6 p-1 text-sm sm:text-base md:text-lg font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#175255] hover:to-[#012236]"
          >
            Hire Us
            <span className="material-icons ml-1 sm:ml-2 text-lg sm:text-xl">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceBanner;
