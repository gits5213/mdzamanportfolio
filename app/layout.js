import './globals.css'
import Navigation from '@/components/Navigation'
import { getFaviconPath } from './utils/faviconPath'

const faviconPath = getFaviconPath()

export const metadata = {
  title: "Md's Portfolio",
  description: "Full Stack Quality Assurance Engineer Portfolio",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

