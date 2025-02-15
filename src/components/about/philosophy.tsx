"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Sparkles } from "lucide-react"

export function Philosophy() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Our Philosophy
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Mind-Body Connection</h3>
            <p className="text-muted-foreground">
              Healing is a mind-body-spirit experience. We integrate psychotherapy and counseling with energy healing
              for complete wellness.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Child Development</h3>
            <p className="text-muted-foreground">
              As a Montessori Directress, we specialize in child therapy, providing a safe and nurturing environment for
              children.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Holistic Healing</h3>
            <p className="text-muted-foreground">
              We focus on achieving long-term wellness by addressing the root causes of emotional distress through
              various healing modalities.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

