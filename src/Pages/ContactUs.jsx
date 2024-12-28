import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection1 from '../Components/ContactSection1';
import ContactBanner from '../Components/ContactBanner';

const ContactUs = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Contact Us | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to us for any queries, feedback, or support. We're here to help you. Contact us today!"
        />
        <meta
          name="keywords"
          content="Contact Us, Get in Touch, Support, Queries, Feedback"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Contact Us | Get in Touch" />
        <meta
          property="og:description"
          content="Connect with us for any inquiries or assistance. We're happy to help!"
        />
        <meta property="og:image" content="/Assets/Images/Contact-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Get in Touch" />
        <meta
          name="twitter:description"
          content="Have questions? Reach out to us today for any support or assistance!"
        />
        <meta name="twitter:image" content="/Assets/Images/Contact-Banner.png" />
      </Helmet>

      {/* Components */}
      <ContactBanner />
      {/* <ContactSection2 /> */}
      <ContactSection1 />
    </>
  );
};

export default ContactUs;
