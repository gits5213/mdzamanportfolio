import styles from '@/styles/components/experience.module.css'

export default function Experience({ startYear, endYear, jobName, jobDescription }) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experienceYear}>
        <p className={styles.experienceYearText}>
          {startYear}-{endYear}
        </p>
      </div>
      <div className={styles.experienceContent}>
        <h4 className={styles.experienceTitle}>{jobName}</h4>
        <div className={styles.experienceDescription}>{jobDescription}</div>
      </div>
    </div>
  )
}

