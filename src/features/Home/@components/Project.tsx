/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/src/components/ui/badge";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Briefcase,
} from "lucide-react";
import { Project } from "@/src/types/commonType";
import { Card, CardContent } from "@/src/components/ui/card";
import { toNotionImageUrl } from "@/src/utils/notion";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({
  projects = [],
}: ProjectShowcaseProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const displayedProjects = projects.slice(0, 4);

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
          {displayedProjects?.map((project, i) => {
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
  );
}

interface ProjectCardProps {
  project: Project;
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

function ProjectCard({
  project,
  i,
  progress,
  range,
  targetScale,
}: ProjectCardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const badgeColors = [
    "from-blue-500 to-purple-500",
    "from-green-400 to-cyan-500",
    "from-pink-500 to-orange-400",
    "from-yellow-400 to-red-500",
    "from-indigo-500 to-blue-600",
  ];

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
            <h2 className="text-2xl sm:text-3xl font-bold">{project?.title}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-2 ">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project?.description}
                </p>

                <div>
                  <h3 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Code className="mr-2" size={20} />
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`
                            rounded-full px-3 py-1 text-xs sm:text-sm font-medium
                            bg-gradient-to-r ${
                              badgeColors[index % badgeColors.length]
                            }
                            text-white shadow-md hover:shadow-lg 
                            transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300
                          `}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="md:block hidden">
                  <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    Project Details:
                  </h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                    {project?.client && (
                      <li className="flex items-center">
                        <Briefcase className="mr-2 flex-shrink-0" size={16} />
                        <span className="font-medium">Client:</span>{" "}
                        <span className="ml-1">{project?.client}</span>
                      </li>
                    )}

                    {project?.role && (
                      <li className="flex items-center">
                        <Users className="mr-2 flex-shrink-0" size={16} />
                        <span className="font-medium">Role:</span>{" "}
                        <span className="ml-1">{project?.role}</span>
                      </li>
                    )}

                    {project?.team_size && (
                      <li className="flex items-center">
                        <Users className="mr-2 flex-shrink-0" size={16} />
                        <span className="font-medium">Team Size:</span>{" "}
                        <span className="ml-1">
                          {project?.team_size} members
                        </span>
                      </li>
                    )}

                    <li className="flex items-center">
                      <Calendar className="mr-2 flex-shrink-0" size={16} />
                      <span className="font-medium">Duration:</span>{" "}
                      <span className="ml-1">
                        {new Date(project.start_date).toLocaleDateString()} -{" "}
                        {project?.isOngoing === "true"
                          ? "Ongoing"
                          : new Date(project.end_date!).toLocaleDateString()}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative  rounded-xl overflow-hidden">
                <Image
                  src={toNotionImageUrl(project?.cover_image[0]?.url)}
                  alt={`${project?.title} preview`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  space-y-3 sm:space-y-0 sm:space-x-4">
              {project?.live_url && (
                <a
                  href={project?.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  View Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}

              {project?.github_url_be && (
                <a
                  href={project?.github_url_be}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer"
                >
                  View on GitHub
                  <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}

              {project?.github_url_fe && (
                <a
                  href={project?.github_url_fe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer ml-auto"
                >
                  View on GitHub
                  <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
