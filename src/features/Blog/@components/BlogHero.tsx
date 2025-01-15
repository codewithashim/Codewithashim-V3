'use client'

import React from "react"
import { motion } from "framer-motion"
import { Terminal } from 'lucide-react'

const BlogHero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center">
            <Terminal className="mr-4 h-12 w-12" />
            Code Chronicles
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 text-blue-200">
            Exploring the world of software engineering through insights, tutorials, and personal experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#latest-posts"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Latest Posts
          </a>
          <a
            href="#categories"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Categories
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  )
}

export default BlogHero

