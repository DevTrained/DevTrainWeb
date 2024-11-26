// src/AnimatedSection.jsx
import React, { useEffect, useState } from "react";

const AnimatedSection = () => {
  const dynamicWords = ["BRAND", "WEB APP","SOFTWARE", "MOBILE APP" , "E-COMMERCE"];
  const [displayedText, setDisplayedText] = useState(""); // Typing text
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // Track typing or deleting
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = isDeleting ? 100 : 200;

    const handleTyping = () => {
      const currentWord = dynamicWords[currentWordIndex];

      if (!isDeleting && charIndex < currentWord.length) {
        // Typing effect
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting effect
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Start deleting after word is fully typed
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        // Move to next word after deleting
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex, dynamicWords]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#def2f1] font-poppins ">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full bg-transparent  rounded-lg overflow-hidden gap-y-8 lg:gap-x-8">
        {/* Image Container */}
        <div className="flex-1 rounded-md h-[300px] sm:h-[400px] lg:h-[600px] w-full flex justify-center items-center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMJIU1Fq3BldqOuCnZij_o0hR6rcOx14_1A&s" alt="Image" className="object-cover w-full h-full" />
</div>



        {/* Text Container */}
        <div className="flex-1 p-10 flex flex-col items-start justify-center space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-[96px] font-extrabold text-[#012236] flex items-center ">
              WE'RE
            <img
              src="/Assets/Images/logo-bird.png"
              alt="Logo"
              className=" h-10 sm:h-12 lg:h-16  "
              />
          </h1>

          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-[#012236]">
          <span className="bg-gradient-to-r from-[#175255] to-[#089084] text-transparent bg-clip-text font-extrabold">
  {displayedText}
</span>

            <span className="text-black font-mono cursor">|</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-8xl font-extrabold text-[#012236]">
            DEVELOPMENT
          </h1>
          <section className="flex items-center justify-center mt-[3%]">
  <h1 className="text-3xl sm:text-4xl lg:text-8xl font-extrabold text-[#012236] mr-4">
    COMPANY
  </h1>
</section>

          {/* Button with Arrow Icon */}
          <div className="flex justify-between  border-2 border-red-950 w-full">

          <button className="ml-2 py-3 px-10 sm:px-14 lg:px-28 text-white font-semibold text-lg bg-[#089084] flex items-center justify-between transition-all duration-300 hover:bg-gradient-to-r hover:from-[#089084] hover:to-[#012236] hover:shadow-lg heartbeat">
  <span>Hire Us</span>
  <span className="ml-3 transform transition-all duration-300 group-hover:translate-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </span>
</button>
<img
    src="/public/Assets/Images/Arrow[1] (2).png" // Replace with your image path or URL
    alt="Icon"
    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 mt-3 " // Adjust the size as needed
  />
          </div>


        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
