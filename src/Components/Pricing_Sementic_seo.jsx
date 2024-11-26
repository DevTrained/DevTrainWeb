// PricingPlans.jsx
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const PricingPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="py-12 px-4 text-center bg-gradient-to-r from-[#175255] bg-[#012236] font-poppins">
      <h2 className="text-3xl font-semibold text-white mb-8">Choose Your Perfect Sementic SEO Plan</h2>

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
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Initial SEO audit and keyword analysis
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic content gap analysis
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Semantic keyword research and mapping
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Optimization of up to 5 core pages
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>On-page SEO for primary keywords
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic schema markup implementation
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Internal linking structure optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly performance report
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic meta tags and descriptions optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Email support (response within 48 hours)
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
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Comprehensive SEO audit with semantic analysis
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Content gap analysis with strategy recommendations
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>In-depth semantic keyword research and clustering
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>On-page optimization for up to 10 pages
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced schema markup for enhanced search visibility
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Internal and external link-building strategy
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly performance reports with actionable insights
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Content optimization for user intent and semantic search
            </li> <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Local SEO with location-based optimization (if applicable)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Priority email and phone support (response within 24 hours)
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
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Full-scale SEO and content audit with semantic analysis
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Comprehensive content gap analysis and roadmap
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Extensive semantic keyword research and implementation
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>On-page optimization for unlimited pages
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced schema markup with custom implementation
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Competitive analysis and strategic link-building campaigns
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Weekly performance and ranking reports
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>AI-driven content suggestions and optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Custom content creation and optimization for voice search
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>24/7 dedicated support (phone, email, and chat)
            </li>
         
          </ul>
        </div>
      </div>
    </section>
      
  );
}

export default PricingPlans;
