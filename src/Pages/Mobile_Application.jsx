import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner_Mobile_App from '../Components/Banner_Mobile_App';
import Mobile_Application_sec1 from '../Components/Mobile_Application_sec1';
import Pricing_Mobile_App from '../Components/Pricing_Mobile_App';
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals';
import MarqueeSection from '../Components/MarqueeSection';
import Faq from '../Components/Faq';

const Mobile_Application = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Application Development Services</title>
        <meta
          name="description"
          content="Discover top-notch mobile application development services tailored to your business needs. Get robust and scalable mobile apps with innovative designs."
        />
        <meta
          name="keywords"
          content="Mobile App Development, Custom Mobile Apps, Android App, iOS App, Mobile Application Services"
        />
        <meta name="author" content="YourCompanyName" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mobile Application Development Services" />
        <meta
          property="og:description"
          content="Explore our expert mobile application development services to create feature-rich and user-friendly mobile apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/mobile-application" />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:site_name" content="YourCompanyName" />
        <link rel="canonical" href="https://yourwebsite.com/mobile-application" />
      </Helmet>
      <Banner_Mobile_App />
      <Mobile_Application_sec1 />
      <Pricing_Mobile_App />
      <MarqueeSection />
      {/* industries */}
      <Section1_SimplifiedBanner />
      <Faq />
    </div>
  );
};

export default Mobile_Application;
