import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'
import { getImagePath } from '@/app/utils/imagePath'
import styles from '@/styles/pages/contact.module.css'

export default function Contact() {
  const { contact, links, content } = globalPageData

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>{contact.name}</h2>
            <Image
              src={getImagePath("/images/Md_Zaman_Picture.png")}
              alt="Md Zaman"
              width={200}
              height={200}
              className={styles.avatarImage}
            />
            <p className={styles.bioText}>
              Hi there! You&apos;re an open-source tech enthusiast who spends most of your time coding and diving into tutorials on YouTube and Udemy. 
              Your dedication to continuous learning and hands-on practice shapes your expertise, making you both knowledgeable and adaptable in the fast-evolving tech world. 
              During the weekend I have been coaching and mentoring three (3) programs <br /> - CodeForKids <br /> - Full Stack SQA Engineering <br /> - Frontend Web Development. <br />
              A motivated and dynamic individual with in-depth knowledge of programming languages, software quality assurance (SQA) engineering, 
              and a range of development tools and APIs. Skilled in automation frameworks, coding standards, and API automation, 
              they possess expertise in full-stack QA practices and are passionate about enhancing end-to-end software testing processes.
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <h2 className={styles.sectionTitle}>{contact.contactMe}</h2>
            <hr className={styles.divider} />

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span className={styles.contactText}>{contact.phoneNumber}</span>
              </div>
              
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                  {contact.email}
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <FaGlobe className={styles.contactIcon} />
                <Link href={links.personalWebsite} className={styles.contactLink}>
                  {content.educationalWebSite}
                </Link>
              </div>
              
              <div className={styles.contactItem}>
                <FaGlobe className={styles.contactIcon} />
                <Link href={links.protfolio} className={styles.contactLink}>
                  {content.mdPortfolio}
                </Link>
              </div>
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
                    className={styles.socialIcon}
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
    </div>
  )
}

