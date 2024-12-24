import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PortfolioSections from './PortfolioSections';
import YourCompany from '../Components/YourCompany';
import { FaLightbulb } from 'react-icons/fa';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true); // Content is loaded
  };

  const sections = [];

  return (
    <>
      {/* Meta Tags */}
      <Helmet>
        <title>Portfolio | Your Company</title>
        <meta
          name="description"
          content="Discover our portfolio of innovative apps and platforms designed to transform your ideas into reality."
        />
        <meta
          name="keywords"
          content="Portfolio, Crypto App, Order Management, Food Delivery, Taxi App, DocMagnet, Digital Transformation"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Portfolio | Your Company" />
        <meta
          property="og:description"
          content="Explore our diverse portfolio of cutting-edge applications and platforms."
        />
        <meta property="og:image" content="/Assets/Images/Protfolio-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Your Company" />
        <meta
          name="twitter:description"
          content="Transforming your ideas into reality through innovation and technology."
        />
        <meta name="twitter:image" content="/Assets/Images/Protfolio-Banner.png" />
      </Helmet>

      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="relative overflow-x-hidden h-screen w-full">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/Assets/Images/Protfolio-Banner.png"
          alt="Portfolio Banner"
          onLoad={handleLoad} // Ensure the image triggers the load handler
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>

        {/* Flex Container for Text and Image */}
        <div className="absolute top-[20%] lg:top-[25%] w-full text-white px-4 sm:px-6 md:px-10 lg:px-16 py-6">
          {/* Content */}
          <div className="max-w-full md:max-w-3/4 lg:max-w-2/3 mx-auto">
            {/* Header with Lightbulb Icon */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <FaLightbulb className="text-4xl sm:text-5xl text-[#f7ab0a]" />
              </motion.div>
              <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#f7ab0a]">
                Our Portfolio
              </p>
            </div>

            {/* Headline */}
            <p className="text-3xl sm:text-5xl md:text-5xl lg:py-2 font-extrabold mt-4 mb-4 font-poppins max-w-[90vw] md:max-w-[75vw] lg:max-w-[50vw]">
              We transform your ideas into <span className="text-[#f7ab0a]">Reality</span>
            </p>

            {/* Subtext */}
            <p className="text-md sm:text-lg w-[90%] md:text-xl font-medium max-w-[90vw] md:max-w-[75vw] lg:max-w-[50vw] font-poppins">
              We bring your product to life with a unique vision and soul to
              elevate your digital presence.
            </p>

            {/* Button */}
            <a
              href="/ContactUs"
              className="bg-[#089084] text-white h-10 sm:h-12 md:h-14 w-28 sm:w-36 md:w-44 rounded-full mt-6 p-1 text-sm sm:text-base md:text-lg font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#175255] hover:to-[#012236]"
            >
              Contact Us
              <span className="material-icons ml-1 sm:ml-2 text-lg sm:text-xl">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <PortfolioSections />
      <YourCompany />
    </>
  );
};

export default Portfolio;
