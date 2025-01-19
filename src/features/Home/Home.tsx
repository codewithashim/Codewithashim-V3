"use client"
import React, { useEffect } from 'react'
import HeroSection from './@components/HeroSection'
import { TechStack } from './@components/TechStack';
import ExperienceSection from './@components/Experiance';
import { experiences } from '@/src/constant/data/experienceData';
import ProjectShowcase from './@components/Project';
import FeaturedBlog from './@components/FeaturedBlog';
import useNotion from '@/src/hooks/useNotion';
import { envConfig } from '@/src/config/envConfig';

const Home = () => {
  const { projectsData, fetchProjectsTable } = useNotion();

  useEffect(() => {
    fetchProjectsTable(envConfig.NOTION_PROJECT_TABLE_ID!);
  }, []);


  return (
    <section className='home-page'>
      <HeroSection />
      <TechStack />
      <ExperienceSection experiences={experiences}/>
      <ProjectShowcase projects={projectsData?.data ?? []}/>
      <FeaturedBlog />
    </section>
  )
}

export default Home;