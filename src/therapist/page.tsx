"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const specializations = [
  "Psychotherapy",
  "Addiction Counseling",
  "Reiki Healing",
  "EFT (Emotional Freedom Technique)",
  "Hypnotherapy",
  "Numerology",
  "Gemstone Healing",
  "Child Psychology",
]

const achievements = [
  "13+ years of experience in mental health therapy",
  "1950+ satisfied clients",
  "19+ corporate partnerships",
  "Certified Montessori Directress",
  "Mental Health Therapist at Docthers (6+ years)",
]

export default function TherapistPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image src="/placeholder.svg" alt="Therapy Session Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80">
          <div className="container h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shagufta Salman Naliyawala</h1>
              <p className="text-xl md:text-2xl text-gray-200">Psychotherapist, Reiki Master & Holistic Healer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image src="/sha.jpg" alt="Shagufta Salman Naliyawala" width={500} height={600} className="rounded-2xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground">
              With over 13 years of experience in psychotherapy and holistic healing, I am dedicated to helping
              individuals achieve mental wellness and personal growth. My approach combines traditional psychotherapy
              with energy healing techniques, providing a comprehensive path to emotional and spiritual well-being.
            </p>
            <p className="text-lg text-muted-foreground">
              As a certified Montessori Directress and Mental Health Therapist at Docthers, I specialize in both adult
              and child therapy, offering personalized care that addresses the unique needs of each client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Specializations
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-xl text-center"
              >
                <p className="font-medium">{spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Achievements & Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl"
            >
              <Star className="h-6 w-6 text-primary mb-4" />
              <p className="text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary/10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Begin Your Healing Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the first step towards mental wellness and personal growth. Schedule a consultation to discuss your
            unique needs and goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Book a Consultation
          </a>
        </motion.div>
      </section>
    </div>
  )
}

