'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Zap, Smartphone } from 'lucide-react'

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skills = [
    { name: 'Mobile Development', icon: Smartphone, description: 'Kotlin, Flutter, Android, Jetpack Compose' },
    { name: 'Web Development', icon: Globe, description: 'React, Node.js, HTML5, CSS3, JavaScript' },
    { name: 'Programming', icon: Code, description: 'Python, C++, TypeScript, Problem Solving' },
    { name: 'Data Engineering', icon: Database, description: 'Power BI, SQL, Database Design, Reporting' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image & Personal Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="text-gray-400 leading-relaxed">
                I am a passionate full stack developer who thrives on continuous learning and creative problem-solving. 
                I believe that personal growth comes from embracing new challenges and exploring innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">What I Do</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Passionate about software engineering, mobile and web development, and data engineering. 
                I specialize in creating secure and user-friendly applications that solve real-world problems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                      <skill.icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Current Focus</h3>
              <p className="text-gray-400 text-sm">
                Currently working on mobile applications, web development, and data engineering projects. 
                Always learning and exploring new technologies to stay at the forefront of software development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 