"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroStory() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Our Story
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image src="/mm.webp" alt="Mind Mechanics Founder" width={400} height={500} className="rounded-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              At Mind Mechanics, we believe in the power of the mind, energy, and body to heal and restore balance.
              Founded by Shagufta Salman Naliyawala, a passionate psychotherapist, Reiki healer, hypnotherapist,
              Montessori Directress, and numerologist, our approach is designed to support you on your journey to mental
              clarity, emotional healing, and physical vitality.
            </p>
            <p className="text-lg text-muted-foreground">
              Through years of experience, we have developed a compassionate, personalized approach that meets you where
              you are. Whether you are dealing with trauma, addiction, stress, or simply seeking self-improvement, we
              offer the guidance and tools to unlock your true potential.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

