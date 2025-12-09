import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getFaviconPath } from './utils/faviconPath'

const faviconPath = getFaviconPath()

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
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

