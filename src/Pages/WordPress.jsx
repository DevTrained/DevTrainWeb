import React from 'react'
import Navbar from '../Components/Navbar'
import MarqueeSection from '../Components/MarqueeSection'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Banner_Wordpress from '../Components/Banner_Wordpress'
import WordPress_sec1 from '../Components/WordPress_sec1'
import WordPress_sec2 from '../Components/WordPress_sec2'

const WordPress = () => {
  return (
    <div>
        <Banner_Wordpress/>
        <WordPress_sec1/>
        <WordPress_sec2/>
        <MarqueeSection/>
        <Section1_SimplifiedBanner/>
        <Faq/>
  
    </div>
  )
}

export default WordPress