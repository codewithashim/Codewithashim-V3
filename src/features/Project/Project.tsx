/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import Image from 'next/image'
import { Github, ExternalLink, Calendar, X } from 'lucide-react'
import { Project } from '@/src/types/commonType'

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects = [] }: ProjectShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.featured)

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 "
        >
          Project Showcase 🚀
        </motion.h2>
        <div className="flex justify-left mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="mr-4"
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'featured' ? 'default' : 'outline'}
            onClick={() => setFilter('featured')}
          >
            Featured Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={`p_${i}`}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-card rounded-lg overflow-hidden  cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={`https://picsum.photos/seed/${project.slug}/800/600`}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            {new Date(project.startDate).getFullYear()}
          </span>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            Details
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project | null, onClose: () => void }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card text-card-foreground rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <ScrollArea className="h-full">
            <div className="p-6">
              <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${project.slug}/1600/900`}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              {project.longDescription && project.longDescription[0] && project.longDescription[0].children && project.longDescription[0].children[0] && (
                <p className="text-muted-foreground mb-6">{project.longDescription[0].children[0].text}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Details</h4>
                  <ul className="space-y-2">
                    <li><span className="font-medium">Client:</span> {project.client}</li>
                    <li><span className="font-medium">Role:</span> {project.role}</li>
                    <li><span className="font-medium">Team Size:</span> {project.teamSize} members</li>
                    <li className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">Duration:</span> {new Date(project.startDate).toLocaleDateString()} -
                      {project.isOngoing ? 'Ongoing' : new Date(project.endDate!).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}