import React from 'react';
import { Helmet } from "react-helmet-async"; 
import MarqueeSection from '../Components/MarqueeSection';
import Faq from '../Components/Faq';
import Banner_Ecommerce from '../Components/Banner_Ecommerce';
import ECommerce_section1 from '../Components/ECommerce_section1';
import Ecommerce_sec2 from '../Components/Ecommerce_sec2';
import IndustriesWeDeals from '../Components/IndustriesWeDeals';

const ECommerce = () => {
  return (
    <div>
      <Helmet>
        <title>ECommerce - Your Business Solutions</title>
        <meta name="description" content="Explore our ECommerce solutions tailored to meet your business needs. Discover the features of our platform and learn how to boost your sales and customer satisfaction." />
        <meta name="keywords" content="ECommerce, online store, business solutions, sales, customer satisfaction" />
      </Helmet>
      <Banner_Ecommerce/>
      <ECommerce_section1/>
      <Ecommerce_sec2/>
      <MarqueeSection/>
      <IndustriesWeDeals/>
      <Faq/>
    </div>
  );
};

export default ECommerce;
