"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ImageGallery } from "@/components/image-gallery"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="space-y-20">
      <HeroSection />
      <WelcomeSection /> {/* Implemented Welcome Section */}
      <ImageGallery /> {/* Implemented Image Gallery */}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <ServicesSection limit={3} />
      </motion.div>

      <StatsSection />
      <ProcessSection />
      <CTASection />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
