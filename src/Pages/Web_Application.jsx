import React from "react";
import Navbar from "../Components/Navbar";
import MarqueeSection from "../Components/MarqueeSection";
import Section1_SimplifiedBanner from "../Components/Industries_We_Deals";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Banner_Web_App from "../Components/Banner_Web_App";
import Web_App_sec1 from "../Components/Web_app_sec1";
import Web_App_sec2 from "../Components/Web_App_sec2";
import { Helmet } from "react-helmet-async";

const Web_Application = () => {
  return (
    <div>
      <Helmet>
        <title>Web Application Development | Your Company</title>
        <meta
          name="description"
          content="Explore our expertise in web application development, creating scalable and user-friendly applications tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Web Application Development, Scalable Web Apps, Custom Solutions, User-Friendly Applications, Business Software"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Web Application Development | Your Company" />
        <meta
          property="og:description"
          content="Discover innovative web applications designed to meet your unique business requirements with scalability and efficiency."
        />
        <meta property="og:image" content="/Assets/Images/WebApp-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/web-application" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Application Development | Your Company" />
        <meta
          name="twitter:description"
          content="Tailored web application development services to accelerate your business growth."
        />
        <meta name="twitter:image" content="/Assets/Images/WebApp-Banner.png" />
      </Helmet>

      <Banner_Web_App />
      <Web_App_sec1 />
      <Web_App_sec2 />
      <MarqueeSection />
      <Section1_SimplifiedBanner />
      <Faq />
    </div>
  );
};

export default Web_Application;
