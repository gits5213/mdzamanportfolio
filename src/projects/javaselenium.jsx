import React, { Component } from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class javaselenium extends Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{ width: "750px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "300px",
              background: "url(https://1.bp.blogspot.com/-bY5Js-Plm8Y/V1aBSPTLz5I/AAAAAAAABio/Rew-CBamQwkv7K2HfpX_xFvmTjFZLkAPwCPcBGAYYCw/s320/selenium-webdriver-java-online-courses-techtutorr.jpg) center / cover",
              backgroundSize: "100% 100%"
            }}
          >
            Java Selenium UI Automation
          </CardTitle>
            <CardText 
              style={{
                fontFamily: "Courier",
                color:"black"
              }}>
              <strong>Domain:</strong> Facebook (Social Website) <br/>
              <strong>Test Case:</strong> Create new account error message | User able to validate error message "What’s your name?" <br/>
              <strong>Description:</strong> Desiging, Developing & Manitaining Java Selenium UI Automation Framework 
              from Scratch to Architechture level. <br/>
              <strong>TechStack:</strong> This framework consists of following list: Selenium API, Java, TestNG, Maven, Page Object Model,
              Data Driven Concept, Page Factory. <br/>
              <strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report. 
            </CardText>
          <CardActions border>
            <a href="https://github.com/msz5213">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://msz5213@bitbucket.org/msz5213/">
              <Button colored>BitBucket</Button>
            </a>
            <a href="https://youtu.be/0A3TZUiNUk8">
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}
export default javaselenium;
