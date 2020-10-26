import React from "react";

import { Grid, Cell } from "react-mdl";
import { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear}-{this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
          <p style={{ marginTop: "0px",textAlign:'justify',paddingRight:"10px" }}>{this.props.jobDescription} Download Resume</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
