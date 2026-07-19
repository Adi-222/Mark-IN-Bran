'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Start off-screen
  const cursorX = useMotionValue(-1000)
  const cursorY = useMotionValue(-1000)

  // Spring animation for smooth trailing effect
  const springConfig = { damping: 30, stiffness: 100, mass: 1 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }
    
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, isVisible])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[50] w-[400px] h-[400px] rounded-full bg-blue-500/15 dark:bg-blue-500/20 blur-[100px] mix-blend-normal hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0
      }}
      transition={{ opacity: { duration: 0.8 } }}
    />
  )
}
