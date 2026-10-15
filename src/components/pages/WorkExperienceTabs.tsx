import React from "react";
import { Tabs, Tab, Box, useMediaQuery } from "@mui/material";
import WorkExperienceData from "../../data/WorkExperienceData";
import ExperienceContent from "../ExperienceContent";
import "../../styles/WorkExperience.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// only the styles this carousel actually uses, not the whole bundle
import "swiper/css";
import "swiper/css/pagination";

// Keep in step with the phone breakpoint in Global.css
const PHONE = "(max-width: 768px)";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab panel containing job content
// Conditionally renders content based on current job selected
function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {/* no Typography wrapper: it renders a <p>, and the panel content is a
          <ul>, which is not valid inside a paragraph */}
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function accessibilityProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// Work experience, as vertical tabs on larger screens and a carousel on phones.
// Only one of the two is rendered: they used to both sit in the DOM with CSS
// hiding whichever did not apply, so every job existed twice and swiper
// initialised even on desktop.
export default function VerticalTabs() {
  const isPhone = useMediaQuery(PHONE, { noSsr: true });
  const [value, setValue] = React.useState(0); // index of selected tab

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (isPhone) {
    return (
      <div className="swiper-container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setValue(swiper.activeIndex)}
          style={{ width: "100%" }}
        >
          {WorkExperienceData.map((experience) => (
            <SwiperSlide key={experience.company}>
              <ExperienceContent experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="tabs-container">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Work experience"
        className="tabs"
      >
        {/* map work experience to job tabs for navigation */}
        {WorkExperienceData.map((experience, index) => (
          <Tab
            key={experience.company}
            label={`${experience.company} ${experience.emoji}`}
            {...accessibilityProps(index)}
          />
        ))}
      </Tabs>

      {WorkExperienceData.map((experience, index) => (
        <TabPanel key={experience.company} value={value} index={index}>
          <ExperienceContent experience={experience} />
        </TabPanel>
      ))}
    </div>
  );
}
