/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Badge } from "@/src/components/ui/badge"
import Image from 'next/image'
import { ExternalLink, Github, Calendar, Users, Code, Briefcase } from 'lucide-react'
import { Project } from '@/src/types/commonType'
import { Card, CardContent } from '@/src/components/ui/card'

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects = [] }: ProjectShowcaseProps) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const displayedProjects = projects.slice(0, 4)

  return (
    <section className="py-8" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12"
        >
          Project Showcase 🚀
        </motion.h2>
        <div>
          {displayedProjects.map((project, i) => {
            const targetScale = 1 - (displayedProjects.length - i) * 0.05;
            return (
              <ProjectCard
                key={`p_${i}`}
                project={project}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project;
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}


function ProjectCard({ project, i, progress, range, targetScale }: ProjectCardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0 py-10 "
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative w-full max-w-5xl rounded-xl origin-top"
      >
        <Card className="w-full mx-auto p-4 sm:p-6 md:p-8 rounded-3xl">
          <CardContent className="p-0 py-4 px-2 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-2 ">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h3 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Code className="mr-2" size={20} />
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="rounded-full bg-white hover:bg-white text-xs sm:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className='md:block hidden'>
                  <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Project Details:</h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <Briefcase className="mr-2 flex-shrink-0" size={16} />
                      <span className="font-medium">Client:</span> <span className="ml-1">{project.client}</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-2 flex-shrink-0" size={16} />
                      <span className="font-medium">Role:</span> <span className="ml-1">{project.role}</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-2 flex-shrink-0" size={16} />
                      <span className="font-medium">Team Size:</span> <span className="ml-1">{project.teamSize} members</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="mr-2 flex-shrink-0" size={16} />
                      <span className="font-medium">Duration:</span> <span className="ml-1">{new Date(project.startDate).toLocaleDateString()} - {project.isOngoing ? 'Ongoing' : new Date(project.endDate!).toLocaleDateString()}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${project.slug}/800/600`}
                  alt={`${project.title} preview`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  space-y-3 sm:space-y-0 sm:space-x-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View Live Demo
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View on GitHub
                <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}