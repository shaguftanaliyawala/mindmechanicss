"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitContact } from "./actions"

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await submitContact(formData)

    if (response.success) {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
      // Reset the form
      event.currentTarget.reset()
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  return (
    <div className="container py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-muted-foreground max-w-3xl mb-12"
      >
        Have questions? We are here to help. Send us a message and we will respond as soon as possible.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your Message" rows={6} required />
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4">
            <Phone className="text-primary" />
            <span>+92 300 2265416</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-primary" />
            <span>mindmechanics09@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="text-primary" />
            <a href="https://www.instagram.com/mindmechanics09/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="text-primary" />
            <a href="https://web.facebook.com/mindmechanics09" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="text-primary" />
            <a
              href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231/?fbclid=IwY2xjawIctUtleHRuA2FlbQIxMAABHadG1x6z2CGNZOEH6PEy4xxN0EpOfZ33vom7MLSHUCOICBwSYVvOyjHE_w_aem_MuTG2A9A_SS12kyfDcwDHg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

