import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import profilePic from '../resourses/images/Md_Zaman_Picture.png';
import gpd from '../utilities/data/globalPageData.json';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>{gpd.contact.name}</h2>
            <img
              src={profilePic}
              alt="avatar"
              style={{
                height: "200px",
                borderRadius: "50%",
                border: "1px solid lightgrey"
              }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em", fontFamily:"fantasy"}}>
              Hi there! You're an open-source tech enthusiast who spends most of your time coding and diving into tutorials on YouTube and Udemy. 
              Your dedication to continuous learning and hands-on practice shapes your expertise, making you both knowledgeable and adaptable in the fast-evolving tech world. 
              During the weekend I have been coaching and mentoring three (3) programs <br /> - CodeForKids <br /> - Full Stack SQA Engineering <br /> - Frontend Web Development. <br />
              A motivated and dynamic individual with in-depth knowledge of programming languages, software quality assurance (SQA) engineering, 
              and a range of development tools and APIs. Skilled in automation frameworks, coding standards, and API automation, 
              they possess expertise in full-stack QA practices and are passionate about enhancing end-to-end software testing processes.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>{gpd.contact.contactMe}</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    {gpd.contact.phoneNumber}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    {gpd.contact.email}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                  <i className="fa fa-internet-explorer"></i>
                  <a href={gpd.links.personalWebsite}>{gpd.content.educationalWebSite}</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                  <i className="fa fa-internet-explorer"></i>
                  <a href={gpd.links.protfolio}>{gpd.content.mdPortfolio}</a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
            <div className="social-links">
            <a
                  href={gpd.links.linkedIn}>
                  <i className="fa fa-linkedin-square" />
                </a>
                <a
                  href={gpd.links.gitHub}>
                  <i className="fa fa-github-square" />
                </a>
                <a
                  href={gpd.links.youtubePlaywright}>
                  <i className="fa fa-twitter-square" />
                </a>
                <a
                  href={gpd.links.youtubeCypressIO}>
                  <i className="fa fa-twitter-square" />
                </a>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
