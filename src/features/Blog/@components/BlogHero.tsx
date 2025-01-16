'use client'

import React from "react"
import { motion } from "framer-motion"
import { Terminal, ChevronDown } from 'lucide-react'
import SearchBar from "./SearchBar"
import { Button } from "@/src/components/ui/button"

interface BlogHeroProps {
  handleSearch: (query: string) => void
}

const BlogHero: React.FC<BlogHeroProps> = ({ handleSearch }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
      </div>
      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Terminal className="inline-block h-16 w-16 text-blue-400 mb-4" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Code Chronicles
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-200">
            Exploring the frontiers of software engineering through cutting-edge insights,
            in-depth tutorials, and real-world experiences.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <a href="#latest-posts">Latest Posts</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <a href="#categories">Explore Categories</a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
    </div>
  )
}

export default BlogHero

