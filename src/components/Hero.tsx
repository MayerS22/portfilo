'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import AnimatedText from './ui/AnimatedText'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-16 sm:pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting with Sparkles */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-base sm:text-lg text-blue-400 font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <AnimatedText text="Hello, I'm" delay={0.5} />
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>

          {/* Name with Enhanced Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="gradient-text">
              <AnimatedText text="Mayer Soliman Hedya" delay={1} duration={0.03} />
            </span>
          </motion.h1>

          {/* Title with Typewriter Effect */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8"
          >
            <AnimatedText text="Full-Stack Developer & Software Engineer" delay={2} duration={0.05} />
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            I am a passionate full stack developer who thrives on continuous learning and creative problem-solving. 
            I believe that personal growth comes from embracing new challenges and exploring innovative solutions.
          </motion.p>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group relative overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 group relative overflow-hidden w-full sm:w-auto justify-center"
            >
              <Download size={18} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links with Enhanced Animations */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
          >
            {[
              { href: "https://github.com/MayerS22", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/mayer-frieg-7a0368226/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:mayerfrieg@outlook.com", icon: Mail, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 sm:p-3 rounded-full hover:bg-gray-800"
              >
                <social.icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats with Enhanced Animations */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16"
          >
            {[
              { number: "4+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "12+", label: "Technologies" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 + index * 0.1 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-400 group-hover:text-blue-400 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 