'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mayerfrieg@outlook.com',
      link: 'mailto:mayerfrieg@outlook.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+201288244283',
      link: 'tel:+201288244283'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Egypt',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MayerS22'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mayer-frieg-7a0368226/'
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
    <section id="contact" className="section-padding">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0"
          >
            I'm always interested in new opportunities and exciting projects. Let's work together!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 sm:p-6 bg-gray-800 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md border border-gray-700 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <info.icon className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">{info.title}</p>
                      <p className="text-gray-400 text-sm sm:text-base">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">Connect With Me</h3>
              <div className="space-y-4 sm:space-y-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 sm:p-6 bg-gray-800 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md border border-gray-700 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <social.icon className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">{social.name}</p>
                      <p className="text-gray-400 text-sm sm:text-base">Follow my work</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 