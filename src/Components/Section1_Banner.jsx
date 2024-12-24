import React, { useEffect, useState } from 'react';
import { FaGlobe, FaCloudUploadAlt, FaMobileAlt, FaSortAmountUpAlt, FaChartBar, FaShoppingCart, FaDesktop, FaCogs, FaWordpress } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";  // Import Helmet for SEO

// Card data array with icons and links
const cardData = [
  {
    title: "AI Consultancy",
    description: "Transform your business with intelligent AI strategies designed for real-world impact.",
    icon: <FaGlobe />,
    link: "/AI_Consultancy"
  },
  {
    title: "Cloud Integration",
    description: "Power your business with cloud integration that connects, scales, and secures — only with Us",
    icon: <FaCloudUploadAlt />,
    link: "/Cloud_Integration"

  },
  {
    title: "Mobile Application Development",
    description: "From concept to launch, Devtrain.co builds versatile mobile apps on iOS, Android, Flutter, and React Native to captivate your audience",
    icon: <FaMobileAlt />,
    link: "/MobileApplicationDevelopment"

  },
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-center mb-8 text-white">
          Helping You Reach Your Innovative Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center md:text-center text-white">
          Our services are designed to help you reach your full potential and achieve your goals. With our expert
        </p>

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
