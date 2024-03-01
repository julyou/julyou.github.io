import React from "react";

import "../../styles/WorkExperience.css";
import VerticalTabs from "./WorkExperienceContent";

// Third page: work experience section
interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  return (
    <div className="section" id="experience">
      <h1 className="section-header">
        <span>Work Experience</span>
      </h1>

      <div className="section-intro">
        <p>places where I've worked and learned a lot!</p>
      </div>

      <div className="section-content">
        <VerticalTabs />
      </div>
    </div>
  );
};

export default WorkExperience;
