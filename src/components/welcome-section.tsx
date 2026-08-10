"use client"

import { motion } from "framer-motion"

export function WelcomeSection() {
  return (
    <section className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Welcome to Mind Mechanics</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          A place where we help you transform your life through a holistic approach to mental, emotional, and physical
          healing. Our unique services combine the wisdom of psychotherapy, Reiki healing, hypnotherapy, EFT (Emotional
          Freedom Technique), addiction therapy, and much more.
        </p>
      </motion.div>
    </section>
  )
}

