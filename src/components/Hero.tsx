'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Database, Globe } from 'lucide-react'
import AnimatedText from './ui/AnimatedText'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    { icon: Code, delay: 0, position: 'top-20 left-10' },
    { icon: Database, delay: 1, position: 'top-40 right-10' },
    { icon: Globe, delay: 2, position: 'bottom-40 left-20' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 sm:pt-24 lg:pt-28 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-green-600/5 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: item.delay, duration: 1 }}
            className={`absolute ${item.position} text-gray-600/20`}
          >
            <item.icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Enhanced Greeting */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-base sm:text-lg lg:text-xl text-blue-400 font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            <AnimatedText text="Hello, I'm" delay={0.5} />
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </motion.div>

          {/* Enhanced Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 lg:mb-10"
          >
            <span className="gradient-text">
              <AnimatedText text="Mayer Frieg" delay={1} duration={0.03} />
            </span>
          </motion.h1>

          {/* Enhanced Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 sm:mb-10 lg:mb-12"
          >
            <AnimatedText text="Full-Stack Developer & Software Engineer" delay={2} duration={0.05} />
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed px-6 sm:px-0"
          >
            I am a passionate full-stack developer who thrives on continuous learning and creative problem-solving. 
            Specializing in modern web technologies, mobile development, and scalable software solutions.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20 px-6 sm:px-0"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/documents/Mayer Soliman.pdf';
                link.download = 'Mayer Soliman.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-3"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 sm:space-x-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {[
              { href: "https://github.com/MayerS22", icon: Github, label: "GitHub", color: "hover:text-gray-300" },
              { href: "https://www.linkedin.com/in/mayer-frieg-7a0368226/", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
              { href: "mailto:mayerfrieg@outlook.com", icon: Mail, label: "Email", color: "hover:text-red-400" }
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
                className={`text-gray-400 transition-colors duration-200 p-3 sm:p-4 rounded-xl hover:bg-gray-800/50 ${social.color}`}
                title={social.label}
              >
                <social.icon size={24} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto"
          >
            {[
              { number: "1+", label: "Years Experience", icon: "💼" },
              { number: "10+", label: "Projects Completed", icon: "🚀" },
              { number: "25+", label: "Technologies Learned", icon: "⚡" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 + index * 0.1, duration: 0.6 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <motion.div 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 3.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-lg sm:text-xl text-gray-400 group-hover:text-blue-400 transition-colors mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-sm sm:text-base text-gray-500 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
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