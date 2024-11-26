import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 text-black font-poppins">
        <div className="px-6 sm:px-8  md:px-10 lg:px-7 xl:px-7  ">
          {/* Top section with logo and links */}
          <div className="flex flex-col md:flex-row md:justify-between lg:space-x-8">
            {/* Logo and description */}
            <div className="flex flex-col items-center sm:items-start w-full md:w-1/3 text-center md:text-left lg:items-start lg:w-1/3 xl:w-1/4">
              <img
                className="h-32 sm:h-32 md:h-32 xl:h-32 lg:ml-0 xl:ml-0"
                src="./public/Assets/Images/i2.png"
                alt="DevTrain"
              />
              <div className="w-full text-left  flex item-start   lg:px-4 lg:max-w-lg ">
                <p className=" sm:text-lg md:text-left md:text-[1rem] lg:text-lg xl:text-[1.1rem] mt-4 lg:mt-6">
                  Devtrain is a leading tech training institute dedicated to training future talent and empowering the digital economy of Pakistan.
                  <br /><br />
                  <b>Address:</b> 300a, R Block, near SICAS Johar Town Phase 2, Lahore
                  <br />
                  Call: <b>+92332-7772529</b>
                  <br /><br />
                  <span className="font-bold">Email:</span> hello@devtrain.co
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col  sm:items-start md:pl-5 md:text-[1rem] md:w-32  mt-12   mb-8 lg:mb-0 xl:mt-20">
              <h3 className="text-xl lg:text-2xl md:text-xl font-bold mb-4">DevTrain Sitemap</h3>
              <ul className="space-y-2  sm:text-left">
                <li><Link  to="/" className="hover:text-gray-500">Home</Link></li>
                <li><Link to="/Services" className="hover:text-gray-500">Services</Link></li>
                <li><Link to="/Portfolio" className="hover:text-gray-500">Portfolio</Link></li>
                <li><a href="#" className="hover:text-gray-500">Trainings</a></li>
                <li><a href="#" className="hover:text-gray-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-500">Careers</a></li>
                <li><a href="#" className="hover:text-gray-500">Blogs</a></li>
              </ul>
            </div>

            {/* Links Section */}
            <div className="flex flex-col md:mt-12 md:pl-5 md:w-32  mb-8 xl:mt-20">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Links</h3>
              <ul className="space-y-2 item-start  xl:items-center sm:text-left">
                <li><a href="#" className="hover:text-gray-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-500">Site Map</a></li>
                <li><a href="#" className="hover:text-gray-500">Class Schedule</a></li>
              </ul>
            </div>

            {/* Contact and Newsletter */}
            <div className="flex flex-col  sm:items-start  md:w-1/3  md:mt-12 xl:mt-20">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Contacts</h3>
              <p className="text-sm md:text-base lg:text-lg mb-4">
                Enter your email address to register for our newsletter subscription.
              </p>
              <div className="flex flex-col   md:flex-col items-center w-full">
                <input
                  className="h-12 w-full md:full border border-gray-300 px-4 rounded-md mb-2 md:mb-0"
                  type="email"
                  placeholder="Your email"
                />
                <button className="bg-blue-950 w-full  text-white h-12 px-6 rounded-md flex items-center justify-center mt-2 md:mt-2 ">
                  Subscribe
                  <span className="material-icons ml-1">arrow_forward</span>
                </button>
              </div>
              <div className="flex space-x-4 justify-center  md:justify-start mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f text-2xl"></i></a>
                <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram text-2xl"></i></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-linkedin-in text-2xl"></i></a>
                <a href="#" className="text-black hover:text-gray-700"><i className="fab fa-tiktok text-2xl"></i></a>
                <a href="#" className="text-red-600 hover:text-red-800"><i className="fab fa-youtube text-2xl"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" py-4 mt-8 lg:mt-20 md:mt-12 xl:mt-32 ">
          <p className="text-center text-sm md:text-base lg:text-lg">
            Copyright 2024 <span className="text-[#24D3B7]">devtrain</span> | Developed By <span className="text-[#24D3B7]">mdotsolutions</span>. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
