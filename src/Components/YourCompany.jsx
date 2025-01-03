import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const YourCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full h-[20vh] sm:h-[40vh] flex justify-center items-center bg-gradient-to-r from-[#175255] to-[#012236] text-white relative font-poppins"
      ref={targetRef}
    >
      {/* Static Company Title */}
      <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white">
        About Company
      </h1>

      {/* Yellow Rounded Div with Animation */}
      <motion.div
        className="flex items-center ml-4 sm:ml-8 justify-center w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20  lg:w-20 lg:h-20 rounded-full bg-[#F7AB0A] cursor-pointer"
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Link to="/AboutUs">
          <AiOutlineArrowRight className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" />
        </Link>
      </motion.div>
    </div>
  );
};

export default YourCompany;
