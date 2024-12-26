import React from "react";
import Navbar from "../Components/Navbar";
import MarqueeSection from "../Components/MarqueeSection";
import Section1_SimplifiedBanner from "../Components/Industries_We_Deals";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Banner_Wordpress from "../Components/Banner_Wordpress";
import WordPress_sec1 from "../Components/WordPress_sec1";
import WordPress_sec2 from "../Components/WordPress_sec2";
import { Helmet } from "react-helmet-async";

const WordPress = () => {
  return (
    <div>
      <Helmet>
        <title>WordPress Development | Your Company</title>
        <meta
          name="description"
          content="Unlock the power of WordPress with our custom development services. Build stunning, scalable, and SEO-friendly websites tailored to your needs."
        />
        <meta
          name="keywords"
          content="WordPress Development, Custom WordPress Websites, Scalable Solutions, SEO-Friendly WordPress, Website Design"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="WordPress Development | Your Company" />
        <meta
          property="og:description"
          content="Create highly functional WordPress websites with our expert development services. Optimize your online presence today!"
        />
        <meta property="og:image" content="/Assets/Images/WordPress-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/wordpress-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WordPress Development | Your Company" />
        <meta
          name="twitter:description"
          content="Get custom WordPress development services to design dynamic, SEO-friendly websites."
        />
        <meta name="twitter:image" content="/Assets/Images/WordPress-Banner.png" />
      </Helmet>
      <Banner_Wordpress />
      <WordPress_sec1 />
      <WordPress_sec2 />
      <MarqueeSection />
      <Section1_SimplifiedBanner />
      <Faq />
    </div>
  );
};

export default WordPress;
