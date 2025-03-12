"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react'

// API URL - change this to your deployed API URL when going to production
const API_URL = 'http://localhost:5000/api/contact'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage("")
    
    try {
      console.log("Sending data to API:", formData)
      console.log("API URL:", API_URL)
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      console.log("Response status:", response.status)
      
      const result = await response.json()
      console.log("Response data:", result)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || "Failed to submit form")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage("Network error. Please check if the API server is running.")
    } finally {
      setIsSubmitting(false)
    }
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
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <Input 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <Input 
              name="email" 
              type="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <Input 
              name="subject" 
              placeholder="Subject" 
              required 
              value={formData.subject}
              onChange={handleChange}
            />
            <Textarea 
              name="message" 
              placeholder="Your Message" 
              rows={6} 
              required 
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500">
                Thank you for your message! We'll get back to you soon.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500">
                {errorMessage || "There was an error sending your message. Please try again."}
              </p>
            )}
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
            <a href="https://www.instagram.com/mindmechanics09/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="text-primary" />
            <a href="https://web.facebook.com/mindmechanics09" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="text-primary" />
            <a href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}