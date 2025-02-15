"use client"

import { useEffect, useRef } from "react"

const videoSrc = "/sunrise.mp4" // Replace with your actual video file

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const switchVideo = () => {
      video.currentTime = 0 // Restart the video after 15 seconds
      video.play()
    }

    const interval = setInterval(switchVideo, 15000) // Switch after 15 secs

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ objectPosition: "center top", transform: "translateY(-10%)" }} // Crop from top
        autoPlay
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
