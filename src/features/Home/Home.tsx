import React from 'react'
import HeroSection from './@components/HeroSection'
import { TechStack } from './@components/TechStack';
import ExperienceSection from './@components/Experiance';

const Home = () => {
  return (
    <section className='home-page'>
      <HeroSection />
      <TechStack />
      <ExperienceSection />
    </section>
  )
}

export default Home;