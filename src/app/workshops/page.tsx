"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const workshops = [
  { title: "Mindfulness Retreat", date: "March 15-16, 2024", location: "Serenity Center", image: "/placeholder.svg" },
  { title: "Stress Management Workshop", date: "March 22, 2024", location: "Wellness Hub", image: "/placeholder.svg" },
  {
    title: "Emotional Intelligence Seminar",
    date: "March 29, 2024",
    location: "Growth Center",
    image: "/placeholder.svg",
  },
  {
    title: "Couples Communication Workshop",
    date: "April 5, 2024",
    location: "Harmony Hall",
    image: "/placeholder.svg",
  },
  {
    title: "Anxiety Management Techniques",
    date: "April 12, 2024",
    location: "Calm Clinic",
    image: "/placeholder.svg",
  },
]

export default function WorkshopsPage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % workshops.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-20">
      <section className="container py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Past Workshops
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl mb-12"
        >
          Explore our past workshops and seminars that have helped participants develop new skills and insights for
          personal growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative h-[500px] mb-12 rounded-xl overflow-hidden"
        >
          {workshops.map((workshop, index) => (
            <div
              key={workshop.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={workshop.image || "/placeholder.svg"}
                alt={workshop.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{workshop.title}</h3>
                <p>
                  {workshop.date} | {workshop.location}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{workshop.title}</h3>
                <p className="text-muted-foreground">{workshop.date}</p>
                <p className="text-muted-foreground">{workshop.location}</p>
                <Button>View Details</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

