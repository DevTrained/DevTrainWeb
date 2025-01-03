import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; 

  const DOCMagnet = () => {
    
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
      
      <div className="w-full text-left font-poppins  overflow-hidden">
         <Helmet>
        <title>DOCMagnet - Revolutionizing Healthcare Communication</title>
        <meta name="description" content="The Doctor-Patient Mobile App and Web Portal is an innovative platform designed to enhance healthcare communication by enabling seamless interactions between patients, doctors, and medical staff." />
        <meta name="keywords" content="DOCMagnet, healthcare communication, mobile app, doctor-patient interaction, medical records, prescription management" />
        <meta property="og:title" content="DOCMagnet - Revolutionizing Healthcare Communication" />
        <meta property="og:description" content="The Doctor-Patient Mobile App and Web Portal is an innovative platform designed to enhance healthcare communication by enabling seamless interactions between patients, doctors, and medical staff." />
        <meta property="og:image" content="/Assets/Images/DOCMagnet1.jpg" />
        <meta property="og:url" content="your-website-url-here" />
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
      <nav className="text-sm mb-3 text-gray-200 mt-[16%] sm:mt-[8%] relative">
      <Link to="/Portfolio" className="hover:underline text-xl"><b>Our Portfolio</b></Link> / 
        <span className="ml-2 text-xl"><b>Case Study</b></span>
      </nav>
      
      {/* Main Header Content */}
      <h1 className="text-2xl md:text-3xl font-semibold relative">DOCMagent</h1>
    </div>
  </header>
        {/* Section 1: Top Section */}
        <div className="bg-white py-8 px-0 md:px-5 lg:px-10 ">
    {/* Container for Line and Text */}
    <div className="flex items-center gap-4">
      {/* Vertical Line */}
      <div className="w-[6px] bg-[#089084]" style={{ height: '4em' }}></div>
      {/* Heading Text */}
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold font-poppins text-[#012236] leading-tight">
        Revolutionizing Healthcare Communication with Mobile App 
      </h1>
    </div>
  </div>




   {/* Section 2: Blue Background Section */}
<div className="bg-[#089084] py-16 px-0 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between font-manrope">
  {/* Left Text Section */}
  <div className="text-white sm:w-full mb-8 md:mb-0 md:w-1/2 px-4 md:px-0">
    <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold">
      Case Study:
    </h2>
    <br />
    <h3 className="text-2xl md:text-3xl lg:text-6xl font-semibold mb-4 text-[#012236]">
      DOCMagnet App
    </h3>
    <p className="text-md sm:text-md md:text-base lg:text-lg xl:max-w-lg sm:w-full md:max-w-lg lg:max-w-lg">
      The Doctor-Patient Mobile App and Web Portal is an innovative platform designed 
      to enhance healthcare communication by enabling seamless interactions between patients, 
      doctors, and medical staff. This solution empowers patients to easily schedule appointments, 
      consult with healthcare professionals, and access their medical records, ensuring a more 
      accessible and interactive healthcare experience for all.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex justify-center md:justify-end px-4 md:px-0 w-full md:w-1/2">
    <img 
      src="/Assets/Images/DOCMagnet.png" 
      alt="Case Study Phone App Mockup" 
      className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl self-start"
    />
  </div>
</div>




        {/* Section 3: Introduction Section */}
      
        <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-8">
    {/* Left Title Section */}
    <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
      <div className="w-10 h-[2px] bg-[#089084] mt-2"></div>
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#089084] mt-4 ">Introduction</h2>
    </div>

    {/* Right Text Section */}
    <div className="text-gray-800 text-sm sm:text-xl md:text-base lg:text-lg sm:w-full leading-relaxed lg:max-w-xl md:max-w-xl xl:max-w-2xl font-poppins ">
      <p>
        The Doctor-Patient Mobile App enhances healthcare communication by connecting patients with doctors, healthcare providers, and medical staff. It allows seamless interactions, real-time messaging, and easy access to medical records and prescriptions. Patients can schedule appointments, ask questions, and consult with their doctors remotely.   
        With features like push notifications, prescription management, and video consultations, the app ensures that patients stay informed about their health status and can receive timely medical care, creating a more accessible and interactive healthcare experience for all.
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




        {/* Section 5: Problem Section */}


  <div className="flex flex-col  md:flex-row  items-start  justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-8">
    {/* Left Title Section */}
    <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
    <div className="w-10 h-[2px] bg-[#089084] "></div>
    <h2 className="text-3xl md:text-[2.5rem] font-bold mt-2 text-[#089084]">Problems</h2>
  </div>

    {/* Right Text Section */}
    <div className="text-gray-800  text-sm  md:text-base lg:text-lg sm:text-xl  sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
      <p>
        In many healthcare settings, patients face challenges in effectively communicating with doctors and medical staff. Limited access to healthcare providers, long waiting times, and the difficulty of scheduling appointments often lead to delayed care and poor patient experience. Additionally, patients struggle to keep track of their medical records, prescriptions, and follow-up appointments.
        </p>
    </div>
    
  </div>





  {/* Section 6: Our Solution Section */}
  <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-11 py-2 ">
    {/* Left Title Section (Our Solution) */}
    <div className="flex flex-col items-start mb-6 md:mb-0 md:mr-10">
    <div className="w-10 h-[2px] bg-[#089084] "></div>
    <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#089084] mt-2">Our Solution</h2>
  </div>

    {/* Right Text Section (Solution Details) */}
    <div className="text-gray-800  text-sm  md:text-base lg:text-lg sm:text-xl  sm:w-full leading-relaxed lg:max-w-lg md:max-w-lg xl:max-w-2xl font-poppins">
      {/* Point 1: Communication and Scheduling */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#089084] ">Seamless Communication</h3>
        <p className='mt-2'>
          The Doctor-Patient Mobile App provides a real-time messaging feature that allows patients to communicate directly with doctors and medical staff. This ensures faster responses, reduces the need for waiting, and fosters more efficient doctor-patient interactions.
        </p>
      </div>

      {/* Point 2: Appointment Scheduling */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#089084] ">Effortless Appointment Scheduling</h3>
        <p className='mt-2'>
          With integrated appointment scheduling, patients can easily book consultations with doctors at their convenience. This eliminates the need for phone calls, reduces appointment gaps, and provides greater flexibility for both patients and healthcare providers.
        </p>
      </div>

      {/* Point 3: Medical Record and Prescription Management */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#089084]">Accessible Medical Records & Prescriptions</h3>
        <p className='mt-2'>
          Patients can securely access their medical records, prescriptions, and past appointments on the app, making it easier to manage health data. This allows for timely follow-ups, better understanding of medical conditions, and ensures that patients are always aware of their health status.
        </p>
      </div>
    </div>
  </div>



{/* Section 7: Benefits */}
<div className="w-full h-[70vh] sm:h-[65vh] md:h-[90vh] lg:h-[100vh] xl:h-screen relative ">
  {/* Image Section */}
  <img 
    src="/Assets/Images/mainpic1DOCMagnet.png" 
    alt="description" 
    className="w-full h-full object-cover md:block hidden "
  />

  {/* Benefits Section */}
  <div className="absolute top-0 right-0 h-full md:h-auto flex flex-col justify-center w-full md:w-[45%] lg:w-[40%] xl:w-[35%] md:mr-2 xl:mr-28  text-black px-6 sm:p-8 lg:p-10 md:bg-transparent">
    <div className="w-10 h-[2px] bg-[#089084] mt-2"></div>
    <h2 className="text-3xl sm:text-[2.5rem] font-bold mb-4 mt-2 text-[#089084]">Benefits</h2>
    <ul className="space-y-2 list-inside list-none">
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Time-saving processes for medical staff</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Increased accessibility for patients and providers</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Enhanced healthcare quality and monitoring</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Improved efficiency in handling patient data</li>
      <li><i className="fas fa-check-circle text-[#089084] mr-2"></i>Secure and streamlined communication channels</li>
    </ul>
  </div>
</div>


{/* Section 8: Conclusion Section */}
<div className="px-5 md:px-10 sm:px-8 lg:px-10 py-12 bg-[#089084]">
  {/* Conclusion Section */}
  <div className="w-12 h-[2px] bg-white mb-4 md:mb-6"></div>
  
  {/* Conclusion Title Section */}
  <div className="mb-8 md:mb-12">
    <h2 className="text-3xl md:text-[2.5rem] font-bold text-white">Conclusion</h2>
  </div>

  {/* Conclusion Text Section */}
  <div className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-poppins mt-6 md:mt-8">
    <p className="mb-8 md:mb-12">
      The Doctor-Patient Mobile App significantly transforms healthcare communication by bridging the gap between patients, doctors, and healthcare providers. This platform enables timely interactions, smooth appointment scheduling, and easy access to critical medical data. By empowering both patients and healthcare professionals with real-time communication, the app improves the overall healthcare experience.
      With features such as prescription management, video consultations, and push notifications, the app ensures that users are always informed and engaged, leading to more effective healthcare delivery. As healthcare continues to evolve, solutions like the Doctor-Patient App are paving the way for more accessible, efficient, and personalized care, fostering a healthier future for everyone.
    </p>
  </div>
</div>


  {/* section 9 for image  */}

  <div className="w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[650px] relative">
    <img 
      src="/Assets/Images/DOC111.png" 
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
        DocMagnet is revolutionizing healthcare! - Helping doctors and patients connect seamlessly. 
      </p>
    </div>
  </div>
  
  {/* First Marquee (Straight Right to Left) */}
  <div className="bg-[#089084] py-6 text-white mb-2 overflow-hidden w-full">
    <div className="whitespace-nowrap animate-marquee-right-to-left text-3xl sm:text-4xl font-semibold min-w-full">
      <p>
        Join thousands of healthcare professionals! - DocMagnet is here to streamline appointments and consultations. 
      </p>
    </div>
  </div>
</div>





<div className='h-28' >

</div>

      </div>
    );
  };

  export default DOCMagnet;