import React, { Component } from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import data from '../utilities/data/projectGlobalPage.json';

class pythonselenium extends Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{ width: "750px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "300px",
              background: "url(https://www.filepicker.io/api/file/dh1WNFu5RX6gjIgexSRT) center / cover",
              backgroundSize: "100% 100%"
            }}
          >
            Python Selenium UI Automation
          </CardTitle>
            <CardText
              style={{
                fontFamily: "Courier",
                color:"black"
              }}>
              <strong>Domain:</strong> Facebook (Social Website) <br/>
              <strong>Test Case:</strong> Create new account error message | User able to validate error message "What’s your name?" <br/>
              <strong>Description:</strong> Desiging, Developing & Manitaining Python UI Automation Framework 
              from Scratch to Architechture level.<br/>
              <strong>TechStack:</strong> This framework consists of following list: Python, Pytest, Page Object Model,
              Data Driven Concept, Page Factory. <br/>
              <strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.
            </CardText>
          <CardActions border>
            <a href={data.gitHub}>
              <Button colored>GitHub</Button>
            </a>
            <a href={data.bitBucket}>
              <Button colored>BitBucket</Button>
            </a>
            <a href={data.youtube}>
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
export default pythonselenium;
