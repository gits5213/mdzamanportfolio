import Image from 'next/image'
import Link from 'next/link'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import globalPageData from '@/data/globalPageData.json'
import resumePageData from '@/data/resumePage.json'
import { getImagePath } from '@/app/utils/imagePath'
import { getAssetPath } from '@/app/utils/pathUtils'
import styles from '@/styles/pages/resume.module.css'

export default function Resume() {
  const { content, contact, links } = globalPageData
  const { h2, schools, jobs, licensesCertifications } = resumePageData

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeContent}>
        <div className={styles.resumeGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.avatarSection}>
              <Image
                src={getImagePath("/images/Md_Zaman_Picture.png")}
                alt="Md Zaman"
                width={200}
                height={200}
                className={styles.avatarImage}
              />
            </div>

            <div>
              <h2 className={styles.sectionTitle}>{h2.objective}</h2>
              <h4 className={styles.subtitle}>{content.fullStackQaEngineer}</h4>
              <hr className={styles.divider} />
              <p className={styles.contentText}>
                {content.aboutMe}
                <br />
                <br />
                {content.techStack}
              </p>
              <hr className={styles.divider} />
            </div>

            <div className={styles.contactInfo}>
              <div>
                <h5 className={styles.contactItem}>
                  <span className={styles.contactIcon}>🏠</span> Address
                </h5>
                <p className={styles.contactText}>{contact.address}</p>
              </div>
              <div>
                <h5 className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span> Phone
                </h5>
                <p className={styles.contactText}>{contact.phoneNumber}</p>
              </div>
              <div>
                <h5 className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span> Email
                </h5>
                <p className={styles.contactText}>{contact.email}</p>
              </div>
              <div>
                <h5 className={styles.contactItem}>
                  <span className={styles.contactIcon}>🌐</span> Web
                </h5>
                <div className={styles.webLinks}>
                  <Link href={links.gitHub} className={styles.webLink}>
                    {content.educationalWebSite}
                  </Link>
                  <Link href={links.protfolio} className={styles.webLink}>
                    {content.mdPortfolio}
                  </Link>
                </div>
              </div>
            </div>

            <hr className={styles.divider} />

            <div>
              <h2 className={styles.sectionTitle}>{h2.skills}</h2>
              <Skills skill={content.techStack} progress={80} />
            </div>

            <hr className={styles.divider} />

            <div>
              <h2 className={styles.sectionTitle}>{h2.education}</h2>
              <Education
                startYear={schools.startYear1}
                endYear={schools.endYear1}
                schoolName={schools.schoolName1}
                schoolDescription={schools.schoolDescription1}
              />
              <Education
                startYear={schools.startYear2}
                endYear={schools.endYear2}
                schoolName={schools.schoolName2}
                schoolDescription={schools.schoolDescription2}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div>
              <h2 className={styles.sectionTitleWhite}>{h2.experience}</h2>
              <Experience
                startYear={jobs.jobStartYear}
                endYear={jobs.jobEndYear}
                jobName={jobs.jobName}
                jobDescription={
                  <Link href={getAssetPath("/resume/Md-Zaman-all-Edited-8-2-23.pdf")} target="_blank" className={styles.webLinkWhite}>
                    <span className="mr-2">📥</span>Download Resume
                  </Link>
                }
              />
            </div>

            <hr className={styles.dividerWhite} />

            <div>
              <h2 className={styles.sectionTitleWhite}>{h2.volunteerExperience}</h2>
              <Education
                startYear={jobs.volunteerStartYear}
                endYear={jobs.volunteerEndYear}
                schoolName={jobs.volunteerPositionName}
                schoolDescription={jobs.volunteerDepartmentName}
              />
            </div>

            <hr className={styles.dividerWhite} />

            <div>
              <h2 className={styles.sectionTitleWhite}>{licensesCertifications.licensesCertifications}</h2>
              <Education
                startYear={licensesCertifications.programCompletionYear1}
                endYear={licensesCertifications.programCompletionYear1}
                schoolName={licensesCertifications.programInstName1}
                schoolDescription={licensesCertifications.programDescription1}
              />
              <Education
                startYear={licensesCertifications.programCompletionYear0}
                endYear={licensesCertifications.programCompletionYear0}
                schoolName={licensesCertifications.programInstName0}
                schoolDescription={licensesCertifications.programDescription0}
              />
              <Education
                startYear={licensesCertifications.programCompletionYear2}
                endYear={licensesCertifications.programCompletionYear2}
                schoolName={licensesCertifications.programInstName2}
                schoolDescription={licensesCertifications.programDescription2}
              />
              <Education
                startYear={licensesCertifications.programCompletionYear3}
                endYear={licensesCertifications.programCompletionYear3}
                schoolName={licensesCertifications.programInstName3}
                schoolDescription={licensesCertifications.programDescription3}
              />
              <Education
                startYear={licensesCertifications.programCompletionYear4}
                endYear={licensesCertifications.programCompletionYear4}
                schoolName={licensesCertifications.programInstName4}
                schoolDescription={licensesCertifications.programDescription4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

