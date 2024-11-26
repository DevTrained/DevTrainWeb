import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeSection from '../Components/HomeSection1'
import Faq from '../Components/Faq'
import YourCompany from '../Components/YourCompany'
import Footer from '../Components/Footer'
import PortfolioSections from './PortfolioSections'
import MarqueeSection from '../Components/MarqueeSection'
import VerifiedBySection from '../Components/VerifiedBySection'
import Section1_Banner from '../Components/Section1_Banner'
import HomeServices from './HomeServices'
import AnimatedSection from '../Components/Section_We'

const Devtrain_Index = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeSection/>
      <HomeServices/>
      {/* <AnimatedSection/> */}
      <VerifiedBySection/>
     <PortfolioSections/> 
     <MarqueeSection/>
      <Faq/>
      <YourCompany/>
      </div>
  )
}

export default Devtrain_Index