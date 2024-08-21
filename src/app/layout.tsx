import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raymond Housteau II - Portfolio',
  description: 'Web Developer, Audio Engineer, and Digital Marketer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} text-gray-200 flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-200 py-4 mt-12">
          <div className="container mx-auto px-4 text-center">
            © {new Date().getFullYear()} Raymond Housteau II. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}