import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className={"header-color"}
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Md's Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            style={{ 
              background: "#00416A",  
              background: "-webkit-linear-gradient(to right, #FFE000, #799F0C, #00416A)",  
              background: "linear-gradient(to right, #FFE000, #799F0C, #00416A)" 
            }}
            title={
              <Link 
                style={{ 
                  textDecoration: "none", 
                  color: "black" 
                  }} to="/">
                Md's Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
