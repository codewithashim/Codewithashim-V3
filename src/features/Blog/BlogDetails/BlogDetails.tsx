'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react"

export default function BlogPostDetail() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container px-4 py-10 mx-auto space-y-12 md:py-16 lg:py-24">
        <motion.div variants={itemVariants}>
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.article variants={itemVariants} className="max-w-4xl mx-auto">
          <header className="mb-8">
            <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
              The Future of AI in Web Development
            </motion.h1>
            <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time className="flex items-center gap-1" dateTime="2024-02-20">
                <Calendar className="w-4 h-4" />
                February 20, 2024
              </time>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-muted-foreground">AI Researcher & Web Developer</p>
              </div>
            </motion.div>
          </header>

          <motion.img
            variants={itemVariants}
            src="/placeholder.svg?height=400&width=800"
            alt="Blog post hero image"
            className="w-full h-auto rounded-lg mb-8"
          />

          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Artificial Intelligence (AI) is rapidly transforming various industries, and web development is no exception.
              As we move towards more intelligent and adaptive web applications, AI is playing a crucial role in shaping
              the future of how we build and interact with websites.
            </p>
            <h2>The Current State of AI in Web Development</h2>
            <p>
              Today, AI is already being used in various aspects of web development, from design to functionality.
              Some current applications include:
            </p>
            <ul>
              <li>Chatbots and virtual assistants for improved user engagement</li>
              <li>Personalized content recommendations based on user behavior</li>
              <li>Automated testing and bug detection in web applications</li>
              <li>AI-powered design tools for creating user interfaces</li>
            </ul>
            <h2>Future Trends and Possibilities</h2>
            <p>
              As AI continues to evolve, we can expect even more innovative applications in web development:
            </p>
            <ol>
              <li>
                <strong>Intelligent Code Generation:</strong> AI could assist developers by generating code snippets or
                even entire components based on high-level descriptions or requirements.
              </li>
              <li>
                <strong>Advanced User Experience Personalization:</strong> Websites could adapt in real-time to individual
                user preferences, creating truly personalized experiences.
              </li>
              <li>
                <strong>Predictive Maintenance:</strong> AI algorithms could predict potential issues in web applications
                before they occur, allowing for proactive maintenance.
              </li>
              <li>
                <strong>Natural Language Interfaces:</strong> Users might interact with websites using natural language,
                with AI interpreting and executing their requests.
              </li>
            </ol>
            <p>
              While the potential of AI in web development is exciting, it&lsquo;s important to consider the ethical implications
              and ensure that these technologies are used responsibly and inclusively.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.article>

        <motion.section variants={itemVariants} className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((post) => (
              <motion.div key={post} variants={itemVariants}>
                <Card>
                  <CardContent className="p-4">
                    <img
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={`Related post ${post}`}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-xl font-semibold mb-2">Related Article Title</h4>
                    <p className="text-muted-foreground mb-4">
                      A brief description of the related article to entice readers to click and read more...
                    </p>
                    <Link
                      href={`/blog/related-post-${post}`}
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Read More
                      <ArrowLeft className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}