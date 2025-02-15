"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-primary/10 rounded-3xl p-12 text-center space-y-6"
      >
        <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Take the first step towards a healthier mind and a more fulfilling life. Our expert therapists are here to
          support you every step of the way.
        </p>
        <Button size="lg" className="text-lg px-8" asChild>
          <Link href="/contact">Book Your First Session</Link>
        </Button>
      </motion.div>
    </section>
  )
}

