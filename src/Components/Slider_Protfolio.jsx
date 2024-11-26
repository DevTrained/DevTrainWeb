// import React, { useState } from 'react';

// const SliderSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "/Assets/Images/DOCMagnet1.jpg",
//     "/Assets/Images/DOCMagnet2.jpg",
//     "/Assets/Images/DOCMagnet3.jpg",
//     "/Assets/Images/DOCMagnet1.jpg", 
//     "/Assets/Images/DOCMagnet2.jpg", 
//     "/Assets/Images/DOCMagnet3.jpg", 
//     "/Assets/Images/DOCMagnet1.jpg", 
//     "/Assets/Images/DOCMagnet2.jpg", 
//     "/Assets/Images/DOCMagnet3.jpg"
//   ];

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full px-5 relative">
//       <div className="flex overflow-x-hidden space-x-4 py-4 px-2">
//         <button
//           onClick={goToPrevious}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//         >
//           &#10094;
//         </button>

//         <div
//           className="flex-none w-[300px] h-[650px] bg-cover bg-center rounded-lg"
//           style={{ backgroundImage: `url(${images[currentIndex]})` }}
//         ></div>

//         <button
//           onClick={goToNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//         >
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SliderSection;



import React, { useState } from 'react';

const SliderSection = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-[#089084]">
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
              <div className="w-80 h-[600px]  rounded-lg  p-6 transform hover:scale-105 hover:rotate-[10deg] hover:-translate-y-4 hover:duration-500 hover:ease-in-out">
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

      {/* Arrow Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SliderSection;
