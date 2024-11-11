'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/src/components/ui/button"
import { Home, Phone, Github, Linkedin, Twitter, Sun, Moon, BookOpen, Image } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const isActive = (path : string) => pathname === path

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/gallery", label: "Gallery", icon: Image },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  const socialItems = [
    { href: "https://github.com/codewithashim", label: "GitHub", icon: Github },
    { href: "https://linkedin.com/in/codewithashim", label: "LinkedIn", icon: Linkedin },
    { href: "https://twitter.com/codewithashim", label: "Twitter", icon: Twitter },
  ]

  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="h-12 px-4 bg-background/80 rounded-full border shadow-lg flex items-center gap-2 backdrop-blur-md">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            variant={isActive(item.href) ? "default" : "ghost"}
            size="icon"
            asChild
            className={`w-9 h-9 ${isActive(item.href) ? 'bg-primary text-primary-foreground' : ''}`}
          >
            <Link href={item.href} aria-label={item.label}>
              <item.icon className="h-4 w-4" />
            </Link>
          </Button>
        ))}
        
        {socialItems.map((item) => (
          <Button key={item.href} variant="ghost" size="icon" asChild className="w-9 h-9">
            <Link href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              <item.icon className="h-4 w-4" />
            </Link>
          </Button>
        ))}
    
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