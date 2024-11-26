// PricingPlans.jsx
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const PricingPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="font-poppins py-12 px-4 text-center bg-gradient-to-r from-[#175255] bg-[#012236] overflow-hidden ">
      <h2 className="text-3xl font-semibold text-white mb-8">Choose Your Perfect AI-Consultancy Plan</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-[6%]">
        {/* Basic Plan with Animation */}
      

        <div
          data-aos="fade-right"
          className="pricing-card bg-white shadow-lg rounded-lg p-3 w-full  sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$19/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Initial AI strategy consultation
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Basic data analysis and AI potential assessment
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>AI use-case identification (1–2 use cases)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Introduction to machine learning fundamentals
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Access to essential AI tools and frameworks
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic model setup and configuration
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly performance reports
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Email support (response within 48 hours)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>1-hour consultation session per month
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Limited access to educational resources
            </li>
          </ul>
        </div>

        {/* Standard Plan with Thumbs-Up Icon and Background Design */}
        <div className="relative pricing-card bg-blue-100 shadow-lg rounded-lg p-6 w-full  sm:w-72 md:w-80 lg:w-96 transform scale-110 hover:cursor-pointer">
          {/* Thumbs-Up Icon with Background Design */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#def2f1] rounded-full p-4 shadow-lg flex items-center justify-center">
            <i className="fas fa-thumbs-up text-[#089084] text-4xl animate-bounce"></i>
          </div>

          <h3 className="text-xl font-semibold text-[#089084] mt-8 mb-4">Standard Plan</h3>
          <p className="text-2xl font-bold text-[#089084] mb-4">$39/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Comprehensive AI strategy and roadmap
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Detailed data analysis and preprocessing
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Custom AI solution for 2–3 identified use cases
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Implementation of machine learning models
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Access to intermediate AI tools and frameworks
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Model fine-tuning and performance optimization
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Bi-weekly performance reports and insights
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Priority email support (response within 24 hours)
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> 2-hour consultation sessions per month
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Access to extensive educational resources
            </li>
          </ul>

        </div>

        {/* Premium Plan with Animation */}
        <div
          data-aos="fade-left"
          className="pricing-card bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer "
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$99/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced AI strategy consultation and planning
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Full-scale data integration and processing
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Custom AI solution development for 4+ use cases
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Deployment of deep learning and advanced AI models
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to advanced AI tools and custom frameworks
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Continuous model monitoring and retraining
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Weekly performance reports with advanced analytics
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> 24/7 dedicated support (phone and email)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>4-hour consultation sessions per month
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i> Access to all educational resources and training
            </li>
         
          </ul>
        </div>
      </div>
    </section>
      
  );
}

export default PricingPlans;
