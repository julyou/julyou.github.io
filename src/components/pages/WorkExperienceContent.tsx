import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import WorkExperienceData from "../../data/WorkExperienceData";
import ExperienceContent from "../ExperienceContent";
import "../../styles/WorkExperience.css";
import "../../styles/Global.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

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

SwiperCore.use([Pagination]);

// Vertical navigation tabs and content
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0); // index of selected tab

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="section-content">
      {/* Tabs for larger screens */}
      <div className="tabs-container">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className="tabs"
        >
          {/* map work experience to job tabs for navigation */}
          {WorkExperienceData.map((experience, index) => (
            <Tab
              key={index}
              label={experience.company}
              {...accessibilityProps(index)}
            />
          ))}
        </Tabs>
        
        {WorkExperienceData.map((experience, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              <ExperienceContent experience={experience} />
            </TabPanel>
          );
        })}
      </div>

      {/* Swiper for small screens */}
      <div className="swiper-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setValue(swiper.activeIndex)}
          style={{ width: "100%" }}
        >
          {WorkExperienceData.map((experience, index) => {
            return (
              <SwiperSlide key={index}>
                <ExperienceContent experience={experience} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
