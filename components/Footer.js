import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'
import styles from '@/styles/components/footer.module.css'

export default function Footer() {
  const { links, contact } = globalPageData

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: 'https://www.facebook.com/globalitechsol', icon: FaFacebook, label: 'Facebook' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <ul className={styles.footerContact}>
              <li className={styles.footerContactItem}>
                <FaMapMarkerAlt className={styles.footerIcon} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=202nd+Street+%26+Hillside+Ave+Cross+Street,+Hollis,+NY+11423" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  202nd Street & Hillside Ave Cross Street, Hollis, NY-11423
                </a>
              </li>
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
            
            <h3 className={styles.footerTitle} style={{ marginTop: '2rem' }}>Follow Me</h3>
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

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/experience" className={styles.footerLink}>Experience</Link>
              </li>
              <li>
                <Link href="/skills" className={styles.footerLink}>Skills</Link>
              </li>
              <li>
                <Link href="/projects" className={styles.footerLink}>Projects</Link>
              </li>
              <li>
                <Link href="/training" className={styles.footerLink}>Training</Link>
              </li>
              <li>
                <Link href="/community" className={styles.footerLink}>Community</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Legal</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use" className={styles.footerLink}>Terms of Use</Link>
              </li>
              <li>
                <Link href="/copyright-notice" className={styles.footerLink}>Copyright Notice</Link>
              </li>
              <li>
                <Link href="/disclaimer" className={styles.footerLink}>Disclaimer</Link>
              </li>
              <li>
                <Link href="/accessibility-statement" className={styles.footerLink}>Accessibility Statement</Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Projects</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a 
                  href="https://gitsics.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Global I Tech Solutions Inc.
                </a>
              </li>
              <li>
                <a 
                  href="https://gits5213.github.io/gits/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Educational Training Center
                </a>
              </li>
              <li>
                <a 
                  href="https://gits5213.github.io/qrcode/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  QR Code Generate
                </a>
              </li>
              <li>
                <a 
                  href="https://lisufoundationbd.org/en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  LiSu Foundation
                </a>
              </li>
              <li>
                <a 
                  href="https://gitsbd.github.io/mumadrasaorphanagebd/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Madinatul Uloom Madrasa & Orphanage
                </a>
              </li>
              <li>
                <a 
                  href="https://visiblehomeinspections.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Visible Home Inspections LLC
                </a>
              </li>
            </ul>
          </div>

          {/* Projects-1 */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Projects-1</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a 
                  href="https://bmbusa.us/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Brihottor Mymensinghbashi USA Inc.
                </a>
              </li>
              <li>
                <a 
                  href="https://gits5213.github.io/hjff-website/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Hollis Jamaica F&F
                </a>
              </li>
              <li>
                <a 
                  href="https://mhossainusa.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Mosarraf Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="https://gits5213.github.io/shazzad-hossain-bio-data/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Shazzad Bio-Data
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} MD Shahnewaz Zaman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

