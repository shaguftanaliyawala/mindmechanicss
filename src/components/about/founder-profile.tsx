"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FounderProfile() {
  return (
    <div className="bg-primary/5 py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Face Behind Mind Mechanics
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground">
                Meet <strong>Shagufta Salman Naliyawala</strong>, the visionary Founder and CEO of Mind Mechanics. With
                over <strong>13+ years of experience</strong> in psychotherapy, addiction counseling, Reiki healing,
                EFT, numerology, and gemstone healing, she has transformed the lives of more than{" "}
                <strong>1950+ clients </strong>
                and partnered with <strong>19+ corporate organizations</strong>.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently serving as a <strong>Mental Health Therapist at Docthers</strong> for the past 6 years,
                Shagufta integrates holistic healing techniques with modern psychology to create a transformative
                experience for her clients. Her expertise in psychotherapy and energy healing makes her a pioneer in the
                field of mental and emotional well-being.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image src="/sha.webp" alt="Shagufta Salman Naliyawala" width={400} height={500} className="rounded-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

