import React, { useState, useEffect } from 'react';

const HomeBanner = () => {
  const words = ["Grow", "Expand", "Improve", "Transform"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  // Rotate words every 1 second with flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFlip(false);
      }, 300); // Change word after flip animation
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <div className="relative h-screen w-full bg-black overflow-hidden font-poppins">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/Assets/Images/bannerdevtrain.mp4" autoPlay loop muted playsInline
        ></video>

        {/* Text overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute flex flex-col top-1/3 xl:ml-10 md:ml-10 sm:ml-8 ml-5  space-y-4">
          {/* Flipping Text */}
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight">
            <span
              className={`text-[#F7AB0A] transition-transform duration-500 ease-in-out ${
                flip ? "flip-animation" : ""
              }`}
            >
              {words[currentWordIndex]}
            </span>{" "}
            Your <br /> Business with Us
          </h1>

          <p className="text-white  text-sm sm:text-lg md:text-lg xl:text-md bg-opacity-20 mt-4 max-w-md sm:max-w-lg lg:max-w-2xl">
          DevTrain (SMC-Private) Limited – is a leading AI marketing and tech consultancy agency, we specialize in custom software development, cloud integration and advanced AI-driven solutions for startups.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap space-x-4 mt-10 pt-16  sm:pt-2">
            <button className="bg-gradient-to-r from-[#2B7A78] to-[#2B7A78] text-white h-12 w-32 sm:h-14 sm:w-44 rounded-full p-1 text-sm sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:from-[#012236] hover:to-[#175255]">
              Hire Us
              <span className="material-icons sm:ml-2 ml-1 text-xl sm:text-2xl">arrow_forward</span>
            </button>
            <button className="border-2 border-white text-white h-12 w-32 sm:h-14 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 sm:w-44 rounded-full text-sm sm:text-lg font-semibold flex items-center justify-center transition-colors duration-300 hover:border-[#2B7A78] hover:text-[#2B7A78]">
              <span>Contact Us</span>
              <span className="material-icons ml-2 text-xl sm:text-2xl">arrow_forward</span>
            </button>
          </div>
          <div className="text-rotate-circle absolute text-white hidden lg:block xl:block xl:left-[130%] lg:left-[112%] md:left-[110%] sm:left-[90%] left-[100%] lg:top-24 xl:top-40  md:top-32 sm:top-28 top-20 justify-center items-center">
  <div className="box-circle-round  flex justify-center items-center rounded-full w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52">
    <a
      href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
      className="popup-video no-pulse z-1"
    >
      <svg className="ml-[145%]  hello" width="50" height="50" viewBox="0 0 50 50" fill="#F7AB0A" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="24.5" stroke="#F7AB0A"></circle>
        <path d="M33.1016 23.8984C33.6484 24.25 34 24.875 34 25.5C34 26.1641 33.6484 26.7891 33.1016 27.1016L21.8516 33.9766C21.2656 34.3281 20.5234 34.3672 19.9375 34.0156C19.3516 33.7031 19 33.0781 19 32.375V18.625C19 17.9609 19.3516 17.3359 19.9375 17.0234C20.5234 16.6719 21.2656 16.6719 21.8516 17.0625L33.1016 23.8984Z" fill="white"></path>
      </svg>
    </a>
    <div className="circle-text-wrapper  transform -translate-x-1/2 -translate-y-1/2 ">
      <h6 className="circle-text rotateme flex justify-center items-center text-lg">
        <span className='font-poppins' style={{ transform: 'rotate(0deg)' }}> </span>
        <span  className='font-poppins' style={{ transform: 'rotate(-16deg)' }}></span>
        <span className='font-poppins' style={{ transform: 'rotate(-22deg)' }}>A</span>
        <span className='font-poppins' style={{ transform: 'rotate(-34deg)' }}>I</span>

    
        <span className='font-poppins' style={{ transform: 'rotate(-80deg)' }}>C</span>
        <span className='font-poppins' style={{ transform: 'rotate(-96deg)' }}>o</span>
        <span className='font-poppins' style={{ transform: 'rotate(-112deg)' }}>n</span>
        <span className='font-poppins' style={{ transform: 'rotate(-128deg)' }}>s</span>
        <span className='font-poppins' style={{ transform: 'rotate(-144deg)' }}>u</span>
        <span className='font-poppins' style={{ transform: 'rotate(-156deg)' }}>l</span>
        <span className='font-poppins' style={{ transform: 'rotate(-166deg)' }}>t</span>
        <span className='font-poppins' style={{ transform: 'rotate(-176deg)' }}>i</span>
        <span className='font-poppins' style={{ transform: 'rotate(-188deg)' }}>n</span>
        <span className='font-poppins' style={{ transform: 'rotate(-206deg)' }}>g</span>
        {/* <span className='font-poppins' style={{ transform: 'rotate(-240deg)' }}> </span> */}
        {/* <span className='font-poppins' style={{ transform: 'rotate(-248deg)' }}></span> */}
       
        {/* <span className='font-poppins' style={{ transform: 'rotate(-256deg)' }}></span> */}
        <span className='font-poppins' style={{ transform: 'rotate(-260deg)' }}>A</span>
        <span className='font-poppins' style={{ transform: 'rotate(-276deg)' }}>g</span>
        <span className='font-poppins' style={{ transform: 'rotate(-292deg)' }}>e</span>
        <span className='font-poppins' style={{ transform: 'rotate(-308deg)' }}>n</span>
        <span className='font-poppins' style={{ transform: 'rotate(-324deg)' }}>c</span>
        <span className='font-poppins' style={{ transform: 'rotate(-340deg)' }}>y</span>


      </h6>
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
