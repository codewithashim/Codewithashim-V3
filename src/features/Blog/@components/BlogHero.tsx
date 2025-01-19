"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
import { Button } from "@/src/components/ui/button";

interface BlogHeroProps {
  handleSearch: (query: string) => void;
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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-24 flex items-center justify-center overflow-hidden">
      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Terminal className="inline-block h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-900">
            Code Chronicles
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-600">
            Exploring the frontiers of software engineering through cutting-edge
            insights, in-depth tutorials, and real-world experiences.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <a href="#latest-posts">Latest Posts</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <a href="#categories">Explore Categories</a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-[-15%] left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogHero;
 