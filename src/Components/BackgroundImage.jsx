import React, { useState } from 'react';

const BackgroundImage = () => {
  const [activeSection, setActiveSection] = useState('Our History');

  // Section Data
  const sections = {
    'Our History': {
      content:  `The idea behind creating Devtrain was to expand the parent company’s services and capabilities by incorporating new and innovative technologies, particularly in the field of web application development.`,
      progress: 90,
    },
    Vision: {
      content: `Our vision is to be a leader in digital transformation by empowering businesses 
      and individuals to stay ahead of the curve with innovation and excellence.`,
      progress: 85,
    },
    Mission: {
      content: `Our mission is to deliver excellence and create impactful digital solutions that 
      drive growth and success for our clients.`,
      progress: 80,
    },
    Values: {
      content: `We value integrity, innovation, and a commitment to exceeding client expectations 
      through customized solutions.`,
      progress: 75,
    },
  };

  return (
    <div className="relative font-poppins overflow-x-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/Images/aboutusbg.jpg')",
          backgroundAttachment: 'fixed',
          zIndex: -1,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative  mx-auto py-20 px-4 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Welcome to Our Journey</h1>
        </div>

        {/* Tabs */}
        <div className="flex  justify-center flex-col sm:flex-row lg:flex-row  px-3 space-y-4 sm:space-y-0 sm:space-x-4 lg:pace-x-8 ">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`py-2 px-6  text-lg font-semibold rounded-md transition-all ${activeSection === section
                ? 'bg-transparent border-2 border-[#089084] text-[#089084]'
                : 'bg-transparent border-2 border-white hover:border-[#089084] hover:text-[#089084]'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <div className="flex px-2 sm:px-0 flex-col md:flex-row sm:items-start md:items-start gap-1  md:space-x-12 md:pt-8  ">
          {/* Left Side: Logo or Image */}
          <div className="w-full md:w-1/3 xl:block lg:block md:block sm:hidden hidden  ">
            <img
              src="/Assets/Images/i1.png"
              alt="Devtrain-Logo"
              className="rounded-lg  h-28 sm:h-[44vh] md:h-[33vh] lg:h-[44vh] object-cover"
            />
          </div>

          {/* Right Side: Content and Progress Bar */}
          <div className="w-full md:w-2/3  bg-black bg-opacity-70 p-6 mt-12 md:mt-0 lg:mt-0 xl:mt-0 md:p-4   rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{activeSection}</h2>
            <p className="text-lg mb-6">{sections[activeSection].content}</p>

            {/* Progress Bar */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{activeSection} Progress</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-[#089084] h-4 rounded-full"
                  style={{ width: `${sections[activeSection].progress}%` }}
                ></div>
              </div>
              <p className="text-right text-sm">
                {sections[activeSection].progress}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
