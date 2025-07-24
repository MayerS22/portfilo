'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Database, Globe, Smartphone } from 'lucide-react'
import GlareCard from './ui/GlareCard'
import Image from 'next/image'

const Projects = () => {
  const categories = [
    {
      name: 'Full-Stack',
      icon: Code,
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    },
    {
      name: 'Web',
      icon: Globe,
      color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    },
    {
      name: 'Frontend',
      icon: Globe,
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
    },
    {
      name: 'Backend',
      icon: Database,
      color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    },
    {
      name: 'AI/ML',
      icon: Code,
      color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400'
    }
  ]

  const projects = [
    {
      title: 'AutoInsight - Business Intelligence Platform',
      description: 'A+ Graduation project: Advanced data analysis and machine learning platform designed to help businesses navigate challenges during layoffs and restructuring. Features predictive analytics, workforce forecasting, and real-time decision-making tools.',
      image: '/images/AutoInsight.png',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Redux', 'Python', 'Machine Learning', 'Data Analysis', 'Forecasting Models', 'Interactive Dashboards', 'Real-time Analytics'],
      github: 'https://github.com/MayerS22/AutoInsight',
      categories: ['Full-Stack', 'Web', 'AI/ML']
    },
    {
      title: 'Taskify - Task Management App',
      description: 'Smart, simple, and stylish task management application for daily organization, deadline reminders, and personal productivity. Built with TypeScript and modern web technologies.',
      image: '/images/Taskify.png',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'SQLite', 'Authentication', 'Real-time Updates'],
      github: 'https://github.com/MayerS22/Taskify',
      categories: ['Full-Stack', 'Web']
    },
    {
      title: 'Speedo Transfer Mobile Application',
      description: 'Completed secure money transfer application for Banque Misr. Features include user authentication, fund transfers, transaction history, and real-time notifications. Built with Jetpack Compose, Kotlin, and MVVM architecture.',
      image: '/images/Speedo.png',
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Android', 'Firebase', 'REST APIs', 'Material Design', 'Biometric Auth'],
      github: 'https://github.com/MayerS22/speedoo',
      categories: ['Mobile', 'Frontend']
    },
    {
      title: 'E-Commerce Mobile Application',
      description: 'Mobile e-commerce app with user authentication and real-time product data. Built with Flutter and Firebase.',
      image: '/images/ecommerce-app.jpg',
      technologies: ['Flutter', 'Firebase', 'Dart', 'State Management', 'Cloud Firestore', 'Authentication', 'Payment Integration', 'Push Notifications'],
      github: 'https://github.com/MayerS22/E-commerce-Mobile-App',
      categories: ['Mobile', 'Full-Stack']
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
    const foundCategory = categories.find(cat => cat.name === category)
    return foundCategory ? foundCategory.icon : Code
  }

  const getCategoryColor = (category: string) => {
    const foundCategory = categories.find(cat => cat.name === category)
    return foundCategory ? foundCategory.color : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
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
            const CategoryIcon = getCategoryIcon(project.categories[0])
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <GlareCard className="h-full">
                  <div className="card overflow-hidden group h-full">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                      {project.image && project.image !== '/api/placeholder/400/250' ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <CategoryIcon size={64} className="text-primary-600 dark:text-primary-400" />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-4">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Github size={20} className="text-gray-800" />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-wrap gap-2">
                          {project.categories.map((category) => (
                            <span key={category} className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-primary-200/50 dark:border-primary-700/50 hover:from-primary-200 hover:to-primary-100 dark:hover:from-primary-800/30 dark:hover:to-primary-700/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlareCard>
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
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10">View More Projects</span>
            <ExternalLink size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 