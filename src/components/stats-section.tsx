"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const stats = [
  { number: 13, suffix: "+", label: "Years Experience" },
  { number: 1950, suffix: "+", label: "Happy Clients" },
  { number: 19, suffix: "+", label: "Corporate Partners" },
]

export function StatsSection() {
  return (
    <section className="container py-12 bg-primary/5 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <AnimatedStat key={stat.label} {...stat} delay={index * 0.2} />
        ))}
      </div>
    </section>
  )
}

function AnimatedStat({
  number,
  suffix,
  label,
  delay,
}: {
  number: number
  suffix: string
  label: string
  delay: number
}) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = number / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center space-y-2"
    >
      <div className="text-4xl font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  )
}

