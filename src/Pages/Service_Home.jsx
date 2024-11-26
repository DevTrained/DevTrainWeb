import React from 'react'
import Navbar from '../Components/Navbar'
import ServiceBanner from '../Components/ServiceBanner'
import Section1_Banner from '../Components/Section1_Banner'
import Footer from '../Components/Footer'
import MarqueeSection from '../Components/MarqueeSection'
import AnimatedSection from '../Components/Section_We'
import VerifiedBySection from '../Components/VerifiedBySection'
import YourCompany from '../Components/YourCompany'


const Service_Home = () => {
  return (
<>
<ServiceBanner/>
<Section1_Banner/>
<MarqueeSection/>
<VerifiedBySection/>
<YourCompany/>
{/* <YourCompany/> */}
</>  )
}

export default Service_Home