import React from 'react'
import Navbar from '../Components/Navbar'
import Cloud_integration_sec1 from '../Components/Cloud_integration_sec1'
import Banner_Cloud_integration from '../Components/Banner_Cloud_integration'
import Cloud_integration_sec2 from '../Components/Cloud_integration_sec2'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import MarqueeSection from '../Components/MarqueeSection'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const Cloud_Integration = () => {
  return (
    <div>
       <Banner_Cloud_integration/>
       <Cloud_integration_sec1/>
       <Cloud_integration_sec2/>
       <MarqueeSection/>
       {/* industries */} 
       <Section1_SimplifiedBanner/>
       <Faq/>
  
     
    </div>
  )
}

export default Cloud_Integration