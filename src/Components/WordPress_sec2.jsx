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
      <h2 className="text-3xl font-semibold text-white mb-8">Choose Your Ideal WordPress Website Plan</h2>

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
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic static WordPress setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Installation of a free theme and plugins
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Responsive design for mobile and desktop
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Home page and 2 additional pages
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic SEO setup (meta tags, sitemap)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Contact form setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Email support with 48-hour response time
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly website maintenance
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic security setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>One-time backup setup
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
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Custom static WordPress site design
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Professional theme and plugin installation
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>SEO-optimized page structure and tags
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Up to 5 custom pages
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Google Analytics and Search Console setup
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Enhanced security features
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Bi-weekly website backups
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Priority email support (24-hour response)
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Basic training for content management
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly maintenance and performance reports
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div
          data-aos="fade-left"
          className="pricing-card bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 hover:cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
          <p className="text-2xl font-bold text-gray-900 mb-4">$99/month</p>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Custom WordPress design with premium theme
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced on-page SEO and analytics integration
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Up to 10 custom pages with multimedia support
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Priority performance and security optimization
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly SEO audit and adjustments
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Advanced backups and disaster recovery
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>24/7 dedicated support and consultation
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Full WordPress training and user manual
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Access to premium plugins and tools
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-[#089084] mr-2"></i>Monthly performance and traffic reports
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
