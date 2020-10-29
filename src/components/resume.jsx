import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skils";
import profilePic from '../resourses/images/Md_Zaman_Picture.png';
import ResumePDF from '../resourses/resume/resume_md.pdf';

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

            <h2 style={{ paddingTop: "" }}>Objective</h2>
            <h4 style={{ color: "grey" }}>Full Stack SQA Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify", paddingRight: "10px", fontFamily:"fantasy"}}>
              Full-Stack SQA engineer, practicing SQA principles and methodologies. 10+ years of mentoring and leading full-stack testing efforts & hands-on coding, 
              leading with the ability to collaborate with software development in all phases of the SDLC & STLC, including 
              planning, coding, testing, troubleshooting, deploying, and ongoing SQA full-stack automation code maintenance & delivering right product 
              on time. <br/>

              Expertise on TechStack: Leveraging Python, C#, Java & Javascript on Automation Framework like Selenium, Protractor, WebDriverIO, Appium, 
              XCUITest, NightWatch, Cypress, RestAssured, SuperTest, Frisby, PyTest, Agile-Scrum, JIRA, Xray, Zephyr, Adaptavist, ALM, SQL, CodedUI, Swagger, Confluence, 
              POSTMAN, Jmeter, SonarQube, Checkmarx, Splunk & New Relic.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>
              <i className="fa fa-home" aria-hidden="true" /> Address
            </h5>
            <p>8905 202nd Street, Hollis, NY-11423</p>
            <h5>
              <i className="fa fa-phone" aria-hidden="true" /> Phone
            </h5>
            <p>+1(917)561-6554</p>
            <h5>
              <i className="fa fa-phone" aria-hidden="true" /> Email
            </h5>
            <p>md.zaman@itnycusa.com</p>
            <h5>
              <i className="fa fa-internet-explorer" aria-hidden="true" /> Web
            </h5>
            <a 
              style={{ textDecoration: "none", color: 'green' }} 
              href="https://www.onetechi.com">
              Educational WebSite 1
            </a>
            <br/>
            <a 
              style={{ textDecoration: "none", color: 'green' }} 
              href="https://www.itnycusa.com">
              Educational WebSite 2
            </a>
            <br/>
            <a 
              style={{ textDecoration: "none", color: 'green' }} 
              href="https://msz5213.github.io/mdzamanportfolio/">
              Md Zaman's Portfolio
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h2>Skills</h2>
            <Skills skill={"Java, C#, Python, SavaScript, Selenium API, Protractor API, WebDriverIO API, Appium, RestAssured, SuperTest, FrisBy, PyTest, Agile-Scrum, JIRA, Xray, Zephyr, Adaptavist, ALM, SQL, CodedUI, Swagger, Confluence, POSTMAN, JMeter, Splunk, New Relic, SonarQube, CheckMarx"} progress={80}/>
            {/*<Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"NodeJS"} progress={50} />
            <Skills skill={"ReactJS"} progress={50} />
              <Skills skill={"MongoDB"} progress={44} />*/}
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h2>Education</h2>
            <Education
              startYear="2001"
              endYear="2007"
              schoolName={"National University Of BD(Titumir College)"}
              schoolDescription={"Bechelor & Master's in Chemistry"}
            />
            <Education
              startYear="2011"
              endYear="2014"
              schoolName={"The City University of NEW YORK (City College)"}
              schoolDescription={"2nd Bachelor's in Computer Engieering"}
            />
          </Cell>
          <Cell col={6} className="resume-right-col">
            <h2>Experience</h2>
            <Experience
              startYear="2007"
              endYear="Current"
              jobName={"Full Stack SQA Engineer"}
              jobDescription={
                <a href={ResumePDF}>
                  <i className="fa fa-download" aria-hidden="true" />
                </a> 
              }
            />
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h2>Volunteer Experience</h2>
            <Education
              startYear="2018"
              endYear="Present"
              schoolName={"AUXILARY NYPD"}
              schoolDescription={"NEW YORK CITY POLICE DEPARTMENT"}
            />
            
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h2>Licenses & certifications</h2>
            <Education
              startYear="2011"
              endYear="2011"
              schoolName={"ISTQB"}
              schoolDescription={"Certified Tester Foundation Level (CTFL)"}
            />
            <Education
              startYear="2013"
              endYear="2013"
              schoolName={"SCRUM ORG."}
              schoolDescription={"Professional Scrum Master Certifications"}
            />
            <Education
              startYear="2013"
              endYear="22013"
              schoolName={"SCALED AGILE INC."}
              schoolDescription={"Certified SAFe® 4 Agilist"}
            />
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h2>Training courses</h2>
            <Education
              startYear="2012"
              endYear="2012"
              schoolName={"UDEMY"}
              schoolDescription={"WebDriverIO(v5): (UI) End to End Testing Framework"}
            />
            <Education
              startYear="2012"
              endYear="2012"
              schoolName={"UDEMY"}
              schoolDescription={"Protractor: (UI) End to End Testing Framework"}
            />
            <Education
              startYear="2012"
              endYear="2012"
              schoolName={"UDEMY"}
              schoolDescription={"RestAssured: (API) Testing Framework"}
            />
            <Education
              startYear="2013"
              endYear="2013"
              schoolName={"UDEMY"}
              schoolDescription={"Selenium WebDriver with Java: (UI) Testing Framework"}
            />
            <Education
              startYear="2013"
              endYear="2013"
              schoolName={"UDEMY"}
              schoolDescription={"Selenium WebDriver with Python: (UI) Testing Framework"}
            />
            <Education
              startYear="2013"
              endYear="2013"
              schoolName={"UDEMY"}
              schoolDescription={"JMeter: Performance Testing Tool"}
            />
          
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
