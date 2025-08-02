'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MayerS22',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mayer-frieg-7a0368226/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:mayerfrieg@outlook.com',
      color: 'hover:text-red-400'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4">
                Mayer.dev
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                Full-stack developer passionate about creating exceptional digital experiences. 
                Specializing in mobile development, web technologies, and data engineering.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center sm:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center sm:text-left">Quick Links</h4>
            <ul className="space-y-2 text-center sm:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center sm:text-left">Contact</h4>
            <div className="space-y-2 text-gray-400 text-center sm:text-left">
              <p>mayerfrieg@outlook.com</p>
              <p>+201288244283</p>
              <p>Egypt</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Mayer Soliman Hedya. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
              Made with <Heart size={16} className="mx-1 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 