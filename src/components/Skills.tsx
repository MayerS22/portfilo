'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Globe,
  Zap,
  Smartphone,
  Server,
  GitBranch as Git,
  TestTube,
  Users,
  Star,
  Target,
  TrendingUp,
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
      ],
      color: 'text-blue-400',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      borderColor: 'border-blue-700/50 hover:border-blue-600/50'
    },
    {
      name: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'Express.js', level: 78 },
        { name: 'Firebase', level: 85 },
      ],
      color: 'text-green-400',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-700/50 hover:border-green-600/50'
    },
    {
      name: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Data Engineering', level: 75 },
        { name: 'Database Design', level: 82 },
        { name: 'Reporting', level: 78 },
      ],
      color: 'text-orange-400',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-700/50 hover:border-orange-600/50'
    },
    {
      name: 'DevOps & Tools',
      icon: Zap,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Agile', level: 80 },
        { name: 'Testing', level: 75 },
        { name: 'System Design', level: 70 },
        { name: 'Problem Solving', level: 88 },
      ],
      color: 'text-yellow-400',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-700/50 hover:border-yellow-600/50'
    },
    {
      name: 'Testing & Quality',
      icon: TestTube,
      skills: [
        { name: 'Unit Testing', level: 80 },
        { name: 'Integration Testing', level: 75 },
        { name: 'E2E Testing', level: 70 },
        { name: 'Performance Testing', level: 72 },
        { name: 'Code Quality', level: 85 },
      ],
      color: 'text-pink-400',
      bgColor: 'from-pink-900/20 to-purple-900/20',
      borderColor: 'border-pink-700/50 hover:border-pink-600/50'
    }
  ]

  const floatingElements = [
    { icon: Star, position: 'top-20 left-10', delay: 0 },
    { icon: Target, position: 'top-40 right-10', delay: 0.5 },
    { icon: TrendingUp, position: 'bottom-40 left-20', delay: 1 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Floating Elements with Subtle Animation */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1], 
              scale: [0.9, 1.1, 0.9],
              y: [0, -8, 0]
            }}
            transition={{ 
              delay: element.delay, 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${element.position} w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg`}
          >
            <element.icon className="text-white" size={16} />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="text-blue-400 w-8 h-8" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Zap className="text-purple-400 w-8 h-8" />
            </motion.div>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-6 sm:px-0 leading-relaxed"
          >
            A comprehensive overview of my technical skills and expertise across various domains of software development.
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.02, 
                y: -3,
                transition: { duration: 0.2 }
              }}
              className={`group relative overflow-hidden p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border ${category.borderColor} transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-gradient-to-br ${category.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className={`${category.color} group-hover:text-white transition-colors duration-300`} size={24} />
                  </motion.div>
                  <h3 className="font-semibold text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/30 transition-colors duration-200"
                    >
                      <span className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 + 0.2, type: "spring", stiffness: 200 }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Development Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                whileHover={{ rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4"
              >
                <Users className="text-white" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Development Approach</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Problem-First',
                  description: 'I start by understanding the core problem before writing any code, ensuring solutions are truly effective.'
                },
                {
                  icon: TrendingUp,
                  title: 'Performance-Driven',
                  description: 'Every solution is optimized for performance, scalability, and maintainability from the ground up.'
                },
                {
                  icon: Star,
                  title: 'User-Centric',
                  description: 'I prioritize user experience and accessibility in every decision, creating intuitive and engaging interfaces.'
                }
              ].map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <approach.icon className="text-white" size={20} />
                  </motion.div>
                  <h4 className="font-semibold text-white text-lg mb-2">{approach.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{approach.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 