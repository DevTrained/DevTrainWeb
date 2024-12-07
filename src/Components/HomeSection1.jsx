import React, { useEffect } from 'react';
import { FaUsersLine } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSection = () => {
  // Initialize AOS with the 'once: true' option to ensure animations happen only once
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the duration for the animation
      once: true,      // Ensures animations trigger only once when scrolled into view
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row justify-between overflow-x-hidden !px-4 py-0 sm:p-6 md:p-10 font-poppins">
      {/* Left Side - Image Section */}
      <div className="relative   w-full md:w-1/2 flex flex-col justify-center items-center md:items-start h-full">
        {/* Main Image (Scroll-triggered Animation) */}
        <img
          src="/Assets/Images/about.png"
          alt="Main Image"
          className="w-[70%] sm:w-[70%] lg:w-[60%] xl:w-[60%]  md:w-[60%] h-[50vh] sm:h-[60vh] md:h-[70vh] sm:ml-20  object-cover md:mt-2  ml-2 mt-4 sm:mt-0 md:ml-20"
          data-aos="fade-up"
        />

        {/* Blue Box (Background) */}
        <div className="bg-[#089084] flex justify-start pl-2  items-end  w-[70%]  ml-[-10%] sm:ml-0  sm:w-[70%] md:w-[60%] h-[50vh] sm:h-[60vh] md:h-[70vh] absolute top-12 md:left-[8%] -z-10">

        </div>

        {/* Overlay Smaller Image (Slide-in from Right) */}
        <div
          className="absolute top-12 xl:left-[-10%]  md:top-16 left-[60%]  sm:top-12 sm:ml-[2%] md:left-[60%] xl:ml-[64%] w-[40%] sm:w-[35%] h-[36vh] sm:h-[40vh] overflow-hidden"
          data-aos="fade-up"
        >
          <img 
            src="/Assets/Images/about2.png"
            alt="Overlay Image"
            className="w-full  h-full object-cover"
          />
        </div>

        {/* Vertical Text */}
        {/* <div className="absolute left-[60%]  md:pl-[1%] md:bg-red-500 sm:block   hidden lg:block md:block  xl:block  lg:left-[70%] xl:left-[64%] xl:mt-[52.5%]   sm:left-[76%] mt-40 sm:mt-52 text-[#089084] text-2xl sm:text-3xl font-bold rotate-90">
          SINCE <span className="text-transparent text-4xl sm:text-3xl  font-bold stroke-text">2024</span>
        </div> */}
      </div>

      {/* Right Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col  justify-center items-center md:items-start space-y-6 md:pl-12 h-full">
      <div className="flex flex-row items-center justify-center pt-12 sm:pt-16 md:pt-0 lg:pt-0 xl:pt-0 gap-2">
    {/* Left Line */}
    <div
        className="h-1 sm:w-20 w-6 md:w-10 lg:w-20 xl:w-20 bg-[#089084]"
        data-aos="fade-up"
    ></div>

    {/* Text */}
    <h1
        className="text-md sm:text-xl md:text-xl lg:text-2xl font-bold text-[#089084] whitespace-nowrap"
        data-aos="fade-up"
    >
        Devtrain Tech Consulting Agency
    </h1>

    {/* Right Line */}
    <div
        className="h-1 sm:w-20 w-6 md:w-10 lg:w-20 xl:w-20 bg-[#089084]"
        data-aos="fade-up"
    ></div>
</div>


        {/* Company Name */}
        <div className=' w-full ' >
        <h1 className="text-3xl ml-2 sm:ml-6  md:ml-0 lg:ml-0 md:text-3xl lg:text-4xl xl:text-4xl  xl:ml-0 sm:text-4xl font-bold md:text-left" data-aos="fade-up">
          Discover the best IT <br />
          <span className="relative mt-2 block"> <span className='text-[#089084]'  >Strategy For Your Business</span>  <span className="text-[#089084]"></span></span>
         
        </h1>
        </div>
        {/* Company Description */}
        <p className="text-lg lg:w-[90%] w-full xl:w-[80%] sm:text-xl sm:text-left pl-2 sm:pl-4 text-gray-700  text-left xl:pl-0 lg:pl-0 md:pl-0 md:text-left" data-aos="fade-up">
          At Devtrain we offer wide range of tech services such as custom software development, Cloud integration, Mobile/Web development, AI model training and staff augmentation.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1  md:mt-20  md:pl-0 pl-0 sm:pl-4  sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2  lg:grid-cols-2  w-full gap-4 ">
  <div className="flex items-center space-x-3" data-aos="fade-up">
    <div className="bg-[#089084] rounded-full w-8 h-8 sm:w-10 sm:h-10 md:h-6 md:w-6 lg:w-8 lg:h-8 xl:h-10 xl:w-10 flex items-center justify-center">
      <span className="text-white material-icons">check</span>
    </div>
    <span className="text-gray-800 text-lg sm:text-lg">One-Click Consultation</span>
  </div>

  <div className="flex items-center space-x-3" data-aos="fade-up">
    <div className="bg-[#089084] rounded-full w-8 h-8 sm:w-10 sm:h-10 md:h-6 md:w-6 lg:w-8 lg:h-8 xl:h-10 xl:w-10 flex items-center justify-center">
      <span className="text-white material-icons">check</span>
    </div>
    <span className="text-gray-800 text-lg sm:text-lg">Brand Strategies</span>
  </div>

  <div className="flex items-center space-x-3" data-aos="fade-up">
    <div className="bg-[#089084] rounded-full w-8 h-8 sm:w-10 sm:h-10 md:h-6 md:w-6 lg:w-8 lg:h-8 xl:h-10 xl:w-10 flex items-center justify-center">
      <span className="text-white material-icons">check</span>
    </div>
    <span className="text-gray-800 text-lg sm:text-lg">24/7 Staff Augmentation</span>
  </div>

  <div className="flex items-center space-x-3" data-aos="fade-up">
    <div className="bg-[#089084] rounded-full w-8 h-8 sm:w-10 sm:h-10 md:h-6 md:w-6 lg:w-8 lg:h-8 xl:h-10 xl:w-10 flex items-center justify-center">
      <span className="text-white material-icons">check</span>
    </div>
    <span className="text-gray-800 text-lg sm:text-lg">Custom IT Support</span>
  </div>

  {/* Additional services with icons */}
  <div className="flex items-center  space-x-3 mt-0 sm:mt-4" data-aos="fade-up">
    <div className="text-4xl">
      <Ri24HoursFill />
    </div>
    <span className="text-gray-800 text-lg sm:text-xl">From Startup to Brand</span>
  </div>

  <div className="flex items-center space-x-3 mt-0 sm:mt-4" data-aos="fade-up">
    <div className="text-4xl">
      <FaUsersLine />
    </div>
    <span className="text-gray-800 text-lg sm:text-xl">AI Marketing Agency</span>
  </div>
</div>


        {/* Hire Us Button */}
        <div className="flex pt-0 sm:pt-4 lg:ml-36 py-10 items-center ">
         
          <a href="/Careers" className=" text-white h-12 w-32 sm:h-14 sm:w-44 lg:w-80    bg-gradient-to-r  from-[#2B7A78] to-[#2B7A78]  rounded-full p-1 text-sm sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:from-[#012236] hover:to-[#175255]">
    Hire Us
    <span className="material-icons sm:ml-2 ml-1 text-xl sm:text-2xl">arrow_forward</span>
  </a>
        </div>
        
      </div>
    </div>
      
  

      
  );
};

export default HomeSection;
