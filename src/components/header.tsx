"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Workshops", href: "/workshops" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Our Therapist", href: "/therapist" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-6 w-6" />
            <span className="font-semibold">Mind Mechanics</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" asChild>
            <Link href="/contact">Book a Session</Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b lg:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" asChild className="w-full">
                <Link href="/contact">Book a Session</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

