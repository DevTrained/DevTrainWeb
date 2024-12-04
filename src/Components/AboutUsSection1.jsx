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
    <div className="text-black py-10 font-poppins mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 px-4">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="/Assets/Images/about-us-page.jpg"
            alt="Services"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 font-poppins">
          <h2 className="text-4xl font-bold text-[#089084]">ABOUT DEVTRAIN</h2>
          <h1 className="text-3xl md:text-5xl mt-4 font-bold">
            Our Expertise and <br /> <span className="text-[#089084]">Services</span>
          </h1>

          <div className="relative flex items-center mt-6">
            {/* Vertical Line with Balls */}
            <div className="flex flex-row ml-4 top-0 gap-4">
              {/* First Vertical Line with Ball */}
              <div className="h-12 flex ml-20 justify-center rotate-90 relative">
                {/* Line */}
                <div className="w-1.5 h-32 bg-[#F7AB0A] absolute"></div>
                {/* Dot */}
                <div className="w-4 h-4 border-2 border-[#F7AB0A] bg-black rounded-full relative top-0 transform animate-move-down"></div>
              </div>
            </div>
          </div>

          <p className="text-black text-lg mt-6">
            AAMAX is a full-service digital agency that specializes in website
            design and development, web application development, digital
            marketing, and graphic design. At AAMAX, we are committed to
            delivering innovative and effective solutions to our clients across
            a wide range of industries, from small businesses to large
            corporations.
          </p>

          {/* Progress Bars with Animation */}
          <div className="space-y-4 pt-12">
            {progressData.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="w-full bg-[#e5e5e5] rounded-full h-4 overflow-hidden">
                  <div
                    ref={(el) => progressBarsRef.current[index] = el} // Set reference for each progress bar
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
      `}</style>
    </div>
  );
};

export default AboutUsSection1;
