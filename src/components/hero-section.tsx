"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Sparkles } from "lucide-react"

// Rotating phrases for hero section
const phrases = [
  "Transform Your Mind",
  "Healing Mind, Body & Soul",
  "Unlock Your Potential",
  "Embrace Inner Peace",
  "Journey towards Well-being",
  "Discover Your Strength",
]

// Video sources (replace with actual paths)
const videos = [
  "/sunrise_1.mp4",
]

// Video Background Component
function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }

    video.addEventListener("ended", handleEnded)
    return () => video.removeEventListener("ended", handleEnded)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        key={videos[currentVideo]}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

// Hero Section Component
export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 text-center space-y-8 px-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Brain className="w-16 h-16 text-primary" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -inset-4"
            >
              <Sparkles className="w-6 h-6 text-primary absolute top-0 right-0" />
              <Sparkles className="w-6 h-6 text-primary absolute bottom-0 left-0" />
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {phrases[currentPhrase]}
            </motion.span>
          </AnimatePresence>
          <br />
          <span className="text-primary mt-4 inline-block">
            Transform Your Life Today
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto text-white"
        >
          Expert psychotherapist care and counseling services to help you achieve mental wellness and personal growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="/contact">Begin Your Journey</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Gradient Fade Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
