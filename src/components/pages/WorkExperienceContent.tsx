import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import WorkExperienceData from "../../data/WorkExperienceData";
import "../../styles/WorkExperience.css";
import "../../styles/Global.css";
interface Experience {
  company: string;
  companyAbbreviation: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

interface VerticalTabsProps {
  experienceData: Experience[];
}

// Content for the Work experience section (third page) using vertical tabs/navigation
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab panel containing job content
// Conditionally renders content based on current job selected
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function accessibilityProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// Vertical navigation tabs and content
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0); // index of selected tab

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="section-content">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className="tab-container"
      >
        {/* map work experience to job tabs for navigation */}
        {WorkExperienceData.map((experience, index) => (
          <Tab
            key={index}
            label={experience.company}
            {...accessibilityProps(index)}
            wrapped
            style={{ alignItems: "flex-start" }}
          />
        ))}
      </Tabs>

      {/* map work experience to job content */}
      {WorkExperienceData.map((experience, index) => {
        const companyName =
          experience.companyAbbreviation || experience.company;

        return (
          <TabPanel key={index} value={value} index={index}>
            <Box sx={{ maxWidth: "80%" }}>
              <p>{`${experience.title} @ ${companyName}`}</p>
              <p>{experience.location}</p>
              <p>{`${experience.startDate} - ${experience.endDate}`}</p>
              <ul>
                {experience.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </Box>
          </TabPanel>
        );
      })}
    </div>
  );
}
