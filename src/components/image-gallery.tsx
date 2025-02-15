"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  {
    src: "/IMG-20250215-WA0019.jpg",
    alt: "Psychotherapy session Osaka Motors",
    width: 600,
    height: 350,
  },
  {
    src: "/IMG-20250215-WA0007.jpg",
    alt: "Mental Health at Karachi Gymkhana",
    width: 1018,
    height: 850,
  },
  {
    src: "/IMG-20250215-WA0008.jpg",
    alt: "Group Session at Karachi Gymkhana",
    width: 400,
    height: 300,
  },
  {
    src: "/corp.jpeg",
    alt: "Corporate Workshop at Docther's",
    width: 400,
    height: 300,
  },
  {
    src: "/IMG-20250215-WA0020.jpg",
    alt: "Corporate Workshop at MaxCon",
    width: 400,
    height: 300,
  },
  {
    src: "/WhatsApp Image 2025-02-15 at 16.03.15_c6511a7c.jpg",
    alt: "Counseling Session",
    width: 600,
    height: 400,
  },
  {
    src: "/sha.png",
    alt: "Alternative Therapy",
    width: 400,
    height: 600,
  },
  {
    src: "/IMG-20250215-WA0017.jpg",
    alt: "Corporate Event",
    width: 400,
    height: 300,
  },
  {
    src: "/mindful.png",
    alt: "Corporate Event",
    width: 400,
    height: 300,
  },
  {
    src: "/WhatsApp Image 2025-02-15 at 15.57.40_43de3563.jpg",
    alt: "Corporate Event",
    width: 400,
    height: 300,
  },
  {
    src: "/WhatsApp Image 2025-02-15 at 15.57.40_8f915132.jpg",
    alt: "Corporate Event",
    width: 350,
    height: 250,
  },
]

export function ImageGallery() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="container py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-background/50 backdrop-blur-sm rounded-xl p-4 shadow-lg"
      >
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative break-inside-avoid mb-2"
            >
              <div
                className="relative overflow-hidden rounded-lg"
                style={{
                  paddingTop: `${(image.height / image.width) * 100}%`,
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

