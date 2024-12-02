import React from 'react';

const ServiceBanner = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden font-poppins">
      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src="/Assets/Images/Service.jpg"
        alt="Portfolio Banner"
      />
      
      {/* Gradient Overlay from Left (Darker) to Right (Lighter) */}
      <div className="absolute  inset-0 bg-gradient-to-r from-black to-transparent opacity-85"></div>

      {/* Flexbox Container for Text and Image */}
      <div className="absolute top-28 lg:top-1/4 sm:top-20 right-10 w-full text-white py-6 px-16 sm:px-20 md:px-20 lg:px-20">
        {/* Text on the Left */}
        <div className="w-full  md:w-[60%]">
          <div className='flex items-center gap-2'>
            <div className='w-10 h-[0.3vh] bg-[#f7ab0a]'></div>
            <p className='text-xl sm:text-2xl text-[#f7ab0a] font-semibold font-poppins'>
              Our Services
            </p>
          </div>
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mt-[6%] mb-4 font-poppins">
            Our world-class services to achieve <span className='text-[#089084]'>Business Success.</span>
          </p>
          <p className="text-sm sm:text-xl  font-medium font-poppins ">
            At Devtrain SMC PTV (LTD), we are dedicated to empowering your business with top-tier services designed to drive growth, efficiency, and innovation.
          </p>
          <button className="bg-[#089084] text-white h-12 w-32 sm:h-14 sm:w-44 rounded-full p-1 text-sm sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#175255] hover:to-[#012236] mt-[6%]">
  Hire Us 

            <span className="material-icons sm:ml-2 ml-1 text-xl sm:text-2xl">arrow_forward</span>
          </button>
        </div>

        {/* Laptop Image on the Right (if needed) */}
        {/* <div className="hidden lg:block absolute right-10 bottom-10 w-[30%] md:w-[25%]">
          <img
            className="w-full object-contain"
            src="/Assets/Images/laptop-image.png" // Replace with your laptop image
            alt="Laptop"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ServiceBanner;
