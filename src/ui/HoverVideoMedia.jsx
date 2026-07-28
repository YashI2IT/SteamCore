import { useRef, useState } from 'react'

export default function HoverVideoMedia({
  posterSrc,
  videoSrc,
  alt,
  className = '',
  overlayClassName = '',
}) {
  const videoRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  const startPlayback = async () => {
    setIsActive(true)
    if (!videoRef.current) return
    try {
      videoRef.current.currentTime = 0
      await videoRef.current.play()
    } catch {
      // Autoplay can be blocked in some browsers.
    }
  }

  const stopPlayback = () => {
    setIsActive(false)
    if (!videoRef.current) return
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={startPlayback}
      onMouseLeave={stopPlayback}
      onFocus={startPlayback}
      onBlur={stopPlayback}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        className={`h-full w-full object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <img
        src={posterSrc}
        alt={alt}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
      />

      <div className={`absolute inset-0 transition-colors duration-500 ${overlayClassName}`} />
    </div>
  )
}
