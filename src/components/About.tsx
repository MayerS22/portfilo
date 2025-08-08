'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Zap, Smartphone, Users, Shield, TrendingUp } from 'lucide-react'

const About = () => {
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

  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Globe, 
      description: 'React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    { 
      name: 'Backend Development', 
      icon: Code, 
      description: 'Node.js, Express.js, Python, RESTful APIs, GraphQL',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    { 
      name: 'Mobile Development', 
      icon: Smartphone, 
      description: 'React Native, Flutter, Kotlin, Swift, Mobile UI/UX',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    { 
      name: 'Database & Cloud', 
      icon: Database, 
      description: 'MongoDB, PostgreSQL, Firebase, AWS, Docker, CI/CD',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    },
  ]

  const highlights = [
    { icon: Users, text: 'Team Collaboration & Agile Development' },
    { icon: Shield, text: 'Security-First Development Approach' },
    { icon: TrendingUp, text: 'Performance Optimization & Scalability' },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Image & Personal Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Enhanced Image Container */}
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/Mayer Soliman.png" 
                    alt="Mayer Soliman Hedya" 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="text-white" size={20} />
              </div>
            </div>

            {/* Enhanced About Text */}
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">About Me</h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                I am a passionate Full-Stack Developer who thrives on continuous learning and creative problem-solving. 
                I specialize in building complete web applications from frontend to backend, ensuring seamless user experiences 
                and robust server-side solutions. My approach combines technical expertise with a focus on user-centered design.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <highlight.icon className="text-blue-400" size={18} />
                  </div>
                  <span className="text-sm sm:text-base">{highlight.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">What I Do</h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">
                I specialize in building modern, scalable full-stack web applications. From responsive frontend interfaces 
                to robust backend systems, I create complete solutions that deliver exceptional user experiences and powerful functionality.
                My expertise spans across web development, mobile applications, and cloud infrastructure.
              </p>
            </div>

            {/* Enhanced Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative overflow-hidden rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${skill.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} size={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white group-hover:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Development Philosophy</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I believe in writing clean, maintainable code that scales with your business needs. 
                Every project is an opportunity to learn and grow, and I approach each challenge with 
                enthusiasm and a commitment to delivering the best possible solution.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 