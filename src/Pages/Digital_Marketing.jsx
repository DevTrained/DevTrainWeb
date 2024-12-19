import React from 'react';
import { Helmet } from "react-helmet-async"; 
import MarqueeSection from '../Components/MarqueeSection';
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals';
import Faq from '../Components/Faq';
import Banner_Digital_Marketing from '../Components/Banner_Digital_Marketing';
import Digital_Marketing_sec1 from '../Components/Digital_Marketing_sec1';
import Digital_Marketing_sec2 from '../Components/Digital_Marketing_sec2';

const Digital_Marketing = () => {
  return (
    <div>
      {/* Helmet for Meta Tags */}
      <Helmet>
        <title>Digital Marketing Services - Transform Your Online Presence</title>
        <meta 
          name="description" 
          content="Explore our advanced digital marketing services to elevate your brand with strategies like SEO, PPC, and social media management for business growth." 
        />
        <meta 
          name="keywords" 
          content="Digital Marketing, SEO, PPC, Social Media Marketing, Online Advertising, Content Marketing" 
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Digital Marketing Services - Transform Your Online Presence" />
        <meta 
          property="og:description" 
          content="Our expert digital marketing solutions include SEO, PPC, and content marketing to drive growth for your business. Let's grow together!" 
        />
        <meta property="og:image" content="/Assets/Images/DigitalMarketingBanner.png" />
        <meta property="og:url" content="https://yourwebsite.com/digital-marketing" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Components */}
      <Banner_Digital_Marketing />
      <Digital_Marketing_sec1 />
      <Digital_Marketing_sec2 />
      <MarqueeSection />
      <Section1_SimplifiedBanner />
      <Faq />
    </div>
  );
};

export default Digital_Marketing;
