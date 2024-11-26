import React from 'react'
import Navbar from '../Components/Navbar'
import MarqueeSection from '../Components/MarqueeSection'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Banner_Web_App from '../Components/Banner_Web_App'
import Web_App_sec1 from '../Components/Web_app_sec1'
import Web_App_sec2 from '../Components/Web_App_sec2'

const Web_Application = () => {
  return (
    <div>
        
        <Banner_Web_App/>
        <Web_App_sec1/>
        <Web_App_sec2/>
        <MarqueeSection/>
        <Section1_SimplifiedBanner/>
        <Faq/>
      
    </div>
  )
}

export default Web_Application