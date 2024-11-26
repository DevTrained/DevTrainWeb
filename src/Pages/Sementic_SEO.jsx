import React from 'react'
import Navbar from '../Components/Navbar'
import MarqueeSection from '../Components/MarqueeSection'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Banner_Sementic_Seo from '../Components/Banner_Sementic_Seo'
import Sementic_SEO_sec1 from '../Components/Sementic_SEO_sec1'
import Pricing_Sementic_seo from '../Components/Pricing_Sementic_seo'

const Sementic_SEO = () => {
  return (
    <div>
   
        <Banner_Sementic_Seo/>
        <Sementic_SEO_sec1/>
        <Pricing_Sementic_seo/>
        <MarqueeSection/>
        <Section1_SimplifiedBanner/>
        <Faq/>
        
    </div>
  )
}

export default Sementic_SEO