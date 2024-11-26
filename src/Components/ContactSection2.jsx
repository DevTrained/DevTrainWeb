import React from "react";

const ContactSection2 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 ">
        {/* left section */}
        <div  className=" w-[50%]" >
      <div className="relative flex justify-center items-center  h-80 ">
  {/* Logo */}
  <img
    src="/public/Assets/Images/i2.png" // Replace with actual logo URL
    alt="DevTrain Logo"
    className="w-64 z-20"
  />

  {/* Dotted Heart Animation */}
<div className="absolute top-[20%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 grid grid-cols-5 grid-rows-5 gap-1 animate-beat-heart z-10">
  {Array.from({ length: 30 }).map((_, index) => (
    <div
      key={index}
      className={`w-2 h-2 rounded-full bg-red-500 ${
        // Adjusted indices for a more accurate heart shape
        [1, 3, 5, 7, 9, 10, 14, 15, 19, 21,23,27].includes(index)
          ? "block"
          : "opacity-0"
      }`}
    ></div>
  ))}
</div>


  {/* Dots Background Animation */}
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 grid grid-cols-4 grid-rows-4 gap-1 z-0">
    {Array.from({ length: 16 }).map((_, index) => (
      <div
        key={index}
        className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"
      ></div>
    ))}
  </div>
</div>
</div>


        {/* Right Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Our Team Will Answer all Your Questions
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Address</strong> <br />
              300/2, R Block, Near SICAS, Johar Town Phase 2, Lahore
            </p>
            <p className="text-gray-600">
              <strong>Email</strong> <br />
              hello@devtrain.co, devtrained@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Phone</strong> <br />
               (+92) 308 777 2529
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
  <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-500 transition-all">
    <a href="#" className="text-gray-600 hover:text-white">
      <i className="fab fa-facebook-f text-xl"></i>
    </a>
  </div>
  <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full hover:bg-pink-500  transition-all">
    <a href="#" className="text-gray-600 hover:text-white">
      <i className="fab fa-instagram text-xl"></i>
    </a>
  </div>
  <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-700 transition-all">
    <a href="#" className="text-gray-600 hover:text-white">
      <i className="fab fa-linkedin-in text-xl"></i>
    </a>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;