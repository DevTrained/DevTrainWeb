import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa'; // Import the rocket icon

const ServiceBanner = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden font-poppins">
      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src="/Assets/Images/Service.jpg"
        alt="Service Banner"
      />

      {/* Gradient Overlay from Left (Darker) to Right (Lighter) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-85"></div>

      {/* Flexbox Container for Text and Image */}
      <div className="absolute top-28 lg:top-1/4 sm:top-28 md:top-28 w-full text-white py-6 px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Text on the Left */}
        <div className="md:w-[60%]">
          <div className='flex items-center gap-2'>
            <motion.div
              className=""
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Replace FaLightbulb with the rocket icon */}
              <FaRocket className="text-3xl sm:text-5xl md:text-6xl text-[#f7ab0a]" />
            </motion.div>
            <p className='text-3xl sm:text-5xl md:text-5xl lg:text-5xl text-[#f7ab0a] font-semibold font-poppins'>
              Our Services
            </p>
          </div>
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mt-3 mb-4 font-poppins">
            Our world-class services to achieve <span className='text-[#089084]'>Business Success.</span>
          </p>
          <p className="text-sm sm:text-lg font-medium font-poppins">
            At Devtrain SMC PTV (LTD), we are dedicated to empowering your business with top-tier services designed to drive growth, efficiency, and innovation.
          </p>
          <a href='/Careers' className="bg-[#089084] text-white h-12 w-32 sm:h-14 sm:w-44 rounded-full p-1 text-sm sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#175255] hover:to-[#012236] mt-[6%]">
            Hire Us
            <span className="material-icons sm:ml-2 ml-1 text-xl sm:text-2xl">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;