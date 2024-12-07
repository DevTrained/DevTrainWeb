import React from 'react'
import Navbar from '../Components/Navbar'
import ServiceBanner from '../Components/ServiceBanner'
import Section1_Banner from '../Components/Section1_Banner'
import Footer from '../Components/Footer'
import MarqueeSection from '../Components/MarqueeSection'
import AnimatedSection from '../Components/Section_We'
import VerifiedBySection from '../Components/VerifiedBySection'
import YourCompany from '../Components/YourCompany'
import Industries_We_Deals from '../Components/Industries_We_Deals'


const Service_Home = () => {
  return (
<>
<ServiceBanner/>
<Section1_Banner/>
<MarqueeSection/>
<Industries_We_Deals/>
<VerifiedBySection/>
<YourCompany/>
</>  )
}

export default Service_Home