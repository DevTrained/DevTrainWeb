import React, { useEffect, useState } from 'react';
import { FaGlobe, FaCloudUploadAlt, FaMobileAlt, FaSortAmountUpAlt, FaChartBar, FaShoppingCart, FaDesktop, FaCogs, FaWordpress } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";  // Import Helmet for SEO

// Card data array with icons and links
const cardData = [
  {
    title: "Digital Marketing",
    description: "Empowering businesses to connect, convert, and grow through targeted digital marketing at Devtrain.co.",
    icon: <FaSortAmountUpAlt />,
    link: "/DigitalMarketing"
  },
  {
    title: "E-Commerce",
    description: "Transform your business into an E-Commerce powerhouse with Devtrain.co’s expert Shopify development and optimization.",
    icon: <FaShoppingCart />,
    link: "/ECommerce"
  },
  {
    title: "Web App Development",
    description: "From front-end to back-end, Devtrain.co delivers seamless, full-stack web applications using MERN technologies.",
    icon: <FaDesktop />,
    link: "/WebApplication"
  },
  {
    title: "Sementic SEO",
    description: "Devtrain.co’s semantic SEO connects the dots between searcher needs and your content, boosting visibility and engagement.",
    icon: <FaChartBar />,
    link: "/SEO"
  },
  {
    title: "WordPress",
    description: "Devtrain.co builds optimized, high-performance static websites on WordPress tailored to your business needs",
    icon: <FaWordpress />,
    link: "/WordPress"
  },
  {
    title: "Tech Trainnings",
    description: "Gain in-demand skills and boost your professional growth with Devtrain.co’s tailored training in SEO, Digital Marketing, and MERN Stack.",
    icon: <FaCogs />,
    link: "/TechTrainings"
  },
];

const HomeServices = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger animation when at least 50% of the element is in the viewport
    };

    // Create an observer
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true); // Start animation when the heading is visible
      }
    }, options);

    // Select the target element (Our Services heading)
    const target = document.querySelector('.our-services-heading');
    if (target) {
      observer.observe(target);
    }

    // Cleanup observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Devtrain.co</title>
        <meta name="description" content="Explore our wide range of services including digital marketing, e-commerce, web app development, SEO, WordPress, and tech training at Devtrain.co." />
        <meta name="keywords" content="Digital Marketing, E-Commerce, Web App Development, SEO, WordPress, Tech Training, Devtrain.co" />
      </Helmet>
      <div 
        className="container-fluid mx-auto p-4 sm:p-6 lg:p-10 bg-cover bg-center bg-[#012236] font-poppins" 
        style={{ backgroundImage: 'url(/Assets/Images/Section1_Services_Banner.png)' }}
      >
        <div className={`text-center flex justify-center mt-8 ${visible ? 'fade-up' : ''}`}>
          <div className="text-4xl sm:text-4xl md:text-6xl font-bold mb-8 text-white our-services-heading">
            Our
          </div>
          <div className="mt-0 hidden sm:block">
            <div className="flex flex-row ml-4 top-0 justify-center items-center gap-4">
            <div className="h-12 flex justify-center">
                <div className="w-0.5 h-12 bg-[#F7AB0A] absolute"></div>
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-up"></div>
              </div>
              <div className="h-12 flex justify-center">
                <div className="w-0.5 h-12 bg-[#F7AB0A] absolute"></div>
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-up"></div>
              </div>
              <div className="h-12 flex justify-center">
                <div className="w-0.5 h-12 bg-[#F7AB0A] absolute"></div>
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-up"></div>
              </div>
            </div>
          </div>
          <div className={`text-4xl sm:text-4xl md:text-6xl font-bold mt-0 ml-4 text-white ${visible ? 'fade-up' : ''}`}>
            Services
          </div>
        </div>

        <style jsx>{`
          @keyframes moveDown {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
          }

          @keyframes moveUp {
            0% { top: 80%; }
            50% { top: 0; }
            100% { top: 80%; }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-move-down {
            animation: moveDown 2s ease-in-out infinite;
          }

          .animate-move-up {
            animation: moveUp 2s ease-in-out infinite;
          }

          .fade-up {
            animation: fadeUp 1s ease-out;
          }
        `}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[6%]">
          {cardData.map((card, index) => (
            <Link
              to={card.link}
              key={index}
              className="bg-transparent border border-gray-700 p-6 flex flex-col justify-between rounded-lg transition-transform transform group hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(247,171,10,0.6)] fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl text-[#F7AB0A] mr-3 transform transition-transform duration-300 group-hover:scale-x-[-1]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-gray-200 mb-4">{card.description}</p>
              <span className="mt-auto text-blue-500 py-2 px-4 rounded transition-colors duration-300 group-hover:underline group-hover:text-blue-700 text-left">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeServices;
