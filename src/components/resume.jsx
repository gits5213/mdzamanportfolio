import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skils";
import profilePic from '../resourses/images/Md_Zaman_Picture.png';
import ResumePDF from '../resourses/resume/Md-Zaman-all-Edited-8-2-23.pdf';
import resumePageData from '../utilities/data/resumePage.json';
import gpd from '../utilities/data/globalPageData.json';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div style={{ textAlign: "center" }}>
              <img
                src={profilePic}
                alt="avatar"
                style={{
                  height: "200px",
                  borderRadius: "40px",
                  border: "1px solid lightgrey"
                }}
              /> 
            </div>

            <h2 style={{ paddingTop: "" }}>{resumePageData.h2.objective}</h2>
            <h4 style={{ color: "grey" }}>{gpd.content.fullStackQaEngineer}</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
            <p style={{ textAlign: "justify", paddingRight: "10px", fontFamily:"Monaco"}}>
              {gpd.content.aboutMe}
              <br/>
              <br/>
              {gpd.content.techStack}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
            <h5>
              <i className="fa fa-home" aria-hidden="true" /> Address
            </h5>
            <p>{gpd.contact.address}</p>
            <h5>
              <i className="fa fa-phone" aria-hidden="true" /> Phone
            </h5>
            <p>{gpd.contact.phoneNumber}</p>
            <h5>
              <i className="fa fa-phone" aria-hidden="true" /> Email
            </h5>
            <p>{gpd.contact.email}</p>
            <h5>
              <i className="fa fa-internet-explorer" aria-hidden="true" /> Web
            </h5>
            <a 
              style={{ textDecoration: "none", color: 'green' }} 
              href={gpd.links.gitHub}>
              {gpd.content.educationalWebSite}
            </a>
            <br/>
            <a 
              style={{ textDecoration: "none", color: 'green' }} 
              href={gpd.links.protfolio}>
              {gpd.content.mdPortfolio}
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
            <h2>{resumePageData.h2.skills}</h2>
            <Skills skill={gpd.content.techStack} progress={80}/>
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />

            <h2>{resumePageData.h2.education}</h2>
            <Education
              startYear={resumePageData.schools.startYear1}
              endYear={resumePageData.schools.endYear1}
              schoolName={resumePageData.schools.schoolName1}
              schoolDescription={resumePageData.schools.schoolDescription1}
            />
            <Education
              startYear={resumePageData.schools.startYear2}
              endYear={resumePageData.schools.endYear2}
              schoolName={resumePageData.schools.schoolName2}
              schoolDescription={resumePageData.schools.schoolDescription2}
            />
          </Cell>
          <Cell col={6} className="resume-right-col">
            <h2>{resumePageData.h2.experience}</h2>
            <Experience
              startYear={resumePageData.jobs.jobStartYear}
              endYear={resumePageData.jobs.jobEndYear}
              jobName={resumePageData.jobs.jobName}
              jobDescription={
                <a href={ResumePDF}>
                  <i className="fa fa-download" aria-hidden="true" />
                </a> 
              }
            />
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
            <h2>{resumePageData.h2.volunteerExperience}</h2>
            <Education
              startYear={resumePageData.jobs.volunteerStartYear}
              endYear={resumePageData.jobs.volunteerEndYear}
              schoolName={resumePageData.jobs.volunteerPositionName}
              schoolDescription={resumePageData.jobs.volunteerDepartmentName}
            />
            
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
            <h2>{resumePageData.licensesCertifications.licensesCertifications}</h2>
            <Education
              startYear={resumePageData.licensesCertifications.programCompletionYear1}
              endYear={resumePageData.licensesCertifications.programCompletionYear1}
              schoolName={resumePageData.licensesCertifications.programInstName1}
              schoolDescription={resumePageData.licensesCertifications.programDescription1}
            />
            <Education
              startYear={resumePageData.licensesCertifications.programCompletionYear0}
              endYear={resumePageData.licensesCertifications.programCompletionYear0}
              schoolName={resumePageData.licensesCertifications.programInstName0}
              schoolDescription={resumePageData.licensesCertifications.programDescription0}
            />
            <Education
              startYear={resumePageData.licensesCertifications.programCompletionYear2}
              endYear={resumePageData.licensesCertifications.programCompletionYear2}
              schoolName={resumePageData.licensesCertifications.programInstName2}
              schoolDescription={resumePageData.licensesCertifications.programDescription2}
            />
            <Education
              startYear={resumePageData.licensesCertifications.programCompletionYear3}
              endYear={resumePageData.licensesCertifications.programCompletionYear3}
              schoolName={resumePageData.licensesCertifications.programInstName3}
              schoolDescription={resumePageData.licensesCertifications.programDescription3}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
