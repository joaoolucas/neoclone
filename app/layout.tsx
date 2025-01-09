import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neonix AI',
  description: 'Experience the future with Neonix AI - Cyberpunk-inspired artificial intelligence',
  openGraph: {
    title: 'Neonix AI',
    description: 'Experience the future with Neonix AI - Cyberpunk-inspired artificial intelligence',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neonix AI',
    description: 'Cyberpunk meets AI in Neonix',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black antialiased`}>{children}</body>
    </html>
  )
}

