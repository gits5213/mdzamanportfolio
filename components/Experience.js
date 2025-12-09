import styles from '@/styles/components/common.module.css'

export default function Experience({ startYear, endYear, jobName, jobDescription }) {
  return (
    <div className={styles.educationItem}>
      <div className={styles.educationYear}>
        <p className={styles.educationYearTextWhite}>
          {startYear}-{endYear}
        </p>
      </div>
      <div className={styles.educationContent}>
        <h4 className={styles.educationTitleWhite}>{jobName}</h4>
        <p className={styles.educationDescriptionWhite}>{jobDescription}</p>
      </div>
    </div>
  )
}

