// src/pages/Home.jsx
import React from 'react'
import Hero from '../../components/home/Hero'
import Onboarding from '../../components/home/Onboarding'
import Benefits from '../../components/home/Benefits'
import HowItWorks from '../../components/home/HowItWorks'
import Stats from '../../components/home/Stats'
import CTA from '../../components/home/FinalCTA'
import FinalCTA from '../../components/home/FinalCTA'
import Testimonials from '../../components/home/Testimonials'
import AppDownload from '../../components/home/AppDownload'
import FeatureSection from '../../components/home/FeatureSection '


const Home = () => {
  return (
    <div>
      <Hero />
      <Onboarding />
      <FeatureSection />
      <Benefits />
       <HowItWorks />
       <AppDownload />
       {/* <Stats /> */}
       {/* <CTA /> */}
       <Testimonials />
         {/* <FinalCTA /> */}

    </div>
  )
}

export default Home
