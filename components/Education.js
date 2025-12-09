import styles from '@/styles/components/common.module.css'

export default function Education({ startYear, endYear, schoolName, schoolDescription }) {
  return (
    <div className={styles.educationItem}>
      <div className={styles.educationYear}>
        <p className={styles.educationYearText}>
          {startYear}-{endYear}
        </p>
      </div>
      <div className={styles.educationContent}>
        <h4 className={styles.educationTitle}>{schoolName}</h4>
        <p className={styles.educationDescription}>{schoolDescription}</p>
      </div>
    </div>
  )
}

