import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for redirecting to home page

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <p className="mt-2 text-gray-500">You might have followed a broken link or entered a URL that doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-[#089084] text-white text-lg rounded-lg hover:bg-[#00766d] transition-all"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
