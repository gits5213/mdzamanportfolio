import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: "Md's Portfolio",
  description: "Full Stack Quality Assurance Engineer Portfolio",
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

