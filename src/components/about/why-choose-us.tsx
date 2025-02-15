"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  {
    title: "Personalized Care",
    description: "Every session is tailored to meet your unique needs.",
  },
  {
    title: "Holistic Approach",
    description: "Combining traditional psychotherapy with energy healing for complete well-being.",
  },
  {
    title: "Experienced Practitioner",
    description: "13+ years of experience in various healing modalities.",
  },
  {
    title: "Support for All Ages",
    description: "From children to adults, we offer therapy that suits your life stage.",
  },
  {
    title: "Proven Track Record",
    description: "1950+ satisfied clients and 19+ corporate partnerships.",
  },
]

export function WhyChooseUs() {
  return (
    <div className="bg-primary/5 py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-background rounded-xl"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

