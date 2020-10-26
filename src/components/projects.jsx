import React, { Component } from "react";
import {Tabs, Tab, Grid, Cell} from "react-mdl";
import JavaSelenium from '../projects/javaselenium';
import PythonSelenium from '../projects/pythoselenium';
import Protractor from '../projects/protractor';
import Webdriverio from '../projects/webdriverio';
import Restassured from '../projects/restassured';
import Supertest from '../projects/supertest';
import Appium from '../projects/appium';
import Performance from '../projects/performance';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <JavaSelenium />
        )
    } else if(this.state.activeTab === 1) {
        return(
          <PythonSelenium />
        )
    } else if(this.state.activeTab === 2) {
        return(
          <Protractor />
        )
    } else if(this.state.activeTab === 3) {
        return(
          <Webdriverio />
        )
    } else if(this.state.activeTab === 4) {
      return(
        <Restassured />
      )
    } else if(this.state.activeTab === 5) {
      return(
        <Supertest />
      )
    } else if(this.state.activeTab === 6) {
      return(
        <Appium />
      )
    } else if(this.state.activeTab === 7) {
      return(
        <Performance />
      )
    } 
  }
  
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaSelenium</Tab>
          <Tab>PythonSelenium</Tab>
          <Tab>Protractor</Tab>
          <Tab>WebDriverIO</Tab>
          <Tab>RastAssured</Tab>
          <Tab>SuperTest</Tab>
          <Tab>Appium</Tab>
          <Tab>Performance</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
