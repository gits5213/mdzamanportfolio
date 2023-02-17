import React, { Component } from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import data from '../utilities/data/projectGlobalPage.json';

class restassured extends Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{ width: "750px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "300px",
              background: "url(data:image/png;base64,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) center / cover",
              backgroundSize: "100% 100%"
            }}
          >
          API Automation (Java based)
          </CardTitle>
            <CardText 
              style={{
                fontFamily: "Courier",
                color:"black"
              }}>
            <strong>Domain:</strong> http://jsonplaceholder.typicode.com/<br/>
            <strong>Test Case:</strong> Posts endpoint | User able to validate status code 200, userId, id, title &body <br/>
            <strong>Description:</strong> Desiging, Developing & Manitaining RestAssured API Automation Framework 
            from Scratch to Architechture level.<br/>
            <strong>TechStack:</strong> This framework consists of following list: RestAssured API, Java, TestNG, Maven, http protocol Model,
            Data Driven Concept. <br/>
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
export default restassured;
