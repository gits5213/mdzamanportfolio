import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../../mdzamanprotfolio/src/components/aboutme";
import Contact from "../../mdzamanprotfolio/src/components/contact";
import LandingPage from "../../mdzamanprotfolio/src/components/landingPage";
import Projects from "../../mdzamanprotfolio/src/components/projects";
import Resume from "../../mdzamanprotfolio/src/components/resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
