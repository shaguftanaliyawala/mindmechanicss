// "use client"

// import { motion } from "framer-motion"
// import { Brain, Users, Lightbulb, Compass, Zap, Briefcase, Gem, Baby } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// const services = [
//   {
//     icon: Brain,
//     title: "Psychotherapy",
//     description: "Heal emotionally, spiritually, and mentally. Overcome anxiety, trauma, and self-doubt.",
//     format: "Online & in-person sessions.",
//     link: "/services",
//     bgImage: "/psy.jpg?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Briefcase,
//     title: "Corporate Training",
//     description: "Enhance workplace productivity and mental well-being with tailored corporate training.",
//     format: "Workshops & private sessions.",
//     link: "/services",
//     bgImage: "/corp.webp?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Lightbulb,
//     title: "Mindfulness Meditation",
//     description: "Cultivate calmness and focus through guided meditation exercises.",
//     format: "Workshops & private sessions.",
//     link: "/services",
//     bgImage: "/mindful.webp?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Compass,
//     title: "Hypnotherapy",
//     description: "Access your subconscious to overcome fears, trauma, and negative habits.",
//     format: "Private hypnotherapy sessions.",
//     link: "/services",
//     bgImage: "/reiki.webp?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Zap,
//     title: "EFT Tapping",
//     description: "Release emotional stress, trauma, and negative thought patterns.",
//     format: "Individual & group sessions.",
//     link: "/services",
//     bgImage: "/eft.webp?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Users,
//     title: "Numerology",
//     description: "Gain insights into your life path and personal strengths through numbers.",
//     format: "Individual & group consultations.",
//     link: "/services",
//     bgImage: "/numerology-concept-composition.webp?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Gem,
//     title: "Healing with Gemstones",
//     description: "Use gemstones to align energy, improve health, and enhance well-being.",
//     format: "Personalized recommendations.",
//     link: "/services",
//     bgImage: "/gem.avif?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Brain,
//     title: "Addiction Therapy",
//     description: "Recover from substance or behavioral addiction with guided support and mindfulness.",
//     format: "One-on-one healing sessions.",
//     link: "/services",
//     bgImage: "/add.webp?height=400&width=600", // Replace with actual image path
//   },
//   {
//     icon: Baby,
//     title: "Child Therapy",
//     description: "Support children's emotional growth with a safe, nurturing space.",
//     format: "Individual & parent sessions.",
//     link: "/services",
//     bgImage: "/child.webp?height=400&width=600", // Replace with actual image path
//   },
// ]

// export function ServicesSection({ showTitle = true, limit }: { showTitle?: boolean; limit?: number }) {
//   const displayedServices = typeof limit !== "undefined" ? services.slice(0, limit) : services

//   return (
//     <section className="container py-8 md:py-12">
//       {showTitle && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center space-y-4 mb-8 md:mb-12"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
//           <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
//             Explore personalized healing and therapy services designed to enhance your well-being.
//           </p>
//         </motion.div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
//         {displayedServices.map((service, index) => (
//           <motion.div
//             key={service.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <Link href={service.link}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.2 }}
//                 className="relative h-[300px] rounded-xl overflow-hidden group"
//               >
//                 <Image
//                   src={service.bgImage || "/placeholder.svg"}
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-6 flex flex-col justify-end hover:from-black/90 hover:via-black/60 hover:to-black/40 transition-colors duration-300">
//                   <div className="flex items-start gap-4">
//                     <div className="h-12 w-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
//                       <service.icon className="h-6 w-6 text-primary" />
//                     </div>
//                     <div className="space-y-2">
//                       <h3 className="text-xl font-semibold text-white">{service.title}</h3>
//                       <p className="text-sm text-gray-200">{service.description}</p>
//                       <p className="text-sm font-medium text-primary">{service.format}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {limit && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <Link
//             href="/services"
//             className="inline-block px-6 py-3 text-primary font-medium bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300"
//           >
//             View All Services →
//           </Link>
//         </motion.div>
//       )}
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Brain, Users, Lightbulb, Compass, Zap, Briefcase, Gem, Baby } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Brain,
    title: "Psychotherapy",
    description: "Heal emotionally, spiritually, and mentally. Overcome anxiety, trauma, and self-doubt.",
    format: "Online & in-person sessions.",
    link: "/services",
    bgImage: "/psy.jpg",
  },
  {
    icon: Briefcase,
    title: "Corporate Training",
    description: "Enhance workplace productivity and mental well-being with tailored corporate training.",
    format: "Workshops & private sessions.",
    link: "/services",
    bgImage: "/corp.webp",
  },
  {
    icon: Lightbulb,
    title: "Mindfulness Meditation",
    description: "Cultivate calmness and focus through guided meditation exercises.",
    format: "Workshops & private sessions.",
    link: "/services",
    bgImage: "/mindful.webp",
  },
  {
    icon: Compass,
    title: "Hypnotherapy",
    description: "Access your subconscious to overcome fears, trauma, and negative habits.",
    format: "Private hypnotherapy sessions.",
    link: "/services",
    bgImage: "/reiki.webp",
  },
  {
    icon: Zap,
    title: "EFT Tapping",
    description: "Release emotional stress, trauma, and negative thought patterns.",
    format: "Individual & group sessions.",
    link: "/services",
    bgImage: "/eft.webp",
  },
  {
    icon: Users,
    title: "Numerology",
    description: "Gain insights into your life path and personal strengths through numbers.",
    format: "Individual & group consultations.",
    link: "/services",
    bgImage: "/numerology-concept-composition.webp",
  },
  {
    icon: Gem,
    title: "Healing with Gemstones",
    description: "Use gemstones to align energy, improve health, and enhance well-being.",
    format: "Personalized recommendations.",
    link: "/services",
    bgImage: "/gem.avif",
  },
  {
    icon: Brain,
    title: "Addiction Therapy",
    description: "Recover from substance or behavioral addiction with guided support and mindfulness.",
    format: "One-on-one healing sessions.",
    link: "/services",
    bgImage: "/add.webp",
  },
  {
    icon: Baby,
    title: "Child Therapy",
    description: "Support children's emotional growth with a safe, nurturing space.",
    format: "Individual & parent sessions.",
    link: "/services",
    bgImage: "/child.webp",
  },
]

export function ServicesSection({ showTitle = true, limit }: { showTitle?: boolean; limit?: number }) {
  const displayedServices = typeof limit !== "undefined" ? services.slice(0, limit) : services

  return (
    <section className="container py-8 md:py-12">
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore personalized healing and therapy services designed to enhance your well-being.
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
        {displayedServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }} // Faster animation
            viewport={{ once: true }}
          >
            <Link href={service.link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="relative h-[300px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={service.bgImage || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2} // Prioritize first two images
                  loading={index >= 2 ? "lazy" : "eager"} // Lazy load all except the first two
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-6 flex flex-col justify-end hover:from-black/90 hover:via-black/60 hover:to-black/40 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-200">{service.description}</p>
                      <p className="text-sm font-medium text-primary">{service.format}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {limit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block px-6 py-3 text-primary font-medium bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300"
          >
            View All Services →
          </Link>
        </motion.div>
      )}
    </section>
  )
}
