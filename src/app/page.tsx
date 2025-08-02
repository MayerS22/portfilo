import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ThemeProvider from '@/components/ThemeProvider'

export default function Home() {
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