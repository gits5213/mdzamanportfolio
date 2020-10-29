import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilePic from '../resourses/images/Md_Zaman_Picture.png';


class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profilePic}
              alt="avatar"
              className="avatar-image"
              style={{
                padding: "80px",
                height: "200px",
                borderRadius: "50%"
              }}
            />
            <div className="banner-text">
              <h1>Full Stack SQA Engineer</h1>
              <hr />
              <p>
                Selenium(API) | Protractor(API) | WebDriverIO(API) | Appium | 
                RestAssured | SuperTest | Frisby | PyTest |Python | Java | TestNG |
                JavaScript | NodeJS | Mocha-Chai | Jira | Xray | Zephyer | SQL | POSTMAN | 
                Confluence | Swagger | Maven | Jenkins | Reporting | ALM | JMeter |
                SonarQube | Checkmarx | Splunk | New Relic.
              </p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/zamanmd">
                  <i className="fa fa-linkedin-square" />
                </a>
                <a
                  href="https://github.com/msz5213">
                  <i className="fa fa-github-square" />
                </a>
                <a
                  href="https://twitter.com/itnycusa">
                  <i className="fa fa-twitter-square" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
