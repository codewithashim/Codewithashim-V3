'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { FaHackerrank } from "react-icons/fa"
import { SiCodeforces } from "react-icons/si"
import { MainLogo } from "@/src/assects"
import Image from "next/image"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
]

const socialLinks = [
  { href: "https://github.com/codewithashim", icon: Github, label: "Github" },
  { href: "https://www.hackerrank.com/profile/codewithashim", icon: FaHackerrank, label: "HackerRank" },
  { href: "https://codeforces.com/profile/codewithashim", icon: SiCodeforces, label: "CodeForces" },
  { href: "https://www.facebook.com/codewithahsim", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com/codewithashim", icon: Twitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/codewithashim/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/codewithashim/", icon: Instagram, label: "Instagram" },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <motion.footer
      className="relative py-8 px-4  overflow-hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto flex flex-col items-center gap-4 relative z-10">
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <Image src={MainLogo} alt="Ashim Rudra Paul" width={300} height={300} />
        </motion.div>

        <motion.nav
          className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
          variants={itemVariants}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground text-[1.2rem] hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div
          className="flex gap-4"
          variants={itemVariants}
        >
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              className="text-muted-foreground size-10 hover:text-primary hover:bg-secondary"
              asChild
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-8 w-8" />
                <span className="sr-only">{social.label}</span>
              </Link>
            </Button>
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-muted-foreground text-[1.1rem] mb-14"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Ashim Rudra Paul. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}