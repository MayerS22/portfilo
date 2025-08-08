'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SplashPage from '@/components/SplashPage'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ThemeProvider from '@/components/ThemeProvider'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashPage onComplete={handleSplashComplete} />
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen relative">
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  )
} 