import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'
import styles from '@/styles/components/footer.module.css'

export default function Footer() {
  const { links, contact } = globalPageData

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerText}>
              Full Stack Quality Assurance Engineer with 15+ years of experience in software and hardware testing.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/resume" className={styles.footerLink}>Resume</Link>
              </li>
              <li>
                <Link href="/projects" className={styles.footerLink}>Projects</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <ul className={styles.footerContact}>
              <li className={styles.footerContactItem}>
                <FaEnvelope className={styles.footerIcon} />
                <a href={`mailto:${contact.email}`} className={styles.footerLink}>
                  {contact.email}
                </a>
              </li>
              <li className={styles.footerContactItem}>
                <FaPhone className={styles.footerIcon} />
                <a href={`tel:${contact.phoneNumber}`} className={styles.footerLink}>
                  {contact.phoneNumber}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} MD Shahnewaz Zaman. All rights reserved.
          </p>
          <p className={styles.footerNote}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

