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
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'Kotlin', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'Android', level: 88 },
        { name: 'Jetpack Compose', level: 82 },
        { name: 'React Native', level: 75 },
      ]
    },
    {
      name: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
      ]
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
      ]
    },
    {
      name: 'Database & BI',
      icon: Database,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Data Engineering', level: 75 },
        { name: 'Database Design', level: 82 },
        { name: 'Reporting', level: 78 },
      ]
    },
    {
      name: 'Tools & Others',
      icon: Zap,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Agile', level: 80 },
        { name: 'Testing', level: 75 },
        { name: 'System Design', level: 70 },
        { name: 'Problem Solving', level: 88 },
      ]
    }
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
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1500" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container-custom relative z-10">


        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 px-4 sm:px-0">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Build modern web applications with React, HTML5, CSS3, JavaScript, and TypeScript</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Create robust backend systems using Node.js, Express.js, Python, and C++</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Database design and modeling with Firebase, MongoDB, MySQL, and PostgreSQL</p>
                </div>
              </div>
              <div className="space-y-3">


                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Implement agile methodologies, testing strategies, and version control with Git</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">System design and problem-solving for scalable software solutions</p>
                </div>
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              <motion.div
                variants={itemVariants}
                className="bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-4 sm:p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-blue-700/30">
                      <Code className="text-blue-400 sm:w-6 sm:h-6" size={20} />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Programming</h5>
                  </div>
                  <div className="space-y-3">
                    {['JavaScript', 'Python', 'Java', 'SQL', 'C++'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-block bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 mr-2 sm:mr-3 mb-2 font-medium border border-blue-700/50 hover:from-blue-800/40 hover:to-purple-800/40 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-4 sm:p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-green-700/30">
                      <Globe className="text-green-400 sm:w-6 sm:h-6" size={20} />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Web Development</h5>
                  </div>
                  <div className="space-y-3">
                    {['HTML', 'CSS', 'React', 'JavaScript (ES6+)', 'Redux', 'Node.js', 'Express.js', 'NestJS'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-block bg-gradient-to-r from-green-900/30 to-blue-900/30 text-green-300 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 mr-2 sm:mr-3 mb-2 font-medium border border-green-700/50 hover:from-green-800/40 hover:to-blue-800/40 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-4 sm:p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-orange-700/30">
                      <Database className="text-orange-400 sm:w-6 sm:h-6" size={20} />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Database Management</h5>
                  </div>
                  <div className="space-y-3">
                    {['MongoDB', 'MySQL', 'Room', 'Firebase', 'PostgreSQL'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-block bg-gradient-to-r from-orange-900/30 to-red-900/30 text-orange-300 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 mr-2 sm:mr-3 mb-2 font-medium border border-orange-700/50 hover:from-orange-800/40 hover:to-red-800/40 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-4 sm:p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-gray-700/30">
                      <Git className="text-gray-400 sm:w-6 sm:h-6" size={20} />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-400 transition-colors duration-300">Version Control</h5>
                  </div>
                  <div className="space-y-3">
                    {['Git', 'GitHub'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-block bg-gradient-to-r from-gray-900/30 to-slate-900/30 text-gray-300 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 mr-2 sm:mr-3 mb-2 font-medium border border-gray-700/50 hover:from-gray-800/40 hover:to-slate-800/40 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-4 sm:p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-700/30">
                      <Users className="text-indigo-400 sm:w-6 sm:h-6" size={20} />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">Agile & Scrum</h5>
                  </div>
                  <div className="space-y-3">
                    {['Agile', 'Scrum', 'Sprint Planning', 'Retrospectives'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-block bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-300 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 mr-2 sm:mr-3 mb-2 font-medium border border-indigo-700/50 hover:from-indigo-800/40 hover:to-purple-800/40 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-4 sm:p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-emerald-700/30">
                      <TestTube className="text-emerald-400 sm:w-6 sm:h-6" size={20} />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">Debugging & Testing</h5>
                  </div>
                  <div className="space-y-3">
                    {['Unit Testing', 'Integration Testing'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-block bg-gradient-to-r from-emerald-900/30 to-teal-900/30 text-emerald-300 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 mr-2 sm:mr-3 mb-2 font-medium border border-emerald-700/50 hover:from-emerald-800/40 hover:to-teal-800/40 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 