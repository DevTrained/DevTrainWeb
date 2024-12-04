import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const YourCompany = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-[20vh] sm:h-[40vh] flex justify-center items-center bg-gradient-to-r from-[#175255] to-[#012236] text-white relative font-poppins">
      {/* Company Name with Hover Effect and Arrow Div Positioned in Front */}
      <div 
        className="flex items-center justify-center transition-transform duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Company Name */}
        <h1
          className={`text-3xl  sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white ${
            hovered ? " translate-x-[-20px]" : "sm:translate-x-0"
          }`}
        >
          About Company
        </h1>

        {/* Rounded Arrow Div with Link */}
        <a href="/AboutUS" className={`flex items-center mt-2 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-5  justify-center w-8 h-8 sm:w-14 sm:h-14 md:w-14 md:h-14  lg:w-20 lg:h-20 rounded-full bg-[#F7AB0A] transition-all duration-500 ${
            hovered ? "opacity-100 sm:translate-x-10 md:translate-x-10 lg:translate-x-10 xl:translate-x-16 translate-x-2" : "opacity-0 sm:translate-x-[-20%] md:translate-x-[-20%] lg:translate-x-[-20%] xl:translate-x-[-20%] translate-x-[-40%]"
          }`}
        >
          <AiOutlineArrowRight className="text-white text-2xl sm:text-3xl md:text-4xl font-bold" />
        </a>
      </div>
    </div>
  );
};

export default YourCompany;
