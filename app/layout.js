import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getFaviconPath } from './utils/faviconPath'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

const faviconPath = getFaviconPath()

// Modern DevSecOps + QA Font Stack
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const metadata = {
  title: "MD Shahnewaz Zaman | Software Engineer | Test Architect | SDET | Tech Lead",
  description: "Software Engineer | Test Architect | SDET | Tech Lead | Full-Stack Quality Assurance Engineer with 15+ years of expertise in software and hardware testing. Specializing in automation frameworks, Agile/Scrum methodologies, and full-stack QA practices.",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9112023534705295"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-100">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

