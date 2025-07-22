'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Database, Globe, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Speedo Transfer Mobile Application',
      description: 'Secure money transfer app with authentication, fund transfers, and transaction history. Built with Jetpack Compose, Kotlin, MVVM for Banque Misr.',
      image: '/api/placeholder/400/250',
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Android', 'Firebase'],
      github: 'https://github.com/MayerS22/speedoo',
      live: 'https://github.com/MayerS22/speedoo',
      category: 'Mobile'
    },
    {
      title: 'E-Commerce Mobile Application',
      description: 'Mobile e-commerce app with user authentication and real-time product data. Built with Flutter and Firebase.',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Firebase', 'Dart', 'State Management'],
      github: 'https://github.com/MayerS22/E-commerce-Mobile-App',
      live: 'https://github.com/MayerS22/E-commerce-Mobile-App',
      category: 'Mobile'
    },
    {
      title: 'Food Ordering Website',
      description: 'Full-stack food ordering platform with user authentication and real-time order tracking. Built with React and Node.js.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/MayerS22/Food_Oredering_Sysytem',
      live: 'https://github.com/MayerS22/Food_Oredering_Sysytem',
      category: 'Full-Stack'
    },
    {
      title: 'Tourism in Egypt Website',
      description: 'Responsive tourism website showcasing Egypt\'s attractions. Built with HTML, CSS, and JavaScript.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/MayerS22/egypt-tourism-website',
      live: 'https://github.com/MayerS22/egypt-tourism-website',
      category: 'Frontend'
    }
  ]

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return Code
      case 'Frontend':
        return Globe
      case 'Backend':
        return Database
      case 'Mobile':
        return Smartphone
      case 'AI/ML':
        return Code
      default:
        return Code
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'Frontend':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Backend':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'Mobile':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      case 'AI/ML':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <section id="projects" className="section-padding">
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
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent work and technical expertise
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <CategoryIcon size={64} className="text-primary-600 dark:text-primary-400" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <Github size={20} className="text-gray-800" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <ExternalLink size={20} className="text-gray-800" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Play size={16} />
                      View Project
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/MayerS22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            View More Projects
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 