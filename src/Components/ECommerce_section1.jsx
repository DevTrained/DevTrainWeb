import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPopup = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <>
    
  <section className=" h-full flex flex-col md:flex-row items-center  justify-between py-12 px-4 bg-[#def2f1] font-poppins ">
      {/* Left Side: Image with Play Button */}
      <div className="relative  md:p-0 md:w-[60%] h-[50%]  xl:h-full lg:h-full p-2   sm:px-20 sm:h-[50%]   lg:w-[50%] lg:px-8   xl:w-[50%]  flex ">
      <img 
    src="/public/Assets/Images/laptop_bg-remover.png" 
    alt="AI Consultancy" 
    className="w-full md:h-72 xl:p-0 h-full object-cover rounded-lg "
  />
</div>



      {/* Right Side: Text */}
      <div className="w-full  md:w-1/2 mt-4 md:mt-0 md:pl-8">
  <h1 className="text-2xl px-2 sm:text-4xl mt-2 md:text-4xl lg:text-4xl  font-extrabold text-gray-800 ">E-Commerce (Shopify) Services</h1>
  <p className="text-gray-700 font-medium pt-4 px-3">
  Devtrain.co offers tailored e-commerce solutions, specializing in Shopify to build powerful, user-friendly online stores. From setup to optimization, we help you create a seamless shopping experience that drives sales and customer loyalty
  </p>
</div>


      {/* Video Popup */}
      
    </section>
    </>
  );
};

export default VideoSection;
