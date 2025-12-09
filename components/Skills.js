import styles from '@/styles/components/common.module.css'

export default function Skills({ skill, progress }) {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsRow}>
        <span className={styles.skillsLabel}>
          {skill}
        </span>
        <div className={styles.skillsProgressBar}>
          <div
            className={styles.skillsProgressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles.skillsPercentage}>
          {progress}%
        </span>
      </div>
    </div>
  )
}

