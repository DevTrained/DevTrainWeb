import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";  // Import Helmet for SEO


const GreenEats = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    
  // Define your slides array with image URLs
  const slides = [
    "/Assets/Images/DOCMagnet1.jpg",
    "/Assets/Images/DOCMagnet2.jpg",
    "/Assets/Images/DOCMagnet3.jpg",
    "/Assets/Images/DOCMagnet4.jpg",
    "/Assets/Images/DOCMagnet5.jpg",
    "/Assets/Images/DOCMagnet6.jpg"
  ];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full text-justify font-poppins overflow-x-hidden">
      <Helmet>
        <title>GreenEats - Revolutionizing Food Delivery</title>
        <meta name="description" content="GreenEats is a food delivery app that offers healthy, organic meal options with real-time order tracking and reliable delivery." />
        <meta name="keywords" content="GreenEats, food delivery, healthy meals, sustainable dining, organic food, meal tracking" />
        <meta property="og:title" content="GreenEats - Revolutionizing Food Delivery" />
        <meta property="og:description" content="GreenEats is a food delivery app that offers healthy, organic meal options with real-time order tracking and reliable delivery." />
        <meta property="og:image" content="/Assets/Images/mainpic1GreenEats.png" />
        <meta property="og:url" content="https://yourwebsite.com/greeneats" />
      </Helmet>
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
      <h1 className="text-2xl md:text-3xl font-semibold relative">Eatzone</h1>
    </div>
  </header>
      {/* Section 1: Top Section */}
      <div className="bg-white py-8 px-0 sm:px-4 md:px-5 lg:px-6 xl:px-6">
        <div className="flex items-center text-left gap-4">
          <div className="w-[6px] bg-[#089084]" style={{ height: '4em' }}></div>
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#012236] leading-tight">
            Revolutionizing Food Delivery with Eatzone
          </h1>
        </div>
      </div>

      {/* Section 2: Blue Background Section */}
      <div className="bg-[#089084] py-16 px-0 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between font-manrope">
        {/* Left Text Section */}
        <div className="text-white sm:w-full mb-8 md:mb-0 md:w-1/2 px-6 sm:px-8 lg:px-1 md:px-5 ">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold">
            Case Study:
          </h2>
          <br />
          <h3 className="text-2xl md:text-3xl lg:text-6xl font-semibold mb-4 text-[#012236]">
            Greeneats App
            
          </h3>
          <p className="text-md sm:text-md md:text-base lg:text-lg xl:max-w-lg sm:w-full md:max-w-lg lg:max-w-lg">
            Greeneats is an innovative food delivery platform that aims to offer fresh, healthy meals delivered right to your door. Featuring a wide range of organic, plant-based options, Eatzone
             ensures you enjoy delicious and nutritious food with ease.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="h-100 flex justify-center md:justify-end px-4 md:px-0">
          <img
            src="/Assets/Images/GreenEats.png"
            alt="GreenEats App Mockup"
            className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl self-start"
          />
        </div>
      </div>

      {/* Section 3: Introduction */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-8">
        {/* Left Title Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084] "></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#089084] mt-2">Introduction</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-sm sm:text-xl md:text-base lg:text-lg sm:w-full leading-relaxed lg:max-w-xl md:max-w-xl xl:max-w-2xl font-poppins">
          <p>
            GreenEats is a food delivery app that caters to health-conscious individuals by providing an extensive menu of organic and nutritious meals. Whether you're in the mood for a fresh salad, a wholesome bowl, or a tasty plant-based dish, GreenEats offers convenient ordering, fast delivery, and a commitment to quality.
          </p>
        </div>
      </div>

          {/* Section 4: Carousel Section */}
          <div className="flex items-center justify-center min-h-screen bg-[#089084] relative">
  <div className="relative flex gap-4 overflow-hidden w-full max-w-5xl">
    {slides.map((slide, index) => {
      let positionClasses = "";
      let zIndex = index === currentSlide ? 10 : 1;

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
          <div className="w-10 h-[2px] bg-[#089084] "></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Problems</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          <p>
            Food delivery apps often face issues such as delayed deliveries, inaccurate order tracking, and limited menu options. Additionally, many apps offer no personalized food recommendations or offer unhealthy choices. Customers also struggle with poor customer support and delivery problems. GreenEats addresses these challenges by offering fast, reliable delivery and an expansive menu of healthy options.
          </p>
        </div>
      </div>

      {/* Section 6: Solution */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-2 ">
        {/* Left Title Section (Our Solution) */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084]"></div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Our Solution</h2>
        </div>

        {/* Right Text Section (Solution Details) */}
        <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          {/* Point 1: Real-Time Order Tracking */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#089084]">Real-Time Order Tracking</h3>
            <p className="mt-2">
              GreenEats provides real-time order tracking, allowing customers to know exactly when their food will arrive.
            </p>
          </div>

          {/* Point 2: Healthy Menu Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#089084]">Healthy Menu Options</h3>
            <p className="mt-2">
              With a wide variety of organic, plant-based dishes, GreenEats ensures every meal is both nutritious and delicious.
            </p>
          </div>

          {/* Point 3: Seamless Communication */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#089084]">Seamless Communication</h3>
            <p className="mt-2">
              With an easy-to-use interface, GreenEats provides seamless communication between the customer, the restaurant, and the delivery driver.
            </p>
          </div>
        </div>
      </div>


      {/* Section 7: Benefits */} 
     <div className="w-full h-[70vh] sm:h-[65vh] md:h-[90vh] lg:h-[100vh] xl:h-screen relative ">
  {/* Image Section */}
  <img 
    src="/Assets/Images/mainpic1GreenEats.png" 
    alt="GreenEats App Features" 
    className="w-full h-full object-cover md:block hidden"
  />

  {/* Benefits Section */}
  <div className="absolute top-0 right-0 h-full  text-black p-6 sm:p-10 lg:p-10 flex flex-col justify-center w-full md:w-[45%] lg:w-[40%] xl:w-[35%] md:mr-2 xl:mr-28 sm:bg-white md:bg-transparent">
    <div className="w-10 h-[2px] bg-[#089084] mt-2"></div>
    <h2 className="text-3xl sm:text-[2.5rem] font-bold mb-4 mt-2 text-[#089084]">Benefits</h2>
    <ul className="space-y-2 list-inside list-none">
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Real-Time Order Tracking for Precise Delivery Times</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Wide Range of Healthy, Organic Meal Options</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Customized Meal Recommendations Based on Preferences</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Fast and Reliable Delivery with Tracking Notifications</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>24/7 Customer Support for Order Assistance and Queries</li>
    </ul>
  </div>
     </div>

     {/* Section 8: Conclusion Section */}
<div className="px-5 md:px-10 sm:px-8  lg:px-10 py-12 bg-[#089084]">
  {/* Conclusion Section */}
  
  {/* Divider above the Conclusion heading */}
  <div className="w-12 h-[2px] bg-white mb-4 md:mb-6"></div>
  
  {/* Conclusion Title Section */}
  <div className="mb-8 md:mb-12">
    <h2 className="text-3xl md:text-[2.5rem] font-bold text-white">Conclusion</h2>
  </div>

  {/* Conclusion Text Section */}
  <div className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-poppins mt-6 md:mt-8">
    <p className="mb-8 md:mb-12">
      The GreenEats App is transforming the food delivery experience by offering a seamless, personalized service. With features like real-time order tracking, a wide variety of healthy meal options, and reliable delivery, GreenEats ensures that customers enjoy their meals while prioritizing their health and convenience.
      As the food delivery industry evolves, GreenEats continues to lead with innovative solutions, offering timely deliveries, meal customization, and 24/7 customer support. With a commitment to customer satisfaction, GreenEats is setting new standards in the food delivery sector.
    </p>
  </div>
</div>

{/* section 9 for image  */}

<div className="w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[650px] relative">
  <img 
    src="/Assets/Images/mainpic2GreenEats.png" 
    alt="description" 
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

{/* Section 10 for Marquee */}
<div className="relative">
  {/* Second Marquee (Diagonal from Top Left to Center) */}
  <div className="bg-[#def2f1] py-6 text-black mt-2 transform -rotate-1 -translate-x absolute top-full left-0 right-0 overflow-hidden -z-10 w-full">
    <div className="whitespace-nowrap animate-marquee-left-to-right text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        GreenEats makes sustainable dining easy! - Fresh, eco-friendly meals delivered to your doorstep. 
      </p>
    </div>
  </div>
  
  {/* First Marquee (Straight Right to Left) */}
  <div className="bg-[#32a852] py-6 text-white mb-2 overflow-hidden w-full">
    <div className="whitespace-nowrap animate-marquee-right-to-left text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        Eat green, live clean! - GreenEats offers delicious, sustainable meal options for everyone. 
      </p>
    </div>
  </div>
</div>
<div className='h-28'></div>
</div>
  );
};

export default GreenEats;