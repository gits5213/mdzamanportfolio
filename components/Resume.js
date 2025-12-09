import Image from 'next/image'
import Link from 'next/link'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import globalPageData from '@/data/globalPageData.json'
import resumePageData from '@/data/resumePage.json'
import { getImagePath } from '@/app/utils/imagePath'
import { getAssetPath } from '@/app/utils/pathUtils'

export default function Resume() {
  const { content, contact, links } = globalPageData
  const { h2, schools, jobs, licensesCertifications } = resumePageData

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="text-center">
              <Image
                src={getImagePath("/images/Md_Zaman_Picture.png")}
                alt="Md Zaman"
                width={200}
                height={200}
                className="rounded-3xl border border-gray-300 mx-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{h2.objective}</h2>
              <h4 className="text-xl text-gray-600 mb-4">{content.fullStackQaEngineer}</h4>
              <hr className="border-t-4 border-purple-500 w-3/4 mb-4" />
              <p className="text-justify pr-4 font-mono text-gray-700 leading-relaxed">
                {content.aboutMe}
                <br />
                <br />
                {content.techStack}
              </p>
              <hr className="border-t-4 border-purple-500 w-3/4 my-4" />
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <span className="text-gray-600">🏠</span> Address
                </h5>
                <p className="text-gray-700">{contact.address}</p>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <span className="text-gray-600">📞</span> Phone
                </h5>
                <p className="text-gray-700">{contact.phoneNumber}</p>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <span className="text-gray-600">✉️</span> Email
                </h5>
                <p className="text-gray-700">{contact.email}</p>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <span className="text-gray-600">🌐</span> Web
                </h5>
                <div className="space-y-1">
                  <Link href={links.gitHub} className="text-green-600 hover:text-green-800 block">
                    {content.educationalWebSite}
                  </Link>
                  <Link href={links.protfolio} className="text-green-600 hover:text-green-800 block">
                    {content.mdPortfolio}
                  </Link>
                </div>
              </div>
            </div>

            <hr className="border-t-4 border-purple-500 w-3/4" />

            <div>
              <h2 className="text-3xl font-bold mb-4">{h2.skills}</h2>
              <Skills skill={content.techStack} progress={80} />
            </div>

            <hr className="border-t-4 border-purple-500 w-3/4" />

            <div>
              <h2 className="text-3xl font-bold mb-4">{h2.education}</h2>
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
          <div className="bg-gray-800 text-white p-8 rounded-lg space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{h2.experience}</h2>
              <Experience
                startYear={jobs.jobStartYear}
                endYear={jobs.jobEndYear}
                jobName={jobs.jobName}
                jobDescription={
                  <Link href={getAssetPath("/resume/Md-Zaman-all-Edited-8-2-23.pdf")} target="_blank" className="text-blue-400 hover:text-blue-300">
                    <span className="mr-2">📥</span>Download Resume
                  </Link>
                }
              />
            </div>

            <hr className="border-t-4 border-purple-500 w-3/4" />

            <div>
              <h2 className="text-3xl font-bold mb-4">{h2.volunteerExperience}</h2>
              <Education
                startYear={jobs.volunteerStartYear}
                endYear={jobs.volunteerEndYear}
                schoolName={jobs.volunteerPositionName}
                schoolDescription={jobs.volunteerDepartmentName}
              />
            </div>

            <hr className="border-t-4 border-purple-500 w-3/4" />

            <div>
              <h2 className="text-3xl font-bold mb-4">{licensesCertifications.licensesCertifications}</h2>
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

