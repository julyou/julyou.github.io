import React from "react";
import WorkExperienceData from "../../data/WorkExperienceData.ts";
import "../../styles/WorkExperience.css";

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
        {WorkExperienceData.map((experience, index) => (
          <div key={index} className="experience-text">
            <p>{experience.company}</p>
            <p>{experience.title}</p>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <p>{experience.description}</p>
            <p>{experience.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
