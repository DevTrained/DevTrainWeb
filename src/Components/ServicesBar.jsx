import React from "react";

const ServicesBar = () => {
  // Array of logo paths for verified companies
  const logos = [
    "/Assets/Images/ServicesBar01.png",
    "/Assets/Images/ServicesBar02.png",
    "/Assets/Images/ServicesBar03.png",
    "/Assets/Images/ServicesBar04.png",
    "/Assets/Images/ServicesBar05.png",
    "/Assets/Images/ServicesBar06.png",
    "/Assets/Images/ServicesBar07.png",
    "/Assets/Images/ServicesBar08.png",
    "/Assets/Images/ServicesBar09.png",
    "/Assets/Images/ServicesBar10.png",
    "/Assets/Images/ServicesBar11.png",
    "/Assets/Images/ServicesBar12.png",
    "/Assets/Images/ServicesBar13.png",
    "/Assets/Images/ServicesBar14.png",
  ];

  return (
    <div className="bg-[#def2f1] py-8 w-full">
      <div className="overflow-hidden w-full relative">
        {/* Flex container for the marquee effect */}
        <div className="flex animate-services space-x-6 w-max">
          {/* Duplicating the logos for smooth infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Verified logo ${index + 1}`}
              className="w-20 h-20 md:w-32  md:h-32 object-contain"
            />
          ))}
        </div>
      </div>

      {/* CSS for continuous looping animation */}
      <style jsx>{`
        @keyframes services {
          0% {
            transform: translateX(0); /* Start at the leftmost point */
          }
          100% {
            transform: translateX(-50%); /* Move to the left to show the second set */
          }
        }
        .animate-services {
          animation: services 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesBar;
