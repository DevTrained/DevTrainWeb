import React from 'react'
import Navbar from '../Components/Navbar'
import Banner_Mobile_App from '../Components/Banner_Mobile_App'
import Mobile_Application_sec1 from '../Components/Mobile_Application_sec1'
import Pricing_Mobile_App from '../Components/Pricing_Mobile_App'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import MarqueeSection from '../Components/MarqueeSection'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const Mobile_Application = () => {
  return (
    <div>
        <Banner_Mobile_App/>
        <Mobile_Application_sec1/>
        <Pricing_Mobile_App/>
        <MarqueeSection/>
        {/* industries */}
        <Section1_SimplifiedBanner/>
        <Faq/>
       
    </div>
  )
}

export default Mobile_Application