import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mayer Soliman - Full-Stack Developer Portfolio',
  description: 'Professional Full-Stack Developer specializing in React, Node.js, and modern web technologies. View my projects and get in touch for collaboration opportunities.',
  keywords: ['Mayer Soliman', 'Full-Stack Developer', 'React Developer', 'Node.js Developer', 'Web Development', 'Software Engineer', 'Egypt'],
  authors: [{ name: 'Mayer Soliman' }],
  creator: 'Mayer Soliman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayersoliman.dev',
    title: 'Mayer Soliman - Full-Stack Developer',
    description: 'Professional Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Mayer Soliman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayer Soliman - Full-Stack Developer',
    description: 'Professional Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
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
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
} 