import React from 'react';
import { FaGlobe, FaCloudUploadAlt, FaMobileAlt, FaSortAmountUpAlt,FaChartBar, FaShoppingCart ,FaDesktop , FaCogs,FaWordpress } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Card data array with icons and links
const cardData = [
//   {
//     title: "AI Consultancy",
//     description: "Transform your business with intelligent AI strategies designed for real-world impact.",
//     icon: <FaGlobe />,
//     link: "/AI_Consultancy"
//   },
//   {
//     title: "Cloud Integration",
//     description: "Power your business with cloud integration that connects, scales, and secures — only with Us",
//     icon: <FaCloudUploadAlt />,
//     link: "/Cloud_Integration"

//   },
//   {
//     title: "Mobile Application Development",
//     description: "From concept to launch, Devtrain.co builds versatile mobile apps on iOS, Android, Flutter, and React Native to captivate your audience",
//     icon: <FaMobileAlt />,
//     link: "/MobileApplicationDevelopment"

//   },
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
    icon:<FaChartBar />,
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
  return (
    <>
      <div 
        className="container-fluid mx-auto p-4 sm:p-6 lg:p-10  bg-cover bg-center bg-[#012236] font-poppins" 
        style={{ backgroundImage: 'url(/Assets/Images/Section1_Services_Banner.png)' }}
      >
   <div className="text-center flex justify-center mt-8 ">
  <div className="text-4xl sm:text-4xl md:text-6xl font-bold mb-8 text-white">
    Our
  </div>
  
 {/* Container for the 3 vertical lines and animated balls */}
<div className="mt-0 hidden sm:block">
  {/* Vertical Line with Balls */}
  <div className="flex flex-row ml-4 top-0 justify-center items-center gap-4">
    
    {/* First Vertical Line with ball */}
    <div className="h-12 flex justify-center">
      {/* Line */}
      <div className="w-0.5 h-12 bg-[#F7AB0A] absolute"></div>
      {/* Dot */}
      <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-down"></div>
    </div>

    {/* Second Vertical Line with ball */}
    <div className="h-12 flex justify-center">
      {/* Line */}
      <div className="w-0.5 h-12 bg-[#F7AB0A] absolute"></div>
      {/* Dot */}
      <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-up"></div>
    </div>

    {/* Third Vertical Line with ball */}
    <div className="h-12 flex justify-center">
      {/* Line */}
      <div className="w-0.5 h-12 bg-[#F7AB0A] absolute"></div>
      {/* Dot */}
      <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-up"></div>
    </div>

  </div>
</div>


  {/* Services text after the lines */}
  <div className="text-4xl sm:text-4xl md:text-6xl font-bold mt-0 ml-4 text-white">
    Services
  </div>
</div>


<style jsx>{`
  /* Custom animation for moving the balls */
  @keyframes moveDown {
    0% {
      top: 0;
    }
    50% {
      top: 50%;
    }
    100% {
      top: 0;
    }
  }

  @keyframes moveUp {
    0% {
      top: 80%;
    }
    50% {
      top: 0;
    }
    100% {
      top: 80%;
    }
  }

  /* Apply the animations */
  .animate-move-down {
    animation: moveDown 2s ease-in-out infinite;
  }

  .animate-move-up {
    animation: moveUp 2s ease-in-out infinite;
  }
`}</style>



        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-[6%]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-transparent border p-6 flex flex-col justify-between  hover: group"
            >
              {/* transition-transform transform */}
              <div className="flex items-center mb-4">
                <div className="text-5xl text-[#F7AB0A] mr-3 transform transition-transform duration-300 group-hover:scale-x-[-1]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-gray-200 mb-4">{card.description}</p>
              <Link
                to={card.link}
                className="mt-auto text-blue-500 py-2 px-4 rounded transition-colors duration-300 hover:underline hover:text-blue-700 text-left"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default HomeServices;                                        
