'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/MayerS22', 
      icon: Github,
      color: 'hover:text-gray-300'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/mayer-frieg-7a0368226/', 
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Email', 
      href: 'mailto:mayerfrieg@outlook.com', 
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg' 
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text cursor-pointer"
          >
            Mayer.dev
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-sm xl:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800/50 ${social.color}`}
                  title={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/documents/Mayer Soliman.pdf';
                link.download = 'Mayer Soliman.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download size={16} />
              <span className="hidden xl:inline">Resume</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800/50"
            aria-label="Toggle menu"
          >
            {mounted && (isMenuOpen ? <X size={24} /> : <Menu size={24} />)}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-700/50"
            >
              <div className="py-6 space-y-6">
                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10 }}
                      className="block text-lg text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-gray-800/50"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="space-y-4 pt-4 border-t border-gray-700/50">
                  {/* Social Links */}
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors duration-200 ${social.color}`}
                        title={social.name}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>

                  {/* Resume Download */}
                  <motion.button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/documents/Mayer Soliman.pdf';
                      link.download = 'Mayer Soliman.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg"
                  >
                    <Download size={18} />
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 