'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Cloud, 
  Shield, 
  Cpu, 
  Smartphone,
  GitBranch,
  Server
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
    <section id="skills" className="section-padding bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Passionate about software engineering, mobile and web development, and data engineering.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Develop secure and user-friendly mobile and web applications</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Experience with Android (Kotlin), Flutter, React, Node.js, and C++</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Data engineering, BI, and reporting using Power BI</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">⚡</span>
                  <p className="text-gray-400">Database design and modeling</p>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mb-4 text-center">Additional Skills & Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'REST APIs', 'MVVM Architecture', 'JWT', 'OAuth',
                'WebSockets', 'Firebase', 'Google Services', 'Kafka',
                'Jest', 'Cypress', 'Unit Testing', 'Integration Testing',
                'Nginx', 'Apache', 'Jenkins', 'GitHub Actions',
                'TypeScript', 'JavaScript', 'Python', 'Java',
                'React Native', 'Flutter', 'Electron', 'PWA',
                'Data Engineering', 'Power BI', 'SQL', 'Database Design'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-700 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-300 hover:bg-blue-900/20 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 