import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; 

const CoinCraft = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    
  // Define your slides array with image URLs
  const slides = [
    "/Assets/Images/CoinCraft1.png",
    "/Assets/Images/CoinCraft2.png",
    "/Assets/Images/CoinCraft3.png",
    "/Assets/Images/CoinCraft4.png"
    
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
        <title>CoinCraft - Cryptocurrency Management Simplified</title>
        <meta name="description" content="Discover CoinCraft, an innovative app for cryptocurrency management. Track, trade, and analyze your portfolio with real-time insights and secure transactions." />
        <meta name="keywords" content="CoinCraft, Cryptocurrency, Crypto Trading, Portfolio Management, Secure Transactions, Real-Time Insights" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="CoinCraft - Cryptocurrency Management Simplified" />
        <meta property="og:description" content="Transform the way you manage cryptocurrency with CoinCraft. Real-time insights, secure transactions, and portfolio analytics in one app." />
        <meta property="og:image" content="/Assets/Images/CoinCraft.png" />
        <meta property="og:url" content="https://yourwebsite.com/coin-craft" />
        <meta property="og:type" content="website" />
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
      <nav className="text-sm mb-3 text-gray-200 mt-[6%] relative">
      <Link to="/Portfolio"  className="hover:underline text-xl"><b>Our Portfolio</b></Link> / 
        <span className="ml-2 text-xl"><b>Case Study</b></span>
      </nav>
      
      {/* Main Header Content */}
      <h1 className="text-2xl md:text-3xl font-semibold relative">CoinCraft</h1>
    </div>
  </header>
      {/* Section 1: Top Section */}
      <div className="bg-white py-8 px-0 sm:px-4 md:px-5 lg:px-6 xl:px-6">
        <div className="flex items-center text-left gap-4">
          <div className="w-[6px] bg-[#089084]" style={{ height: '4em' }}></div>
          <p className="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#012236] ">
            Transforming Cryptocurrency Management with CoinCraft
          </p>
        </div>
      </div>

      {/* Section 2: blue Background Section */}
      <div className="bg-[#089084] py-16 px-0 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white sm:w-full mb-8 md:mb-0 text-left md:w-1/2 px-6 sm:px-8 lg:px-1 md:px-5">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold">Case Study:</h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-[#012236]">CoinCraft App</h3>
          <p className="text-md sm:text-md md:text-base lg:text-lg xl:max-w-lg">
            The CoinCraft App is a comprehensive platform designed to empower users with efficient cryptocurrency management. With features for tracking, trading, and portfolio analytics, CoinCraft enables users to stay informed and make data-driven investment decisions in real time.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="h-100 flex justify-center md:justify-end px-4 md:px-0">
          <img 
            src="/Assets/Images/CoinCraft.png" 
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
      The CoinCraft Crypto App revolutionizes the way crypto traders interact with the market. By offering real-time insights, secure transactions, and simplified asset management, CoinCraft provides traders with the tools they need to make informed decisions. The app enables users to track market trends, manage digital assets, and execute trades securely, all in one place. 
      With features like price alerts, portfolio tracking, and a user-friendly interface, CoinCraft empowers traders to maximize their investments, stay updated on market shifts, and execute transactions with confidence, enhancing the overall crypto trading experience.
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
    <div className="w-10 h-[2px] bg-[#089084] "></div>
    <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#089084] mt-2">Problems</h2>
  </div>

  {/* Right Text Section */}
  <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
    <p>
      Crypto traders often face challenges in staying updated with real-time market trends, managing multiple assets, and ensuring secure transactions. With the volatility of cryptocurrency markets, timely information is crucial to making informed decisions. Furthermore, many platforms lack the necessary tools for simplifying asset management and secure trading, leaving traders vulnerable to errors and losses. Additionally, the complexity of managing and tracking digital assets can be overwhelming for new and experienced traders alike.
    </p>
  </div>
</div>


      {/* Section 6: Solution */}


      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-2 ">
  {/* Left Title Section (Our Solution) */}
  <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
    <div className="w-10 h-[2px] bg-[#089084] "></div>
    <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Our Solution</h2>
  </div>

  {/* Right Text Section (Solution Details) */}
  <div className="text-gray-800 text-sm md:text-base lg:text-lg sm:text-xl sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
    {/* Point 1: Real-Time Market Insights */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#089084]">Real-Time Market Insights</h3>
      <p className="mt-2">
        CoinCraft offers real-time market insights to help crypto traders make well-informed decisions. With up-to-the-minute data, users can track price trends and spot potential opportunities to maximize their investments.
      </p>
    </div>

    {/* Point 2: Secure Trading Options */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#089084]">Secure Trading Options</h3>
      <p className="mt-2">
        Our platform prioritizes the security of transactions with advanced encryption technologies. Crypto traders can trade confidently, knowing their assets and personal information are protected at all times.
      </p>
    </div>

    {/* Point 3: Simplified Asset Management */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#089084]">Simplified Asset Management</h3>
      <p className="mt-2">
        CoinCraft makes it easier for traders to manage their crypto portfolios. With an intuitive dashboard, users can monitor their assets, track profits and losses, and make adjustments to their portfolios with ease.
      </p>
    </div>
  </div>
</div>


{/* Section 7: Benefits */}
<div className="w-full h-[70vh] sm:h-[65vh] md:h-[90vh]  lg:h-[100vh] xl:h-screen relative ">
  {/* Image Section */}
  <img 
    src="/Assets/Images/mainpic1CoinCraft.png" 
    alt="GreenEats App Features" 
    className="w-full h-full object-cover md:block hidden"
  />

  {/* Benefits Section */}
  <div className="absolute top-0  right-0 h-full  text-black px-6 sm:p-8 lg:p-10 flex flex-col justify-center  w-full md:w-[45%] lg:w-[40%] xl:w-[35%] md:mr-2 xl:mr-28 sm:bg-white md:bg-transparent overflow-x-hidden">
    <div className="w-10 h-[2px] bg-[#089084] mt-2"></div>
    <h2 className="text-3xl sm:text-[2.5rem] font-bold mb-4 mt-2 text-[#089084]">Benefits</h2>
   <ul className="space-y-2 list-inside list-none">
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Real-Time Market Insights for informed trading</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Secure Transactions with advanced encryption</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Streamlined Portfolio Management</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Data-Driven Insights for better decision-making</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Comprehensive Customer Support and resources</li>
    </ul>
  </div>
     </div>


{/* Section 8: conclusion Section */}
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
      The CoinCraft Crypto App revolutionizes the way crypto traders interact with the market by offering real-time insights, secure transactions, and simplified asset management. With features like price tracking, portfolio management, and secure trade execution, the app empowers users to make smarter investment decisions.
      As the crypto space continues to evolve, CoinCraft remains at the forefront, providing tools that enhance trading efficiency and security. By offering seamless communication with the market and ensuring timely notifications on market changes, CoinCraft is helping traders stay informed and stay ahead, creating a more accessible and efficient trading experience for everyone.
    </p>
  </div>
</div>

  {/* section 9 for image  */}

  <div className="w-full h-screen overflow-x-hidden sm:h-[60vh] md:h-[70vh] lg:h-[650px] relative">
    <img 
      src="/Assets/Images/mainpic2CoinCraft.png" 
      alt="description" 
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>



{/* Section 10 for Marquee */}
<div className="relative  ">
  {/* Second Marquee (Diagonal from Top Left to Center) */}
  <div className="bg-[#def2f1] py-4 sm:py-6 text-black mt-2 transform -rotate-1 -translate-x absolute top-full left-0 right-0 overflow-hidden -z-10 w-full">
    <div className="whitespace-nowrap animate-marquee-left-to-right text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        Coin Craft Crypto simplifies trading! - Secure, fast, and user-friendly platform. 
        
      </p>
    </div>
  </div>
  
  {/* First Marquee (Straight Right to Left) */}
  <div className="bg-[#089084] py-4 sm:py-6 text-white mb-2 overflow-hidden w-full">
    <div className="whitespace-nowrap animate-marquee-right-to-left text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        Experience the future of crypto trading! - Coin Craft Crypto brings power to your fingertips. 
      </p>
    </div>
  </div>
</div>

<div className='h-28' ></div>

    </div>
    </>
  );
};

export default CoinCraft;