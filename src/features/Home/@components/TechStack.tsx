"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/src/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/src/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import IconCloud from "@/src/components/ui/icon-cloud";
import {
    Code, Server, Layout, TestTube, Rocket,
    // Frontend icons
    Box, Smartphone, FileType, Paintbrush, Split,
    // Backend icons
    Database, ServerCog as Api, Flame, Leaf,
    // Language icons
    FileCode, Hash, Brackets, Terminal as Windows,
    // DevOps icons
    Cloud, Container, Network, GitBranch, Cpu, Cog,
    // Testing icons
    Beaker, CircuitBoard, Bug, TestTubes
} from 'lucide-react';
const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
    "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "sonarqube", "figma", "php", "laravel", "mysql", "mongodb", "redis", "kubernetes",
    "redux", "mobx", "graphql", "apollo", "socketdotio", "websockets", "tailwindcss", "bootstrap", "materialui",
    "chakraui", "storybook", "framer", "motion", "lucidereact", "reactspring", "reactquery", "swr", "axios", "fetch",
];

const techCategories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: <Layout className="h-4 w-4" />,
        skills: [
            { name: "React", icon: <Box className="h-4 w-4" /> },
            { name: "Next.js", icon: <Box className="h-4 w-4" /> },
            { name: "Vue.js", icon: <Box className="h-4 w-4" /> },
            { name: "Flutter", icon: <Smartphone className="h-4 w-4" /> },
            { name: "TypeScript", icon: <FileType className="h-4 w-4" /> },
            { name: "Tailwind CSS", icon: <Paintbrush className="h-4 w-4" /> },
            { name: "Redux", icon: <Split className="h-4 w-4" /> }
        ],
        color: "bg-blue-500"
    },
    {
        id: "backend",
        label: "Backend",
        icon: <Server className="h-4 w-4" />,
        skills: [
            { name: "Node.js", icon: <Server className="h-4 w-4" /> },
            { name: "Express", icon: <Box className="h-4 w-4" /> },
            { name: "Prisma", icon: <Database className="h-4 w-4" /> },
            { name: "GraphQL", icon: <Api className="h-4 w-4" /> },
            { name: "REST APIs", icon: <Api className="h-4 w-4" /> },
            { name: "Firebase", icon: <Flame className="h-4 w-4" /> },
            { name: "MongoDB", icon: <Leaf className="h-4 w-4" /> },
            { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> }
        ],
        color: "bg-green-500"
    },
    {
        id: "languages",
        label: "Languages",
        icon: <Code className="h-4 w-4" />,
        skills: [
            { name: "TypeScript", icon: <FileCode className="h-4 w-4" /> },
            { name: "JavaScript", icon: <FileCode className="h-4 w-4" /> },
            { name: "PHP", icon: <FileCode className="h-4 w-4" /> },
            { name: "C", icon: <Hash className="h-4 w-4" /> },
            { name: "C++", icon: <Brackets className="h-4 w-4" /> },
            { name: "C#", icon: <Windows className="h-4 w-4" /> },
            { name: "Python", icon: <FileCode className="h-4 w-4" /> },
            { name: "SQL", icon: <Database className="h-4 w-4" /> }
        ],
        color: "bg-purple-500"
    },
    {
        id: "devops",
        label: "DevOps",
        icon: <Rocket className="h-4 w-4" />,
        skills: [
            { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
            { name: "GCP", icon: <Cloud className="h-4 w-4" /> },
            { name: "Docker", icon: <Container className="h-4 w-4" /> },
            { name: "Nginx", icon: <Network className="h-4 w-4" /> },
            { name: "CI/CD", icon: <GitBranch className="h-4 w-4" /> },
            { name: "Kubernetes", icon: <Cpu className="h-4 w-4" /> },
            { name: "Apache", icon: <Cog className="h-4 w-4" /> }
        ],
        color: "bg-orange-500"
    },
    {
        id: "testing",
        label: "Testing",
        icon: <TestTube className="h-4 w-4" />,
        skills: [
            { name: "Jest", icon: <Beaker className="h-4 w-4" /> },
            { name: "Cypress", icon: <CircuitBoard className="h-4 w-4" /> },
            { name: "Testing Library", icon: <TestTubes className="h-4 w-4" /> },
            { name: "E2E Testing", icon: <Bug className="h-4 w-4" /> }
        ],
        color: "bg-red-500"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export function TechStack() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h2 className="text-4xl font-bold text-foreground tracking-tight">
                                My Tech Stack
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Crafting elegant solutions with cutting-edge technologies.
                                My toolkit is carefully curated to build performant,
                                scalable, and maintainable applications.
                            </p>
                        </motion.div>

                        <Tabs defaultValue="frontend" className="w-full">
                            <TabsList className="grid grid-cols-5 mb-8">
                                {techCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="flex items-center gap-2"
                                    >
                                        {category.icon}
                                        <span className="hidden sm:inline">{category.label}</span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {techCategories.map((category) => (
                                <TabsContent key={category.id} value={category.id}>
                                    <Card>
                                        <CardHeader>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex items-center gap-2"
                                            >
                                                {category.icon}
                                                <h3 className="text-xl font-semibold">{category.label}</h3>
                                            </motion.div>
                                        </CardHeader>

                                        <CardContent>
                                            <motion.div
                                                variants={containerVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className="flex flex-wrap gap-2"
                                            >
                                                {category.skills.map((skill) => (
                                                    <motion.div key={skill.name} variants={itemVariants}>
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-sm flex items-center gap-2 px-3 py-1"
                                                        >
                                                            {skill.icon}
                                                            {skill.name}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </CardContent>

                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative size-full max-w-lg overflow-hidden rounded-lg backdrop-blur-sm px-4 py-8 sm:px-8 sm:py-12">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;