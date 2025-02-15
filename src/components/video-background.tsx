"use client"

import { useEffect, useRef, useState } from "react"

const videoSrc = "/sunrise_1.mp4" // Replace with your actual video file

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.log("Autoplay failed:", error)
      }
    }

    const switchVideo = () => {
      video.currentTime = 0 // Restart the video after 15 seconds
      playVideo()
    }

    playVideo() // Initial play
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
        loop
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      {isIOS && (
        <img
          src="/fallback-image.jpg" // Replace with a fallback image
          alt="Fallback for iOS"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      )}
    </div>
  )
}

