import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getFaviconPath } from './utils/faviconPath'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const faviconPath = getFaviconPath()

// Modern 2025 Font Stack
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false,
})

export const metadata = {
  title: "MD Shahnewaz Zaman | Full Stack QA Engineer Portfolio",
  description: "Experienced Full Stack Quality Assurance Engineer with 15+ years of expertise in software and hardware testing. Specializing in automation frameworks, Agile/Scrum methodologies, and full-stack QA practices.",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

