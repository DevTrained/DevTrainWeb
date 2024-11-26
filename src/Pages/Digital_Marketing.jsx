import React from 'react'
import Navbar from '../Components/Navbar'
import MarqueeSection from '../Components/MarqueeSection'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Banner_Digital_Marketing from '../Components/Banner_Digital_Marketing'
import Digital_Marketing_sec1 from '../Components/Digital_Marketing_sec1'
import Digital_Marketing_sec2 from '../Components/Digital_Marketing_sec2'

const Digital_Marketing = () => {
  return (
    <div>
        
        <Banner_Digital_Marketing/>
        <Digital_Marketing_sec1/>
        <Digital_Marketing_sec2/>
        <MarqueeSection/>
        <Section1_SimplifiedBanner/>
        <Faq/>
        
    </div>
  )
}

export default Digital_Marketing