import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cloud_integration_sec1 from '../Components/Cloud_integration_sec1';
import Banner_Cloud_integration from '../Components/Banner_Cloud_integration';
import Cloud_integration_sec2 from '../Components/Cloud_integration_sec2';
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals';
import MarqueeSection from '../Components/MarqueeSection';
import Faq from '../Components/Faq';

const Cloud_Integration = () => {
  return (
    <div>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Cloud Integration | Seamless Cloud Solutions for Your Business</title>
        <meta
          name="description"
          content="Discover our cloud integration services that streamline your business operations with scalable and efficient cloud solutions."
        />
        <meta
          name="keywords"
          content="Cloud Integration, Cloud Services, Cloud Solutions, Business Integration, Scalable Cloud"
        />
        <meta name="author" content="Your Company Name" />
        <meta
          property="og:title"
          content="Cloud Integration | Seamless Cloud Solutions for Your Business"
        />
        <meta
          property="og:description"
          content="Enhance your business efficiency with our cloud integration services. Scalable and secure cloud solutions tailored to your needs."
        />
        <meta property="og:image" content="/Assets/Images/Cloud-Integration-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/cloud-integration" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cloud Integration | Seamless Cloud Solutions for Your Business"
        />
        <meta
          name="twitter:description"
          content="Streamline your business with scalable cloud solutions. Learn about our cloud integration services today."
        />
        <meta name="twitter:image" content="/Assets/Images/Cloud-Integration-Banner.png" />
      </Helmet>

      {/* Components */}
      <Banner_Cloud_integration />
      <Cloud_integration_sec1 />
      <Cloud_integration_sec2 />
      <MarqueeSection />
      <Section1_SimplifiedBanner />
      <Faq />
    </div>
  );
};

export default Cloud_Integration;
