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
    { name: 'Frontend Development', icon: Globe, description: 'React, HTML5, CSS3, JavaScript, TypeScript' },
    { name: 'Backend Development', icon: Code, description: 'Node.js, Express.js, Python, Database Design' },
    { name: 'Full Stack Tools', icon: Zap, description: 'Git, Testing, Problem Solving, System Design' },
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
              <div className="w-96 h-96 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/Mayer Soliman.png" 
                    alt="Mayer Soliman Hedya" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="text-gray-400 leading-relaxed">
                I am a passionate Full Stack Developer who thrives on continuous learning and creative problem-solving. 
                I specialize in building complete web applications from frontend to backend, ensuring seamless user experiences 
                and robust server-side solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">What I Do</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I specialize in building modern, scalable full stack web applications. From responsive frontend interfaces 
                to robust backend systems, I create complete solutions that deliver exceptional user experiences and powerful functionality.
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 