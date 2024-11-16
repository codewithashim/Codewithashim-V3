"use client";
import { projectData } from '@/src/constant/data/projectData'
import Project from '@/src/features/Project/Project'
import React from 'react'

const ProjectPage = () => {
    return (
        <section className='container mx-auto'>
            <Project  projects={projectData}/>
        </section>
    )
}

export default ProjectPage