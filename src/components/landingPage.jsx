import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilePic from '../resourses/images/Md_Zaman_Picture.jpg';
import gpd from '../utilities/data/globalPageData.json';

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
              <h1>{gpd.content.fullStackQaEngineer}</h1>
              <p className="aboutMe">
                {gpd.content.aboutMe} <br/>
                <span className="highlight">Key Highlights:</span>
              <ul className="keyHighlight" style={{listStyleType: "none" }}>
                <li>☞ Proven track record in mentoring QA Analysts and Technical Support Engineers.</li>
                <li>☞ Extensive experience with Agile/Scrum, SAFe methodologies, Shift-left, & SDLC/STLC processes.</li>
                <li>☞ Expert in full-stack automation, technical documentation, and hands-on coding.</li>
                <li>☞ Adept at delivering presentations, ensuring compliance with public law, and maintaining relevance to business needs.</li>
                <li>☞ Strong analytical, communication, problem-solving skills, and ensuring attention to detail & delivering exceptional customer service.</li>
              </ul>
              Let's connect and discuss how my expertise can contribute to the success of your projects! 🚀
              </p>
              <div className="social-links">
                <a href={gpd.links.linkedIn}>
                  <i className="fa fa-linkedin-square" />
                </a>
                <a
                  href={gpd.links.gitHub}>
                  <i className="fa fa-github-square" />
                </a>
                <a
                  href={gpd.links.twitter}>
                  <i className="fa fa-twitter-square" />
                </a>
                <a
                  href={gpd.links.youtubePlaywright}>
                  <i className="fa fa-youtube-square" />
                </a>
                <a
                  href={gpd.links.youtubeCypressIO}>
                  <i className="fa fa-youtube-square" />
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
