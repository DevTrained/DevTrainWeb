import React from "react";

const VerifiedBySection = () => {
  // Array of logo paths for verified companies
  const logos = [
    "/Assets/Images/verify_Brands (1).webp",
    "/Assets/Images/verify_Brands (2).webp",
    "/Assets/Images/verify_Brands (3).webp",
    "/Assets/Images/verify_Brands (4).webp",
    "/Assets/Images/verify_Brands (5).webp",
    "/Assets/Images/verify_Brands (6).webp",
    "/Assets/Images/verify_Brands (7).webp",
    "/Assets/Images/verify_Brands (8).webp",
    "/Assets/Images/verify_Brands (9).webp",

    
  ];

  return (
    <div className="bg-[#def2f1] py-8 w-full">
      <h1 className="text-gray-800 text-center font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 sm:py-6 md:py-8">
        We Are Verified
      </h1>
      <div className="overflow-hidden w-full relative">
        {/* Flex container for the marquee effect */}
        <div className="flex animate-services space-x-6 w-max">
          {/* Duplicating the logos for smooth infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Verified logo ${index + 1}`}
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
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

export default VerifiedBySection;
