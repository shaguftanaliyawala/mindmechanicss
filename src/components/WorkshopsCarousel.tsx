"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Workshop = {
  title: string
  date: string
  location: string
  images: string[]
}

const parseWorkshopsFromText = (text: string): Workshop[] => {
  const workshops: Workshop[] = []
  const blocks = text.split("---").map(block => block.trim()).filter(block => block.length > 0)

  blocks.forEach(block => {
    const lines = block.split("\n").map(line => line.trim()).filter(line => line.length > 0)
    const workshop: Partial<Workshop> = {}

    lines.forEach(line => {
      if (line.startsWith("Title:")) {
        workshop.title = line.replace("Title:", "").trim()
      } else if (line.startsWith("Date:")) {
        workshop.date = line.replace("Date:", "").trim()
      } else if (line.startsWith("Location:")) {
        workshop.location = line.replace("Location:", "").trim()
      } else if (line.startsWith("Images:")) {
        workshop.images = line.replace("Images:", "").trim().split(",").map(img => img.trim())
      }
    })

    if (workshop.title && workshop.date && workshop.location && workshop.images) {
      workshops.push(workshop as Workshop)
    }
  })

  return workshops
}

export default function WorkshopsFadeCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [workshops, setWorkshops] = useState<Workshop[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch("/workshops.txt")
        const text = await response.text()
        const parsedWorkshops = parseWorkshopsFromText(text)
        setWorkshops(parsedWorkshops)
      } catch (error) {
        console.error("Failed to load workshops:", error)
      }
    }

    fetchWorkshops()
  }, [])

  useEffect(() => {
    if (paused || workshops.length === 0) return
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % workshops.length)
    }, 6000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, workshops.length])

  return (
    <section
      className="relative mx-auto mt-16 mb-20 w-[90%] md:w-[70%] lg:w-[60%]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Past Workshops</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative h-[500px] mb-12 rounded-xl overflow-hidden shadow-xl bg-black/10"
      >
        {workshops.map((workshop, i) => (
          <div
            key={workshop.title + i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Grid inside each slide */}
            <div className="grid grid-cols-2 gap-2 h-full p-2">
              {/* Left portrait */}
              <div className="relative row-span-2 overflow-hidden rounded-lg">
                <Image
                  src={workshop.images[0]}
                  alt={workshop.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right top landscape */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={workshop.images[1]}
                  alt={workshop.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right bottom landscape */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={workshop.images[2]}
                  alt={workshop.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-[2px] z-20">
              <h3 className="text-xl font-semibold">{workshop.title}</h3>
              <p className="text-sm">
                {workshop.date} • {workshop.location}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2">
        {workshops.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
