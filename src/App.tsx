import React from "react";

import NavBar from "./components/NavBar";
import Intro from "./components/pages/Main";
import About from "./components/pages/About";
import WorkExperience from "./components/pages/WorkExperience";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <WorkExperience></WorkExperience>
      </div>
    </div>
  );
};

export default App;
