"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-primary/5 rounded-3xl p-8 text-center"
    >
      <h2 className="text-4xl font-bold text-primary">Why Choose Us?</h2>
      <p className="text-muted-foreground">Unique selling points and benefits...</p>
    </motion.section>
  )
}