import React from "react";

const CurrentOpenings = () => {
  const openings = [
      "Software development",
    "UI / UX",
    "Content Writer",
    "Web Designer",
    "Mobile Application Developer",
    "SEO",
    "Business Development Executive",
    
  ];

  return (
    <>
    <div className="container mx-auto px-4 py-8 font-poppins">
    <div className="text-center">
  <h2 className="text-3xl font-semibold mb-4">Current Openings</h2>
  <p className="text-gray-500 mb-6 flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-2">
    <span className="material-icons-outlined text-gray-700">business_center</span>
    Devtrain | 
    <span className="material-icons-outlined text-gray-700">location_on</span>
    Lahore, Pakistan
  </p>
</div>

   <div className="flex justify-center mt-20">
      <div className="w-[50%] flex flex-wrap justify-center   gap-4">
        {openings.map((opening, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-all"
          >
            {opening}
          </button>
        ))}
      </div>
    </div>  
    </div>
    </>
  );
};

export default CurrentOpenings;