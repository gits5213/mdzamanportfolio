import Image from 'next/image'
import Link from 'next/link'
import projectData from '@/data/projectGlobalPage.json'
import styles from '@/styles/components/projectCard.module.css'

export default function ProjectCard({ title, imageUrl, children }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imageContainer} style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className={styles.imageOverlay}>
            <h3 className={styles.imageTitle}>
              {title}
            </h3>
          </div>
        </div>
        
        <div className={styles.cardBody}>
          <div className={styles.cardContent}>
            {children}
          </div>
          
          <div className={styles.cardActions}>
            <Link
              href={projectData.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.buttonGitHub}`}
            >
              GitHub
            </Link>
            <Link
              href={projectData.bitBucket}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.buttonBitBucket}`}
            >
              BitBucket
            </Link>
            <Link
              href={projectData.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.buttonDemo}`}
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

