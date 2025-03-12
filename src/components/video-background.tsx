// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image";

// const videoSrc = "/sunrise_1.mp4" // Replace with your actual video file

// export function VideoBackground() {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [isIOS, setIsIOS] = useState(false)

//   useEffect(() => {
//     const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
//     setIsIOS(iOS)

//     const video = videoRef.current
//     if (!video) return

//     const playVideo = async () => {
//       try {
//         await video.play()
//       } catch (error) {
//         console.log("Autoplay failed:", error)
//       }
//     }

//     const switchVideo = () => {
//       video.currentTime = 0 // Restart the video after 15 seconds
//       playVideo()
//     }

//     playVideo() // Initial play
//     const interval = setInterval(switchVideo, 15000) // Switch after 15 secs

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       <video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         style={{ objectPosition: "center top", transform: "translateY(-10%)" }} // Crop from top
//         autoPlay
//         muted
//         playsInline
//         loop
//         preload="auto"
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>
//       <div className="absolute inset-0 bg-black/50" />
//         {isIOS && (
//           <Image
//             src="/fallback-image.webp" // Replace with your actual fallback image path
//             alt="Fallback for iOS"
//             fill
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             style={{ objectPosition: "center top" }}
//             priority
//           />
//         )}
//     </div>
//   )
// }

"use client"

import { useEffect, useRef, useMemo } from "react"
import Image from "next/image";

const videoSrc = "/sunrise_1.mp4" // Replace with your actual video file

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Detect iOS devices
  const isIOS = useMemo(() => /iPad|iPhone|iPod/.test(navigator.userAgent), [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isIOS) return

    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.log("Autoplay failed:", error)
      }
    }

    const restartVideo = () => {
      video.currentTime = 0
      playVideo()
    }

    video.addEventListener("canplay", playVideo)
    const interval = setInterval(restartVideo, 15000) // Restart after 15 secs

    return () => {
      video.removeEventListener("canplay", playVideo)
      clearInterval(interval)
    }
  }, [isIOS])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {!isIOS ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectPosition: "center top", transform: "translateY(-10%)" }}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/fallback-image.webp" // Replace with actual fallback image
          alt="Fallback for iOS"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
