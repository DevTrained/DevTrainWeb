import React from "react";
import MarqueeSection from "../Components/MarqueeSection";
import Faq from "../Components/Faq";
import Banner_TechTrainning from "../Components/Banner_TechTrainning";
import Tech_Trainning_sec1 from "../Components/Tech_Trainning_sec1";
import TechTrainnig_sec2 from "../Components/TechTrainnig_sec2";
import { Helmet } from "react-helmet-async";

const Tech_Trainings = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Trainings | Your Company</title>
        <meta
          name="description"
          content="Explore our comprehensive tech training programs designed to equip you with industry-relevant skills and certifications."
        />
        <meta
          name="keywords"
          content="Tech Trainings, IT Courses, Industry Skills, Technology Certification, Professional Development"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Tech Trainings | Your Company" />
        <meta
          property="og:description"
          content="Discover top-notch training programs in technology, empowering you to excel in your career."
        />
        <meta property="og:image" content="/Assets/Images/TechTrainings-Banner.png" />
        <meta property="og:url" content="https://yourwebsite.com/tech-trainings" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Trainings | Your Company" />
        <meta
          name="twitter:description"
          content="Empowering your tech journey with specialized training programs and certifications."
        />
        <meta name="twitter:image" content="/Assets/Images/TechTrainings-Banner.png" />
      </Helmet>

      <Banner_TechTrainning />
      <Tech_Trainning_sec1 />
      <TechTrainnig_sec2 />
      <MarqueeSection />
      <Faq />
    </div>
  );
};

export default Tech_Trainings;
