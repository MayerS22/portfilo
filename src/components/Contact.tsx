'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Download, User, Calendar, Clock, Globe, Shield, Zap } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mayerfrieg@outlook.com',
      link: 'mailto:mayerfrieg@outlook.com',
      color: 'text-red-400',
      bgColor: 'from-red-900/20 to-pink-900/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+201288244283',
      link: 'tel:+201288244283',
      color: 'text-green-400',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Egypt',
      link: '#',
      color: 'text-blue-400',
      bgColor: 'from-blue-900/20 to-cyan-900/20'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MayerS22',
      color: 'text-gray-400',
      bgColor: 'from-gray-900/20 to-gray-800/20',
      hoverColor: 'hover:text-gray-300',
      description: 'View my projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mayer-frieg-7a0368226/',
      color: 'text-blue-400',
      bgColor: 'from-blue-900/20 to-blue-800/20',
      hoverColor: 'hover:text-blue-300',
      description: 'Connect professionally'
    }
  ]

  const quickActions = [
    {
      icon: Download,
      title: 'Download Resume',
      description: 'Get my latest CV',
      action: () => {
        const link = document.createElement('a');
        link.href = '/documents/Mayer Soliman.pdf';
        link.download = 'Mayer Soliman.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      color: 'text-purple-400',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-700/50 hover:border-purple-600/50'
    },
    {
      icon: Mail,
      title: 'Send Email',
      description: 'Start a conversation',
      action: () => window.open('mailto:mayerfrieg@outlook.com'),
      color: 'text-blue-400',
      bgColor: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-700/50 hover:border-blue-600/50'
    }
  ]

  const availabilityInfo = [
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      color: 'text-green-400'
    },
    {
      icon: Calendar,
      title: 'Availability',
      value: 'Open to opportunities',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Timezone',
      value: 'GMT+2 (Egypt)',
      color: 'text-purple-400'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="text-blue-400 w-8 h-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <Send className="text-purple-400 w-8 h-8" />
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-6 sm:px-0 leading-relaxed"
          >
            I'm always interested in new opportunities and exciting projects. Let's work together to bring your ideas to life!
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Column - Contact Information & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <User className="text-blue-400" size={24} />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden block p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="relative z-10 flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`${info.color} group-hover:text-white transition-colors duration-300`} size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-base group-hover:text-gray-200 transition-colors duration-300">
                            {info.title}
                          </p>
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <Globe className="text-green-400" size={24} />
                  Connect With Me
                </h3>
                <div className="space-y-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden block p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="relative z-10 flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-br ${social.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className={`${social.color} group-hover:text-white transition-colors duration-300`} size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-base group-hover:text-gray-200 transition-colors duration-300">
                            {social.name}
                          </p>
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Quick Actions & Availability */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Actions */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <Zap className="text-purple-400" size={24} />
                  Quick Actions
                </h3>
                <div className="space-y-6">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.title}
                      onClick={action.action}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative overflow-hidden w-full p-6 bg-gradient-to-br ${action.bgColor} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border ${action.borderColor} transition-all duration-300`}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-br ${action.bgColor.replace('/20', '/30')} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className={`${action.color} group-hover:text-white transition-colors duration-300`} size={24} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-white text-base">
                            {action.title}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Availability Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <Shield className="text-orange-400" size={24} />
                  Availability
                </h3>
                <div className="space-y-4">
                  {availabilityInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
                    >
                      <div className={`w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center`}>
                        <info.icon className={info.color} size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{info.title}</p>
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="text-blue-400 w-6 h-6" />
                <h4 className="text-xl font-semibold text-white">Let's Work Together</h4>
                <Send className="text-purple-400 w-6 h-6" />
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to say hello, I'd love to hear from you. I'm always open to 
                new challenges and exciting collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 