import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Landing from "./components/landingPage";
import Projects from "./components/projects";
import Resume from "./components/resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
