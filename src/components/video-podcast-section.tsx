

"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const videos = [
  {
    title: "Integrative Psychotherapist | New Specialist at Light of Awareness",
    src: "https://www.youtube.com/embed/yOC1E5mGlg0?autoplay=1&mute=1",
    description: "This is the special video for public awareness to know the secrets behind your birthday coding. This is my own research to express in my way. I thinks every one keen to know his/her secrets coding to understand your gifts, information, secrets and missing things. So watch full video to get knowledge."
  },
  {
    title: "Reiki Healing Insights | Light of Awareness",
    src: "https://www.youtube.com/embed/QPeKQW-1XBY?start=3&autoplay=0&mute=1",
    description: "Discover the power of Reiki healing and how it can transform your life through energy alignment and mindfulness techniques."
  },
  {
    title: "Mental Health Talk | From Trauma to Healing",
    src: "https://www.youtube.com/embed/RurLBRw0h2E?start=231&autoplay=0&mute=1",
    description: "Explore how to manage emotional wounds and the importance of therapy in your healing journey."
  },
]

export function VideoPodcastSection() {
  const [mainVideo, setMainVideo] = useState(videos[0])
  const [otherVideos, setOtherVideos] = useState(videos.slice(1))

  const handleVideoClick = (video: typeof videos[0]) => {
    const updatedOthers = [mainVideo, ...otherVideos.filter(v => v.src !== video.src)]
    setMainVideo(video)
    setOtherVideos(updatedOthers)

    const main = document.getElementById("main-video")
    main?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {/* Heading */}
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

        {/* Main Video */}
        <motion.div
          id="main-video"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full object-cover"
              src={mainVideo.src}
              title={mainVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-background p-6">
            <h3 className="text-xl font-semibold mb-2">{mainVideo.title}</h3>
            <p className="text-muted-foreground">{mainVideo.description}</p>
          </div>
        </motion.div>

        {/* Other Videos */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h4 className="text-2xl font-semibold mb-4">More Videos</h4>
          <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-muted-foreground/50 pb-2">
            {otherVideos.map((video, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-xs bg-card rounded-lg shadow cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
                onClick={() => handleVideoClick(video)}
              >
                <div className="aspect-video overflow-hidden rounded-t">
                  <iframe
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-3">
                  <h5 className="text-base font-medium line-clamp-2">{video.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
