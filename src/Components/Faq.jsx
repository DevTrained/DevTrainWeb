// src/components/FAQPage.js
import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqContainerRef = useRef(null);

  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer callback
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting && openIndex !== null) {
      setOpenIndex(null);
    }
  };

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    if (faqContainerRef.current) {
      observer.observe(faqContainerRef.current);
    }

    return () => {
      if (faqContainerRef.current) {
        observer.unobserve(faqContainerRef.current);
      }
    };
  }, [openIndex]);

  // FAQ data
  const faqs = [
    {
      question: "What is the cost of services or support?",
      answer: "Our service costs depend on the requirements and scope of the project. Contact us for a  quotation.",
    },
    {
      question: "Do you offer services for digital agencies?",
      answer: "Yes, we offer comprehensive services for digital agencies, including development and consulting.",
    },
    {
      question: "What types of staff augmentation  services do you provide?",
      answer: "We provide scalable IT sipport staff according to the need of your business.",
    },
  ];

  return (
    <div ref={faqContainerRef} className="flex flex-col w-full bg-gray-100 min-h-screen font-poppins">
      {/* Centered Heading at the Top */}
      <div className="flex flex-col items-center pt-10 sm:mb-0 mb-4">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="h-1 w-12 ml-6 sm:w-12 bg-[#089084]"></div>
          <h1 className="text-lg sm:text-3xl md:text-3xl font-bold text-[#089084] text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full mt-2  sm:mt-4   md:mt-4 lg:mt-10 xl:mt-10 2xl:mt-10">
        {/* Left Section with Image */}
        <div className="relative h-[50vh] md:h-[60vh]   lg:h-auto w-full md:w-1/2 lg:w-1/2 flex items-center justify-center p-4 md:p-6">
          <img
            className="h-full w-full max-w-md md:max-w-xl  sm:max-w-lg lg:max-w-lg  object-cover border-2 rounded-2xl border-black"
            src="/Assets/Images/project6.png"
            alt=""
          />
        </div>

        {/* Right Section with FAQ */}
        <div className="flex flex-col w-full md:w-1/2 p-4 sm:p-8  md:p-4 lg:p-4">
          <h2 className="text-lg sm:hidden block md:block lg:block xl:block md:text-2xl  lg:text-4xl font-bold mb-4  lg:mb-10 text-center ">
            Have Any Questions? Find Answers Below
          </h2>

          {/* FAQ Section */}
          <div className="space-y-4 md:space-y-2 sm:mt-2 md:mt-4 lg:mt-0 xl:mt-0 mt-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg shadow-lg p-4 xl:p-6 md:p-4  w-full mx-auto md:max-w-[95%] lg:max-w-none transition-all duration-300 ${
                  openIndex === index ? 'opacity-100 blur-none' : 'opacity-70 blur-sm'
                } ${openIndex !== null && openIndex !== index ? 'cursor-not-allowed' : ''}`}
                style={{
                  filter: openIndex !== null && openIndex !== index ? 'blur(4px)' : 'none',
                }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold">{faq.question}</h3>
                  {openIndex === index ? (
                    <FaMinus className="text-xl text-gray-600" />
                  ) : (
                    <FaPlus className="text-xl text-gray-600" />
                  )}
                </div>

                {/* FAQ Answer with Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 mt-2' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
