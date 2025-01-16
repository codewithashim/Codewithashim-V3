"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { FileText, Send, ChevronRight } from "lucide-react";
import ImageSection from "./ImageSection";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden  py-20">
      <div className="container relative z-10 mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            >
              Hi, I am
              <span className="mt-2 block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Ashim Rudra Paul
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-xl text-transparent md:text-2xl lg:text-3xl">
                Software Engineer
              </span>
              <span className="inline-flex animate-bounce">
                <ChevronRight className="h-6 w-6 text-purple-500" />
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground/90 max-w-[600px] text-base sm:text-lg lg:text-xl"
          >
            Experienced Full Stack Engineer with expertise in JavaScript,
            TypeScript, MongoDB, Express.js, React.js, Next.js, and Node.js.
            Passionate about building scalable and efficient web applications,
            committed to staying at the forefront of industry trends and
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/resume">
              <Button
                className="group relative overflow-hidden bg-purple-600 text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Check Resume
                  <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </Link>
            <Link
              href="https://wa.me/8801740737445"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="group relative overflow-hidden border-purple-500/50 text-purple-500 transition-all hover:border-purple-500 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-500/25"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-100 to-purple-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <ImageSection />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </section>
  );
}
