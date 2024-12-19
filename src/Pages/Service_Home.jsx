import React from 'react';
import { Helmet } from "react-helmet-async"; // Import Helmet for meta tags
import Navbar from '../Components/Navbar';
import ServiceBanner from '../Components/ServiceBanner';
import Section1_Banner from '../Components/Section1_Banner';
import MarqueeSection from '../Components/MarqueeSection';
import VerifiedBySection from '../Components/VerifiedBySection';
import YourCompany from '../Components/YourCompany';
import Industries_We_Deals from '../Components/Industries_We_Deals';
 // Import Helmet for SEO

const Service_Home = () => {
  return (
    <>
      <Helmet>
        <title>Devtrain - Services</title>
        <meta name="description" content="Explore our IT consulting services at Devtrain, including custom software development, cloud integration, and more." />
        <meta name="keywords" content="IT consulting, Devtrain, software development, cloud integration, mobile app development, AI services" />
        <meta property="og:title" content="Devtrain - IT Consulting Services" />
        <meta property="og:description" content="Explore our IT consulting services at Devtrain, including custom software development, cloud integration, and more." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.devtrained.com/services" />
      </Helmet>
      <ServiceBanner />
      <Section1_Banner />
      <MarqueeSection />
      <Industries_We_Deals />
      <VerifiedBySection />
      <YourCompany />
    </>
  );
};

export default Service_Home;
