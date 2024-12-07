import React from 'react';
import { FaRocket } from 'react-icons/fa';

// Card data array with icons and titles only
const cardData = [
  { title: "Healthcare Sector", icon: <img src="/Assets/Images/Industry_Icon_1.webp" alt="Healthcare Sector" /> },
  { title: "Corporate Sector", icon: <img src="/Assets/Images/Industry_Icon_2.webp" alt="Cloud Integration" /> },
  { title: "Ecommerce Sector", icon: <img src="/Assets/Images/Industry_Icon_3.webp" alt="Mobile App Development" /> },
  { title: "News Publication Sector", icon: <img src="/Assets/Images/Industry_Icon_4.webp" alt="Digital Marketing" /> },
  { title: "Finance & Crypto Sector", icon: <img src="/Assets/Images/Industry_Icon_5.webp" alt="E-Commerce" /> },
  { title: "Automobile Sector", icon:<img src="/Assets/Images/Industry_Icon_6.webp" alt="Web App Development" /> },
  { title: "Real Estate Sector", icon:<img src="/Assets/Images/Industry_Icon_7.webp" alt="Data Analytics" /> },
  { title: "Non-Profit Organizations Sector", icon:<img src="/Assets/Images/Industry_Icon_8.webp" alt="Cybersecurity" /> },
];

const Industries_We_Deals = () => {
  return (
    <div 
      className="container-fluid mx-auto p-10 bg-cover bg-center bg-[#012236] font-poppins" 
      style={{ backgroundImage: 'url(/Assets/Images/Section1_Services_Banner.png)' }}
    >
   <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-8 text-white">
  Industries
  <span className="mr-1"></span> 
  <span className="heart-container">
    <FaRocket className="heart-icon bounce text-6xl text-[#f7ab0a] ml-2" /> 
  </span>
  <span className="ml-2">
  We DEAL
  </span> 
</h1>

      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-gray-200">
        With clients of every niche and dedicated experts for every sector, we offer the best PPC Management services across various sectors. From highly competitive E-commerce and real estate sectors to sectors requiring awareness only, we have a proven track record.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-transparent    p-4 flex flex-col items-center text-center text-white "
          >
           <div className="text-3xl text-white mb-2 w-16 h-16 hover:scale-90 transition-transform duration-200 cursor-pointer">

              {card.icon}
            </div>
            <h3 className="text-md text-white">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries_We_Deals;
