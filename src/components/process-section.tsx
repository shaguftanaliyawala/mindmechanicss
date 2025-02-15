"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Lightbulb, Smile, ArrowRight } from "lucide-react"

const steps = [
  { icon: Brain, title: "Assessment", description: "We begin with a thorough assessment of your needs and goals." },
  {
    icon: Heart,
    title: "Personalized Plan",
    description: "Together, we create a tailored plan for your mental health journey.",
  },
  {
    icon: Lightbulb,
    title: "Guided Sessions",
    description: "Regular therapy sessions to work through challenges and develop coping strategies.",
  },
  {
    icon: Smile,
    title: "Growth & Progress",
    description: "Celebrate milestones and continue your path to mental wellness.",
  },
]

export function ProcessSection() {
  return (
    <section className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-16"
      >
        <h2 className="text-3xl font-bold">Our Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A step-by-step journey towards better mental health and personal growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative p-8 border-2 border-primary/20 rounded-xl bg-primary/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full relative z-10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary h-6 w-6 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

