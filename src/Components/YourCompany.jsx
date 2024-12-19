import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const YourCompany = () => {
  return (
    <div className="w-full h-[20vh] sm:h-[40vh] flex justify-center items-center bg-gradient-to-r from-[#175255] to-[#012236] text-white relative font-poppins">
      {/* Company Name with Arrow Div Positioned in Front */}
      <motion.div
        className="flex items-center justify-center transition-transform duration-500"
      >
        {/* Company Name */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white">
          About Company
        </h1>

        {/* Sliding Rounded Arrow Div with Link */}
        <motion.div
          className="flex items-center ml-2 sm:ml-8 justify-center w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-20 lg:h-20 rounded-full bg-[#F7AB0A] transition-all duration-300"
          initial={{ x: -100 }}  // Start from left
          animate={{ x: 0 }}     // Slide to center
          transition={{
            duration: 0.5,  // Slide duration
            ease: 'easeInOut'
          }}
        >
          <Link to="/AboutUs">
            <AiOutlineArrowRight className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default YourCompany;
