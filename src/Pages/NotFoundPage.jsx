import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react"; // If you're using iconify-react
// import notFoundImage from "../assets/notFoundImage.png"; // Replace with the actual image path

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-[#def2f1] text-gray-800">
      {/* Left Side: Text and Icon */}
      <div className="text-center  lg:text-center md:mr-12 justify-center items-center flex flex-col mt-24 md:mt-16  lg:mt-8 lg:pl-32 pl-0 lg:w-1/2">
        <h1 className="text-5xl  md:text-6xl font-bold text-gray-900 mb-2">
          404
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-600">
          Oops! We couldn’t find this page.
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-8 py-3 bg-[#089084] text-white text-lg rounded-lg hover:bg-[#00766d] shadow-md transition-all"
        >
          <Icon
            icon="mdi:home-outline"
            className="inline-block mr-2 text-xl align-middle"
          />
          Back to Home
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-start lg:pl-12">
        <img
          src="/Assets/Images/NotFound.png"
          alt="Page Not Found"
          className="h-40 sm:h-36 md:h-56  lg:h-64 w-auto"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
