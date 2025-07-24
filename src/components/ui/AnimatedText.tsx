'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

const AnimatedText = ({ text, className = '', delay = 0, duration = 0.05 }: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, duration * 1000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, duration, mounted])

  if (!mounted) {
    return (
      <motion.span
        className={`inline-block ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        {text}
      </motion.span>
    )
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-primary-600 dark:bg-primary-400 ml-1"
      />
    </motion.span>
  )
}

export default AnimatedText 