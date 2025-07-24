'use client'

import { motion } from 'framer-motion'
import CardStack from './ui/CardStack'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Senior Product Manager",
      content: "Mayer's technical expertise and attention to detail made our project a huge success. His ability to translate complex requirements into elegant solutions is remarkable."
    },
    {
      id: 2,
      name: "David Chen",
      designation: "CTO, TechStart",
      content: "Working with Mayer was an absolute pleasure. His full-stack development skills and innovative approach helped us deliver our mobile app ahead of schedule."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "UX Designer",
      content: "Mayer's collaborative spirit and technical prowess make him an invaluable team member. He consistently delivers high-quality, scalable solutions."
    },
    {
      id: 4,
      name: "Michael Thompson",
      designation: "Startup Founder",
      content: "Mayer transformed our vision into reality with his exceptional development skills. His work ethic and problem-solving abilities are outstanding."
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
    <section id="testimonials" className="section-padding">
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
            What People Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Testimonials from colleagues and clients I've had the pleasure to work with
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <CardStack items={testimonials} />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 