import React from 'react';

const VerifiedBySection = () => {
  // Array of logo paths for verified companies
  const logos = [
    '/Assets/Images/verify_Brands (1).webp',
    '/Assets/Images/verify_Brands (2).webp',
    '/Assets/Images/verify_Brands (3).webp',
    '/Assets/Images/verify_Brands (4).webp',
    '/Assets/Images/verify_Brands (5).webp',
    '/Assets/Images/verify_Brands (6).webp',
    '/Assets/Images/verify_Brands (7).webp',
    '/Assets/Images/verify_Brands (8).webp',
    '/Assets/Images/verify_Brands (9).webp',
  ];

  return (
    <div className="bg-[#def2f1] py-8 w-full">
      <h1 className="text-gray-800 text-center font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 sm:py-6 md:py-8">
        We Are Verified
      </h1>
      <div className="overflow-hidden relative">
        <div className="marquee flex space-x-6">
          {/* Duplicate the logos to create the infinite scrolling effect */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Verified logo ${index + 1}`}
              className="w-36 h-36 object-contain"
            />
          ))}
        </div>
      </div>

      {/* CSS for Marquee Effect */}
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default VerifiedBySection;
