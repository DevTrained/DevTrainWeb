import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPopup = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 bg-[#def2f1] font-poppins ">
      {/* Left Side: Image with Play Button */}
      <div className="relative w-full md:w-[57%] h-64 lg:w-[60%] lg:px-8  xl:w-[60%] md:h-96  md:ml-6   px-2   flex items-center justify-center">
      <img 
    src="/public/Assets/Images/Web_App_service.jpeg" 
    alt="AI Consultancy" 
    className="w-full h-full object-cover rounded-lg"
  />
  <button 
    onClick={toggleVideoPopup} 
    className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full w-16 h-16 sm:w-20 sm:h-20"
    style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
  >
    <FaPlay size={30} />
  </button>
</div>



      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
  <h1 className="text-2xl px-2 sm:text-4xl mt-2 md:text-4xl lg:text-4xl  font-extrabold text-gray-800 ">Tech Trainings Services</h1>
  <p className="text-gray-700 font-medium pt-4 px-3">
  Devtrain's tech training programs empower individuals and teams with the latest skills in programming, cloud, AI, and more. Our hands-on, expert-led courses are designed to bridge the gap between theory and practical application, fueling career growth and innovation.
  </p>
</div>


      {/* Video Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-lg">
            <button 
              onClick={toggleVideoPopup} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/watch?v=QCB5c4lnLig" 
              title="AI Consultancy Video" 
              alt="Your Browser not Supported "
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>




    </>
  );
};

export default VideoSection;
