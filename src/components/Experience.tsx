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
      period: 'Jan. 2025 – Present',
      description: 'Full Stack Developer working on modern web applications and mobile solutions.',
      technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'TypeScript'],
      type: 'work',
      image: '/images/QueenSoft.jpg',
      imageAlt: 'QueenSoft Logo'
    },
    {
      title: 'Assistant',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Aug. 2023 – Present',
      description: 'Assistant for the manager of the foundation. Making reports, organizing meetings, and events.',
      technologies: ['Microsoft Office', 'Data Entry', 'Report Generation', 'Event Management'],
      type: 'work',
      image: '/images/CMF.jpg',
      imageAlt: 'CMF Logo'
    },
    {
      title: 'HR Team Leader (Volunteer)',
      company: 'Microsoft Tech Club at Ain Shams University (MSP)',
      location: 'Egypt',
      period: 'Oct 2022 – Oct 2023',
      description: 'Volunteering job leading HR activities and team management.',
      technologies: ['Leadership', 'Team Management', 'Event Planning', 'Microsoft Technologies'],
      type: 'work',
      image: '/images/MSP.jpg',
      imageAlt: 'MSP Logo'
    },
    {
      title: 'Data Entry',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Sept 2022 – Feb 2023',
      description: 'Creating a database for the committee using Microsoft Access.',
      technologies: ['Microsoft Access', 'Database Design', 'Data Entry', 'SQL'],
      type: 'work',
      image: '/images/CMF.jpg',
      imageAlt: 'CMF Logo'
    }
  ]

  const education = [
    {
      title: 'Bachelors of Computer and Information Science',
      institution: 'Ain Shams University',
      location: 'Egypt',
      period: 'Sept 2021 - July 2025',
      description: 'GPA: 3.005 - Currently pursuing degree in Computer and Information Science.',
      type: 'education',
      image: '/images/CS.jpg',
      imageAlt: 'Ain Shams University Logo'
    }
  ]

  const certifications = [
    {
      title: 'Freelancer\'s Success Toolkit',
      issuer: 'E-Youth | ITIDA',
      date: 'Mar. 2025',
      description: 'Training program for freelancing success and business development.',
      image: '/images/ITIDA.jpg',
      imageAlt: 'E-Youth Logo'
    },
    {
      title: 'Android Internship',
      issuer: 'Banque Misr',
      date: 'Aug. 2024 – Sept. 2024',
      description: 'Professional internship in Android development and mobile banking applications.',
      image: '/images/BM.jpg',
      imageAlt: 'Banque Misr Logo'
    },
    
    {
      title: 'Data Engineering Training',
      issuer: 'Potenia Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Comprehensive training in data engineering concepts and practices.',
      image: '/images/POTENTIA.jpg',
      imageAlt: 'Potenia Logo'
    },
    {
      title: 'Flutter Training',
      issuer: 'Support Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Mobile app development training using Flutter framework.',
      image: '/images/Support.jpg',
      imageAlt: 'Support Logo'
    },
    {
      title: 'Software Engineering Training',
      issuer: 'ALX',
      date: 'Feb. 2023 – Apr. 2023',
      description: 'Intensive software engineering program covering modern development practices.',
      image: '/images/ALX.jpg',
      imageAlt: 'ALX Logo'
    }
  ]

  const courses = [
    {
      title: 'Next.js: The Complete Developer\'s Guide',
      issuer: 'Udemy',
      date: 'jun 2025 – July 2025, 20 Hours',
      description: 'Learn how to build a web application from scratch using Next.js, a powerful React framework.',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
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
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and academic background
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex items-center mb-8">
              <Briefcase className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold">Work Experience</h3>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/30 dark:to-gray-600/30 rounded-2xl"></div>
                        
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
                        <Building className="relative z-10 w-8 h-8 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" style={{ display: exp.image ? 'none' : 'flex' }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <Building size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <MapPin size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <Calendar size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="mb-12">
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <GraduationCap className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
              </motion.div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Institution Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/30 dark:to-gray-600/30 rounded-2xl"></div>
                          
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
                          <GraduationCap className="relative z-10 w-8 h-8 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" style={{ display: edu.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {edu.title}
                        </h4>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <Building size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <MapPin size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{edu.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                          <Calendar size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{edu.period}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <Award className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold">Training </h3>
              </motion.div>

              <div className="space-y-4 mb-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-4 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Certification Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/30 dark:to-gray-600/30 rounded-xl"></div>
                          
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
                          <Award className="relative z-10 w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" style={{ display: cert.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                            {cert.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                          {cert.issuer}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <Award className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold">Courses & Certifications</h3>
              </motion.div>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-4 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Course Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/30 dark:to-gray-600/30 rounded-xl"></div>
                          
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
                          <Award className="relative z-10 w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" style={{ display: course.image ? 'none' : 'flex' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {course.title}
                          </h4>
                          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                            {course.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                          {course.issuer}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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