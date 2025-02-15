"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Philosophy() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="p-8 text-center"
    >
      <h2 className="text-4xl font-bold text-primary">Our Philosophy</h2>
      <p className="text-muted-foreground">Core values and beliefs that guide us...</p>
    </motion.section>
  )
}
