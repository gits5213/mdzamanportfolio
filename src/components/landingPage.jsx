import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilePic from '../resourses/images/Md_Zaman_Picture.png';
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
              <hr />
              <p>
                {gpd.content.aboutMe}
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
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
