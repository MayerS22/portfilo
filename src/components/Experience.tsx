'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Award, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'QueenSoft',
      location: 'Egypt',
      period: 'Jan. 2025 – Present',
      description: 'Full Stack Developer working on modern web applications and mobile solutions.',
      technologies: ['React', 'Node.js', 'Flutter', 'Firebase', 'TypeScript'],
      type: 'work'
    },
    {
      title: 'Assistant',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Aug. 2023 – Present',
      description: 'Assistant for the manager of the foundation. Making reports, organizing meetings, and events.',
      technologies: ['Microsoft Office', 'Data Entry', 'Report Generation', 'Event Management'],
      type: 'work'
    },
    {
      title: 'HR Team Leader (Volunteer)',
      company: 'Microsoft Tech Club at Ain Shams University (MSP)',
      location: 'Egypt',
      period: 'Oct 2022 – Oct 2023',
      description: 'Volunteering job leading HR activities and team management.',
      technologies: ['Leadership', 'Team Management', 'Event Planning', 'Microsoft Technologies'],
      type: 'work'
    },
    {
      title: 'Data Entry',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Sept 2022 – Feb 2023',
      description: 'Creating a database for the committee using Microsoft Access.',
      technologies: ['Microsoft Access', 'Database Design', 'Data Entry', 'SQL'],
      type: 'work'
    }
  ]

  const education = [
    {
      title: 'Bachelors of Computer and Information Science',
      institution: 'Ain Shams University',
      location: 'Egypt',
      period: 'Sept 2021 - July 2025',
      description: 'GPA: 3.005 - Currently pursuing degree in Computer and Information Science.',
      type: 'education'
    }
  ]

  const certifications = [
    {
      title: 'Data Engineering Training',
      issuer: 'Potenia Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Comprehensive training in data engineering concepts and practices.'
    },
    {
      title: 'Flutter Training',
      issuer: 'Support Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Mobile app development training using Flutter framework.'
    },
    {
      title: 'Software Engineering Training',
      issuer: 'ALX',
      date: 'Feb. 2023 – Apr. 2023',
      description: 'Intensive software engineering program covering modern development practices.'
    },
    {
      title: 'Android Internship',
      issuer: 'Banque Misr',
      date: 'Aug. 2024 – Sept. 2024',
      description: 'Professional internship in Android development and mobile banking applications.'
    },
    {
      title: 'Freelancer\'s Success Toolkit',
      issuer: 'E-Youth | ITIDA',
      date: 'Mar. 2025',
      description: 'Training program for freelancing success and business development.'
    },
    {
      title: 'Flutter Course',
      issuer: 'Udemy',
      date: 'Sept. 2023 – Jan. 2024, 53 Hours',
      description: 'Comprehensive Flutter development course covering mobile app development.'
    },
    {
      title: 'Python 3 Ultimate Guide',
      issuer: 'Udemy',
      date: 'July. 2023 – Sept. 2023, 13 Hours',
      description: 'Complete Python programming course covering fundamentals and advanced concepts.'
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
            className="text-4xl font-bold mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and academic background
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex items-center mb-8">
              <Briefcase className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 relative"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <Building size={16} className="mr-1" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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
                <h3 className="text-2xl font-bold">Education</h3>
              </motion.div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-6"
                  >
                    <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                      <Building size={16} className="mr-1" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <Award className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold">Certifications & Training</h3>
              </motion.div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
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