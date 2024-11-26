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
      <h2 className="text-3xl font-semibold text-white mb-8">Choose Your Perfect E-Commerce (Shopify) Plan</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-[6%]">
        {/* Basic Plan */}
        <div
          data-aos="fade-right"
          className="pricing-card bg-white shadow-lg rounded-lg p-3 w-full sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$29/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic Shopify store setup and configuration
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Integration of up to 10 products
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic theme customization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Setup of payment gateway and checkout process
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic SEO optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Weekly performance reports
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Essential app integrations (email, analytics)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Email support (response within 48 hours)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>1-hour monthly consultation session
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to Shopify guides and tutorials
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
          <p className="text-2xl font-bold text-[#089084] mb-4">$59/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced Shopify store setup and customization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Integration of up to 50 products
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Custom theme modifications and branding
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Enhanced SEO and mobile optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Google Analytics setup and tracking
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Bi-weekly performance and sales reports
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Email marketing and automation setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Priority email and phone support (response within 24 hours)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>2-hour monthly consultation session
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to advanced Shopify plugins
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div
          data-aos="fade-left"
          className="pricing-card bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$129/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Complete Shopify store build and optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Integration of unlimited products and categories
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Fully custom design and UX optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced SEO, Google Shopping, and retargeting
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Full e-commerce analytics and conversion tracking
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Real-time performance monitoring and optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Comprehensive marketing and sales funnel setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>24/7 dedicated support (phone, email, chat)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>4-hour monthly consultation session
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to premium Shopify apps and tools
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
