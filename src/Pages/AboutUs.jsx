import React from 'react';
import AboutUsBanner from '../Components/AboutUsBanner';
import AboutUsSection1 from '../Components/AboutUsSection1';
import BackgroundImage from '../Components/BackgroundImage';
import TeamSection from '../Components/TeamSection';
import MarqueeSection from '../Components/MarqueeSection';



const AboutUs = () => {
  return (
    <>
   <AboutUsBanner/>
   <AboutUsSection1/> 
   <BackgroundImage/>
   {/* <TeamSection/> */}
   <MarqueeSection/>
    </>
  );
};

export default AboutUs;
