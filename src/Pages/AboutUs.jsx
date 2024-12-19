import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUsBanner from '../Components/AboutUsBanner';
import AboutUsSection1 from '../Components/AboutUsSection1';
import BackgroundImage from '../Components/BackgroundImage';
import TeamSection from '../Components/TeamSection';
import MarqueeSection from '../Components/MarqueeSection';

const AboutUs = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>About Us | Our Story and Vision</title>
        <meta
          name="description"
          content="Learn more about our company, vision, mission, and the passionate team driving our success. Discover our journey and values."
        />
        <meta
          name="keywords"
          content="About Us, Company Information, Our Vision, Our Mission, Team, Our Journey"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="About Us | Our Story and Vision" />
        <meta
          property="og:description"
          content="Get to know our company, our dedicated team, and the vision and mission that drive our journey."
        />
        <meta property="og:image" content="/Assets/Images/AboutUs-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/about-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Our Story and Vision" />
        <meta
          name="twitter:description"
          content="Discover our story, vision, mission, and meet the team behind our success."
        />
        <meta name="twitter:image" content="/Assets/Images/AboutUs-Banner.png" />
      </Helmet>

      {/* Components */}
      <AboutUsBanner />
      <AboutUsSection1 />
      <BackgroundImage />
      <TeamSection />
      <MarqueeSection />
    </>
  );
};

export default AboutUs;
