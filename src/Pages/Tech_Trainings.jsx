import React from 'react'
import Navbar from '../Components/Navbar'
import MarqueeSection from '../Components/MarqueeSection'
import Section1_SimplifiedBanner from '../Components/Industries_We_Deals'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Banner_TechTrainning from '../Components/Banner_TechTrainning'
import Tech_Trainning_sec1 from '../Components/Tech_Trainning_sec1'
import TechTrainnig_sec2 from '../Components/TechTrainnig_sec2'

const Tech_Trainings = () => {
  return (
    <div>
    
        <Banner_TechTrainning/>
        <Tech_Trainning_sec1/>
        <TechTrainnig_sec2/>
        <MarqueeSection/>
        <Section1_SimplifiedBanner/>
        <Faq/>
    
    </div>
  )
}

export default Tech_Trainings