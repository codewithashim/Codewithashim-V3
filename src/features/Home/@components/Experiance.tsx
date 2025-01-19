"use client";

import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { Experience } from "@/src/types/commonType";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl font-bold text-foreground tracking-tight mb-12"
        >
          Professional Experience 🚀
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience: exp,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id="experience"
    >
      <Card className="relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <motion.div
            className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={exp.img}
              alt={`${exp.company} logo`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="flex-grow">
            <CardTitle className="text-xl font-semibold">{exp.role}</CardTitle>
            <CardDescription>
              <span className="font-medium text-primary">{exp.company}</span> •{" "}
              {exp.date}
            </CardDescription>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              {exp.location}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-muted-foreground"
          >
            {exp.desc}
          </motion.p>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-semibold mb-2"
          >
            Key Responsibilities:
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="list-disc list-inside mb-4 space-y-1 text-sm text-muted-foreground"
          >
            {exp.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                }
                transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
              >
                {resp}
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-semibold mb-2"
          >
            Skills:
          </motion.h4>
          <ScrollArea className="h-20 w-full whitespace-nowrap rounded-md border">
            <div className="flex flex-wrap gap-2 p-4">
              {exp.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: 0.8 + idx * 0.05,
                  }}
                >
                  <Badge variant="secondary">{skill}</Badge>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  );
}
