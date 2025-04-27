"use client"

import { motion } from "framer-motion"

export function VideoPodcastSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-10"
        >
          <h2 className="text-3xl font-bold">Mind Mechanics Podcast</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for insightful conversations about mental health, personal growth, and holistic healing techniques.
            Our podcast features expert discussions that will help you on your journey to wellness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/yOC1E5mGlg0?autoplay=0&mute=0&loop=1&playlist=yOC1E5mGlg0"
              title="Integrative Psychotherapist | New Specialist at Light of Awareness"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-background p-6">
            <h3 className="text-xl font-semibold mb-2">Integrative Psychotherapist | New Specialist at Light of Awareness</h3>
            <p className="text-muted-foreground">
            This is the special video for public awareness to know the secrets behind your birthday coding. This is my own research to express in my way. I thinks every one keen to know his/her sectets coding to understand your gifts, information, secrets and missing things. So watch full video to get knowledge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
