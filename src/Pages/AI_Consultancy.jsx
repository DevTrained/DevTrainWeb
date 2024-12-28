import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sub_Service1_AI from '../Components/Sub_Service1_AI';
import AI_Sec1 from '../Components/AI_Sec1';
import AI_sec2 from '../Components/AI_sec2';
import MarqueeSection from '../Components/MarqueeSection';
import Faq from '../Components/Faq';
import IndustriesWeDeals from '../Components/IndustriesWeDeals';

const AI_Consultancy = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>AI Consultancy | Transforming Businesses with Artificial Intelligence</title>
        <meta
          name="description"
          content="Explore our AI consultancy services to unlock the potential of artificial intelligence for your business. Transform operations with cutting-edge AI solutions."
        />
        <meta
          name="keywords"
          content="AI Consultancy, Artificial Intelligence, AI Services, Business Transformation, AI Solutions, Industries We Deal With"
        />
        <meta name="author" content="Your Company Name" />
        <meta
          property="og:title"
          content="AI Consultancy | Transforming Businesses with Artificial Intelligence"
        />
        <meta
          property="og:description"
          content="Leverage the power of AI to revolutionize your business operations. Our AI consultancy services provide cutting-edge solutions tailored to your needs."
        />
        <meta property="og:image" content="/Assets/Images/AI-Consultancy-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/ai-consultancy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Consultancy | Transforming Businesses with Artificial Intelligence"
        />
        <meta
          name="twitter:description"
          content="Discover how our AI consultancy services can drive innovation and efficiency for your business."
        />
        <meta name="twitter:image" content="/Assets/Images/AI-Consultancy-Banner.png" />
      </Helmet>

      {/* Components */}
      <Sub_Service1_AI />
      <AI_Sec1 />
      <AI_sec2 />
      <MarqueeSection />
      <IndustriesWeDeals />
      <Faq />
    </>
  );
};

export default AI_Consultancy;
