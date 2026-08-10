// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"
// import { ref, push, set } from "firebase/database"
// import { db } from "@/lib/firebaseConfig"

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     heading: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   function validateForm(data: typeof formData) {
//     return (
//       data.name.trim() &&
//       data.email.trim() &&
//       data.heading.trim() &&
//       data.message.trim()
//     )
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault()
//     if (!validateForm(formData)) return

//     setIsSubmitting(true)
//     try {
//       const contactRef = ref(db, "MindMechanics")
//       const newContactRef = push(contactRef)
//       const id = newContactRef.key || Date.now().toString()

//       // Save data in the correct format
//       const messageData = {
//         id,
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone || "",
//         heading: formData.heading,
//         message: formData.message,
//         answered: false,
//         archived: false,
//         createdAt: new Date().toISOString().split("T")[0],
//       }

//       await set(newContactRef, messageData)

//       setFormData({ name: "", email: "", phone: "", heading: "", message: "" })
//       setIsSuccess(true)
//       setTimeout(() => setIsSuccess(false), 3000)
//     } catch (error) {
//       console.error("Firebase write error:", error)
//       setFormData({ name: "", email: "", phone: "", heading: "", message: "" })
//       setIsSuccess(true)
//       setTimeout(() => setIsSuccess(false), 3000)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background px-6 py-20">
//       <div className="max-w-5xl w-full bg-card shadow-lg rounded-2xl p-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-6 text-center"
//         >
//           Contact Us
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12"
//         >
//           Have questions? We are here to help. Send us a message and we will respond as soon as possible.
//         </motion.p>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
//               <Input name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
//               <Input name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
//               <Input name="phone" type="tel" placeholder="Your Phone (optional)" value={formData.phone} onChange={handleChange} />
//               <Input name="heading" placeholder="Subject / Heading" required value={formData.heading} onChange={handleChange} />
//               <Textarea name="message" placeholder="Your Message" rows={6} required value={formData.message} onChange={handleChange} />

//               <Button
//                 type="submit"
//                 size="lg"
//                 disabled={isSubmitting || isSuccess}
//                 className={`w-full transition-colors duration-300 ${
//                   isSuccess ? "bg-green-500 hover:bg-green-500 text-white" : ""
//                 }`}
//               >
//                 {isSubmitting
//                   ? "Sending..."
//                   : isSuccess
//                   ? "Success!"
//                   : "Send Message"}
//               </Button>
//             </form>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="space-y-6 flex flex-col justify-center"
//           >
//             <div className="flex items-center space-x-4">
//               <Phone className="text-primary" />
//               <span>+92 300 2265416</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Mail className="text-primary" />
//               <span>mindmechanics09@gmail.com</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Instagram className="text-primary" />
//               <a href="https://www.instagram.com/mindmechanics09/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                 Instagram
//               </a>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Facebook className="text-primary" />
//               <a href="https://web.facebook.com/mindmechanics09" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                 Facebook
//               </a>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Linkedin className="text-primary" />
//               <a href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                 LinkedIn
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
} from "lucide-react"
import { ref, push, set } from "firebase/database"
import { db } from "@/lib/firebaseConfig"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    heading: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function validateForm(data: typeof formData) {
    return (
      data.name.trim() &&
      data.email.trim() &&
      data.heading.trim() &&
      data.message.trim()
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validateForm(formData)) return

    setIsSubmitting(true)

    try {
      const contactRef = ref(db, "MindMechanics")
      const newContactRef = push(contactRef)

      const id = newContactRef.key || Date.now().toString()

      const messageData = {
        id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        heading: formData.heading,
        message: formData.message,
        answered: false,
        archived: false,
        createdAt: new Date().toISOString().split("T")[0],
      }

      await set(newContactRef, messageData)

      setFormData({
        name: "",
        email: "",
        phone: "",
        heading: "",
        message: "",
      })

      setIsSuccess(true)

      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      console.error("Firebase write error:", error)

      setFormData({
        name: "",
        email: "",
        phone: "",
        heading: "",
        message: "",
      })

      setIsSuccess(true)

      setTimeout(() => setIsSuccess(false), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12"
        >
          Have questions? We are here to help. Send us a message and we will
          respond as soon as possible.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
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
                name="phone"
                type="tel"
                placeholder="Your Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
              />

              <Input
                name="heading"
                placeholder="Subject / Heading"
                required
                value={formData.heading}
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

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSuccess}
                className={`w-full transition-colors duration-300 ${
                  isSuccess
                    ? "bg-green-500 hover:bg-green-500 text-white"
                    : ""
                }`}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSuccess
                  ? "Success!"
                  : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary mt-1 shrink-0" />

              <a
                href="https://maps.app.goo.gl/2DGByQZGqBoziyvj6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                R37C+Q4C Defence Housing Authority, Karachi, Pakistan
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <Phone className="text-primary" />
              <span>+92 300 2265416</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <Mail className="text-primary" />
              <span>mindmechanics09@gmail.com</span>
            </div>

            {/* Instagram */}
            <div className="flex items-center space-x-4">
              <Instagram className="text-primary" />

              <a
                href="https://www.instagram.com/mindmechanics09/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>

            {/* Facebook */}
            <div className="flex items-center space-x-4">
              <Facebook className="text-primary" />

              <a
                href="https://web.facebook.com/mindmechanics09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Facebook
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <Linkedin className="text-primary" />

              <a
                href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}