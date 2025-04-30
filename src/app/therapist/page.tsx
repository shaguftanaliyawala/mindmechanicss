"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const specializations = [
  "Psychotherapy & Counseling",
  "Addiction & Food Disorder Therapy",
  "Reiki Healing & EFT (Emotional Freedom Technique)",
  "Hypnotherapy & Mindfulness",
  "Systemic Family Therapy",
  "Montessori Directress",
]

const achievements = [
  "13+ years in hypnotherapy, reiki healing, psychotherapy and counseling",
  "1950+ clients treated through therapy sessions",
  "Founder and CEO of Mind-Mechanics(Light of Awareness), offering alternative healing therapies",
  "Mental Health Therapist at doctHERs (since 2020)",
  "Psychotherapist at Therapy Works, Karachi",
  "Conducted multiple corporate workshops & training sessions",
]

export default function TherapistPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image src="/WhatsApp Image 2025-02-15 at 15.57.40_8f915132.webp" alt="Therapy Session Background" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80">
          <div className="container h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shagufta Salman Naliyawala</h1>
              <p className="text-xl md:text-2xl text-gray-200">Psychotherapist,Hypnotherapist,Reiki Healer ,EFT practitioner</p>
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
            <Image src="/sha.webp" alt="Shagufta Salman Naliyawala" width={500} height={600} className="rounded-2xl" />
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
              With over 13 years of experience in psychotherapy, counseling, and holistic healing, I am committed to guiding individuals toward emotional and mental well-being. My approach integrates psychotherapy, cognitive therapies, and alternative healing techniques such as Reiki, EFT, and hypnotherapy to foster personal transformation.
            </p>
            <p className="text-lg text-muted-foreground">
              I am a certified Level 4 Integrative Psychotherapist (CPCAB, UK), Reiki Healer,, Addiction Therapist, EFT practitioner and a recognized hypnotherapist by the National Guild of Hypnotists, USA. As the founder of Mind-Mechanics(Light of Awareness) and a Mental Health Therapist at doctHERs, I have successfully provided therapy to over 1950 clients, offering personalized healing solutions for individuals, couples, and rehabilitation cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <motion.h2 className="text-3xl font-bold text-center mb-12">Specializations</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {specializations.map((spec) => (
              <motion.div key={spec} className="bg-background p-6 rounded-xl text-center">
                <p className="font-medium">{spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container">
        <motion.h2 className="text-3xl font-bold text-center mb-12">Achievements & Experience</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <motion.div key={achievement} className="p-6 border rounded-xl">
              <Star className="h-6 w-6 text-primary mb-4" />
              <p className="text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container pb-20">
        <motion.div className="bg-primary/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Healing Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the first step towards mental wellness and personal growth. Schedule a consultation to discuss your unique needs and goals.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
            Book a Consultation
          </a>
        </motion.div>
      </section>
    </div>
  )
}
