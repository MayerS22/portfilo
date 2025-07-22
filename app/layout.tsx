import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full-Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full-stack development skills, projects, and software engineering expertise.',
  keywords: ['full-stack developer', 'software engineer', 'web development', 'React', 'Node.js', 'TypeScript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: 'Full-Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development skills and projects.',
    siteName: 'Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development skills and projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 