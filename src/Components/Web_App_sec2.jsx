// PricingPlans.jsx
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const PricingPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);
  
  return (
    <section className="py-12 px-4 text-center bg-gradient-to-r from-[#175255] bg-[#012236] font-poppins overflow-hidden">
      <h2 className="text-3xl font-semibold text-white mb-8">Choose Your Perfect Web Application Development Plan</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-[6%]">
        {/* Basic Plan */}
        <div
          data-aos="fade-right"
          className="pricing-card bg-white shadow-lg rounded-lg p-3 w-full sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$49/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Initial consultation and requirement analysis
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Single-page application setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic UI/UX design and layout
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Responsive design for mobile and desktop
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>API integration for essential data access
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic SEO and performance optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Email support (response within 48 hours)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Documentation for core features
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly updates and maintenance
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to web development tutorials
            </li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="relative pricing-card bg-blue-100 shadow-lg rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 transform scale-110 hover:cursor-pointer">
          {/* Thumbs-Up Icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#def2f1] rounded-full p-4 shadow-lg flex items-center justify-center">
            <i className="fas fa-thumbs-up text-[#089084] text-4xl animate-bounce"></i>
          </div>

          <h3 className="text-xl font-semibold text-[#089084] mt-8 mb-4">Standard Plan</h3>
          <p className="text-2xl font-bold text-[#089084] mb-4">$99/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced multi-page application setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Custom UI/UX design and branding
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Database integration and data management
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Secure authentication and user management
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>API development for dynamic data access
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>SEO and enhanced performance optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Priority email and phone support (24-hour response)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Bi-weekly maintenance and performance reports
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced documentation and user guides
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>2-hour monthly strategy consultation
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div
          data-aos="fade-left"
          className="pricing-card bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$199/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>End-to-end custom web application development
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Fully scalable architecture and microservices
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Real-time data synchronization and analytics
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Comprehensive API and third-party integration
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Enterprise-level security and compliance setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Real-time performance monitoring and optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>24/7 dedicated support (phone, email, chat)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>4-hour monthly in-depth consultation and planning
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Detailed training and on-site support
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to premium web development tools and plugins
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
