import React from 'react';
import { Helmet } from 'react-helmet-async';
import CareersForm from '../Components/CareersForm';
import CurrentOpenings from '../Components/CurrentOpenings';
import CareersBanner from '../Components/CareersBanner';

const Careers = () => {
  return (
    <div>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Careers | Join Our Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities and become part of our dynamic team. Check out our current openings and apply today!"
        />
        <meta
          name="keywords"
          content="Careers, Jobs, Hiring, Join Our Team, Current Openings, Apply Now"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Careers | Join Our Team" />
        <meta
          property="og:description"
          content="Discover exciting career opportunities with us. Join our team and make an impact!"
        />
        <meta property="og:image" content="/Assets/Images/Careers-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Join Our Team" />
        <meta
          name="twitter:description"
          content="Join our team and make a difference. Explore current job openings and apply today!"
        />
        <meta name="twitter:image" content="/Assets/Images/Careers-Banner.png" />
      </Helmet>

      {/* Components */}
      <CareersBanner />
      <CurrentOpenings />
      <CareersForm />
    </div>
  );
};

export default Careers;
