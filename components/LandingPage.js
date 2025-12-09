import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'
import { getImagePath } from '@/app/utils/imagePath'
import styles from '@/styles/pages/landing.module.css'

export default function LandingPage() {
  const { links, content } = globalPageData

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  return (
    <div className={`gradient-landing ${styles.landingContainer}`}>
      <div className={styles.landingContent}>
        <div className={styles.avatarContainer}>
          <Image
            src={getImagePath("/images/Md_Zaman_Picture.png")}
            alt="Md Zaman"
            width={200}
            height={200}
            className={`${styles.avatarImage} ${styles.avatarImage}`}
            priority
          />
        </div>
        
        <div className={styles.contentCard}>
          <h1 className={styles.title}>
            {content.fullStackQaEngineer}
          </h1>
          
          <div className={styles.contentText}>
            <p>{content.aboutMe}</p>
            
            <div className={styles.highlightsSection}>
              <p className={styles.highlightsTitle}>Key Highlights:</p>
              <ul className={styles.highlightsList}>
                <li className={styles.highlightItem}>
                  <span className={styles.highlightBullet}>☞</span>
                  <span>Proven track record in mentoring QA Analysts and Technical Support Engineers.</span>
                </li>
                <li className={styles.highlightItem}>
                  <span className={styles.highlightBullet}>☞</span>
                  <span>Extensive experience with Agile/Scrum, SAFe methodologies, Shift-left, & SDLC/STLC processes.</span>
                </li>
                <li className={styles.highlightItem}>
                  <span className={styles.highlightBullet}>☞</span>
                  <span>Expert in full-stack automation, technical documentation, and hands-on coding.</span>
                </li>
                <li className={styles.highlightItem}>
                  <span className={styles.highlightBullet}>☞</span>
                  <span>Adept at delivering presentations, ensuring compliance with public law, and maintaining relevance to business needs.</span>
                </li>
                <li className={styles.highlightItem}>
                  <span className={styles.highlightBullet}>☞</span>
                  <span>Strong analytical, communication, problem-solving skills, and ensuring attention to detail & delivering exceptional customer service.</span>
                </li>
              </ul>
            </div>
            
            <p className={styles.callToAction}>
              Let&apos;s connect and discuss how my expertise can contribute to the success of your projects! 🚀
            </p>
          </div>

          <div className={styles.socialLinksContainer}>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${styles.socialIcon}`}
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

