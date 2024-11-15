/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardHeader } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { experiences } from '@/src/constant/data/experienceData'

export default function ExperienceSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <section
            ref={containerRef}
            className="relative container flex flex-col px-4 pt-24 pb-12 "
        >
            <div className="flex-1 space-y-16">
                {experiences?.map((exp, index) => {
                    const yRange = useTransform(scrollYProgress, [index / experiences.length, (index + 1) / experiences.length], [0, 1])
                    const opacity = useTransform(yRange, [1, 1, 1], [1, 1, 1])
                    const scale = useTransform(yRange, [1, 1, 1], [1, 1, 1])

                    return (
                        <motion.div
                            key={exp.id}
                            style={{
                                opacity,
                                scale,
                                top: `calc(8rem * ${index})`,
                            }}
                            className="sticky w-full mx-auto"
                        >
                            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                                <CardHeader className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                        <div className="md:col-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex flex-col justify-center items-center text-white">
                                            <Image
                                                src={exp.img}
                                                alt={exp.company}
                                                width={120}
                                                height={120}
                                                className="rounded-full border-4 border-white shadow-lg mb-4"
                                            />
                                            <h3 className="text-2xl font-bold text-center">{exp.role}</h3>
                                            <p className="text-lg opacity-90 mb-2">{exp.company}</p>
                                            <p className="text-sm opacity-75 flex items-center">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {exp.date}
                                            </p>
                                        </div>
                                        <div className="md:col-span-3 p-8 space-y-6">
                                            <p className="text-muted-foreground">{exp.desc}</p>
                                            <Separator />
                                            <div>
                                                <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                                                    <Briefcase className="w-5 h-5 mr-2" />
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.responsibilities.map((resp, index) => (
                                                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                                                            <ChevronRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <Separator />
                                            <div>
                                                <h4 className="text-lg font-semibold text-primary mb-3">Skills & Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <Badge key={skill} variant="secondary">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}