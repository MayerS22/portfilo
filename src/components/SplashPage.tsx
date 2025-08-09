'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Sparkles, Code, Globe, Zap } from 'lucide-react'

interface SplashPageProps {
  onComplete: () => void
}

const SplashPage = ({ onComplete }: SplashPageProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 3000) // Show splash for 3 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingIcons = [
    { icon: Code, delay: 0, position: 'top-10 sm:top-20 left-4 sm:left-10' },
    { icon: Globe, delay: 1, position: 'top-20 sm:top-40 right-4 sm:right-10' },
    { icon: Zap, delay: 2, position: 'bottom-20 sm:bottom-40 left-4 sm:left-20' },
  ]

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center px-4 sm:px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 sm:top-10 md:top-20 left-2 sm:left-4 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-20 right-2 sm:right-4 md:right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.15, 0.1], 
              scale: [0.9, 1.05, 0.9],
              y: [0, -3, 0]
            }}
            transition={{ 
              delay: item.delay, 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${item.position} text-gray-500/20`}
          >
            <item.icon size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl text-blue-400 font-medium mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </motion.div>
          <span>Welcome</span>
          <motion.div
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8"
        >
          <span className="gradient-text text-white sm:text-transparent">Mayer Frieg</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-8 sm:mb-12 px-2 sm:px-0"
        >
          Full-Stack Developer & Software Engineer
        </motion.h2>

        {/* Loading Animation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-2 mb-4 sm:mb-6"
        >
          <motion.div
            className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-xs sm:text-sm md:text-base"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default SplashPage
