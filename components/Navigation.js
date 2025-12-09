'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from '@/styles/components/navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`gradient-header ${styles.nav}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            Md&apos;s Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

