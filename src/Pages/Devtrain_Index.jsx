import React from 'react';
import { Helmet } from "react-helmet-async"; // Import Helmet for meta tags
import HomeBanner from '../Components/HomeBanner';
import HomeSection from '../Components/HomeSection1';
import Faq from '../Components/Faq';
import YourCompany from '../Components/YourCompany';
import PortfolioSections from './PortfolioSections';
import MarqueeSection from '../Components/MarqueeSection';
import VerifiedBySection from '../Components/VerifiedBySection';
import HomeServices from './HomeServices';
import TabbedServices from '../Components/TabbedServices';
const Devtrain_Index = () => {
  return (
    <div>
      {/* Add meta tags using Helmet */}
      <Helmet>
        <title>DevTrain-Home</title>
        <meta
          name="description"
          content="Devtrain delivers AI-driven marketing, bespoke software development, and professional training solutions to businesses across the UK, USA, UAE, and Pakistan"
        />
        <meta
          name="keywords"
          content="DevTrain, Web development, AI consultancy, cloud integration, mobile apps, digital marketing solutions"
        />
        <meta name="author" content="DevTrain Team" />
      </Helmet>
      
      <HomeBanner />
      {/* <HomeSection /> */}
      <HomeServices />
      <VerifiedBySection />
      <PortfolioSections />
      <TabbedServices />
      <MarqueeSection />
      <Faq />
      <YourCompany />
    </div>
  );
};

export default Devtrain_Index;
