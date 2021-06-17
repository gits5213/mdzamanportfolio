import React, { Component } from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class supertest extends Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{ width: "750px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "300px",
              background: "url(https://miro.medium.com/max/5336/1*R8dpDe1F8LIgCrN1QTfVBw.png) center / cover",
              backgroundSize: "100% 100%"
            }}
          >
          API Automation (Javascript based)
          </CardTitle>
            <CardText
              style={{
                fontFamily: "Courier",
                color:"black"
              }}>
              <strong>Domain:</strong> http://jsonplaceholder.typicode.com/<br/>
              <strong>Test Case:</strong> Posts endpoint | User able to validate status code 200, userId, id, title &body <br/>
              <strong>Description:</strong> Desiging, Developing & Manitaining SUPERTEST API Automation Framework 
              from Scratch to Architechture level.<br/>
              <strong>TechStack:</strong> This framework consists of following list: SuperTest API, Javascript, Mocha, Chai, http protocol Model,
              Data Driven Concept. <br/>
              <strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report. 
            </CardText>
          <CardActions border>
            <a href="https://github.com/msz5213">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://msz5213@bitbucket.org/msz5213/">
              <Button colored>BitBucket</Button>
            </a>
            <a href="https://youtu.be/Mkh__B_BHaA">
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

export default supertest;
