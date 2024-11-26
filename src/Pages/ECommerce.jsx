import React from 'react'
import Navbar from '../Components/Navbar'
import MarqueeSection from '../Components/MarqueeSection'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Banner_Ecommerce from '../Components/Banner_Ecommerce'
import ECommerce_section1 from '../Components/ECommerce_section1'
import Ecommerce_sec2 from '../Components/Ecommerce_sec2'

const ECommerce = () => {
  return (
    <div>
        <Banner_Ecommerce/>
        <ECommerce_section1/>
        <Ecommerce_sec2/>
        <MarqueeSection/>
        <Section1_SimplifiedBanner/>
        <Faq/>
    </div>
  )
}

export default ECommerce