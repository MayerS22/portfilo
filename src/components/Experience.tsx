'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Award, Briefcase } from 'lucide-react'
import Image from 'next/image'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'QueenSoft',
      location: 'Egypt',
      period: 'July. 2025 – Present',
      description: 'Full Stack Developer building scalable web applications with modern technologies.',
      technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'TypeScript', 'React', 'Node.js', 'REST APIs'],
      type: 'work',
      image: '/images/QueenSoft.jpg',
      imageAlt: 'QueenSoft Logo'
    },
    {
      title: 'Administrative Assistant',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Aug. 2023 – Present',
      description: 'Supporting foundation operations through data management and event coordination.',
      technologies: ['Microsoft Office', 'Data Entry', 'Report Generation', 'Event Management', 'Process Optimization'],
      type: 'work',
      image: '/images/CMF.jpg',
      imageAlt: 'CMF Logo'
    },
    {
      title: 'Microsoft Student Partner (MSP)',
      company: 'Microsoft Tech Club at Ain Shams University',
      location: 'Egypt',
      period: 'Oct 2022 – Oct 2023',
      description: 'Led technical workshops and mentored students in Microsoft technologies. Organized hackathons and managed team of 15+ members.',
      technologies: ['Microsoft Azure', 'Power Platform', 'Power BI', 'GitHub', 'Leadership', 'Event Management', 'Student Mentoring', 'Technical Workshops'],
      type: 'work',
      image: '/images/MSP.jpg',
      imageAlt: 'MSP Logo'
    },
    {
      title: 'Database Administrator',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Sept 2022 – Feb 2023',
      description: 'Designed and implemented database system for committee management using Microsoft Access.',
      technologies: ['Microsoft Access', 'Database Design', 'SQL', 'Data Modeling', 'Process Automation'],
      type: 'work',
      image: '/images/CMF.jpg',
      imageAlt: 'CMF Logo'
    }
  ]

  const education = [
    {
      title: 'Bachelor of Computer and Information Science',
      institution: 'Ain Shams University',
      location: 'Egypt',
      period: 'Sept 2021 - July 2025',
      description: 'GPA: 3.005 - Software engineering, database systems, and modern development practices.',
      type: 'education',
      image: '/images/CS.jpg',
      imageAlt: 'Ain Shams University Logo'
    }
  ]

  const certifications = [
   
    {
      title: 'Android Internship',
      issuer: 'Banque Misr',
      date: 'Aug. 2024 – Sept. 2024',
      description: 'Professional internship in Android development.',
      image: '/images/BM.jpg',
      imageAlt: 'Banque Misr Logo'
    },
    
    {
      title: 'Data Engineering Training',
      issuer: 'Potenia Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Training in data engineering concepts.',
      image: '/images/POTENTIA.jpg',
      imageAlt: 'Potenia Logo'
    },
    {
      title: 'Flutter Training',
      issuer: 'Support Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Mobile app development with Flutter.',
      image: '/images/Support.jpg',
      imageAlt: 'Support Logo'
    },
    {
      title: 'Software Engineering Training',
      issuer: 'ALX',
      date: 'Feb. 2023 – Apr. 2023',
      description: 'Intensive software engineering program.',
      image: '/images/ALX.jpg',
      imageAlt: 'ALX Logo'
    }
  ]

  const courses = [

    {
      title: 'Nest.js: The Complete Developer\'s Guide',
      issuer: 'Udemy',
      date: 'jun 2025 – July 2025, 20 Hours',
      description: 'Learn how to build a web application from scratch using Nest.js, a powerful Node.js framework.',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
    },
    {
      title: 'Freelancer\'s Success Toolkit',
      issuer: 'E-Youth | ITIDA',
      date: 'Mar. 2025',
      description: 'Training program for freelancing success.',
      image: '/images/ITIDA.jpg',
      imageAlt: 'E-Youth Logo'
    },
    {
      title: 'Flutter Course',
      issuer: 'Udemy',
      date: 'Sept. 2023 – Jan. 2024, 53 Hours',
      description: 'Comprehensive Flutter development course covering mobile app development.',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
    },
    {
      title: 'Python 3 Ultimate Guide',
      issuer: 'Udemy',
      date: 'July. 2023 – Sept. 2023, 13 Hours',
      description: 'Complete Python programming course covering fundamentals and advanced concepts.',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
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

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="mobile-heading mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mobile-text text-gray-400 max-w-2xl mx-auto px-4 sm:px-0"
          >
            My professional journey and academic background
          </motion.p>
        </motion.div>

        <div className="mobile-grid-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0">
          {/* Left Column - Education & Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
              <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8">
                <GraduationCap className="text-blue-400 mr-3 mobile-icon" />
                <h3 className="mobile-heading text-xl sm:text-2xl">Education</h3>
              </motion.div>

              <div className="mobile-spacing-compact">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card mobile-card-compact group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mobile-flex-start gap-4 sm:gap-6">
                      {/* Institution Logo */}
                      <div className="flex-shrink-0 mx-auto sm:mx-0 mb-4 sm:mb-0">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-800 to-gray-700 mobile-rounded shadow-lg border border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-600/30 mobile-rounded"></div>
                          
                          {edu.image ? (
                            <Image
                              src={edu.image}
                              alt={edu.imageAlt}
                              width={80}
                              height={80}
                              className="relative z-10 w-full h-full object-contain p-0 group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <GraduationCap className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" style={{ display: edu.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 mobile-text-center">
                        <h4 className="mobile-text font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 break-words">
                          {edu.title}
                        </h4>
                        <div className="mobile-flex-center text-gray-400 text-xs sm:text-sm mb-1">
                          <Building size={14} className="mr-2 flex-shrink-0" />
                          <span className="break-words font-medium">{edu.institution}</span>
                        </div>
                        <div className="mobile-flex-center text-gray-400 text-xs sm:text-sm mb-1">
                          <MapPin size={14} className="mr-2 flex-shrink-0" />
                          <span className="break-words">{edu.location}</span>
                        </div>
                        <div className="mobile-flex-center text-gray-400 text-xs sm:text-sm mb-3">
                          <Calendar size={14} className="mr-2 flex-shrink-0" />
                          <span className="break-words">{edu.period}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-words">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8">
                <Briefcase className="text-blue-400 mr-3 mobile-icon" />
                <h3 className="mobile-heading text-xl sm:text-2xl">Work Experience</h3>
              </motion.div>

              <div className="mobile-spacing-compact">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card mobile-card-compact relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mobile-flex-start gap-4 sm:gap-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0 mx-auto sm:mx-0 mb-4 sm:mb-0">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-800 to-gray-700 mobile-rounded shadow-lg border border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-600/30 mobile-rounded"></div>
                          
                          {exp.image ? (
                            <Image
                              src={exp.image}
                              alt={exp.imageAlt}
                              width={80}
                              height={80}
                              className="relative z-10 w-full h-full object-contain p-0 group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <Building className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" style={{ display: exp.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 mobile-text-center">
                        <div className="mb-3">
                          <h4 className="mobile-text font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 break-words">
                            {exp.title}
                          </h4>
                          <div className="mobile-flex-center text-gray-400 text-xs sm:text-sm mb-1">
                            <Building size={14} className="mr-2 flex-shrink-0" />
                            <span className="break-words font-medium">{exp.company}</span>
                          </div>
                          <div className="mobile-flex-center text-gray-400 text-xs sm:text-sm mb-1">
                            <MapPin size={14} className="mr-2 flex-shrink-0" />
                            <span className="break-words">{exp.location}</span>
                          </div>
                          <div className="mobile-flex-center text-gray-400 text-xs sm:text-sm">
                            <Calendar size={14} className="mr-2 flex-shrink-0" />
                            <span className="break-words">{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-4 leading-relaxed break-words">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-900/20 to-blue-800/20 text-blue-300 text-xs rounded-full font-medium border border-blue-700/50 hover:from-blue-800/30 hover:to-blue-700/30 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Certifications & Courses */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8">
                <Award className="text-blue-400 mr-3 mobile-icon" />
                <h3 className="mobile-heading text-xl sm:text-2xl">Training </h3>
              </motion.div>

              <div className="mobile-spacing-compact mb-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card mobile-card-compact group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mobile-flex-start gap-3 sm:gap-4">
                      {/* Certification Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-700 mobile-rounded shadow-md border border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-600/30 mobile-rounded"></div>
                          
                          {cert.image ? (
                            <Image
                              src={cert.image}
                              alt={cert.imageAlt}
                              width={56}
                              height={56}
                              className="relative z-10 w-full h-full object-contain p-0 group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <Award className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" style={{ display: cert.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 mobile-text-center">
                        <div className="mobile-flex-between mb-2">
                          <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0 mt-1 sm:mt-0 sm:ml-2">
                            {cert.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 mb-2 font-medium">
                          {cert.issuer}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Courses */}
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8">
                <Award className="text-blue-400 mr-3 mobile-icon" />
                <h3 className="mobile-heading text-xl sm:text-2xl">Courses & Certifications</h3>
              </motion.div>

              <div className="mobile-spacing-compact">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card mobile-card-compact group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mobile-flex-start gap-3 sm:gap-4">
                      {/* Course Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-700 mobile-rounded shadow-md border border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-600/30 mobile-rounded"></div>
                          
                          {course.image ? (
                            <Image
                              src={course.image}
                              alt={course.imageAlt}
                              width={56}
                              height={56}
                              className="relative z-10 w-full h-full object-contain p-0 group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <Award className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" style={{ display: course.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 mobile-text-center">
                        <div className="mobile-flex-between mb-2">
                          <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors duration-300">
                            {course.title}
                          </h4>
                          <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0 mt-1 sm:mt-0 sm:ml-2">
                            {course.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 mb-2 font-medium">
                          {course.issuer}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 