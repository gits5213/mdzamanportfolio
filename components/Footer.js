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
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerText}>
              Full-Stack Software Engineer & SDET including DevOps Solutions with 15+ years of expertise in Software Development, Automation, DevOps, and end-to-end software and hardware Testing—Focused on Building Reliable, Scalable, and High-performing Systems.
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
              <li className={styles.footerContactItem}>
                <a 
                  href="https://gitsics.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Global I Tech Solutions (GITS)
                </a>
              </li>
              <li className={styles.footerContactItem}>
                <a 
                  href="https://gits5213.github.io/gits/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Educational Website
                </a>
              </li>
              <li className={styles.footerContactItem}>
                <a 
                  href="http://visiblehomeinspections.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Visible Home Inspections LLC
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

