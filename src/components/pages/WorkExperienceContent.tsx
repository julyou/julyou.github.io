import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";

import WorkExperienceData from "../../data/WorkExperienceData";

// Work experience content using vertical tabs/navigation
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider"}}
      >
        {WorkExperienceData.map((experience, index) => (
          <Tab
            key={index}
            label={experience.company}
            {...accessibilityProps(index)}
            sx={{
              textAlign: "left",
              WebkitAlignSelf: "flex-start"
            }}
          />
        ))}
      </Tabs>
      {WorkExperienceData.map((experience, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Typography align="left">{experience.title}</Typography>
          <Typography align="left">{`Location: ${experience.location}`}</Typography>
          <Typography align="left">{`Duration: ${experience.startDate} - ${experience.endDate}`}</Typography>
          <Typography align="left" component="div">
            <ul>
              {experience.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </Typography>
        </TabPanel>
      ))}
    </Box>
  );
}
