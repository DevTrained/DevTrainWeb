import React from "react";
import { motion } from "framer-motion";
// import { FaRocket } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";


const PortfolioSections = () => {
  const sections = [
    {
      image: { src: "/Assets/Images/Crypto.png", alt: "Crypto" },
      title: "Crypto App",
      description: "A decentralized platform for buying and selling cryptocurrencies, with advanced trading features.",
      extraLine: "Secure, fast, and reliable crypto trading.",
      link: "/CoinCraft",
    },
    {
      image: { src: "/Assets/Images/OMS.png", alt: "Order Management" },
      title: "Order Management System",
      description: "A comprehensive solution to streamline the management of orders, inventory, and shipping for e-commerce businesses.",
      extraLine: "Optimizing workflows and enhancing operational efficiency.",
      link: "/OrderManagement",
    },
    {
      image: { src: "/Assets/Images/Food.png", alt: "Food App" },
      title: "Food Delivery App",
      description: "An intuitive app connecting users with their favorite restaurants for a seamless food delivery experience.",
      extraLine: "Delivering delicious food to your doorstep.",
      link: "/GreenEats",
    },
    {
      image: { src: "/Assets/Images/Taxi.png", alt: "Taxi App" },
      title: "Taxi App",
      description: "A platform to book taxis easily with real-time tracking, payment options, and ride-sharing features.",
      extraLine: "Your ride, just a tap away.",
      link: "/FlashTaxi",
    },
    {
      image: { src: "/Assets/Images/DOCMagnetprotfolio.png", alt: "DocMagnet" },
      title: "DocMagnet App",
      description: "An innovative platform enhancing communication between doctors, patients, and consultants.",
      extraLine: "Empowering seamless medical consultations and efficient healthcare management.",
      link: "/DocMagnet",
    },
  ];

  return (
    <>
      {/* Heading with Scroll Animation and Icon */}
      <motion.div
        className="flex justify-center items-center bg-gradient-to-r from-[#175255] to-[#012236] py-4 sm:py-6 md:py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          Our
        </h1>
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
      </motion.div>

      {/* Portfolio Sections */}
      <div className="h-full w-full bg-[#e9e3d5] flex flex-col p-4 space-y-8 lg:space-y-18 overflow-x-hidden ">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`relative w-full bg-white flex flex-col mx-auto ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Section with Left-Right Animation */}
            <motion.div
              className="h-64 lg:h-full lg:w-[40%] w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover"
                src={section.image.src}
                alt={section.image.alt}
              />
            </motion.div>

            {/* Text Section with Left-Right Animation */}
            <motion.div
              className="flex flex-col justify-between items-start p-6 w-full lg:w-[60%]"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-[90%] lg:w-[85%] pt-0 md:pt-20 xl:pt-28 mx-auto">
                <p className="text-[#2B7A78] font-semibold text-xl md:text-2xl lg:text-3xl mb-2 font-poppins">
                  {section.title}
                </p>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 font-poppins">
                  {section.description}
                </h2>
                <p className="text-gray-600 mb-4 font-poppins text-sm md:text-base lg:text-lg">
                  {section.extraLine}
                </p>
                <a
                  href={section.link}
                  className="text-[#2B7A78] hover:underline font-semibold font-poppins"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioSections;
