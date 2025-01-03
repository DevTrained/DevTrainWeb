import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; 

const OrderManagement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    
  // Define your slides array with image URLs
  const slides = [
    "/Assets/Images/OMS-Devtrain1.jpg",
    "/Assets/Images/OMS-Devtrain2.jpg",
    "/Assets/Images/OMS-Devtrain3.jpg",
    "/Assets/Images/OMS-Devtrain4.jpg",


    
  ];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
     <Helmet>
        <title>Order Management System - Revolutionizing Business Operations</title>
        <meta
          name="description"
          content="Discover how our Order Management System streamlines operations, enhances efficiency, and improves customer satisfaction. Learn more today!"
        />
        <meta name="keywords" content="Order Management System, OMS, Business Efficiency, Real-Time Tracking, Payment Integration" />
        <meta name="author" content="YourCompanyName" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Order Management System - Revolutionizing Business Operations" />
        <meta
          property="og:description"
          content="Simplify order processing, manage inventory, and provide seamless customer service with our OMS."
        />
        <meta property="og:image" content="/Assets/Images/OrderManagementMockup.png" />
        <meta property="og:url" content="https://yourwebsite.com/order-management-system" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Order Management System - Revolutionizing Business Operations" />
        <meta
          name="twitter:description"
          content="Efficiently track orders, manage payments, and streamline operations with our Order Management System."
        />
        <meta name="twitter:image" content="/Assets/Images/OrderManagementMockup.png" />
      </Helmet>

    
    <div className="w-full text-justify font-poppins overflow-hidden">
           {/* header  */}
           <header
    className="relative bg-cover bg-center py-10 md:py-14 text-center text-white font-poppins"
    style={{ backgroundImage: 'url("/Public/Assets/Images/PagesBanner.jpg")' }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
    
    <div className="relative container top-4 sm:top-0 mx-auto px-4">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-3 text-gray-200 mt-[16%] sm:mt-[8%] relative">
      <Link to="/Portfolio"  className="hover:underline text-xl"><b>Our Portfolio</b></Link> / 
        <span className="ml-2 text-xl"><b>Case Study</b></span>
      </nav>
      
      {/* Main Header Content */}
      <h1 className="text-2xl md:text-3xl font-semibold relative">Order Management system</h1>
    </div>
  </header>
      {/* Section 1: Top Section */}
      <div className="bg-white py-8 px-0 sm:px-4 md:px-5 lg:px-6 xl:px-6">
        <div className="flex items-center text-left gap-4">
          <div className="w-[6px] bg-[#089084]" style={{ height: '4em' }}></div>
          <p className="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#012236] ">
          Revolutionizing Business Billing with Zolo Invoice
          </p>
        </div>
      </div>

      {/* Section 2: blue Background Section */}
      <div className="bg-[#089084] py-16 px-0 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white sm:w-full mb-8 md:mb-0 text-left md:w-1/2 px-6 sm:px-8 lg:px-1 md:px-5">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold">Case Study:</h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-[#3854a1]">Zolo App</h3>
          <p className="text-md sm:text-md md:text-base lg:text-lg xl:max-w-lg">
          The Zolo Invoice App is an all-in-one platform designed to streamline business billing and financial management. With features for invoice creation, tracking, and real-time payment analytics, Zolo Invoice empowers businesses to enhance efficiency and make informed financial decisions effortlessly.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="h-100 flex justify-center md:justify-end px-4 md:px-0">
          <img 
            src="/Assets/Images/OMSFront.png" 
            alt="CoinCraft App Mockup" 
            className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl self-start"
          />
        </div>
      </div>

      {/* Section 3: Introduction */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-8">
  {/* Left Title Section */}
  <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
    <div className="w-10 h-[2px] bg-[#089084] mt-2"></div>
    <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#089084] mt-4">Introduction</h2>
  </div>

  {/* Right Text Section */}
  <div className="text-gray-800   text-sm sm:text-xl md:text-base lg:text-lg sm:w-full leading-relaxed lg:max-w-xl md:max-w-xl xl:max-w-2xl font-poppins">
    <p>
     
The Zolo Invoice App redefines the way businesses manage invoicing and financial operations. By offering streamlined billing, secure payment tracking, and comprehensive financial insights, Zolo provides businesses with the tools they need to simplify operations and boost productivity.
With features like automated invoice creation, real-time payment alerts, and an intuitive user interface, Zolo enables businesses to stay organized, enhance client communication, and make informed financial decisions. The app empowers users to track transactions, manage accounts, and ensure timely payments, delivering a seamless and efficient invoicing experience for businesses of all sizes.
    </p>
  </div>
</div>


      {/* Section 4: Carousel */}
      <div className="flex items-center justify-center min-h-screen bg-[#089084] relative ">
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
          <div className="w-10 h-[2px] bg-[#089084]" />
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Problems</h2>
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          <p>
            Many order management systems struggle with inefficient order tracking, errors in inventory management, and lack of integration with payment systems. These issues cause delays and poor customer experiences. Our system addresses these challenges by providing a unified platform for tracking, payment processing, and real-time order updates.
          </p>
        </div>
      </div>

      {/* Section 6: Solution */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-2">
        {/* Left Title Section (Our Solution) */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
          <div className="w-10 h-[2px] bg-[#089084]" />
          <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Our Solution</h2>
        </div>

        {/* Right Text Section (Solution Details) */}
        <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
          {/* Point 1: Real-Time Order Tracking */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#089084]">Real-Time Order Tracking</h3>
            <p className="mt-2">
              Our system allows customers and staff to track orders in real-time, reducing confusion and improving the overall experience.
            </p>
          </div>

          {/* Point 2: Efficient Inventory Management */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#089084]">Efficient Inventory Management</h3>
            <p className="mt-2">
              The system ensures accurate tracking of inventory levels, minimizing the chances of overselling or stockouts.
            </p>
          </div>

          {/* Point 3: Seamless Payment Integration */}
          <div>
            <h3 className="text-lg font-semibold text-[#089084]">Seamless Payment Integration</h3>
            <p className="mt-2">
              Integrated payment gateways allow easy and secure transactions, enabling faster order completion.
            </p>
          </div>
        </div>
      </div>

{/* Section 7: Benefits */} 
<div className="w-full h-[70vh] sm:h-[65vh] md:h-[90vh] lg:h-[100vh] xl:h-screen relative ">
  {/* Image Section */}
  <img 
    src="/Assets/Images/OMS-benefits.jpg"  // Updated image reflecting order management
    alt="Order Management System Features" 
    className="w-full h-full object-cover md:block hidden"
  />

  {/* Benefits Section */}
  <div className="absolute top-0 right-0 h-full text-black px-6 sm:p-8 lg:p-10 flex flex-col justify-center w-full md:w-[45%] lg:w-[40%] xl:w-[35%] md:mr-2 xl:mr-28 sm:bg-white md:bg-transparent">
    <div className="w-10 h-[2px] bg-[#089084] mt-2"></div>
    <h2 className="text-3xl sm:text-[2.5rem] font-bold mb-4 mt-2 text-[#089084]">Benefits</h2>
    <ul className="space-y-2 list-inside list-none">
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Real-Time Order Tracking for Accurate Updates</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Integrated Payment Processing for Seamless Transactions</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Customizable Order Workflow to Match Business Needs</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Efficient Inventory Management for Reduced Stockouts</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>24/7 Support for Order Assistance and Issue Resolution</li>
    </ul>
  </div>
</div>


{/* Section 8: Conclusion Section */}
<div className="px-5 md:px-10 sm:px-8 lg:px-10 py-12 bg-[#089084]">
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
      The Order Management System is revolutionizing business operations by streamlining order processes, enhancing efficiency, and improving customer satisfaction. With real-time order tracking, integrated payment systems, customizable workflows, and robust inventory management, businesses can provide a seamless experience to their customers.
      As industries continue to embrace digital transformation, the Order Management System stands at the forefront, driving operational excellence and delivering timely services. With 24/7 support and scalable solutions, this system is setting new benchmarks for success in modern business operations.
    </p>
  </div>
</div>


{/* section 9 for image  */}

<div className=" xl:h-screen h-screen  sm:h-[60vh] md:h-[70vh] lg:h-[650px] relative">
  <img 
    src="/Assets/Images/OMS-Description.png" 
    alt="description" 
    className="absolute inset-0 w-full h-full  object-cover"
  />
</div>


{/* Section 10 for Marquee */}
<div className="relative">
  {/* Second Marquee (Diagonal from Top Left to Center) */}
  <div className="bg-[#def2f1] py-6 text-black mt-2 transform -rotate-1 -translate-x absolute top-full left-0 right-0 overflow-hidden -z-10 w-full">
    <div className="whitespace-nowrap animate-marquee-left-to-right text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        The Order Management System enhances efficiency! - Streamline orders, payments, and deliveries with ease. 
       
      </p>
    </div>
  </div>
  
  {/* First Marquee (Straight Right to Left) */}
  <div className="bg-[#32a852] py-6 text-white mb-2 overflow-hidden w-full">
    <div className="whitespace-nowrap animate-marquee-right-to-left text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        Optimize your business with OMS! - Efficient, integrated systems to handle orders, track deliveries, and manage customers. 
      </p>
    </div>
  </div>
</div>


    <div className='h-28' >

    </div>
    </div>
</>
  );
};

export default OrderManagement;