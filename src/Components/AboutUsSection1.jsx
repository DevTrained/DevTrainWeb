import React, { useEffect, useState, useRef } from 'react';

const AboutUsSection1 = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const progressData = [
    { title: 'Website Design and Development', percentage: 90 },
    { title: 'Web Application Development', percentage: 75 },
    { title: 'Digital Marketing', percentage: 85 },
    { title: 'Graphic Design', percentage: 70 },
  ];

  const progressBarsRef = useRef([]);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const options = {
      root: null, // viewport
      threshold: 0.5, // 50% of the element must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation when progress bar is in the viewport
          setAnimationTriggered(true);
        }
      });
    }, options);

    // Observe each progress bar element
    progressBarsRef.current.forEach((bar) => {
      observer.observe(bar);
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="text-black lg:py-8 py-4 font-poppins overflow-x-hidden">
      <div className=" mx-auto flex flex-col md:flex-row items-start gap-4 sm:px-8 px-4  ">
        {/* Left Image */}
        <div className="w-full md:w-1/2  flex-shrink-0">
          <img
            src="/Assets/Images/about-us-page.jpg"
            alt="Services"
            className="rounded-lg shadow-lg w-full h-[44vh] sm:h-[50vh] md:h-[70vh] lg:h-[60vh]   object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 font-poppins px-2 md:px-2 sm:px-0">
          <h2 className="text-4xl md:text-3xl  lg:text-5xl font-bold   text-[#089084]">ABOUT DEVTRAIN</h2>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl md:text-3xl md:mt-2 lg:mt-6 mt-4 font-bold">
            Our Expertise and  <span className="text-[#089084]">Services</span>
          </h1>

          <div className="relative flex items-center ">
            {/* Vertical Line with Balls */}
            <div className="flex flex-row ml-4 top-0 gap-4">
              {/* First Vertical Line with Ball */}
              <div className="h-12 flex ml-20 justify-center rotate-90 relative">
                {/* Line */}
                <div className="w-1 h-32 bg-[#F7AB0A] absolute"></div>
                {/* Dot */}
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-down"></div>
              </div>
            </div>
          </div>

          <p className="text-black text-lg md:text-lg  lg:text-lg   lg:py-0 xl:py-2  sm:text-xl">
          Devtrain is service based digital agency that specializes in digital marketing, SEO, web/mobile app development, cloud integrations and graphic design. At Devtrain, we are committed to delivered innovative and sustainable solutions.
          </p>

          {/* Progress Bars with Animation */}
         
        </div>
        </div>
        <div  className=' flex  justify-end xl:px-10 sm:px-9 md:px-11 px-5 pt-8 ' >
        <div className="space-y-4 w-full  ">
            {progressData.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="w-full bg-[#e5e5e5] rounded-full h-4 overflow-hidden">
                  <div
                    ref={(el) => (progressBarsRef.current[index] = el)} // Set reference for each progress bar
                    className="bg-[#089084] text-white flex items-center justify-center h-4 rounded-full progress-bar"
                    style={{
                      width: animationTriggered ? `${item.percentage}%` : '0%',
                    }}
                  >
                    <p className="text-sm font-semibold">{item.percentage}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

      {/* Custom Animation for the Progress Bars */}
      <style jsx>{`
        @keyframes moveDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(100px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-move-down {
          animation: moveDown 3s ease-in-out infinite;
        }

        /* Progress Bar Animation */
        .progress-bar {
          transition: width 2s ease-out; /* Smooth transition for width */
        }
        }
      `}</style>
    </div>
  );
};

export default AboutUsSection1;
