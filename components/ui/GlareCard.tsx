'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef, useEffect, useState } from 'react'

interface GlareCardProps {
  children: ReactNode
  className?: string
  glareOpacity?: number
  glareScale?: number
}

const GlareCard = ({ 
  children, 
  className = '', 
  glareOpacity = 0.15, 
  glareScale = 1.5 
}: GlareCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

  const springConfig = { damping: 20, stiffness: 300 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = e.clientX - rect.left - width / 2
    const mouseYFromCenter = e.clientY - rect.top - height / 2

    mouseX.set(mouseXFromCenter / width)
    mouseY.set(mouseYFromCenter / height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  if (!mounted) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)',
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
        }}
        className="relative w-full h-full"
      >
        {children}
        
        {/* Glare Effect */}
        <motion.div
          style={{
            opacity: useTransform(
              [mouseX, mouseY],
              ([x, y]) => Math.abs(x) + Math.abs(y) * glareOpacity
            ),
            transform: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `translateX(${x * 100}px) translateY(${y * 100}px) scale(${glareScale})`
            ),
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default GlareCard 