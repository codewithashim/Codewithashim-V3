import React from 'react'
import HeroSection from './@components/HeroSection'
import { TechStack } from './@components/TechStack';

const Home = () => {
  return (
    <section className='home-page'>
      <HeroSection />
      <TechStack />
    </section>
  )
}

export default Home;