import React, { Component } from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Performance extends Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{ width: "750px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "300px",
              background: "url(https://www.guru99.com/images/JMeterApacheSampler.png) center / cover",
              backgroundSize: "100% 100%"
            }}
          >
            Performance Test (JMeter)
          </CardTitle>
            <CardText 
              style={{
                fontFamily: "Courier",
                color:"black"
              }}>
              <strong>
                Domain:
              </strong> 
                Facebook (Social Website) <br/>
              <strong>
                Test Case:
              </strong> 
                Create new account error message | User able to validate error message "What’s your name?" <br/>
              <strong>
                Description:
              </strong> 
                Desiging, Developing & Manitaining JMeter Script Facebook Application for Performance Test 
                from Scratch to Architechture level.<br/>
              <strong>
                TechStack:
              </strong> 
                This framework consists of following list: JMeter Script, Declear Global Variable, Report <br/>
              <strong>
                CI/CD Integration:
              </strong> 
                Integrated with CI (Travis) and Sending Email report. 
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
export default Performance;
