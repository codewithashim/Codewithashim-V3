'use client'

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/src/components/ui/button"
import { Home, Phone, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="h-12 px-4 bg-background/80 rounded-full border shadow-lg flex items-center gap-2 backdrop-blur-md">
        <Button variant="ghost" size="icon" asChild className="w-9 h-9">
          <Link href="/" aria-label="Home">
            <Home className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="w-9 h-9">
          <Link href="/contact" aria-label="Contact">
            <Phone className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="w-9 h-9">
          <Link href="https://github.com/codewithashim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="w-9 h-9">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="w-9 h-9">
          <Link href="https://twitter.com/codewithashim" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </Link>
        </Button>
    
        <div className="w-px h-6 bg-border mx-1" />
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </nav>
    </header>
  )
}