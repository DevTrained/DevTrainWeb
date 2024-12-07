import React from 'react';
import { motion } from 'framer-motion';
import PortfolioSections from './PortfolioSections';
import YourCompany from '../Components/YourCompany';
import { FaLightbulb } from 'react-icons/fa';

const PortfolioBanner = () => {
  const sections = [
    {
      image: { src: "/Assets/Images/Crypto.png", alt: "Crypto" },
      title: "Crypto App",
      description: "A decentralized platform for buying and selling cryptocurrencies, with advanced trading features.",
      extraLine: "Secure, fast, and reliable crypto trading.",
      link: "/CoinCraft"
    },
    {
      image: { src: "/Assets/Images/OMS.png", alt: "Order Management" },
      title: "Order Management System",
      description: "A comprehensive solution to streamline the management of orders, inventory, and shipping for e-commerce businesses.",
      extraLine: "Optimizing workflows and enhancing operational efficiency.",
      link: "/OrderManagement"
    },
    {
      image: { src: "/Assets/Images/Food.png", alt: "Food App" },
      title: "Food Delivery App",
      description: "An intuitive app connecting users with their favorite restaurants for a seamless food delivery experience.",
      extraLine: "Delivering delicious food to your doorstep.",
      link: "/GreenEats"
    },
    {
      image: { src: "/Assets/Images/Taxi.png", alt: "Taxi App" },
      title: "Taxi App",
      description: "A platform to book taxis easily with real-time tracking, payment options, and ride sharing features.",
      extraLine: "Your ride, just a tap away.",
      link: "/FlashTaxi"
    },
    {
      image: { src: "/Assets/Images/DocMagnetprotfolio.png", alt: "DocMagnet" },
      title: "DocMagnet App",
      description: "An innovative platform enhancing communication between doctors, patients, and consultants.",
      extraLine: "Empowering seamless medical consultations and efficient healthcare management.",
      link: "/DocMagnet"
    },
  ];

  return (
    <>
      <div className="relative overflow-x-hidden h-screen w-full">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/Assets/Images/Protfolio-Banner.png"
          alt="Portfolio Banner"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>

        {/* Flex Container for Text and Image */}
        <div className="absolute top-1/4 w-full text-white sm:px-9 md:px-10 lg:px-12 px-6 py-6 flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-[60%]">
            <div className="flex items-center gap-2">
              <motion.div
                className="mx-3 text-[#f7ab0a]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <FaLightbulb className="text-4xl sm:text-5xl md:text-6xl" />
              </motion.div>
              <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Portfolio
              </h1>
            </div>
            <p className="text-3xl sm:text-5xl md:text-5xl lg:py-2 font-extrabold mt-4 mb-4 font-poppins max-w-[90vw] md:max-w-[75vw] lg:max-w-[50vw]">
              We transform your ideas into <span className="text-[#089084]">Reality</span>
            </p>
            <p className="text-md sm:text-lg md:text-xl font-medium max-w-[90vw] md:max-w-[75vw] lg:max-w-[50vw] font-poppins">
              We bring your product to life with a unique vision and soul to elevate your digital presence.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <PortfolioSections />
      <YourCompany />
    </>
  );
};

export default PortfolioBanner;
