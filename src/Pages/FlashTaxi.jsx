import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";  // Import Helmet for SEO

const FlashTaxi = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    
  // Define your slides array with image URLs
  const slides = [
    "/Assets/Images/FlashTaxi1.png",
    "/Assets/Images/FlashTaxi2.png",
    "/Assets/Images/FlashTaxi3.png",
    "/Assets/Images/FlashTaxi4.png",
    "/Assets/Images/FlashTaxi5.png",
    "/Assets/Images/FlashTaxi6.png",
  ];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full text-left font-poppins overflow-hidden">
      {/* SEO Metadata */}
      <Helmet>
        <title>FlashTaxi - Case Study</title>
        <meta name="description" content="FlashTaxi Case Study - Revolutionizing Taxi Services" />
        <meta name="keywords" content="FlashTaxi, Case Study, Taxi Services, Transportation" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourwebsite.com/FlashTaxi" />
      </Helmet>

      {/* header  */}
      <header
        className="relative bg-cover bg-center py-10 md:py-14 text-center text-white font-poppins"
        style={{ backgroundImage: 'url("/Public/Assets/Images/PagesBanner.jpg")' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <div className="relative container top-4 sm:top-0 mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-3 text-gray-200 mt-[6%] relative">
            <Link to="/Portfolio" className="hover:underline text-xl"><b>Our Portfolio</b></Link> / 
            <span className="ml-2 text-xl"><b>Case Study</b></span>
          </nav>
          
          {/* Main Header Content */}
          <h1 className="text-2xl md:text-3xl font-semibold relative">FlashTaxi</h1>
        </div>
      </header>
      {/* Section 1: Top Section */}
      <div className="bg-white py-8 px-0 sm:px-4 md:px-5 lg:px-6 xl:px-6">
        <div className="flex items-center gap-4">
          <div className="w-[6px] bg-[#089084]" style={{ height: '4em' }}></div>
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#012236] leading-tight">
            Revolutionizing Taxi Services with FlashTaxi
          </h1>
        </div>
      </div>

      {/* Section 2: Blue Background Section */}
      <div className="bg-[#089084] py-16 px-0 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between font-manrope">
        {/* Left Text Section */}
        <div className="text-white sm:w-full mb-8 md:mb-0 md:w-1/2 px-4 md:px-0">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold">Case Study:</h2>
          <br />
          <h3 className="text-2xl md:text-3xl lg:text-6xl font-semibold mb-4 text-[#012236]">
            FlashTaxi App
          </h3>
          <p className="text-md text-left sm:text-md md:text-base lg:text-lg xl:max-w-lg sm:w-full md:max-w-lg lg:max-w-lg">
            The FlashTaxi App is a cutting-edge platform designed to improve taxi services and enhance the passenger experience. With features such as real-time ride tracking, seamless payments, and driver ratings, FlashTaxi ensures safe, reliable, and efficient transportation for users.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="h-100 flex justify-center md:justify-end px-4 md:px-0">
          <img 
            src="/Assets/Images/FlashTaxi.png" 
            alt="FlashTaxi App Mockup" 
            className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl self-start"
          />
        </div>
      </div>

      {/* Section 3: Introduction */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-8">
        {/* Left Title Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084]"></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#089084] mt-2">Introduction</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-left text-sm sm:text-xl md:text-base lg:text-lg sm:w-full leading-relaxed lg:max-w-xl md:max-w-xl xl:max-w-2xl font-poppins">
          <p>
            The FlashTaxi App is designed to revolutionize the taxi experience by providing real-time ride tracking, seamless payment options, and easy driver-passenger communication. By leveraging GPS technology and user-friendly interfaces, FlashTaxi ensures that passengers can book rides quickly, track their drivers, and pay securely. This app is built to make transportation more reliable, convenient, and safe for everyone.
          </p>
        </div>
      </div>

      {/* Section 4: Carousel Section */}
      <div className="flex items-center justify-center min-h-screen bg-[#089084] relative">
        <div className="relative flex gap-4 overflow-hidden w-full max-w-5xl">
          {slides.map((slide, index) => {
            let positionClasses = "";
            let zIndex = index === currentSlide ? 10 : 1;

            // Adjust positioning logic for more slides
            if (index === currentSlide) {
              positionClasses = "scale-100 z-10";
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
              positionClasses = "-translate-x-1/2 rotate-[-8deg] scale-90";
            } else if (index === (currentSlide + 1) % slides.length) {
              positionClasses = "translate-x-1/2 rotate-[8deg] scale-90";
            } else {
              positionClasses = "-translate-x-full pointer-events-none";
            }

            return (
              <div
                key={index}
                className={`relative transition-all duration-700 transform ease-in-out ${positionClasses}`}
                style={{ zIndex: zIndex }}
              >
                <div className="w-80 h-[600px] rounded-lg p-6 transform hover:scale-105 hover:rotate-[10deg] hover:-translate-y-4 hover:duration-500 hover:ease-in-out">
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Updated Arrow Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-20"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-20"
        >
          &#10095;
        </button>
      </div>

      {/* Section 5: Problems */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-8">
        {/* Left Title Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084]"></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Problems</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          <p>
            Passengers often face issues with unreliable ride tracking, difficulty in communication with drivers, and lack of safety features during transit. Drivers also struggle with managing multiple ride requests, navigating unfamiliar areas, and ensuring timely service. FlashTaxi addresses these challenges through real-time tracking, driver ratings, and a simplified booking process.
          </p>
        </div>
      </div>

      {/* Section 6: Solutions */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-8">
        {/* Left Title Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084]"></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Solutions</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-sm sm:text-xl md:text-base lg:text-lg sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          <p>
            FlashTaxi introduces a suite of features designed to enhance the taxi experience. This includes real-time ride tracking via GPS, secure payment methods, and an easy-to-use interface for both passengers and drivers. These features ensure a safer and more efficient ride for everyone.
          </p>
        </div>
      </div>

      {/* Section 7: Conclusion */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-8">
        {/* Left Title Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084]"></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Conclusion</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-sm sm:text-xl md:text-base lg:text-lg sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          <p>
            FlashTaxi is more than just an app; it's a comprehensive solution to modern transportation challenges. By integrating user feedback, leveraging technology, and focusing on convenience and safety, FlashTaxi is positioned to be a leader in the taxi service industry.
          </p>
        </div>
      </div>

      {/* Section 8: Contact Information */}
      <div className="bg-[#089084] text-white text-center py-12 px-4 md:px-10 lg:px-12 xl:px-16">
        <p className="text-sm mb-2">For inquiries or feedback, please contact us:</p>
        <p className="text-lg font-bold">info@flashtaxi.com</p>
      </div>
    </div>
  );
};

export default FlashTaxi;
