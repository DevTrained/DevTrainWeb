import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import React Helmet
import MarqueeSection from '../Components/MarqueeSection';
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals';
import Faq from '../Components/Faq';
import Banner_Sementic_Seo from '../Components/Banner_Sementic_Seo';
import Sementic_SEO_sec1 from '../Components/Sementic_SEO_sec1';
import Pricing_Sementic_seo from '../Components/Pricing_Sementic_seo';

const Sementic_SEO = () => {
  return (
    <div>
      {/* React Helmet for Meta Optimization */}
      <Helmet>
        <title>Semantic SEO Services | Optimize Your Website</title>
        <meta
          name="description"
          content="Discover our Semantic SEO services to boost your website's search engine rankings. Enhance content relevance and drive organic traffic today!"
        />
        <meta name="keywords" content="Semantic SEO, SEO Services, Content Optimization, Organic Traffic, Website Ranking" />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Semantic SEO Services | Optimize Your Website" />
        <meta
          property="og:description"
          content="Leverage Semantic SEO to rank higher on search engines and increase organic traffic. Explore our professional SEO services now!"
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="YOUR_WEBSITE_URL/semantic-seo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semantic SEO Services | Optimize Your Website" />
        <meta
          name="twitter:description"
          content="Boost your website's performance with Semantic SEO strategies. Contact us to learn more!"
        />
        <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
      </Helmet>

      {/* Page Sections */}
      <Banner_Sementic_Seo />
      <Sementic_SEO_sec1 />
      <Pricing_Sementic_seo />
      <MarqueeSection />
      <Section1_SimplifiedBanner />
      <Faq />
    </div>
  );
};

export default Sementic_SEO;
