import React from "react";
import {
  FaRocket,
  FaStethoscope,
  FaGraduationCap,
  FaUniversity,
  FaTruck,
  FaShoppingBag,
  FaShieldAlt,
  FaBullhorn,
} from "react-icons/fa";

const cardData = [
  { title: "Real Estate", icon: <FaUniversity /> },
  { title: "Healthcare", icon: <FaStethoscope /> },
  { title: "EdTech (Education Technology)", icon: <FaGraduationCap /> },
  { title: "FinTech (Financial Technology)", icon: <FaRocket /> },
  { title: "Supply Chain", icon: <FaTruck /> },
  { title: "E-Commerce", icon: <FaShoppingBag /> },
  { title: "Cybersecurity", icon: <FaShieldAlt /> },
  { title: "Digital Marketing", icon: <FaBullhorn /> },
];

const IndustriesWeDeals = () => {
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
        <span className="ml-2">We DEAL</span>
      </h1>

      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-gray-200">
        With clients of every niche and dedicated experts for every sector, we
        offer the best PPC Management services across various sectors. From
        highly competitive E-commerce and real estate sectors to sectors
        requiring awareness only, we have a proven track record.
      </p>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-2 ">
        {cardData.map((card, index) => (
          <div
          key={index}
          className="bg-transparent  border border-gray-700 p-4 flex flex-col items-center text-center  text-white transition-transform duration-500 group hover:scale-90 hover:text-[#f7ab0a]"
        >
            <div className="text-4xl mb-4 group-hover:text-[#f7ab0a]">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold group-hover:text-[#f7ab0a]">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeDeals;
