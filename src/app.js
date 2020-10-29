import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./routers";
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
              textShadow: "2px 2px #ffffff",
              backgroundColor: "#d9e4f5",
              backgroundImage: "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)"
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
