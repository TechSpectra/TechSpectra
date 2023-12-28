import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechSpectra',
  description: 'Welcome to TechSpectra, where we are 🔥 Igniting AI Innovation! 🤖 Our mission is to develop open source AI solutions that propel us into a smarter tomorrow.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
