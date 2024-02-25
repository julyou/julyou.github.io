import React from "react";

import NavBar from "./components/pages/NavBar.tsx";
import Intro from "./components/pages/Intro.tsx";
import About from "./components/pages/About.tsx";
import WorkExperience from "./components/pages/WorkExperience.tsx";

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
