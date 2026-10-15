import React from "react";

import Section from "../Section";
import VerticalTabs from "./WorkExperienceTabs";

// Third page: work experience section
const WorkExperience: React.FC = () => (
  <Section
    id="experience"
    heading="Work Experience"
    intro="places where I've worked and learned a lot!"
  >
    <VerticalTabs />
  </Section>
);

export default WorkExperience;
