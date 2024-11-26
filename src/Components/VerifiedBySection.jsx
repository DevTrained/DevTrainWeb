import React from 'react';

const VerifiedBySection = () => {
  // Array of logo paths for verified companies
  const logos = [
    '/public/Assets/Images/verify_Brands (1).webp',
    '/public/Assets/Images/verify_Brands (2).webp',
    '/public/Assets/Images/verify_Brands (3).webp',
    '/public/Assets/Images/verify_Brands (4).webp',
    '/public/Assets/Images/verify_Brands (5).webp',
    '/public/Assets/Images/verify_Brands (6).webp',
    '/public/Assets/Images/verify_Brands (7).webp',
    '/public/Assets/Images/verify_Brands (8).webp',
    '/public/Assets/Images/verify_Brands (9).webp',
    // Add more logos as needed
  ];

  return (
    <div className="bg-[#def2f1] py-8 w-full">
      <h1 className='text-gray-800 text-center font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 sm:py-6 md:py-8'>
  We Are Verified
</h1>
      <div className="overflow-hidden">
        <div className="marquee flex items-center space-x-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Verified logo ${index + 1}`}
              className="w-36 h-36 object-contain text-[#089084]"
            />
          ))}
        </div>
      </div>

      {/* CSS for Marquee Effect */}
      <style jsx>{`
  .marquee {
    display: flex;
    animation: marquee 10s linear infinite;
    white-space: nowrap;
  }
  .marquee:hover {
    animation-play-state: paused;
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }
`}</style>


    </div>
  );
};

export default VerifiedBySection;
