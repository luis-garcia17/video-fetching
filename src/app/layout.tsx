import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Video App',
  description: 'Video app for Algotive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  )
}
